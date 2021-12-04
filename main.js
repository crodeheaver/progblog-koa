import koa from 'koa'
import serve from 'koa-static'
import handlebars from 'koa-handlebars'
import helmet from 'koa-helmet';
import router from './routes/index.js'
import db from './middleware/knex-middleware.js'
import path from 'path';
const __dirname = path.resolve();
const app = new koa();

//add security headers
app.use(helmet());

//server static content from public folder
app.use(serve(__dirname + '/public/'))

//add handlebars template support
app.use(handlebars({
  defaultLayout: "main"
}));

//add middleware to access db
app.use(db);

//add routes
app.use(router);

//get and print port
const port = process.env.PORT || 8080;
console.log(`Process running on port: ${port}`)

//run application
app.listen(port);