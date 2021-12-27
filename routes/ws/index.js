// const Router = require('koa-router');
// const wsServer = require('../../server');

// const router = new Router();
// console.log('дошол до ws1');
// router.get('/ws', async (stx) => {
//   console.log('дошол до ws2');
//   wsServer.on('connection', (ws) => { // подписываемся на событе 'connection', сработает когда произошло соединение
//     console.log('дошол до ws2');
//     const errCallback = (e) => { console.log('Из события connection', e); };
//     ws.on('message', (e) => { // подписываемся на событие message, сработает когда придет сообщение на сервер. Сообщение находится в 'e'
//       console.log('Из события message', e);
//       ws.send('привет от сервера');
//     });
//   });
// });
// module.exports = router;
