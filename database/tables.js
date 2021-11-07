class Tables {
    init(connection) {
        console.log('Tables class has been reached')
        this.connection = connection;
        //this.createAttendances();
    }

    /* createAttendances() {
        const sql = 'CREATE TABLE IF NOT EXISTS attendances (attendance_id int NOT NULL AUTO_INCREMENT, client_name VARCHAR(200), pet_name VARCHAR (100), service_description int NOT NULL, attendance_status int NOT NULL, attendance_notes TEXT, PRIMARY KEY(attendance_id))';
        this.connection.query(sql, (error) => {
            if(error) {
                console.log(error);
            }else {
                console.log('attendances table successfully created');
                this.createAttendanceStatus();
                this.createServiceList();
            }
        });
    }

    createAttendanceStatus() {
        const sql = 'CREATE TABLE IF NOT EXISTS attendance_status (id int NOT NULL AUTO_INCREMENT, description VARCHAR(100), PRIMARY KEY(id))';
        this.connection.query(sql, (error) => {
            if(error) {
                console.log(error);
            }else {
                console.log('attendance_status successfully created');
                const insert = "INSERT INTO attendance_status (description) SELECT ? FROM DUAL  WHERE NOT EXISTS (SELECT * FROM attendance_status)";
                const values = [
                    ['Pending'],
                    ['Finished'],
                    ['Not Executed'],
                    ['Budget Rejected']
                ]
                this.connection.query(insert, [values], (error) => {
                    if(error) {
                        console.log(error);
                    }else {
                        const updateAttendance = 'ALTER TABLE attendances ADD FOREIGN KEY (attendance_status) REFERENCES attendance_status (id) ON UPDATE CASCADE ON DELETE CASCADE';
                        this.connection.query(updateAttendance);
                        console.log('TABLE attendances has been modified');
                    }
                })
            }
        });
    }

    createServiceList() {
        const sql = 'CREATE TABLE IF NOT EXISTS service_list (id int NOT NULL AUTO_INCREMENT, description VARCHAR(100), PRIMARY KEY (id))';
        this.connection.query(sql, (error) => {
            if(error) {
                console.log(error);
            }else  {
                console.log('service_list successfully created');
                const insert = "INSERT INTO service_list (description) SELECT ? FROM DUAL  WHERE NOT EXISTS (SELECT * FROM service_list)"
                const values = [
                    ['Banho e Tosa'],
                    ['Vacinação Genérica'],
                    ['Vermifugo Simples'],
                    ['Cirurgia de baixa complexidade'],
                    ['Cirurgia de Alta Complexidade'],
                    ['Castração Adulto'],
                    ['Castração Filhote'],
                    ['Eutanasia']
                ]
                this.connection.query(insert, [values], (error) => {
                    if(error) {
                        console.log(error);
                    }else {
                        const updateAttendance = 'ALTER TABLE attendances ADD FOREIGN KEY (service_description) REFERENCES service_list (id) ON UPDATE CASCADE ON DELETE CASCADE';
                        this.connection.query(updateAttendance);
                        console.log('TABLE attendances has been modified - 2');
                    }
                })
            }
        })
    } */
}

module.exports = new Tables