export interface Industry {
  name: string;
}

// We work across industries but do not disclose individual client identities —
// only the sectors we serve.
export const industries: Industry[] = [
  { name: 'Mining' },
  { name: 'Logistics' },
  { name: 'Automobiles' },
  { name: 'Real Estate' },
  { name: 'Textiles' },
  { name: 'Pharmaceuticals' },
  { name: 'Food & Beverage' },
  { name: 'Retail' },
];
