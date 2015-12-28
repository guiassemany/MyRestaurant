angular
      .module('myrestaurant.controllers')
      .controller('ItemController', ItemController);

ItemController.$inject = ['$state', '$stateParams', 'ItemService', 'CartService'];

function ItemController($state, $stateParams, ItemService, CartService){
  var vm = this;

  vm.item = [];

  vm.cart = CartService;

  var category_id = $stateParams.category_id;
  var item_id = $stateParams.item_id;

  ItemService.getItem(category_id, item_id).then(function() {
    vm.item = ItemService.data;
  });
}
