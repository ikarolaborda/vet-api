const connection = require('../database/databaseConnection');
const moment = require('moment');
const { now } = require('moment');
class Attendance {
    create(attendance, response) {
        const creation_date = Date.now();
        const schedule_date = moment(attendance.schedule_date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');
        const valid_date = moment(schedule_date).isSameOrAfter(creation_date);
        if(!valid_date) {
            return response.status(400).json({"dateError": "Data Fornecida data Invalida!!!"});
        }
        const dated_attendance = {...attendance, schedule_date}
        const sql = 'INSERT INTO attendances SET ?';
        connection.query(sql, dated_attendance, (error, queryResult) => {
            if(error) {
                response.status(400).json(error);
            }else {
                response.status(201).json(queryResult);
            }
        })
    }

    show(response) {
        const sql = "SELECT a.*, s.description AS 'descricao_servico', t.description AS 'status_agendamento' FROM attendances a JOIN service_list s on a.service_description=s.id JOIN attendance_status t ON a.attendance_status = t.id";
        connection.query(sql, (error, results) => {
            if(error) {
                response.status(400).json(error);
            }else {
                response.status(200).json(results);
            }
        })
    }
}7

module.exports = new Attendance