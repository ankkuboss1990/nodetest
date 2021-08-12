
var mysql = require('mysql')

// Add the credentials to access your database
var db;

function connectDatabase() {
    if (!db) {
        db = mysql.createPool({
                    connectionLimit:100,
				   	host:      'localhost',
				    user:       'root',
				    password: '',
				    port:       3306, 
				    database: 'booking'
				});
    }
    return db;
}

module.exports = connectDatabase();


