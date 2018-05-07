import express from 'express';
import bodyParser from 'body-parser';
import router from './config';
let fs = require('fs');
let path = require('path');
// import {authentication} from './config/tools';

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/', authentication);
app.all('*', function(req, res, next) {
    // res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",'3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.all('/', function (req, res) {
    // console.log("请求路径：" + req.url);
    var filename = req.url.split('/')[req.url.split('/').length - 1];
    var suffix = req.url.split('.')[req.url.split('.').length - 1];
    // console.log("文件名：", filename);
    // console.log('后缀', suffix)
    console.log(['gif', 'jpeg', 'jpg', 'png'].indexOf(suffix), 'bomb!')
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(get_file_content(path.join(process.cwd(), 'public', 'index.html')));
    } else if (suffix === 'css') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(get_file_content(path.join(process.cwd(), 'public', 'css', filename)));
    } else if (['gif', 'jpeg', 'jpg', 'png'].indexOf(suffix) !== -1) {
        res.writeHead(200, { 'Content-Type': 'image/' + suffix });
        res.end(get_file_content(path.join(process.cwd(), 'public', 'images', filename)));
    } else if(suffix === 'txt' && filename == 'MP_verify_tDZQuyybxswVRma9.txt') {
        console.log(path.join(process.cwd(), 'public', filename), 'txt文本路径')
        res.writeHead(200, { 'Content-Type': 'text/' + suffix });
        res.end(get_file_content(path.join(process.cwd(), 'public', filename)));
    }
});

function get_file_content(filepath) {
    return fs.readFileSync(filepath);
}
router(app);

app.listen(80, () => {
    console.log('listen to 80');
});