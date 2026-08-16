export interface Leader {
  name: string;
  title: string;
  experience: string;
  bio: string;
  initials: string;
}

export interface TeamMember {
  name: string;
  experience: string;
  specialization: string;
  initials: string;
}

// Jairam Purswani (Managing Director) is spotlighted separately in the About
// section with his photograph — not repeated here.
export const leadership: Leader = {
  name: 'Neetu Vishwakarma',
  title: 'Director',
  experience: '15+ Years',
  bio: 'Neetu Vishwakarma serves as Director at Abhiriti Advisory Pvt. Ltd., overseeing client engagements and driving operational excellence across the firm’s service verticals.',
  initials: 'NV',
};

export const coreTeam: TeamMember[] = [
  { name: 'CA Sunil Naik', experience: '40+ Years', specialization: 'RERA Services', initials: 'SN' },
  { name: 'CA Guru Prasad Kadam', experience: '25+ Years', specialization: 'General Practice', initials: 'GK' },
  { name: 'CA Jeetu Chandwani', experience: '10+ Years', specialization: 'Loan Services', initials: 'JC' },
  { name: 'Advocate Disha Mhetri', experience: '25+ Years', specialization: 'RERA Services', initials: 'DM' },
  { name: 'CA Chirag Vejani', experience: '15+ Years', specialization: 'GST & Litigation Services', initials: 'CV' },
  { name: 'CS Dilip Karia', experience: '14+ Years', specialization: 'Company Secretary', initials: 'DK' },
  { name: 'CA Rajesh Raikundliya', experience: '25+ Years', specialization: 'General Practice', initials: 'RR' },
  { name: 'Anil Bahrani', experience: '16+ Years', specialization: 'Business Services', initials: 'AB' },
  { name: 'Vicky Maity', experience: '9+ Years', specialization: 'Share Market Advisory', initials: 'VM' },
  { name: 'Rakesh Vishwakarma', experience: '14+ Years', specialization: 'Software Services', initials: 'RV' },
];
