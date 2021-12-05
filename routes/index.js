import Router from '@koa/router';

const router = new Router();

router.get('/', async function (ctx) {

    const posts = await ctx.db.posts.get()

    await ctx.render("index.hbs", {
      title: "Progblog - Home",
      posts: posts.toJSON()
    });
});

export default router.routes();