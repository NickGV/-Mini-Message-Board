const express = require('express')
const path = require('path')
const router = require('./routes/index.js')


const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

app.get('/',  router)

app.get('/new', router)

app.post('/new', router)


const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));