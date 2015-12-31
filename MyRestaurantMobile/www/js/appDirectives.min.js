(function() {
    'use strict';

    angular
        .module('myrestaurant')
        .directive('connection', connectionError);

    /* @ngInject */
    function connectionError() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'templates/connection-error.html',
            scope: {
            },
            link: linkFunc,
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }

    Controller.$inject = ['$window', '$state'];

    /* @ngInject */
    function Controller($window, $state) {
        var vm = this;

        vm.reload = reload;

        activate();

        function activate() {

        }

        function reload(){
          $window.location.reload(true);
        }
    }
})();
