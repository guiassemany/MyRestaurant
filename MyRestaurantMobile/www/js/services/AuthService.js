(function() {
    'use strict';

    angular
        .module('myrestaurant')
        .service('AuthService', AuthService);

    AuthService.$inject = ['$state', '$ionicHistory', 'apiConfig', '$ionicLoading', '$auth', '$ionicPopup', '$filter', 'UserService', '$rootScope'];

    /* @ngInject */
    function AuthService($state, $ionicHistory, apiConfig, $ionicLoading, $auth, $ionicPopup, $filter, UserService, $rootScope) {

        var vm = this;

        // Form data for the login inputs
        vm.loginData = {};

        vm.doLogin         = doLogin;
        vm.closeLogin      = closeLogin;
        vm.cancelLogin     = cancelLogin;
        vm.isAuthenticated = isAuthenticated;
        vm.logout          = logout;
        vm.showAlert       = showAlert;
        vm.previousState   = $rootScope.previousState;

        //implementation
        function closeLogin() {
          $ionicHistory.nextViewOptions({
            disableBack: true
          });
          var stateToGo =  !$rootScope.intendedState ? 'app.home' : $rootScope.intendedState ;
          $state.go(stateToGo);
        }

        //Cancel Login
        function cancelLogin() {
          var stateToGo =  !$rootScope.intendedState ? 'app.home' : $rootScope.intendedState ;
          $state.go(stateToGo);
        }

        // Perform the login action when the user submits the login form
        function doLogin(provider) {
          $ionicLoading.show();
          $auth.login(vm.loginData, {url: apiConfig.base + apiConfig.auth, method: 'POST'})
          .then(function(response) {
            UserService.getAuthenticatedUser();
            $rootScope.$broadcast("savestate");
            vm.showAlert('global.LOGIN_SUCCESS_TITLE', 'global.LOGIN_SUCCESS_MESSAGE');
            vm.closeLogin();
            $ionicLoading.hide();
          })
          .catch(function(response) {
            // Handle errors here, such as displaying a notification
            // for invalid email and/or password.
            $ionicLoading.hide();
            vm.showAlert('global.LOGIN_ERROR_TITLE', 'global.LOGIN_ERROR_MESSAGE');
            vm.loginData.password = null;
          });
        }

        //Verify if user is authenticated
        function isAuthenticated() {
          return $auth.isAuthenticated();
        }

        // Logout
        function logout() {
          $auth.logout();
          $rootScope.$broadcast("deletestate");
          vm.showAlert('global.LOGOUT_SUCCESS_TITLE', 'global.LOGOUT_SUCCESS_MESSAGE');
        }

        function showAlert(title, message) {
               //Translates title and message
               var titleTranslated = $filter('translate')(title);
               var messageTranslated = $filter('translate')(message);

               //Creates the popup
               var alertPopup = $ionicPopup.alert({
                 title: titleTranslated,
                 template: messageTranslated
               });

               //Displays the popup
               alertPopup.then(function(res) {
                 console.log('Action after popup!');
               });
        }


    }
})();
