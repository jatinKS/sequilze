import Sequelize from 'sequelize';

const db = new Sequelize('nodesql', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;