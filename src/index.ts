import Koa from 'koa';
import dotenv from 'dotenv';

dotenv.config();

try {
    const app = new Koa();

    const { PORT, NODE_ENV } = process.env;

    if (!PORT) throw new Error('NO PORT');

    app.use((ctx) => {
        ctx.body = "<html><head><title>KoaJS TEST</title></head><body><h1>Hello Koa!</h1></body></html>";
    })

    app.listen(PORT, () => {
        console.log(`[${new Date().toLocaleString()}] listen port ${PORT} @ ${NODE_ENV}`);
    });

} catch (error) {
    console.error(error);
}