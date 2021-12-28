const signApi = {
  users: [],

  contains(userName) {
    return this.users.some((item) => item === userName);
  },

  getUsers() {
    return this.users;
  },

  add(user) {
    this.users.push(user);
    return this.users;
  },

  remove(userName) {
    this.serialNumber = this.users.findIndex((item) => item === userName);
    this.users.splice(this.serialNumber, 1);
    return this.users;
  },
};

module.exports = signApi;
