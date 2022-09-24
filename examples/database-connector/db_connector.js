const mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "disaster_user",
    password: "testpass",
    socketPath: '/tmp/mysql.sock',
    database: 'disaster'

});

con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    // querying the database example
    con.query('SELECT * FROM users', function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
        Object.keys(result).forEach(function(key) {
            var row = result[key];
            console.log(row);
        });
    });
});


