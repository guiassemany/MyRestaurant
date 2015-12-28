(function() {
    'use strict';

    angular
          .module('myrestaurant.controllers')
          .controller('AppController', AppController);

    AppController.$inject = ['$state', '$auth', '$rootScope', 'CartService', 'LoginService'];

    function AppController($state, $auth, $rootScope, CartService, LoginService){
      var vm = this;

      vm.CartService = CartService;
      vm.LoginService = LoginService;
      vm.isActive = isActive;

      //For navigation purposes
      function isActive(stateName){
        return $state.includes(stateName);
      }

    }
})();
