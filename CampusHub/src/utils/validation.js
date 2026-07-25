export const validateLogin = (email, password) => {
  if (!email || !password) return 'All fields are required.';
  if (password.length < 4) return 'Password must be at least 4 characters long.';
  return null;
};