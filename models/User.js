// 10. asama veritabi islemleri icin once user.js acilir sonra gerekli islemler yapilir asagidaki gibi

const mongoose =  require('mongoose')

const UserSchema =  new mongoose.Schema({
    username: { type : String, require:true, unique:true },
    email: { type : String, require:true, unique:true },
    password: {type : String, require:true},   
    

})

module.exports = mongoose.model('User',UserSchema)