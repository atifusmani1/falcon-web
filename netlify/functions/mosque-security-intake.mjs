const JOTFORM_FORM_ID = '262316142653048';
const JOTFORM_SUBMISSION_URL = `https://api.jotform.com/form/${JOTFORM_FORM_ID}/submissions`;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FIELDS = [
  { key: 'firstName', label: 'First name', maxLength: 100 },
  { key: 'lastName', label: 'Last name', maxLength: 100 },
  { key: 'phone', label: 'Phone number', maxLength: 50 },
  { key: 'email', label: 'Email address', maxLength: 254 },
  { key: 'organization', label: 'Organization represented', maxLength: 200 },
  { key: 'organizationAddress', label: 'Organization address', maxLength: 500 },
  { key: 'preferredTime', label: 'Preferred time to meet / speak by phone', maxLength: 500 },
];

const jsonResponse = (body, status, additionalHeaders = {}) => new Response(JSON.stringify(body), {
  status,
  headers: {
    'Cache-Control': 'no-store',
    'Content-Type': 'application/json; charset=utf-8',
    ...additionalHeaders,
  },
});

const validateSubmission = (payload) => {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return { error: 'Please provide all required form fields.' };
  }

  const values = {};

  for (const field of FIELDS) {
    const value = payload[field.key];

    if (typeof value !== 'string' || !value.trim()) {
      return { error: `${field.label} is required.` };
    }

    const normalizedValue = value.trim();
    if (normalizedValue.length > field.maxLength) {
      return { error: `${field.label} is too long.` };
    }

    values[field.key] = normalizedValue;
  }

  if (!EMAIL_PATTERN.test(values.email)) {
    return { error: 'Please enter a valid email address.' };
  }

  return { values };
};

export default async function handler(request) {
  if (request.method !== 'POST') {
    return jsonResponse(
      { success: false, error: 'Method not allowed.' },
      405,
      { Allow: 'POST' },
    );
  }

  const contentLength = Number(request.headers.get('content-length'));
  if (Number.isFinite(contentLength) && contentLength > 10_000) {
    return jsonResponse({ success: false, error: 'The submitted form is too large.' }, 413);
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ success: false, error: 'The submitted form data is invalid.' }, 400);
  }

  const validation = validateSubmission(payload);
  if (validation.error) {
    return jsonResponse({ success: false, error: validation.error }, 400);
  }

  const apiKey = process.env.JOTFORM_API_KEY;
  if (!apiKey) {
    console.error('[mosque-security-intake] JOTFORM_API_KEY is not configured.');
    return jsonResponse(
      { success: false, error: 'The submission service is temporarily unavailable. Please try again later.' },
      503,
    );
  }

  const { values } = validation;
  const submission = new URLSearchParams({
    'submission[5]': values.firstName,
    'submission[6]': values.lastName,
    'submission[7][full]': values.phone,
    'submission[8]': values.email,
    'submission[9]': values.organization,
    'submission[11]': values.organizationAddress,
    'submission[12]': values.preferredTime,
  });

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12_000);

  try {
    const jotformResponse = await fetch(JOTFORM_SUBMISSION_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        APIKEY: apiKey,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: submission,
      signal: controller.signal,
    });

    let jotformResult = null;
    try {
      jotformResult = await jotformResponse.json();
    } catch {
      // A non-JSON response cannot confirm that Jotform accepted the submission.
    }

    const submissionId = jotformResult?.content?.submissionID;
    const submissionConfirmed = jotformResponse.ok
      && Number(jotformResult?.responseCode) === 200
      && typeof submissionId === 'string'
      && submissionId.length > 0;

    if (!submissionConfirmed) {
      console.error(
        '[mosque-security-intake] Jotform rejected a submission.',
        { httpStatus: jotformResponse.status, responseCode: jotformResult?.responseCode ?? null },
      );
      return jsonResponse(
        { success: false, error: 'We could not submit your interest right now. Please try again.' },
        502,
      );
    }

    return jsonResponse({ success: true }, 200);
  } catch (error) {
    console.error(
      '[mosque-security-intake] Jotform request failed.',
      { reason: error?.name === 'AbortError' ? 'timeout' : 'network_error' },
    );
    return jsonResponse(
      { success: false, error: 'We could not submit your interest right now. Please try again.' },
      502,
    );
  } finally {
    clearTimeout(timeout);
  }
}
