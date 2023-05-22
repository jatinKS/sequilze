import { Sequelize, DataTypes } from 'sequelize';
import db from './database.js';
import Users from './users.js';

const Posts = db.define('post', {
    title: {
        type: DataTypes.STRING,
    },
    content: {
        type: DataTypes.STRING
    },
    user_id: {
        type: DataTypes.STRING,
    }
}, {
    timestamps: true
});



/* Posts.sync({force: true}).then(() => { */
Posts.sync().then(() => {
    console.log('posts table created');
});
export default Posts;