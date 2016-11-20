(function() {
    define([
        'ngStorage', 
        'angular-messages', 
        'angular-bootstrap', 
        'angular-ui-router', 
        'angular-loading-bar', 
        'angular-ui-select',
        'ng-file-upload',
        'angular-ui-tree'
    ], function() {
        var app = angular.module('app', [
            'ui.bootstrap',
            'ui.router',
            'ui.select',
            'ngAnimate',
            'ngSanitize',
            'ngStorage',
            'ngMessages',
            'angular-loading-bar',
            'ngFileUpload',
            'ui.tree'
        ]);
        return app;
    });
})();