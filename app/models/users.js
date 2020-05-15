const mongoose = require('mongoose')

const { Schema, model } = mongoose

var UserSchema = new Schema({
    username: { type: String }, //用户账号 
    userpwd: { type: String }, //密码 
    userage: { type: Number }, //年龄 
    logindate: { type: Date } //最近登录时间 
})

module.exports = model('User', UserSchema)