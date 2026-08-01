export interface DetailItem {
  mono: string;
  title: string;
  desc: string;
}

export interface ServiceVertical {
  id: string;
  title: string;
  mono: string;
  color: string;
  img: string;
  desc: string;
  items: string[];
  detailItems: DetailItem[];
}

export const services: ServiceVertical[] = [
  {
    id: 'ca',
    title: 'CA Services',
    mono: 'CA',
    color: 'var(--gold)',
    img: 'https://images.pexels.com/photos/6863250/pexels-photo-6863250.jpeg?auto=compress&cs=tinysrgb&w=1000',
    desc: 'Complete chartered accountancy support so your compliance never slips.',
    items: [
      'Statutory & Tax Audit',
      'Income Tax & GST Filing',
      'Company Incorporation',
      'Bookkeeping & Payroll',
      'TDS Compliance',
      'Business Valuation',
    ],
    detailItems: [
      { mono: 'CR', title: 'Company Registration & ROC', desc: 'Incorporation, ROC filings and annual compliance for all entity types.' },
      { mono: 'GST', title: 'GST Registration & Filing', desc: 'Registration, monthly/quarterly returns and reconciliation.' },
      { mono: 'IT', title: 'Income Tax Return Filing', desc: 'Individual and corporate ITR filing with tax-saving planning.' },
      { mono: 'AU', title: 'Statutory & Internal Audit', desc: 'Independent audits for accuracy, control and regulatory sign-off.' },
      { mono: 'TDS', title: 'TDS Compliance', desc: 'Deduction, deposit and quarterly TDS return filing.' },
      { mono: 'PB', title: 'Payroll & Bookkeeping', desc: 'Monthly books, payroll processing and MIS reporting.' },
      { mono: 'BV', title: 'Business Valuation', desc: 'Valuations for fundraising, M&A and regulatory purposes.' },
      { mono: 'IP', title: 'Trademark & IP Registration', desc: 'Brand and IP protection filings, end to end.' },
      { mono: 'NRI', title: 'NRI Taxation Services', desc: 'Tax filing, repatriation and DTAA advisory for NRIs.' },
      { mono: 'SU', title: 'Startup Advisory', desc: 'Structuring, compliance calendars and fundraising support.' },
    ],
  },
  {
    id: 'financial',
    title: 'Financial Services',
    mono: 'F',
    color: 'var(--copper)',
    img: 'https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=1000',
    desc: 'Wealth planning and investment advisory tailored to your goals.',
    items: [
      'Portfolio Management',
      'Mutual Funds Advisory',
      'Insurance Planning',
      'Retirement Planning',
      'Tax-Saving Investments',
      'Wealth Reviews',
    ],
    detailItems: [
      { mono: 'PM', title: 'Portfolio Management', desc: 'Actively managed equity and debt portfolios matched to your risk profile.' },
      { mono: 'MF', title: 'Mutual Funds Advisory', desc: 'Fund selection, SIP planning and portfolio rebalancing.' },
      { mono: 'IN', title: 'Insurance Planning', desc: 'Life, health and asset cover aligned to your financial plan.' },
      { mono: 'RP', title: 'Retirement Planning', desc: 'Long-term corpus building and pension-linked strategies.' },
      { mono: 'TS', title: 'Tax-Saving Investments', desc: 'ELSS, PPF and other instruments to optimize your tax outgo.' },
      { mono: 'WR', title: 'Wealth Reviews & Rebalancing', desc: 'Periodic portfolio health checks and reallocation.' },
      { mono: 'ES', title: 'Estate & Succession Planning', desc: 'Wills, trusts and smooth wealth transfer structuring.' },
      { mono: 'FI', title: 'Fixed Income & Bonds Advisory', desc: 'Government bonds, FDs and debt instruments guidance.' },
      { mono: 'NRI', title: 'NRI Investment Advisory', desc: 'Cross-border investment and repatriation planning.' },
      { mono: 'GP', title: 'Goal-based Financial Planning', desc: 'Education, home and major-purchase planning roadmaps.' },
    ],
  },
  {
    id: 'rera',
    title: 'RERA Services',
    mono: 'R',
    color: 'var(--gold)',
    img: 'https://images.pexels.com/photos/6615095/pexels-photo-6615095.jpeg?auto=compress&cs=tinysrgb&w=1000',
    desc: 'Regulatory guidance for developers and real estate projects.',
    items: [
      'RERA Project Registration',
      'Compliance & QPR Filings',
      'Legal Documentation',
      'Agent Registration',
      'Project Advisory',
      'Extension Filings',
    ],
    detailItems: [
      { mono: 'RG', title: 'RERA Project Registration', desc: 'End-to-end registration for new real estate projects.' },
      { mono: 'QPR', title: 'Quarterly Progress Reports', desc: 'Timely QPR filings to keep projects compliant.' },
      { mono: 'AG', title: 'RERA Agent Registration', desc: 'Registration and renewal for real estate agents.' },
      { mono: 'CR', title: 'Compliance & Renewal Filings', desc: 'Ongoing regulatory filings and license renewals.' },
      { mono: 'PE', title: 'Project Extension Applications', desc: 'Timeline extension filings with the authority.' },
      { mono: 'LD', title: 'Legal Documentation & Agreements', desc: 'Sale agreements, allotment letters and disclosures.' },
      { mono: 'EA', title: 'Escrow Account Advisory', desc: 'Structuring and monitoring of RERA escrow accounts.' },
      { mono: 'TD', title: 'Title Due Diligence', desc: 'Land title verification and encumbrance checks.' },
      { mono: 'BG', title: 'Buyer Grievance Support', desc: 'Handling homebuyer complaints and resolutions.' },
      { mono: 'LS', title: 'RERA Litigation Support', desc: 'Representation and support for RERA tribunal matters.' },
    ],
  },
  {
    id: 'software',
    title: 'Software Services',
    mono: 'S',
    color: 'var(--copper)',
    img: 'https://images.pexels.com/photos/16129728/pexels-photo-16129728.jpeg?auto=compress&cs=tinysrgb&w=1000',
    desc: 'Technology that quietly runs your finance, ops and compliance.',
    items: [
      'Custom Software Development',
      'Accounting / ERP Systems',
      'Website & App Development',
      'IT Consulting',
      'Automation Tools',
      'Data Dashboards',
    ],
    detailItems: [
      { mono: 'CS', title: 'Custom Software Development', desc: 'Bespoke applications built around your workflows.' },
      { mono: 'ERP', title: 'Accounting / ERP Solutions', desc: 'Implementation and support for accounting and ERP systems.' },
      { mono: 'WA', title: 'Website & App Development', desc: 'Modern, fast websites and mobile apps.' },
      { mono: 'IT', title: 'IT Consulting & Support', desc: 'Infrastructure planning and ongoing technical support.' },
      { mono: 'CL', title: 'Cloud Migration & Hosting', desc: 'Secure migration to and management of cloud environments.' },
      { mono: 'DD', title: 'Data Dashboards & Reporting', desc: 'Real-time business dashboards for decision-making.' },
      { mono: 'PA', title: 'Process Automation Tools', desc: 'Automating repetitive finance and ops workflows.' },
      { mono: 'PG', title: 'Payment Gateway Integration', desc: 'Secure payment collection integrated into your systems.' },
      { mono: 'CY', title: 'Cybersecurity & Backup', desc: 'Data protection, backups and security audits.' },
      { mono: 'AMC', title: 'Software Maintenance & AMC', desc: 'Ongoing maintenance contracts for existing systems.' },
    ],
  },
  {
    id: 'insurance',
    title: 'Insurance Services',
    mono: 'I',
    color: 'var(--gold)',
    img: 'https://images.pexels.com/photos/6863251/pexels-photo-6863251.jpeg?auto=compress&cs=tinysrgb&w=1000',
    desc: 'Insurance advisory that protects your business, assets and people.',
    items: [
      'Life Insurance Advisory',
      'General Insurance Advisory',
      'Corporate Insurance Solutions',
      'Motor Insurance',
      'Property & Fire Insurance',
      'Claims Assistance',
    ],
    detailItems: [
      { mono: 'LI', title: 'Life Insurance Planning', desc: 'Term, whole life and ULIP plans matched to your protection needs.' },
      { mono: 'GI', title: 'General Insurance Advisory', desc: 'Motor, home, fire and liability cover for individuals and businesses.' },
      { mono: 'CI', title: 'Corporate Insurance Solutions', desc: 'Group life, group health and asset insurance for organizations.' },
      { mono: 'MI', title: 'Motor Insurance', desc: 'Comprehensive and third-party motor cover with quick renewals.' },
      { mono: 'PF', title: 'Property & Fire Insurance', desc: 'Protection for commercial and residential property against fire and allied perils.' },
      { mono: 'MC', title: 'Marine & Cargo Insurance', desc: 'Cover for goods in transit by sea, air and land.' },
      { mono: 'LB', title: 'Liability Insurance', desc: 'Professional indemnity and public liability cover for businesses.' },
      { mono: 'CS', title: 'Claims Assistance & Settlement', desc: 'End-to-end support for filing and settling insurance claims.' },
      { mono: 'PR', title: 'Insurance Portfolio Review', desc: 'Periodic review to eliminate gaps and overlaps in existing cover.' },
      { mono: 'GS', title: 'Group Insurance Schemes', desc: 'Employee benefit insurance programs designed for organizations.' },
    ],
  },
  {
    id: 'mediclaim',
    title: 'Mediclaim Services',
    mono: 'M',
    color: 'var(--copper)',
    img: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=1000',
    desc: 'Health insurance advisory for individuals, families and employees.',
    items: [
      'Individual Health Insurance',
      'Family Floater Plans',
      'Senior Citizen Mediclaim',
      'Group Mediclaim for Employees',
      'Critical Illness Cover',
      'Cashless Claim Support',
    ],
    detailItems: [
      { mono: 'IM', title: 'Individual Mediclaim Plans', desc: 'Personalized health cover matched to your medical history and needs.' },
      { mono: 'FF', title: 'Family Floater Plans', desc: 'Single policy covering the entire family under one sum insured.' },
      { mono: 'SC', title: 'Senior Citizen Health Cover', desc: 'Specialized mediclaim plans for age-related and pre-existing conditions.' },
      { mono: 'GM', title: 'Group Mediclaim for Employees', desc: 'Corporate health insurance schemes for staff welfare.' },
      { mono: 'CI', title: 'Critical Illness Cover', desc: 'Lump-sum payouts on diagnosis of specified critical illnesses.' },
      { mono: 'TU', title: 'Top-up & Super Top-up Plans', desc: 'Additional cover beyond your base policy at low premiums.' },
      { mono: 'CH', title: 'Cashless Hospitalization Support', desc: 'Assistance with network hospital empanelment and cashless claims.' },
      { mono: 'CF', title: 'Claim Filing & Reimbursement', desc: 'End-to-end support for reimbursement claim documentation.' },
      { mono: 'PD', title: 'Pre-Existing Disease Advisory', desc: 'Guidance on waiting periods and disclosure for existing conditions.' },
      { mono: 'MP', title: 'Mediclaim Portability Assistance', desc: 'Switching insurers without losing accrued policy benefits.' },
    ],
  },
];
