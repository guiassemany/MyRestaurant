(function() {
    'use strict';

    angular
        .module('myrestaurant')
        .service('UserService', UserService);

    UserService.$inject = ['$rootScope', 'apiConfig', '$http'];

    /* @ngInject */
    function UserService($rootScope, apiConfig, $http) {

        var vm  = this;

        vm.model = {};

        vm.DeleteState          = DeleteState;
        vm.RestoreState         = RestoreState;
        vm.SaveState            = SaveState;
        vm.getAuthenticatedUser = getAuthenticatedUser;

        function DeleteState() {
            localStorage.removeItem('userService');
        }

        function getAuthenticatedUser(){
          var apiUrl = apiConfig.base + apiConfig.authUser;
          $http.get(apiUrl)
              .then(function(response) {
                  console.log(response.data.user);

                  vm.model = response.data.user;
                  $rootScope.$broadcast("savestate");
              });

        }

        function RestoreState() {
            vm.model = angular.fromJson(localStorage.userService);
        }

        function SaveState() {
            localStorage.userService = angular.toJson(vm.model);
        }

        //Watch for broadcast messages
        $rootScope.$on("savestate", vm.SaveState);
        $rootScope.$on("restorestate", vm.RestoreState);
        $rootScope.$on("deletestate", vm.DeleteState);
    }
    
})();
