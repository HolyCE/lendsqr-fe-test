const organizations = ['Lendsqr', 'Irorun', 'Lendstar', 'QuickCredit', 'FinTech Pro', 'MoneyLend', 'CreditFlow'];
const statuses = ['Active', 'Inactive', 'Pending', 'Blacklisted'];
const firstNames = ['John', 'Jane', 'Michael', 'Sarah', 'David', 'Grace', 'Tosin', 'Adeleji', 'Debby', 'James', 'Mary', 'Peter', 'Paul', 'Esther', 'Daniel'];
const lastNames = ['Doe', 'Smith', 'Johnson', 'Brown', 'Effiom', 'Ogana', 'Dokunmu', 'Williams', 'Jones', 'Davis', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas'];

const generatePhoneNumber = () => {
  return `080${Math.floor(Math.random() * 100000000)}`.slice(0, 11);
};

const generateDate = () => {
  const year = 2020 + Math.floor(Math.random() * 4);
  const month = Math.floor(Math.random() * 12) + 1;
  const day = Math.floor(Math.random() * 28) + 1;
  return `${month}/${day}/${year} 10:00 AM`;
};

export const generateMockUsers = () => {
  const users = [];
  
  for (let i = 1; i <= 500; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const userName = `${firstName.toLowerCase()}${lastName.toLowerCase()}${i}`;
    const email = `${userName}@example.com`;
    
    users.push({
      id: String(i),
      organization: organizations[Math.floor(Math.random() * organizations.length)],
      userName: userName,
      email: email,
      phoneNumber: generatePhoneNumber(),
      dateJoined: generateDate(),
      status: statuses[Math.floor(Math.random() * statuses.length)],
      balance: Math.floor(Math.random() * 500000),
      tier: Math.floor(Math.random() * 3) + 1,
      fullName: `${firstName} ${lastName}`,
      gender: Math.random() > 0.5 ? 'Male' : 'Female',
      bvn: `${Math.floor(Math.random() * 10000000000)}`,
      address: `${Math.floor(Math.random() * 1000)} Main St, Lagos, Nigeria`,
      currency: 'NGN',
    });
  }
  
  return users;
};

export const mockUsers = generateMockUsers();
