const express = require('express');

const app = express();

app.listen(4545, () => console.log("server running on port 4545"));

app.get('/', (request, response) => response.send('Welcome to Vet API - updated info'));