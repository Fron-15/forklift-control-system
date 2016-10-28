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
                }
            }
        });
    });
})();