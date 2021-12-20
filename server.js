/* eslint-disable max-len */
const http = require('http');
const Koa = require('koa');
const koaBody = require('koa-body');
const WS = require('ws');
// const { v4: uuidv4 } = require('uuid');
// const Router = require('koa-router');
const router = require('./routes/index');

const app = new Koa();

app.use(koaBody({
  // urlencoded: true,
  // multipart: true,
  json: true,
}));

// eslint-disable-next-line consistent-return
app.use(async (ctx, next) => {
  const origin = ctx.request.get('Origin');
  if (!origin) {
    // eslint-disable-next-line no-return-await
    return await next();
  }

  const headers = { 'Access-Control-Allow-Origin': '*' };

  if (ctx.request.method !== 'OPTIONS') {
    ctx.response.set({ ...headers });
    try {
      return await next();
    } catch (e) {
      e.headers = { ...e.headers, ...headers };
      throw e;
    }
  }

  if (ctx.request.get('Access-Control-Request-Method')) {
    ctx.response.set({
      ...headers,
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
    });

    if (ctx.request.get('Access-Control-Request-Headers')) {
      ctx.response.set('Access-Control-Allow-Headers', ctx.request.get('Access-Control-Request-Headers'));
    }

    ctx.response.status = 204;
  }
});
// further my code

app.use(router());

const chat = [];

const port = process.env.PORT || 8080;
// const server = http.createServer(app.callback()).listen(8080);
const server = http.createServer(app.callback());
const wsServer = new WS.Server({ // создаем сервер ws на базе нашего сервера http
  server,
});

wsServer.on('connection', (ws) => { // подписываемся на событе 'connection', сработает когда произошло соединение
  const errCallback = (e) => { console.log('Из события connection', e); };
  ws.on('message', (e) => { // подписываемся на событие message, сработает когда придет сообщение на сервер. Сообщение находится в 'e'
    console.log('Из события message', e);
    ws.send('привет от сервера');
    //   chat.push(e);

  //   Array.from(wsServer.clients)
  //     .filter((client) => client.readyState === WS.OPEN)
  //     .forEach((client) => client.send(JSON.stringify({ message: e }))); // рассылаем сообщение всем подключенным участникам чата
  });
  // ws.send(JSON.stringify({ chat }), errCallback); // при первом подключении передаем чат целиком
});

server.listen(port);

// id: uuidv4()
