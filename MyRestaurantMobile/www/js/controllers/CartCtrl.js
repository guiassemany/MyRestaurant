mrc.controller('CartCtrl', [ '$state', '$stateParams', 'ItemService', 'CartService', function($state, $stateParams, ItemService, CartService) {
  var vm = this;

  vm.CartService = CartService;
  vm.CartService.addItem({title: 'teste', price: 34.50});
  vm.shouldShowDelete = false;
  vm.listCanSwipe = true;

  vm.toggleDelete = function(){
    if(vm.shouldShowDelete === true){
      vm.shouldShowDelete = false;
    }else{
      vm.shouldShowDelete = true;
    }
  };

}]);
