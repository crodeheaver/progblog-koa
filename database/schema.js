import knexfactory from 'knex'

const connectionOptions = {
    host: 'localhost',
    user: 'root',
    password: 'my-secret-pw',
    charset: 'utf8',
    insecureAuth: true
}

let knex = knexfactory({ client: 'mysql', connection: connectionOptions })

try {
    await knex.raw('CREATE DATABASE progblog')
}
catch(err){
    console.log('failed to create database')
}
finally {
    knex.destroy()
}

// connect with database selected
connectionOptions.database = 'progblog';
knex = knexfactory({ client: 'mysql', connection: connectionOptions });

try {
    await knex.schema.createTable('post', function (table) {
        table.uuid('id')
        table.primary('id')
        table.string('title', 100)
        table.text('body')
        table.string('slug', 30)
        table.timestamps(false, true)
    })
    console.log("post table created")
}
catch(err){
    console.log('failed to create post table')
}
finally {
    knex.destroy();
}
