const signApi = {
  users: [],

  contains(userName) {
    // for (const user in this.users) {
    //   if (this.users[user] === userName) return false;
    // }
    // return true;
    return this.users.some((item) => item === userName);
  },

  getUsers() {
    return this.users;
  },

  add(user) {
    // this.users[id] = user;
    this.users.push(user);
    return this.users;
  },

  remove(userName) {
    // for (const user in this.users) {
    //   if (this.users[user] === userName) delete this.users[user];
    // }
    this.serialNumber = this.users.findIndex((item) => item === userName);
    this.users.splice(this.serialNumber, 1);
    return this.users;
  },
};

module.exports = signApi;
