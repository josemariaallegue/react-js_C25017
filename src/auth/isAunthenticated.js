// auth.js (simulación)
export const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};
