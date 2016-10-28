(function() {
    define(['app'], function(app) {
        describe('Service', function() {
            var $httpBackend, backend, Service;

            //分享注入参数
            module.sharedInjector();

            //初始化angular module
            beforeAll(module(app.name));

            //注入参数
            beforeAll(inject(function(_$httpBackend_, _backend_, _Service_) {
                $httpBackend = _$httpBackend_;
                backend = _backend_;
                Service = _Service_;
            }));

            //确保所有http请求都已结束
            afterEach(function() {
                $httpBackend.verifyNoOutstandingExpectation();
                $httpBackend.verifyNoOutstandingRequest();
            });

            it('should be an Object', function() {
                expect(Service).toEqual(jasmine.any(Object));
            });

            describe('testing function: getJson from sex.json', function() {
                var isSuccess, jsonPath = './json/sex.json';

                beforeEach(function() {
                    isSuccess = undefined;

                    Service.getJson('sex').then(function() {
                        isSuccess = true;
                    });
                });

                it('when success', function() {
                    $httpBackend.expectGET(jsonPath).respond(200);
                    $httpBackend.flush();

                    expect(isSuccess).toBeDefined();
                    expect(isSuccess).toBeTruthy();
                });

                it('when failed', function() {
                    $httpBackend.expectGET(jsonPath).respond(-1);
                    $httpBackend.flush();

                    expect(isSuccess).toBeUndefined();
                });
            });

            describe('testing function: post', function() {
                var successCount, url, ctrl = 'tradeRecord', name = 'getTradeRecordPage';

                function servicePost() {
                    Service.post(ctrl, name).then(function() {
                        successCount += 1;
                    }, function() {
                        successCount -= 1;
                    });
                }

                beforeAll(function() {
                    url = Service.getUrl(ctrl, name);
                });

                beforeEach(function() {
                    successCount = 0;
                    servicePost();
                });

                it('same method should be only call once when http.post is not finished even call multiple times at the same time', function() {
                    servicePost();
                    servicePost();

                    $httpBackend.expectPOST(url).respond(200, {});
                    $httpBackend.flush();

                    expect(successCount).toBeDefined();
                    expect(successCount).toBeLessThan(0);
                });

                it('if status is -1', function() {
                    $httpBackend.expectPOST(url).respond(-1);
                    $httpBackend.flush();

                    expect(successCount).toBeDefined();
                    expect(successCount).toBeLessThan(0);
                });

                it('if request is success but respond status is not 200', function() {
                    $httpBackend.expectPOST(url).respond(201);
                    $httpBackend.flush();

                    expect(successCount).toBeDefined();
                    expect(successCount).toBeLessThan(0);
                });

                it('if request is success and respond status is 200 but result.returnCode is error code', function() {
                    $httpBackend.expectPOST(url).respond(200, { returnCode: 1001, message: 'error' });
                    $httpBackend.flush();

                    expect(successCount).toBeDefined();
                    expect(successCount).toBeLessThan(0);
                });

                it('if request is success and respond is success', function() {
                    $httpBackend.expectPOST(url).respond(200, { returnCode: 1000 });
                    $httpBackend.flush();

                    expect(successCount).toBeDefined();
                    expect(successCount).toBeGreaterThan(0);
                });
            });

            describe('testing function: upload', function() {
                var isSuccess;

                beforeEach(function() {
                    isSuccess = undefined;

                    Service.upload().then(function() {
                        isSuccess = true;
                    }, function() {
                        isSuccess = false;
                    });
                });

                it('if status is -1', function() {
                    $httpBackend.expectPOST(backend.upload).respond(-1);
                    $httpBackend.flush();

                    expect(isSuccess).toBeDefined();
                    expect(isSuccess).toBeFalsy();
                });

                it('if request is success but respond status is not 200', function() {
                    $httpBackend.expectPOST(backend.upload).respond(201);
                    $httpBackend.flush();

                    expect(isSuccess).toBeDefined();
                    expect(isSuccess).toBeFalsy();
                });

                it('if request is success and respond status is 200 but result.returnCode is error code', function() {
                    $httpBackend.expectPOST(backend.upload).respond(200, { returnCode: 1001, message: 'error' });
                    $httpBackend.flush();

                    expect(isSuccess).toBeDefined();
                    expect(isSuccess).toBeFalsy();
                });

                it('if request is success and respond status is 200 but result.dataInfo is null', function() {
                    $httpBackend.expectPOST(backend.upload).respond(200, { returnCode: 1000 });
                    $httpBackend.flush();

                    expect(isSuccess).toBeDefined();
                    expect(isSuccess).toBeFalsy();
                });

                it('if request is success and respond is success', function() {
                    $httpBackend.expectPOST(backend.upload).respond(200, { returnCode: 1000, dataInfo: {} });
                    $httpBackend.flush();

                    expect(isSuccess).toBeDefined();
                    expect(isSuccess).toBeTruthy();
                });
            });
        });
    });
})();