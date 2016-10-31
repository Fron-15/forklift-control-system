(function() {
    define(['app'], function(app) {
        //共用组件
        var commonComponents = [
            'factorys/service', 
            'services/modal', 'services/cache', 'services/datePicker',
            'constants/backend', 'constants/backendInterface',
            'directives/moduleView', 'directiveTemplates/moduleView'
        ];
        //controllers
        var components = {
            'login': ['private/login'],
            'home': ['private/home'],
            'monitorCentre.forkliftMonitor':['monitorCentre/forkliftMonitor'],
            'monitorCentre.historyData':['monitorCentre/historyData'],
            'monitorCentre.vehicleState':['monitorCentre/vehicleState','monitorCentre/vehicleAlarm','monitorCentre/vehicleViolation'],
            'monitorCentre.maintainRemind':['monitorCentre/maintainRemind']
        };

        angular.forEach(components, function(value, key) {
           angular.forEach(commonComponents, function(item, i) {
                value.push(item);
            });
        });
        
        app.constant('components', components);
    });
})();
