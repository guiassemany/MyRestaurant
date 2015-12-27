mrs.service('CartService', ['$rootScope', '$ionicPopup', function ($rootScope, $ionicPopup) {

    var vm = this;

    vm.items = [];
    vm.shouldShowDelete = false;

    vm.addItem = function (item, quantity) {
      item.quantity = quantity;
      vm.items.push(item);
    };

    vm.removeItem = function (item) {
      var index = vm.items.indexOf(item);
      vm.items.splice(index, 1);
    };

    vm.incrementQuanity = function(item){
        item.quantity++;
    };

    vm.decrementQuanity = function(item){
      if(item.quantity != 1)
      {
        item.quantity--;
      }
    };

    vm.emptyCart = function () {
      vm.items = [];
    };

    vm.toggleDelete = function(){
      console.log('fired');
      if(vm.shouldShowDelete === true){
        vm.shouldShowDelete = false;
      }else{
        vm.shouldShowDelete = true;
      }
    };

}]);
