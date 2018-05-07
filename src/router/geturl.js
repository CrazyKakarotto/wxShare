import express from 'express';
import { queryUrl } from "../model/geturl";
import url from 'url';
const router = express.Router();

router.get('/geturl', (req, res) => {
    var arg1=url.parse(req.url,true).query;
    queryUrl(arg1, function (code) {
        res.json(
            code
        )
    })
});

export default router