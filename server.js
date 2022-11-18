const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('.db.json');
const middleware = jsonServer.defaults({
  static: './build',
});

const port = process.env.PORT || 3001;
server.use(middleware);
server.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
  })
);

server.use(router);
server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
