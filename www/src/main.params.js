define(function() {
    var requirejsConstants = {
        paths: {
            'jquery': '../lib/jquery/dist/jquery.min',
            'bootstrap': '../lib/bootstrap/dist/js/bootstrap.min',
            'arrive': '../lib/arrive/minified/arrive.min',
            'ripples': '../lib/bootstrap-material-design/dist/js/ripples.min',
            'bootstrap-material': '../lib/bootstrap-material-design/dist/js/material.min',
            'sweetalert': '../lib/sweetalert/dist/sweetalert.min',
            'md5': '../lib/js-md5/js/md5.min',
            'moment': '../lib/moment/min/moment.min',
            'angular': '../lib/angular/angular.min',
            'angular-animate': '../lib/angular-animate/angular-animate.min',
            'angular-sanitize': '../lib/angular-sanitize/angular-sanitize.min',
            'angular-mocks': '../lib/angular-mocks/angular-mocks',
            'angular-messages': '../lib/angular-messages/angular-messages.min',
            'angular-ui-router': '../lib/angular-ui-router/release/angular-ui-router.min',
            'angular-bootstrap': '../lib/angular-bootstrap/ui-bootstrap-tpls.min',
            'angular-loading-bar': '../lib/angular-loading-bar/build/loading-bar.min',
            'angular-ui-select': '../lib/angular-ui-select/dist/select.min',
            'ng-file-upload': '../lib/ng-file-upload/ng-file-upload.min',
            'ngStorage': '../lib/ngstorage/ngStorage.min',
            'domReady': '../lib/domReady/domReady'
        },
        shim: {
            'angular': { exports: 'angular' },
            'sweetalert': { exports: 'swal' },
            'bootstrap': ['jquery'],
            'arrive': ['jquery'],
            'ripples': ['jquery'],
            'bootstrap-material': ['arrive'],
            'angular-animate': ['angular'],
            'angular-sanitize': ['angular'],
            'angular-mocks': ['angular'],
            'angular-messages': ['angular'],
            'angular-ui-router': ['angular'],
            'angular-loading-bar': ['angular'],
            'angular-bootstrap': ['angular-animate', 'bootstrap', 'bootstrap-material', 'ripples'],
            'angular-ui-select': ['angular-sanitize'],
            'ng-file-upload': ['angular'],
            'ngStorage': ['angular']
        } 
    };
    return requirejsConstants;
});
