(function() {
    'use strict';

    angular
          .module('myrestaurant.controllers')
          .controller('AppController', AppController);

    AppController.$inject = ['$state', '$auth', '$rootScope', 'CartService', 'AuthService'];

    function AppController($state, $auth, $rootScope, CartService, AuthService){
      var vm = this;

      vm.CartService = CartService;
      vm.AuthService = AuthService;
      vm.isActive = isActive;

      //For navigation purposes
      function isActive(stateName){
        return $state.includes(stateName);
      }

    }
})();
