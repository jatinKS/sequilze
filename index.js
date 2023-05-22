import express from 'express';
import db from './database.js';
import Users from './users.js';
import Posts from './posts.js';
import Category from './category.js';
//import { belongsToMany } from "sequelize";

const app = express();

/* Users.hasOne(Posts, {
    foreignKey: "user_id",
    as: "postDetails",
}); */

Users.hasMany(Posts, {
    foreignKey: "user_id",
    as: "postDetails",
});

/* Users.belongsToMany(Category, {
    through: "category_id",
}); */
Category.belongsToMany(Users, {
    through: "user_id", 
});

/* Category.belongsTo(Users, {
    foreignKey: "user_id"
}); */

// belongsToMany


db.authenticate()
    .then(() => {
        console.log('Database connected...')
        app.listen(5000, () => {
            console.log('Server start at port 5000');
        })
    }).catch(err => console.log('Error: ' + err));

/* app.get("/one-to-one", async (req, res) => {
    let data = await Users.findAll({
        attributes: ["name", "email", "gender"],
        include: Posts
    });
    res.send(data);
}); */
app.get("/one-to-one", async (req, res) => {
    let data = await Users.findAll({
        attributes: ["name", "email", "gender"],
        include: [{
            model: Posts,
            as: "postDetails",
            attributes: ["title", ["content", "body"]]
        }]
    });
    res.send(data);
});

app.get("/one-to-many", async (req, res) => {
    let data = await Users.findAll({
        attributes: ["name", "email", "gender"],
        include: [{
            model: Posts,
            as: "postDetails",
            attributes: ["title", ["content", "body"]]
        }],
        where: { id: 1 }
    });
    res.send(data);
});

app.get("/belong-to", async (req, res) => {
    let data = await Posts.findAll({
        include: Posts,

    });
    res.send(data);
})

app.get("/belong-to-many", async (req, res) => {
    let data = await Category.findAll({
        attributes: ["name", "email", "gender"],
        include: [
            {
                model: Users
            },
            /* {
                model: Category,
            }, */
            
        ]
    });
    res.send(data);
})