'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _tools = require('./config/tools');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.urlencoded({
    extended: true
}));

app.use('/', _tools.authentication);

(0, _config2.default)(app);

app.listen(8083, function () {
    console.log('listen to 8083');
});
//# sourceMappingURL=app.js.map