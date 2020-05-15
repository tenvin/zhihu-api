const Router = require('koa-router')
const router = new Router({ prefix: '/users' })

const { find, create } = require('../controllers/users')

router.get('/', find)
router.post('/create', create)

module.exports = router