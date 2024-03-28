const express = require('express')
const cors = require('cors')
const app = express();
app.use(express.json())
app.use(cors())
const PORT = 8000

app.post('/contactUs', (req, res) => {
    const {name, email, phone, message} = req.body;

    console.log(name, email, phone, message)
    res.sendStatus(200)

})

app.listen(8000, () => {
    console.log(`Running on port ${PORT}`)
})