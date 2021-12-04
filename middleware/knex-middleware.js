import knexfactory from 'knex'
import bookshelffactory from 'bookshelf'

const knex = knexfactory({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'my-secret-pw',
    database: 'progblog',
    charset: 'utf8',
    insecureAuth: true
  }
})
const bookshelf = bookshelffactory(knex)

const Post = bookshelf.model('Post', {
  tableName: 'post',
})

const middleware = async function (ctx, next) {
  ctx.db = {}
  ctx.db.posts = {}
  ctx.db.posts.get = async function (filter) {
    return new Post(filter).fetchAll()
  }
  await next()
}

export default middleware