angular
      .module('myrestaurant.controllers')
      .controller('AppCtrl', AppCtrl);

AppCtrl.$inject = ['$state', '$auth', '$rootScope', 'CartService', 'LoginService'];

function AppCtrl($state, $auth, $rootScope, CartService, LoginService){
  var vm = this;

  vm.CartService = CartService;
  vm.LoginService = LoginService;
  vm.isActive = isActive;

  //For navigation purposes
  function isActive(stateName){
    return $state.includes(stateName);
  }

}
