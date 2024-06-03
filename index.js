const express = require('express')
const app = express()

app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hi...')
})


app.listen(3005, () => {
    console.log('Server listening at http://localhost:3005')
})