import express from 'express';
import { queryList } from "../model/list";

const router = express.Router();

router.post('/modules/manage/account/selectOnAccountDetail.htm', (req, res) => {
    const body = req.body;
    console.log(body, 'body')
    queryList(body, function (code) {
        code.token = req.headers.token;
        res.json(
            code
        )
    })
});

export default router