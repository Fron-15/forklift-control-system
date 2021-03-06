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
            'monitorCentre.forkliftMonitor':['monitorCentre/forkliftMonitor','monitorCentre/forkliftSearch','monitorCentre/forkliftInfo'],
            'monitorCentre.historyData':['monitorCentre/historyData','constants/moment','directives/datetimePicker','directiveTemplates/datetimePicker'],
            'monitorCentre.vehicleState':['monitorCentre/vehicleState'],
            'monitorCentre.vehicleAlarm':['monitorCentre/vehicleAlarm'],
            'monitorCentre.vehicleViolation':['monitorCentre/vehicleViolation'],
            'monitorCentre.maintainRemind':['monitorCentre/maintainRemind','monitorCentre/maintainRemindInfo','constants/moment','directives/datetimePicker','directiveTemplates/datetimePicker'],
            'baseData.forkliftController':['baseData/forkliftController','baseData/forkliftControllerAdd','baseData/forkliftControllerEdit','constants/moment','directives/datetimePicker','directiveTemplates/datetimePicker'],
            'baseData.vehicleType':['baseData/vehicleType','baseData/vehicleTypeAdd','baseData/vehicleTypeEdit'],
            'baseData.vehicleInfo':['baseData/vehicleInfo','baseData/vehicleInfoAdd','baseData/vehicleInfoEdit'],
            'baseData.controlMobile':['baseData/controlMobile','baseData/controlMobileAdd','baseData/controlMobileEdit'],
            'baseData.driverArchives':['baseData/driverArchives','baseData/driverArchivesAdd','baseData/driverArchivesEdit'],
            'baseData.relevance':['baseData/relevance','baseData/relevanceCurrentDriver','baseData/relevanceCanUseDrivers'],
            'baseData.parameterConfig':['baseData/parameterConfig'],
            'maintainRegister.repairRegister':['maintainRegister/repairRegister','maintainRegister/repairRegisterAdd','maintainRegister/repairRegisterEdit'],
            'maintainRegister.maintainRegister':['maintainRegister/maintainRegister','maintainRegister/maintainRegisterAdd','maintainRegister/maintainRegisterEdit'],
            'reportCentre.synthesisReport':['reportCentre/synthesisReport','directives/efficiencyMonthChart','directiveTemplates/efficiencyMonthChart',
                                             'directives/fkWorkTimeChart','directiveTemplates/fkWorkTimeChart',
                                             'directives/alarmReportChart','directiveTemplates/alarmReportChart',
                                             'directives/violationReportChart','directiveTemplates/violationReportChart',
                                              'directives/repairReportChart','directiveTemplates/repairReportChart',
                                             'directives/maintainReportChart','directiveTemplates/maintainReportChart'],
            'reportCentre.forklistWorkTime':['reportCentre/forklistWorkTime','constants/moment','directives/datetimePicker','directiveTemplates/datetimePicker','reportCharts/fkWorkTimeCharts','directives/fkWorkTimeChart','directiveTemplates/fkWorkTimeChart'],
            'reportCentre.driverWorkTime':['reportCentre/driverWorkTime','reportCharts/driverWorkTimeCharts','directives/driverWorkTimeChart','directiveTemplates/driverWorkTimeChart'],
            'reportCentre.efficiency':['reportCentre/efficiency','directives/efficiencyDayChart','directiveTemplates/efficiencyDayChart','directives/efficiencyMonthChart','directiveTemplates/efficiencyMonthChart'],
            'reportCentre.alarmReport':['reportCentre/alarmReport','directives/alarmReportChart','directiveTemplates/alarmReportChart','reportCharts/alarmReportCharts'],
            'reportCentre.violationReport':['reportCentre/violationReport','directives/violationReportChart','directiveTemplates/violationReportChart','reportCharts/violationReportCharts'],
            'reportCentre.repairReport':['reportCentre/repairReport','directives/repairReportChart','directiveTemplates/repairReportChart','reportCharts/repairReportCharts'],
            'reportCentre.maintainReport':['reportCentre/maintainReport','directives/maintainReportChart','directiveTemplates/maintainReportChart','reportCharts/maintainReportCharts'],
            'systemManagement.user':['systemManagement/user','systemManagement/userAdd','systemManagement/userEdit'],
            'systemManagement.framework':['systemManagement/framework','systemManagement/frameworkAdd','systemManagement/frameworkEdit'],
            'systemManagement.role':['systemManagement/role','systemManagement/roleAdd','systemManagement/roleEdit'],
            'systemManagement.menue':['systemManagement/menue','systemManagement/menueAdd','systemManagement/menueEdit'],
            'systemManagement.data':['systemManagement/data','systemManagement/dataAdd','systemManagement/dataEdit']
        };

        angular.forEach(components, function(value, key) {
           angular.forEach(commonComponents, function(item, i) {
                value.push(item);
            });
        });
        
        app.constant('components', components);
    });
})();
