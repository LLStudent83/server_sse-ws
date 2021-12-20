/* eslint-disable no-param-reassign */
const Router = require('koa-router');
const signApi = require('../../sign/sign');

const router = new Router();
router.get('/signIn', async (stx) => {
  console.log('вывод тела запроса с URL signIn', stx.request.query.data);
  const name = stx.request.query.data;
  if (!signApi.contains(name)) {
    signApi.add(name);
    stx.response.status = 200;
    stx.response.body = {
      result: signApi.getUsers(),
    };
    console.log('ответ', stx.response);
  } else {
    stx.response.status = 200;
    stx.response.body = {
      result: null,
    };
    console.log('ответ', stx.response);
  }
});

module.exports = router;
