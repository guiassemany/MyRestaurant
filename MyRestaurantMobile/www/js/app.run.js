(function() {
  'use strict';

  angular
        .module('myrestaurant')
        .run(runBlock);

        runBlock.$inject = ['$ionicPlatform', '$rootScope', '$state', '$stateParams', 'appConfig', 'AuthService'];

        function runBlock($ionicPlatform, $rootScope, $state, $stateParams, appConfig, AuthService) {

          $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
              cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
              cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
              // org.apache.cordova.statusbar required
              StatusBar.styleDefault();
            }
          });

          // Set some reference to access them from any scope
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;



          // GLOBAL APP SCOPE - Get Only necessary info from appConfig constant - Leaving $rootScope as clean as possible
          // Maybe only values that need to be accesed on the view without going on any controller before
          $rootScope.app = {
              name: appConfig.name,
          };


          //Handles Auth
          $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {

              var isLogin = toState.name === "login";
              if(isLogin){

                  if(AuthService.isAuthenticated()){
                    e.preventDefault(); // stop current execution
                    $state.go('app.home'); // go to home
                  }

                 return; // no need to redirect

              }

              //Make previous state always acessible via $rootScope
              $rootScope.$on('$locationChangeStart', function() {
                  $rootScope.previousState = fromState.name;
              });

              //Make intendend state always acessible via $rootScope
              $rootScope.$on('$locationChangeStart', function() {
                  $rootScope.intendedState = toState.name;
              });


              //Redirect if state requires auth and user is not authenticated
              if(typeof toState.data != 'undefined'){
                  if(toState.data.requireAuth === true && !AuthService.isAuthenticated()){
                    e.preventDefault(); // stop current execution
                    $state.go('login'); // go to login
                  }
              }

          });


        }
})();
