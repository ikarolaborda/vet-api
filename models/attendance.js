const connection = require('../database/databaseConnection');
class Attendance {
    create(attendance) {
        const sql = 'INSERT INTO attendances SET ?';
        connection.query(sql, attendance, (error, queryResult) => {
            if(error) {
                console.log(error);
            }else {
                console.log(queryResult);
            }
        })
    }
}7

module.exports = new Attendance