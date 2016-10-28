(function() {
    define(['app'], function(app) {
        describe('Modal', function() {
            var Modal;

            module.sharedInjector();

            beforeAll(module(app.name));

            beforeAll(inject(function(_Modal_) {
                Modal = _Modal_;
            }));

            it('should be an Object', function() {
                expect(Modal).toEqual(jasmine.any(Object));
            });

            it('open should be a Function', function() {
                expect(Modal.open).toEqual(jasmine.any(Function));
            });
        });
    });
})();