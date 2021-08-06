


const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

// 5.a
const connectMongo = require('connect-mongo')

const app = express()
const port = 3000
const hostname = '127.0.0.1'
const mongoose = require('mongoose')

const bodyParser  = require('body-parser')


const fileUpload = require('express-fileupload')


// 2. asama sisteme entegre edili
const expressSession = require('express-session')




app.engine("handlebars", expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
  }), exphbs());
  app.set("view engine", "handlebars");



mongoose.connect('mongodb://127.0.0.1/mongodbdbtestt_db',{
    useNewUrlParser : true,
    useUnifiedTopology: true,
    useCreateIndex:true
})



// 5. asama
// 5.b
const MongoStore =     connectMongo(expressSession)

// 3. asama middleware olarak kullanildi
app.use(expressSession({
    secret:'testotesto',
    resave: false,
    saveUninitialized:true,
    // 5.c
    store: new  MongoStore({ mongooseConnection: mongoose.connection })

}))

// Flash  - meesage Middleware
app.use((req, res, next ) => {

        res.locals.sessionFlash = req.session.sessionFlash
        delete req.session.sessionFlash
        next()
})


app.use(fileUpload())


app.use(express.static(`public`))

app.use(bodyParser .urlencoded({ extended: true }))


app.use(bodyParser.json())


/* app.engine('handlebars',exphbs())
app.set('view engine', 'handlebars') */



const main = require('./routes/main')
app.use('/', main)


const users = require('./routes/users')

app.use('/users', users)



const posts = require('./routes/posts');
const { connect } = require('./routes/posts');
app.use('/posts',posts)

 


app.listen(port,hostname, () => {
    console.log(`Server calisiyor , http://${hostname}:${port}/`)
})


