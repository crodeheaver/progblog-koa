const koa = require('koa');
const router = require('./routes/index')
const handlebars = require("koa-handlebars");
const db = require('./middleware/knex-middleware')
const app = new koa();

app.use(handlebars({
  defaultLayout: "main"
}));

app.use(db);
app.use(router);

const port = process.env.PORT || 8080;

console.log(`Process running on port: ${port}`)

app.listen(port);