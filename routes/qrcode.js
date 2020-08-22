var QRCode = require('qrcode');
var randomstring = require("randomstring");
const qrcodeRoutes = (app, fs) => {

    // READ
    app.get('/qrcode', (req, res) => {

          QRCode.toString(randomstring.generate({length: 7, charset: 'ABCDE0123456789'}), {type:'terminal'}, function (err, url) {
            console.log(url)
            res.send(url);
          })
    });
};

module.exports = qrcodeRoutes;