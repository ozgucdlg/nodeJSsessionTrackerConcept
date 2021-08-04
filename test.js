

const mongoose = require('mongoose')

const Post = require('./models/Post')

mongoose.connect('mongodb://127.0.0.1/mongodbdbtestt_db',{
    useNewUrlParser : true,
    useUnifiedTopology: true
})


Post.create({
    title:'my first trial',
    content: 'post icerigi lorem ifsum text'

}, (error,post) => {
    console.log(error,post)

})