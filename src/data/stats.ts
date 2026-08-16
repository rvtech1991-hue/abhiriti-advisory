export interface Stat {
  target: number;
  prefix: string;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { target: 5000, prefix: '₹', suffix: 'Cr+', label: 'Turnover Managed' },
  { target: 250, prefix: '', suffix: '+', label: 'Clients Served' },
  { target: 25, prefix: '', suffix: '+', label: 'Years Experience' },
  { target: 80, prefix: '', suffix: '+', label: 'RERA Projects' },
];
