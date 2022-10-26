import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Investment = db.define('investments', {
    name: DataTypes.STRING,
    performance: DataTypes.DECIMAL(10, 2),
    duration: DataTypes.STRING,
    finishDate: DataTypes.DATE,
    state: DataTypes.BOOLEAN,
    investCapital: DataTypes.DECIMAL(11, 2)
}, {
    freezeTableName: true
})

export default Investment;

(async () => {
    await db.sync();
})();