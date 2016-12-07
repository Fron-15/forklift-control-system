(function() {
    define(['app', 'sweetalert'], function(app, swal) {
        app.constant('swal', {
            fn: swal,
            options: {
                remove: {
                    title: '确认删除？',
                    text: '删除后数据将无法恢复！',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#dd6b55',
                    confirmButtonText: '确认删除',
                    cancelButtonText: '取消',
                    closeOnConfirm: false
                },
                off: {
                    title: '确认下线？',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#0099cc',
                    confirmButtonText: '确认下线',
                    cancelButtonText: '取消',
                    closeOnConfirm: false
                },
                on: {
                    title: '确认上线？',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#0099cc',
                    cancelButtonText: '取消',
                    closeOnConfirm: false,
                    confirmButtonText: '确认上线'
                },
                allArea: {
                    title: '确认选择全国？',
                    text: '选择全国将会清空已选择省份的信息',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#0099cc',
                    confirmButtonText: '确认选择',
                    cancelButtonText: '取消',
                    closeOnConfirm: false,   
                    closeOnCancel: false
                },
                login: {
                    title: '登录成功', 
                    timer: 1000, 
                    type: 'success', 
                    showConfirmButton: false
                },
                save: {
                    title: '保存成功', 
                    timer: 1000, 
                    type: 'success', 
                    showConfirmButton: false
                },
                lockVehicle: {
                    title: '确认锁定所选车辆？',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#0099cc',
                    cancelButtonText: '取消',
                    closeOnConfirm: false,
                    confirmButtonText: '确认锁车'
                },
                unlockVehicle: {
                    title: '确认解除所选车辆？',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#0099cc',
                    cancelButtonText: '取消',
                    closeOnConfirm: false,
                    confirmButtonText: '解除锁车'
                },
                limitspeed: {
                    title: '确认限制所选车辆速度？',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#0099cc',
                    cancelButtonText: '取消',
                    closeOnConfirm: false,
                    confirmButtonText: '确认限速'
                },
                unlimitspeed: {
                    title: '确认解除所选车辆限速？',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#0099cc',
                    cancelButtonText: '取消',
                    closeOnConfirm: false,
                    confirmButtonText: '解除限速'
                },
                submitVideo: {
                    title: '确认发送语音？',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#0099cc',
                    cancelButtonText: '取消',
                    closeOnConfirm: false,
                    confirmButtonText: '发送语音'
                }
            }
        });
    });
})();