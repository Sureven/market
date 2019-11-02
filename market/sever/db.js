const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/login")
const db = mongoose.connection
db.once('error',() => console.log('Mongo connection error'))
db.once('open',() => console.log('Mongo connection successed'))
const loginSchema = mongoose.Schema({
  username:String,
  password : String
});
const goods = mongoose.Schema({
  goodsname:String,
  price : String
});
const Models = {
  Login : mongoose.model('Login',loginSchema),
  Goods :mongoose.model('Goods',goods)
}
module.exports = Models;
