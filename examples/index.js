/**
 * 文件描述
 * @author ydr.me
 * @create 2017-04-28 10:49
 * @update 2017-04-28 10:49
 */


'use strict';

var tips = require('../src/index');

var map = {
    default: '默认',
    success: '成功',
    danger: '危险',
    info: '提醒',
    warn: '警告'
};

Object.keys(tips).forEach(function (type) {
    document.getElementById(type).onclick = function () {
        tips[type](map[type] + '提示');
    };
});

