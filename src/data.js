export const routes = [
  {label: "Individual", url: "#"},
  {label: "Business", url: "#"},
  {label: "Pricing", url: "#"},
  {label: "Set your payroll", url: "#"}
]

export const dashboardComponents = [
  {logo: 'dashboard.png', label: 'Dashboard', dropdown: false, dropdownList:[]},
  {logo: 'wallet.png', label: 'Wallet', dropdown: false, dropdownList:[]},
  {logo: 'employee.png', label: 'Employee Management', dropdown: true, dropdownList:[]},
  {logo: 'payroll.png', label: 'Payroll', dropdown: true, dropdownList:[]},
  {logo: 'compliance.png', label: 'Compliance', dropdown: true, dropdownList:[]},
  {logo: 'quick_loan.png', label: 'Quick Loan', dropdown: true, dropdownList:[]},
  {logo: 'bookkeeping.png', label: 'Book Keeping', dropdown: true, dropdownList:[]},
]

export const supportAndSettings = [
  {logo: 'call.png', label: 'Support', dropdown: false, dropdownList:[]},
  {logo: 'settings.png', label: 'Settings', dropdown: true, dropdownList:[]},
]

export const walletDetails = [
  {label: 'Add Employee', logo:'add_employee', url:'#'},
  {label: 'Pay Salaries', logo:'pay_salary', url:'#'},
  {label: 'Pay Compliances', logo:'pay', url:'#'},
  {label: 'Quick Loan', logo:'loan', url:'#'},
]

export const formInputs = [
  { type: 'text', placeholder: 'First Name', name: 'firstName'},
  { type: 'text', placeholder: 'Last Name', name: 'lastName'},
  { type: 'email', placeholder: 'Email', name: 'email'},
  { type: 'text', placeholder: 'Job Title', name: 'jobTitle'},
  { type: 'text', placeholder: 'Company Size', name: 'companySize'},
]

export const socialMedias = [
  {label: 'instagram', url: '#'},
  {label: 'twitter', url: '#'},
  {label: 'linkedin', url: '#'},
  {label: 'fb', url: '#'},
]

export const footerLinks = [
  {header: 'Product', links:['Individual', 'Businesses', 'Request Demo', 'Pricing']},
  {header: 'Legal', links:['Privacy Policy', 'Terms of Service']},
  {header: 'Resources', links:['FAQ', 'Blog', 'Careers', 'Customer Stories']}
]