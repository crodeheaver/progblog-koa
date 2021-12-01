const knex = require('knex')({
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
  const bookshelf = require('bookshelf')(knex)

  const Post = bookshelf.model('Post', {
    tableName: 'post',
  })

const middleware = async function (ctx, next) {
    ctx.db = {}
    ctx.db.posts = {}
    ctx.db.posts.get = async function(filter) {
        return new Post(filter).fetchAll()
    }
    await next()
}

module.exports = middleware