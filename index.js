const customExpress = require('./config/customExpress');
const connection = require('./database/databaseConnection');
const Tables = require('./database/tables');
connection.connect((error) => {
    if(error) {
        console.log(error);
    }else {
        console.log('database is connected');
        Tables.init(connection);
    }
});
const app = customExpress();
app.listen(4545, () => console.log("server running on port 4545"));