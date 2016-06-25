/**
 * tips 组件
 * @author ydr.me
 * @create 2016-05-30 21:13
 */


'use strict';


var Tips = require('blear.ui.tips');
var typeis = require('blear.utils.typeis');
var time = require('blear.utils.time');


var buildExports = function (type) {
    return function (message) {
        var options = {};

        if (typeis.Object(message)) {
            options = message;
        } else {
            message = message || '';
            message = message && message.message ? message.message : message;
            options.message = message;
        }

        options.type = type;
        var tips = new Tips(options);

        tips.on('sure', function () {
            tips.destroy(function () {
                tips = null;
            });
        });

        time.nextTick(function () {
            tips.open();
        });

        return tips;
    };
};


exports.default = buildExports('default');
exports.success = buildExports('success');
exports.danger = buildExports('danger');
exports.info = buildExports('info');
exports.warn = buildExports('warn');





