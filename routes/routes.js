// import other routes
const qrcodeRoutes = require('./qrcode');

const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });

    // other routes
    qrcodeRoutes(app, fs);

};

module.exports = appRouter;