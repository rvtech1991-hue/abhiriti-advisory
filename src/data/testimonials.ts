export interface Testimonial {
  quote: string;
  snippet: string;
  name: string;
  role: string;
  initials: string;
  photoId: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Abhiriti is, without exaggeration, the best financial partner our company has ever worked with. They handled our audit and GST filings flawlessly, with zero follow-up calls needed.",
    snippet:
      'The best financial partner our company has ever worked with — flawless audits and GST filings, zero follow-up needed.',
    name: 'Rohan Deshpande',
    role: 'Founder, Real Estate Industry',
    initials: 'RD',
    photoId: 'testimonial-1',
  },
  {
    quote:
      "Their RERA team registered our project and kept every single quarterly filing on time, every quarter, without fail. Hands down the best compliance partner we've ever used.",
    snippet: 'Every quarterly RERA filing on time, without fail. Hands down the best compliance partner we\'ve used.',
    name: 'Kavya Menon',
    role: 'Director, Textile Industry',
    initials: 'KM',
    photoId: 'testimonial-2',
  },
  {
    quote:
      'We moved our entire portfolio to their advisory desk and finally have a real plan instead of guesswork. Genuinely life-changing for our business.',
    snippet: 'We finally have a real financial plan instead of guesswork. Genuinely life-changing for our business.',
    name: 'Aarav Shah',
    role: 'CEO, Food & Beverage Industry',
    initials: 'AS',
    photoId: 'testimonial-3',
  },
  {
    quote:
      "Abhiriti's software team built us a custom ERP that transformed how we run operations. Rare to find a firm that understands finance AND technology this deeply.",
    snippet: 'Their custom ERP transformed how we run operations — rare to find finance and tech expertise this deep.',
    name: 'Priya Nair',
    role: 'COO, Mining Industry',
    initials: 'PN',
    photoId: 'testimonial-4',
  },
  {
    quote:
      'From incorporation to our first audit, Abhiriti guided us like true partners, not vendors. Their advice saved us lakhs in avoidable tax.',
    snippet: 'Guided us like true partners, not vendors — their advice saved us lakhs in avoidable tax.',
    name: 'Karan Mehta',
    role: 'Founder, Automobile Industry',
    initials: 'KM',
    photoId: 'testimonial-5',
  },
  {
    quote:
      'Outstanding wealth planning — our retirement and investment strategy has never been clearer. Attentive, sharp, and genuinely invested in our success.',
    snippet: 'Our retirement and investment strategy has never been clearer. Attentive, sharp, invested in our success.',
    name: 'Neha Kulkarni',
    role: 'Director, Pharmaceutical Industry',
    initials: 'NK',
    photoId: 'testimonial-6',
  },
];
