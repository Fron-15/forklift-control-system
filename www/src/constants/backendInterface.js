(function() {
    define(['app'], function(app) {
        app.constant('backendInterface', [
            {
                service: 'qytg/api',
                port: 9101,
                interfaces: ['security/login', 'security/logout', 'security/verifyLogin', 'security/getArea', 'security/findUserInfo', 'security/updateManager', 'security/quereyOrgTree', 'security/queryFilteUser', 'security/updateEmployeeInfoById', 'security/delUserInfoById', 'security/addEmployeeInfo', 'security/findUserStat', 'security/selectFansByOpenId', 'security/findEmployeeInfo', 'security/delEmployeeInfo', 'security/findEmployeeInfoById', 'security/importEmployee', 'security/findUserInfoById', 'security/isExistEmployee']
            },
            {
                service: 'qytg/api',
                port: 9103,
                interfaces: ['goods/getGoodsInfoPage', 'goods/updateGoodsStatus', 'goods/deleteGoodsInfo', 'goods/getWechatNumber', 'goods/saveDataInfo', 'goods/selectGoodsInfo', 'goods/updateGoodsInfo']
            },
            {
                service: 'qytg/api',
                port: 9102,
                interfaces: ['tasks/getTasksInfoPage', 'tasks/deleteOrRestoreTasksDataInfo', 'tasks/onLineOrOffLineTasksDataInfo', 'tasks/selectProCityByAuthority', 'tasks/saveTasksDataInfo', 'tasks/selectTasksInfo', 'tasks/updateTasksDataInfo']
            },
            {
                service: 'qytg/api',
                port: 9104,
                interfaces: ['account/getTradeRecordPage']
            }
        ]);
    });
})();