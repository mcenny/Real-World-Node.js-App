const express = require('express')

const app = express();

app.listen(2200, () => {
    console.log('Server started on http://localhost:2200/')
})