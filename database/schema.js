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


knex.schema.createTable('post', function (table) {
    table.uuid('id')
    table.primary('id')
    table.string('title', 100)
    table.text('body')
    table.string('slug', 30)
    table.timestamps(false, true)
}).then(() => console.log("post table created"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });