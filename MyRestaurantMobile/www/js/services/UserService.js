mrs.service('UserService', ['$rootScope', 'apiConfig', '$http', function ($rootScope, apiConfig, $http) {
    var vm = this;


        vm.model = {};

        vm.SaveState = function () {
            localStorage.userService = angular.toJson(vm.model);
        };

        vm.RestoreState = function () {
            vm.model = angular.fromJson(localStorage.userService);
        };

        vm.DeleteState = function () {
            localStorage.removeItem('userService');
        };

        vm.getAuthenticatedUser = function(){
          var apiUrl = apiConfig.base + apiConfig.authUser;
          $http.get(apiUrl)
              .then(function(response) {
                  console.log(response.data.user);

                  vm.model = response.data.user;
                  $rootScope.$broadcast("savestate");
              });

        };

    $rootScope.$on("savestate", vm.SaveState);
    $rootScope.$on("restorestate", vm.RestoreState);
    $rootScope.$on("deletestate", vm.DeleteState);

}]);
