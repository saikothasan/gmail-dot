export const generateDotVariants = (email: string): string[] => {
  const [localPart, domain] = email.split('@');
  if (!localPart || !domain || domain !== 'gmail.com') return [];

  const results = new Set<string>();
  const len = localPart.length;

  // Generate all possible dot combinations
  for (let i = 0; i < (1 << (len - 1)); i++) {
    let variant = localPart[0];
    for (let j = 1; j < len; j++) {
      if ((i & (1 << (j - 1))) !== 0) {
        variant += '.';
      }
      variant += localPart[j];
    }
    results.add(`${variant}@gmail.com`);
  }

  return Array.from(results);
};

export const generatePlusVariants = (email: string, alias: string): string => {
  const [localPart, domain] = email.split('@');
  if (!localPart || !domain || domain !== 'gmail.com') return email;
  if (!alias) return email;
  return `${localPart}+${alias}@gmail.com`;
};

export const isValidGmail = (email: string): boolean => {
  const gmailRegex = /^[a-zA-Z0-9](?:[a-zA-Z0-9.]*[a-zA-Z0-9])?@gmail\.com$/;
  return gmailRegex.test(email);
};