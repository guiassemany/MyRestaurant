mrs.service('UserService', ['$rootScope', function ($rootScope) {
    var vm = this;


    vm.model = {
            name: '',
            email: ''
            };

        vm.SaveState = function () {
            localStorage.userService = angular.toJson(vm.model);
        };

        vm.RestoreState = function () {
            vm.model = angular.fromJson(localStorage.userService);
        };

        vm.DeleteState = function () {
            localStorage.removeItem('userService');
        };

    $rootScope.$on("savestate", vm.SaveState);
    $rootScope.$on("restorestate", vm.RestoreState);
    $rootScope.$on("deletestate", vm.DeleteState);

}]);
