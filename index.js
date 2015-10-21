var settings = module.exports = {
    env: {
        name: 'prd',
        mode: 'production',
        host: '127.0.0.1',
        port: 3010,
        bindIp: "0.0.0.0",

        NODE_ENV: 'production',
        PORT: 3010,
        BINDIP: "0.0.0.0"
    },

    secretKey: 'quick',

    app: {
        protocol: 'http',
        host: '127.0.0.1',
        port: 3010,
        domain: 'http://boss.www.wenode.org',
        domainPort: 80,
        context: '/'
    },

    api: {
        url: 'http://boss.www.wenode.org/api'
    },

    logging: {
        reloadSecs: 0, //INFO: set 0 could let nodeunit tests which use log4js exit properly
        level: 'DEBUG'
    },

    redis:{
        mode:'single',
        host: '127.0.0.1',
        port: 6379,
        auth:'trillers',
        sentinel: {
            hosts:[{host: '127.0.0.1', port: 26379}],
            masterName:'mymaster'
        }
    },

    mongo: {
        host: "ds031883.mongolab.com",
        port: 31883,
        db: "trillers",
        username: 'trillers',
        password: 'trillers'
    },

    session: {
        secretKey: 'quick',
        expires: 60 // minutes
    },

    wechat: {
        appKey: 'wx23f1709f7727051f',
        appSecret: '977f6080e128d465b673deb79e3d31b8',
        token: 'trillers',
        encodingAESKey: '9zYRktc6N1WPyqH6hXq38tJC2CVDaLjHIkxRpihzmx3'
    },

    resources: {
        app: {
            name: "zeus"
        }
    }
};