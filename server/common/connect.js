import mysql from 'mysql';

var connection = mysql.createConnection({
  host: "enewspaperwebapp.ctcaoeyungfz.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "qqwas123",
  database: "enewspaper"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
export default connection;