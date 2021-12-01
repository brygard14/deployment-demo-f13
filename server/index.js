const express = require('express')
const cors =  require('cors')
const path = require('path')

const app = express()

app.use(express.static('client'))

app.get('/', () => {
    resizeBy.sendFile(path.join(__dirname, '../index.html'))
})



const port = process.env.PORT || 4004

app.listen(port, () => console.log(`server running on ${port}!`))