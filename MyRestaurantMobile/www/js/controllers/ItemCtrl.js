mrc.controller('ItemCtrl', function($scope, $state, $stateParams, ItemService) {
  var vm = this;

  vm.item = [];

  var category_id = $stateParams.category_id;
  var item_id = $stateParams.item_id;

  ItemService.getItem(category_id, item_id).then(function() {
    vm.item = ItemService.data;
    console.log(vm.item);
  });

});
