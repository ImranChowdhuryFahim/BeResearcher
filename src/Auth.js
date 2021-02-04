const Auth = {
  isAuthenticated: true,
  isAdmin: true,
  authenticate() {
    this.isAuthenticated = true;
  },
  adminAuthenticate() {
    this.isAdmin = true;
  },
  signout() {
    this.isAuthenticated = false;
  },
  getAuth() {
    return this.isAuthenticated;
  },
  getAdminAuth() {
    return this.isAdmin;
  },
};

export default Auth;
