(function() {
    'use strict';

    angular
          .module('myrestaurant.controllers')
          .controller('CartController', CartController);

    CartController.$inject = ['$state', '$stateParams', 'ItemService', 'CartService'];

    function CartController($state, $stateParams, ItemService, CartService){

      var vm = this;

      vm.CartService = CartService;
      vm.CartService.addItem({id: 1, title: 'product', price: 20}, 1);
      vm.listCanSwipe = true;

    }
})();
