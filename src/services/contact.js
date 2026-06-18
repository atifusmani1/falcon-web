import { api } from './api.js';

/**
 * Submit a contact inquiry to the backend.
 *
 * @param {object} inquiry
 * @param {string} inquiry.name
 * @param {string} inquiry.email
 * @param {string} inquiry.phone
 * @param {string} inquiry.projectType
 * @param {string} inquiry.message
 * @returns {Promise<{ ok: boolean }>}
 */
export function submitContactInquiry(inquiry) {
  return api.post('/api/contact', inquiry);
}
