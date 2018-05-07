import mysql from 'mysql';
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'wdw',
    insecureAuth: true
});

connection.connect( err => {
    if(err) {
        throw err;
    }
});

const querySearch = (info, cb) => {
    connection.query('select * from search where orderNo=? or phone=? or realName=?', [info.orderNo, info.phone, info.realName], (err, result) => {
        if(result.length !== 0) {
            cb({
                resultCode: 1000,
                resultMessage: '操作成功',
                resultData: [
                    {   phone: result[0].phone,
                        realName: result[0].realName,
                        orderNo: result[0].orderNo,
                        surplusTotalAmount: result[0].otherPay,
                        id: result[0].id
                    }
                ],
            })
        } else {
            cb({
                resultCode: 0,
                resultMessage: '操作失败'
            })
        }
    })
};

export {
    querySearch
}
