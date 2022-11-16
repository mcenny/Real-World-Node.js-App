const express = require('express')
const {db, Users, Articles, Comments, Tags } = require('./models')
const morgan = require('morgan')

const app = express();

// For POST requests
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))

// Routes
app.use('/api', require('./routes/api'))

db.authenticate()
    .then(() => {
        app.listen(2200, () => {
            console.log('Server started on http://localhost:2200/')
        })
    })
    .catch(() => {
        console.log('an error db sync')
    })
