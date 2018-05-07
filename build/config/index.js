'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _login = require('../router/login');

var _login2 = _interopRequireDefault(_login);

var _logon = require('../router/logon');

var _logon2 = _interopRequireDefault(_logon);

var _account = require('../router/account');

var _account2 = _interopRequireDefault(_account);

var _details = require('../router/details');

var _details2 = _interopRequireDefault(_details);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
    app.post('/login', _login2.default);
    app.post('/logon', _logon2.default);
    app.get('/details', _details2.default);
    app.get('/account', _account2.default);
};
//# sourceMappingURL=index.js.map