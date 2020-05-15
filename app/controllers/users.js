const User = require('../models/users')

class UsersCtl {
    async find(ctx) {
        const { per_page = 10 } = ctx.query;
        const page = Math.max(ctx.query.page * 1, 1) - 1;
        const perPage = Math.max(per_page * 1, 1);
        ctx.body = await User
          .find({ name: new RegExp(ctx.query.q) })
          .limit(perPage).skip(page * perPage);
      }
    async create(ctx) {
        const { name } = ctx.request.body;
        const repeatedUser = await User.findOne({ name });
        if (repeatedUser) { ctx.throw(409, '用户已经占用'); }
        const user = await new User(ctx.request.body).save();
        ctx.body = user;
    }
}
module.exports = new UsersCtl()