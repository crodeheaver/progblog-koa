import koa from 'koa'
import serve from 'koa-static'
import handlebars from 'koa-handlebars'
import helmet from 'koa-helmet';
import router from './routes/index.js'
import db from './middleware/knex-middleware.js'
import path from 'path';
const __dirname = path.resolve();
const app = new koa();

app.use(helmet());

app.use(serve(__dirname + '/public/'))

app.use(handlebars({
  defaultLayout: "main"
}));

app.use(db);
app.use(router);

const port = process.env.PORT || 8080;

console.log(`Process running on port: ${port}`)

app.listen(port);