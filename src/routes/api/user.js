const { Router } = require('express')

const route = Router()

route.get('/', (req, res) => {
    //  TODO: Send current user
    res.send({
        "user": {
            "email": "jake@mail.jake",
            "token": "jwt.token.here",
            "username": "jake",
            "bio": "I work at Recce",
            "image": null
        }
    })
})

module.exports = route