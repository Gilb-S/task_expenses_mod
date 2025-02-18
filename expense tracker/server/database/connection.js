import mysql, { createConnection } from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const db = createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect(() => {
    console.log("connected to mysql");
})

export default db;