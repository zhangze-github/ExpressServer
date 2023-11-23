const express = require('express');
const path = require('path')

const log4js = require('log4js');
// 配置 log4js
log4js.configure({
    appenders: {
        daily: {
            type: 'dateFile',
            filename: 'logs/app.log',
            pattern: 'yyyy-MM-dd.log',
            keepFileExt: true,
        },
    },
    categories: {
        default: {appenders: ['daily'], level: 'all'},
    },
});

// 创建日志记录器
const logger = log4js.getLogger();
const app = express();

app.use(express.static(path.join(__dirname, 'static')));
app.use('*', (req, res) => {
    logger.info('这是一条信息级别的日志');
    logger.error('这是一条错误级别的日志');
    res.send('Hello World 123');
})

app.listen(3000)
