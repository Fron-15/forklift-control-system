(function() {
    requirejs(['main.params'], function(constants) {
        requirejs.config({
            paths: constants.paths,
            shim: constants.shim,
            deps: ['domReady!', 'constants/components', 'constants/swal', 'config/register', 'config/config', 'config/route', 'config/run'],
            callback: function(doc) {
                //启动angular
                angular.bootstrap(doc, ['app']);
                //初始化bootstrap-material
                $.material.init({ validate: false });
            }
        });
    });
})();
