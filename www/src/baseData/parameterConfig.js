
(function() {
    define(['app'], function(app) {
        app.controller('parameterConfigCtrl', parameterConfigCtrl);

        parameterConfigCtrl.$inject = ['$scope'];

        function parameterConfigCtrl($scope) {


         $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
		 $('.tree li.parent_li > span').on('click', function (e) {
		    var children = $(this).parent('li.parent_li').find(' > ul > li');
		    if (children.is(":visible")) {
		      children.hide('fast');
		      $(this).attr('title', 'Expand this branch').find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
		    } else {
		      children.show('fast');
		      $(this).attr('title', 'Collapse this branch').find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
		    }
		    e.stopPropagation();
		  });

        	var vm = this;
            vm.list = [{
                "id": 1,
                "title": "node1",
                "nodes": [{
                    "id": 11,
                    "title": "node1.1",
                    "nodes": [{
                        "id": 111,
                        "title": "node1.1.1",
                        "nodes": []
                    }]
                }, {
                    "id": 12,
                    "title": "node1.2",
                    "nodes": []
                }]
            }, {
                "id": 2,
                "title": "node2",
                "nodrop": true,
                "nodes": [{
                    "id": 21,
                    "title": "node2.1",
                    "nodes": []
                }, {
                    "id": 22,
                    "title": "node2.2",
                    "nodes": []
                }]
            }, {
                "id": 3,
                "title": "node3",
                "nodes": [{
                    "id": 31,
                    "title": "node3.1",
                    "nodes": []
                }]
            }];

        }
    });
})();
