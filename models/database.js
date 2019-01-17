let promise = require('bluebird');

const initOptions = {
    promiseLib: promise
}

const config = {
    host: 'localhost',
    port: 5432,
    database: 'blog',
    user: 'rdclder'
}

const pgp = require('pg-promise')(initOptions);
const db = pgp(config);

module.exports = db