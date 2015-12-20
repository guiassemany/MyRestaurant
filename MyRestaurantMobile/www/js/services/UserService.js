mrs.factory('UserService', ['$rootScope', function ($rootScope) {

    var service = {

        model: {
            name: '',
            email: ''
        },

        SaveState: function () {
            localStorage.userService = angular.toJson(service.model);
        },

        RestoreState: function () {
            service.model = angular.fromJson(localStorage.userService);
        },

        DeleteState: function () {
            localStorage.removeItem('userService');
        }
    };

    $rootScope.$on("savestate", service.SaveState);
    $rootScope.$on("restorestate", service.RestoreState);
    $rootScope.$on("deletestate", service.DeleteState);

    return service;
}]);
