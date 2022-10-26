import { Sequelize } from "sequelize";

const db = new Sequelize('investment_db', 'recrowd', '0m6PljE0ecKyQtDq', {
    host: 'localhost',
    dialect: 'mysql',
    port: 8889
})

export default db