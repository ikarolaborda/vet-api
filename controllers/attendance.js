const Attendance = require('../models/attendance');
module.exports = app => {
    app.get('/attendance', (request, response) => response.send('Welcome to Vet API - Inside Controller'));

    app.post('/attendance', (request, response) => {
        const attendance = request.body;
        Attendance.create(attendance);
        response.send('A POST Method has been called');
    });
}