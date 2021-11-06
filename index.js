const customExpress = require('./config/customExpress');
const connection = require('./database/databaseConnection');
connection.connect((error) => {
    if(error) {
        console.log(error);
    }else {
        console.log('database is connected');
    }
});
const app = customExpress();
app.listen(4545, () => console.log("server running on port 4545"));