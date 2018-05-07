import express from 'express';
import url from 'url';
const router = express.Router();
var crypto = require('crypto');
router.get('/verify', (req, res) => {
    var query = url.parse(req.url, true).query;
    var signature = query.signature;
    var timestamp = query.timestamp;
    var nonce = query.nonce;
    var echostr = query.echostr;
    if (check(timestamp, nonce, signature, "weixin")) {
        res.end(echostr);
    } else {
        res.end("It is not from weixin");
    }
});
function check(timestamp, nonce, signature, token) {
    var currSign, tmp;
    tmp = [token, timestamp, nonce].sort().join("");
    currSign = crypto.createHash("sha1").update(tmp).digest("hex");
    return (currSign === signature);
};
export default router
