const express = require('express')
const bodyParser= require('body-parser')

const port = 3000
const app = express()

const adminRouter = require('./routes/adminRouter')
const shopRouter = require('./routes/shopRouter')

const errorController = require('./controllers/error')

app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());

app.use(adminRouter)
app.use(shopRouter)

app.use(errorController.get404Error)

app.listen(port, () => { console.log('Server activated ' + Date.now())})