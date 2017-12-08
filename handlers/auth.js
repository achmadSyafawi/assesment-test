const express = require('express');

function authController(auth) {
    const authRouter = express.Router();
    authRouter.post('/', (req, res) => {
        const { username, password } = req.body;
        auth
            .login(nidn, password)
            .then(result => res.json(result))
            .catch((err) => {
                res.status(401).json({ message: err.message });
        });
    });
    authRouter.post('/', (req, res) => {
        const token = req.body.token;
        auth
            .cekToken(token)
            .then(result => res.json(result))
            .catch((err) => {
                res.json({ message: err.message });
            });
    });
    return authRouter;
}

module.exports = authController;