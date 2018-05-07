import express from 'express';
import { querySearch } from "../model/search";

const router = express.Router();

router.post('/modules/manage/account/selectOnAccountList.htm', (req, res) => {
    const body = req.body;
    console.log(body, 'body')
    querySearch(body, function (code) {
        code.token = req.headers.token;
        res.json(
            code
        )
    })
});

export default router