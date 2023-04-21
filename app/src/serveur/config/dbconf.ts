const mysql = require('mysql2');


export const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bdboutique',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0
}).promise();



