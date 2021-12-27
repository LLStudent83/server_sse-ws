const combineRouters = require('koa-combine-routers');

const signIn = require('./signIn');
// const ws = require('./ws');

const router = combineRouters(
  signIn,
  // ws,
);
module.exports = router;
