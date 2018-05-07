'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _login = require('../model/login');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/details', function (req, res) {
    var query = req.query;
    (0, _login.details)(query, function (data) {
        res.json(data);
    });
});

exports.default = router;
//# sourceMappingURL=details.js.map