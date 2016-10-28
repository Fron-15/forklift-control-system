(function() {
    define(['app'], function(app) {
        //打开新窗口配置信息
        var browserWidth = window.screen.width,
            browserHeight = window.screen.height,
            windowWidth = 375,
            windowHeight = 667,
            appOptions = 'height=' + windowHeight + ',width=' + windowWidth;

        //如果高度和宽度都大于0，让新窗口出现居中位置
        if(browserWidth && browserHeight) {
            appOptions += ',left=' + (browserWidth - windowWidth) / 2 + ',top=' + (browserHeight - windowHeight) / 2;
        }

        app.constant('appOptions', appOptions);
    });
})();