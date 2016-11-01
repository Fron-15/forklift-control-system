
(function() {
    define(['app'], function(app) {
        app.controller('forliftControllerCtrl', forliftControllerCtrl);

        forliftControllerCtrl.$inject = ['$scope', '$state', '$filter', '$sessionStorage','$location', 'Cache', 'Service'];

        function forliftControllerCtrl($scope, $state, $filter, $sessionStorage, Cache,$location, Service) {

        }
    });
})();
