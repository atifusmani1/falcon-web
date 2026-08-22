// Only entries with a finalized `quote` should render on the live site — pages
// consuming this list filter on `t.quote`. Pending entries stay here with
// quote: null so they can go live later just by filling in the copy, no
// layout changes needed.
export const TESTIMONIALS = [
  {
    name: 'Mahmoud Tarifi',
    role: 'Former Board President, Islamic Center of Claremont',
    initials: 'MT',
    quote: "Shaheen is very pragmatic and principled. He executed our security infrastructure project to completion. I would definitely hire him again.",
  },
  {
    name: 'Bernice',
    role: 'CoolVu Window Film Installation',
    initials: 'B',
    quote: "As a small business owner, working with Shaheen and his company was a great experience. He was transparent and very fair for both us as the subcontractor on his project and also his client. Communication is very important in customer service and providing quality work, and he was very clear and effective. I would continue being a vendor for him in his future projects and recommend his services within my networks.",
  },
  { name: 'Abdulsubhan', role: 'Acting Board President, Islamic Center of Claremont', initials: 'A', quote: null },
  { name: 'Mahmoud Zubeidi', role: '', initials: 'MZ', quote: null },
  { name: 'Mahmoud Harmoush', role: 'Director, Islamic Center of Riverside', initials: 'MH', quote: null },
  { name: 'Jimi Fosdick', role: 'President & Founder, Fearless Agility', initials: 'JF', quote: null },
  { name: 'Professor Setsu Shigematsu', role: '', initials: 'SS', quote: null },
  { name: 'Aggie Padilla', role: 'City of Riverside', initials: 'AP', quote: null },
];
