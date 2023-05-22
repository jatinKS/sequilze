import { Sequelize, DataTypes } from 'sequelize';
import db from './database.js';

const Users = db.define('user', {
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        isEmail: true,
    },
    name: {
        type: DataTypes.STRING
    },
    gender: {
        type: DataTypes.STRING,
    }
}, {
    timestamps: true
});



/* Users.sync({force: true}).then(() => { */
Users.sync().then(() => {
    console.log('users table created');
});
export default Users;