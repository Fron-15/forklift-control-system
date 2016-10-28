(function() {
    define(['app'], function(app) {
        describe('directive: appPagination', function() {
            var $compile, $rootScope, pagination;

            beforeEach(module(app.name));

            beforeEach(inject(function(_$compile_, _$rootScope_) {
                $compile = _$compile_;
                $rootScope = _$rootScope_;
            }));

            beforeEach(function() {
                angular.extend($rootScope, { pageNo: 1, pageSize: 10, totalRecord: 100 });
            });

            afterEach(function() {
                pagination = undefined;
            })

            it('should be initialized', function() {
                pagination = $compile('<app-pagination page-index="$root.pageNo" total-items="$root.totalRecord" page-item-unit="$root.pageSize"></app-pagination>')($rootScope);
                $rootScope.$digest();
                expect(pagination.html()).toContain('<span>每页</span>');
                expect(pagination.html()).toContain('<span class="pagination-message ng-binding">1 / 10 页</span>');
            });

            it('should show total record', function() {
                pagination = $compile('<app-pagination page-index="$root.pageNo" total-items="$root.totalRecord" page-item-unit="$root.pageSize" show-total="true"></app-pagination>')($rootScope);
                $rootScope.$digest();
                expect(pagination.html()).toContain('<span class="pagination-total ng-binding ng-scope" ng-if="pagination.showTotal">共 100 条</span>');
            });
        });
    });
})();