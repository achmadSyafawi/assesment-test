const express = require('express');
const Promise = require('bluebird');

function formatOutput(data, res) {
    return res.json(data);
}

function createUserHandler(userModel) {
    const userRouter = express.Router();
    userRouter.get('/', (req, res) => {
        userModel
        .viewAllUsers()
        .then(result => formatOutput(result, res))
        .catch(err => formatOutput(err, res));
    });
    userRouter.get('/:id', (req, res) => {
        const id = req.params.id;
        return res.json(userModel.getUserById(id));
    });
    userRouter.post('/', (req, res) => {
        const data = {
            id: req.body.id,
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
        };
        Promise.all([
            user.createUser(data),
        ])
            .spread(() => res.json({ message: 'sukses' }))
            .catch(err => formatOutput(err, res));
    });
    userRouter.delete('/:id', (req, res) => {
        user
        .delUser(req.params.id)
        .then(result => formatOutput(result, res))
        .catch(err => formatOutput(err, res));
    });
    return userRouter;
}


module.exports = createUserHandler;