// import login from '../router/login'
// import logon from '../router/logon'
// import account from '../router/account'
import details from '../router/details';
import other from '../router/other';
import menuList from '../router/menuList';
// import search from '../router/search';
import list from '../router/list';
import data from '../router/geturl';
// 微信中心token
import token from '../router/verify';
export default (app) => {
    // app.post('/login', login);
    // app.post('/logon', logon);
    app.get('/details', details);
    // app.get('/account', account);
    app.get('/other', other);
    app.get('/modules/manage/creditCard/reportDetail.htm', menuList);
    // app.post('/modules/manage/account/selectOnAccountList.htm', search);
    app.post('/modules/manage/account/selectOnAccountDetail.htm', list);
    app.get('/geturl', data);
    app.get('/verify', token);
}