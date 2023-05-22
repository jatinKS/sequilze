import { Sequelize, DataTypes } from 'sequelize';
import db from './database.js';

const Category = db.define('category', {
    category: {
        type: DataTypes.STRING,
    },
    user_id: {
        type: DataTypes.STRING,
    }
}, {
    timestamps: true
});



/* Users.sync({force: true}).then(() => { */
Category.sync().then(() => {
    console.log('Category table created');
});
export default Category;