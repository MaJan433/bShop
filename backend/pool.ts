import mysql2 from 'mysql2/promise'
export const pool =  mysql2.createPool({
    host: 'localhost',
    user: 'root',
    database: 'database',
    password: 'password',
    port: 0000,
    namedPlaceholders: true
});


