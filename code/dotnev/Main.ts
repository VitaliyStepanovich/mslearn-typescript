import dotenv from 'dotenv';

const result = dotenv.config();
console.log(result.parsed);
console.log(process.env.DB_HOST);
console.log(process.env.WEB_HOST);