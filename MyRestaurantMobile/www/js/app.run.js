(function() {
  'use strict';

  angular
        .module('myrestaurant')
        .run(runBlock);

        runBlock.$inject = ['$ionicPlatform', '$rootScope', '$state', '$stateParams', 'appConfig'];

        function runBlock($ionicPlatform, $rootScope, $state, $stateParams, appConfig) {

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

        }
})();
