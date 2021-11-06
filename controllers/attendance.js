module.exports = app => {
    app.get('/attendance', (request, response) => response.send('Welcome to Vet API - Inside Controller'));

    app.post('/attendance', (request, response) => {
        console.log(request.body);
        response.send('A POST Method has been called');
    });
}