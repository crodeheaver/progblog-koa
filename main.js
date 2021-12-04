import koa from 'koa'
import handlebars from 'koa-handlebars'
import helmet from 'koa-helmet';
import router from './routes/index.js'
import db from './middleware/knex-middleware.js'
const app = new koa();

app.use(helmet());

app.use(handlebars({
  defaultLayout: "main"
}));

app.use(db);
app.use(router);

const port = process.env.PORT || 8080;

console.log(`Process running on port: ${port}`)

app.listen(port);