const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'vet_api',
    user: 'vet_dbuser',
    password: 'v3t2021@'
});

module.exports = connection 