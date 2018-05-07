import express from 'express';
import {other} from "../model/login";

const router = express.Router();

router.get('/other', (req, res) => {
    const query = req.query;
    other(query, (data) => {
        res.json(data);
    })
});

export default router