export interface Industry {
  name: string;
  img: string;
}

// We work across industries but do not disclose individual client identities —
// only the sectors we serve. Images are Pexels stock photos, compressed for fast load.
export const industries: Industry[] = [
  {
    name: 'Mining',
    img: 'https://images.pexels.com/photos/2892618/pexels-photo-2892618.jpeg?auto=compress&cs=tinysrgb&w=640',
  },
  {
    name: 'Logistics',
    img: 'https://images.pexels.com/photos/21838827/pexels-photo-21838827.jpeg?auto=compress&cs=tinysrgb&w=640',
  },
  {
    name: 'Automobiles',
    img: 'https://images.pexels.com/photos/19233057/pexels-photo-19233057.jpeg?auto=compress&cs=tinysrgb&w=640',
  },
  {
    name: 'Real Estate',
    img: 'https://images.pexels.com/photos/4082527/pexels-photo-4082527.jpeg?auto=compress&cs=tinysrgb&w=640',
  },
  {
    name: 'Textiles',
    img: 'https://images.pexels.com/photos/236748/pexels-photo-236748.jpeg?auto=compress&cs=tinysrgb&w=640',
  },
  {
    name: 'Pharmaceuticals',
    img: 'https://images.pexels.com/photos/8539078/pexels-photo-8539078.jpeg?auto=compress&cs=tinysrgb&w=1280',
  },
  {
    name: 'Food & Beverage',
    img: 'https://images.pexels.com/photos/18631419/pexels-photo-18631419.jpeg?auto=compress&cs=tinysrgb&w=640',
  },
  {
    name: 'Retail',
    img: 'https://images.pexels.com/photos/37080685/pexels-photo-37080685.jpeg?auto=compress&cs=tinysrgb&w=640',
  },
];
