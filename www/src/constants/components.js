(function() {
    define(['app'], function(app) {
        //共用组件
        var commonComponents = [
            'factorys/service', 
            'services/modal', 'services/cache', 'services/datePicker',
            'constants/backend', 'constants/backendInterface',
            'directives/moduleView', 'directiveTemplates/moduleView',
            'directives/appPagination','directiveTemplates/appPagination'
        ];
        //controllers
        var components = {
            'login': ['private/login'],
            'home': ['private/home'],
            'monitorCentre.forkliftMonitor':['monitorCentre/forkliftMonitor','monitorCentre/forkliftSearch'],
            'monitorCentre.historyData':['monitorCentre/historyData'],
            'monitorCentre.vehicleState':['monitorCentre/vehicleState'],
            'monitorCentre.vehicleAlarm':['monitorCentre/vehicleAlarm'],
            'monitorCentre.vehicleViolation':['monitorCentre/vehicleViolation'],
            'monitorCentre.maintainRemind':['monitorCentre/maintainRemind'],
            'baseData.forkliftController':['baseData/forkliftController'],
            'baseData.vehicleType':['baseData/vehicleType'],
            'baseData.vehicleInfo':['baseData/vehicleInfo'],
            'baseData.controlMobile':['baseData/controlMobile'],
            'baseData.driverArchives':['baseData/driverArchives'],
            'baseData.relevance':['baseData/relevance'],
            'baseData.parameterConfig':['baseData/parameterConfig'],
            'maintainRegister.repairRegister':['maintainRegister/repairRegister'],
            'maintainRegister.maintainRegister':['maintainRegister/maintainRegister'],
            'reportCentre.synthesisReport':['reportCentre/synthesisReport'],
            'reportCentre.forklistWorkTime':['reportCentre/forklistWorkTime'],
            'reportCentre.driverWorkTime':['reportCentre/driverWorkTime'],
            'reportCentre.efficiency':['reportCentre/efficiency'],
            'reportCentre.alarmReport':['reportCentre/alarmReport'],
            'reportCentre.violationReport':['reportCentre/violationReport'],
            'reportCentre.repairReport':['reportCentre/repairReport'],
            'reportCentre.maintainReport':['reportCentre/maintainReport'],
            'systemManagement.user':['systemManagement/user'],
            'systemManagement.framework':['systemManagement/framework'],
            'systemManagement.role':['systemManagement/role'],
            'systemManagement.menue':['systemManagement/menue'],
            'systemManagement.data':['systemManagement/data']
        };

        angular.forEach(components, function(value, key) {
           angular.forEach(commonComponents, function(item, i) {
                value.push(item);
            });
        });
        
        app.constant('components', components);
    });
})();
