const connection = require('../database/databaseConnection');
const moment = require('moment');
class Attendance {
    create(attendance, response) {
        const schedule_date = moment(attendance.schedule_date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');
        const dated_attendance = {...attendance, schedule_date}
        const sql = 'INSERT INTO attendances SET ?';
        connection.query(sql, dated_attendance, (error, queryResult) => {
            if(error) {
                response.json(error);
            }else {
                response.json(queryResult);
            }
        })
    }

    show() {
        const sql = "SELECT a.*, s.description AS 'descricao_servico', t.description AS 'status_agendamento' FROM attendances a JOIN service_list s on a.service_description=s.id JOIN attendance_status t ON a.attendance_status = t.id";

    }
}7

module.exports = new Attendance