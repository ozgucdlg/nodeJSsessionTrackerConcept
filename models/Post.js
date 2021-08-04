

const mongoose =  require('mongoose')



const PostSchema =  new mongoose.Schema({
    title: { type : String, require:true },
    content: { type : String, require:true },
    date: {type : Date, default:Date.now },
    // 8. asamada modeli blog ta kullanmak icin fotonun adresini veritabanina kaydederiz
    post_image: { type : String, require:true }

})

module.exports = mongoose.model('Post',PostSchema)


