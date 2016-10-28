(function() {
    define(['app'], function(app) {
        describe('Cache', function() {
            var Cache;

            beforeEach(module(app.name));

            beforeEach(inject(function(_Cache_) {
                Cache = _Cache_;
            }));

            it('should be an Object', function() {
                expect(Cache).toEqual(jasmine.any(Object));
            });

            it('info should be an Object', function() {
                expect(Cache.info).toEqual(jasmine.any(Object));
            });

            it('testing function: save and get', function() {
                var key = 'condition', value = 'testing', getValue;

                Cache.save(key, value);
                expect(Cache.info[key]).toEqual(value);

                getValue = Cache.get(key);
                expect(getValue).toEqual(value);
            });

            describe('testing function: clear', function() {
                beforeEach(function() {
                    Cache.info = { condition: 'testing', value: 'testing' };
                });

                it('with key', function() {
                    Cache.clear('condition');
                    expect(Cache.info.condition).not.toBeDefined();
                    expect(Cache.info.value).toBeDefined();
                });

                it('without key', function() {
                    Cache.clear();
                    expect(Cache.info.condition).not.toBeDefined();
                    expect(Cache.info.value).not.toBeDefined();
                });
            });
        });
    });
})();