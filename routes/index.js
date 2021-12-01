const Router = require('@koa/router');

const router = new Router();

router.get('/', async function (ctx) {

    const posts = await ctx.db.posts.get()

    await ctx.render("index", {
      title: "Progblog - Home",
      posts: posts.toJSON()
    });
});

module.exports = router.routes();