import express from 'express';
import {menuArr} from "../model/login";
var url = require('url');
const router = express.Router();

router.get('/modules/manage/creditCard/reportDetail.htm', (req, res) => {
    var arg1 = url.parse(req.url,true).query;
    const query = req.query;
    menuArr(query, (data) => {
        res.json(data);
    })
});

export default router