const Koa = require('koa')
const bodyparser = require('koa-body')
const mongoose = require('mongoose')
const app = new Koa()
const routing = require('./routes')

const mongoURL ="mongodb://localhost:27017/zhihu"
mongoose.connect(mongoURL, { useNewUrlParser: true,useUnifiedTopology: true }, () => console.log('MongoDB 连接成功了！'))
mongoose.connection.on('error', console.error);


app.use(bodyparser())
routing(app)

app.listen(3000, () => console.log('程序启动在3000端口了'))