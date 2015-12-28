(function() {
    'use strict';

    angular
          .module('myrestaurant.controllers')
          .controller('CartController', CartController);

    CartController.$inject = ['$state', '$stateParams', 'ItemService', 'CartService'];

    function CartController($state, $stateParams, ItemService, CartService){
      var vm = this;

      vm.CartService = CartService;
      vm.CartService.addItem({title: 'teste', price: 314.50, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}, 1);
      vm.listCanSwipe = true;
    }
})();
