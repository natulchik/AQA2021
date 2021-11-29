
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Nata1776214",
    database: "mydb"
})

// connection.connect(function(err) {
//     if (err) {
//         return console.error('error during connection to DB' + err.message);
//     } else {
//         console.log('Succesfully connected to BD');
//     }
// })

// create DB
// connection.query("CREATE DATABASE mydb", 
// function(err) {
//     if (err) console.error(err);
//     else console.log("DB created");
// })

// Create table in DB
// connection.query(`CREATE TABLE if not exists users(
//     id int primary key auto_increment,
//     name varchar(255) not null ,
//     age int not null
// )`, function(err) {
//     if (err) console.error(err);
//     else console.log("table created");
// })

//ading data into table
// connection.query(`INSERT INTO users(name, age) VALUES('Lolo', 1000)`,
// function(err) {
//     if (err) console.error(err);
//     else console.log("data added");
// });

connection.query(`SELECT * FROM users`,
function(err, results) {
    if (err) console.error(err);
    else console.log(results);
});

// const users_data = [
//     ['Max', 400],
//     ['Olik', 300],
//     ['Lop', 400],
//     ['Adsadas', 41200]
// ];
// const sql_query = `INSERT INTO users(name, age) VALUES ?`;

// connection.query(sql_query, [users_data],
// function(err, results) {
//     if (err) console.error(err);
//     else console.log(results);
// });


connection.end(); //- close all connection after finising

// connection.destroy(); //- kill all connections