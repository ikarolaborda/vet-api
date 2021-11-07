const Attendance = require('../models/attendance');
module.exports = app => {
    app.get('/attendance', (request, response) => {
        Attendance.show(response);
    });

    app.post('/attendance', (request, response) => {
        const attendance = request.body;
        Attendance.create(attendance, response);
    });
}