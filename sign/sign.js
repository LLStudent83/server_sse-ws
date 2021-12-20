const signApi = {
  users: [],

  contains(user) {
    return this.users.some((item) => item === user);
  },

  getUsers() {
    return this.users;
  },

  add(user) {
    this.users.push(user);
  },

  remove(user) {
    this.serialNumber = this.users.findIndex((item) => item === user);
  },
};

module.exports = signApi;
