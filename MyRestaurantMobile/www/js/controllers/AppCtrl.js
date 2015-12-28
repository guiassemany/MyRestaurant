mrc.controller('AppCtrl', ['$state', '$auth', '$rootScope', 'CartService', 'LoginService',
                  function($state, $auth, $rootScope, CartService, LoginService) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  var vm = this;

  vm.CartService = CartService;
  vm.LoginService = LoginService;

  //For navigation purposes
  vm.isActive = function(stateName){
    return $state.includes(stateName);
  };

}]);
