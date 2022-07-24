export const isAuthenticated = () => {
  const user = window.localStorage.getItem('user');
    if (user) return true
    return false;
};