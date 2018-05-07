import express from 'express';
import {details} from "../model/login";

const router = express.Router();

router.get('/details', (req, res) => {
    const query = req.query;
    details(query, (data) => {
        res.json(data);
    })
});

export default router