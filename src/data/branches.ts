export interface Branch {
  name: string;
  headOffice?: boolean;
  address?: string;
}

export const branches: Branch[] = [
  {
    name: 'Belapur',
    headOffice: true,
    address: 'Belapur, Navi Mumbai, Maharashtra, India',
  },
  {
    name: 'Dadar',
    address:
      'Swami Samartha Darshan, B-Wing, West, 1003, near Swami Gyan Jivandas Marg, Opp. Hotel Aashwad, Dadar West, Mumbai, Maharashtra 400016',
  },
  {
    name: 'Thane',
  },
  {
    name: 'Dombivli',
  },
  {
    name: 'Ulhasnagar',
    address: 'B-Block, Gala No. 1, Manish Nagar, Ulhasnagar-3, Mumbai 421003',
  },
];
