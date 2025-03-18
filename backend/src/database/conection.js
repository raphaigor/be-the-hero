const knex = require('knex');
const config = require('../../knexfile');

const conection = knex(config.development);

module.exports = conection;