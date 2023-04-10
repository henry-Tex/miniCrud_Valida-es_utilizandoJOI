const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: '041417',
        database: 'sistema_cadastro'
    }
});
module.exports=knex;