mrs.service('CartService', ['$rootScope', '$ionicPopup', function ($rootScope, $ionicPopup) {

    var vm = this;

    vm.items = [];

    vm.addItem = function (item, quantity) {
      item.quantity = quantity;
      vm.items.push(item);
      console.log(vm.items);
    };

    vm.removeItem = function (item) {
      var index = vm.items.indexOf(item);
      vm.items.splice(index, 1);
    };

    vm.changeQuantity = function (quantity) {
      var index = vm.items.indexOf(item);
      vm.items[index].quantity = quantity;
    };

    vm.emptyCart = function () {
      vm.items = [];
    };


  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<input type="number" ng-model="vm.quantity">',
    title: 'Enter Quantity',
    subTitle: 'hahaha',
    scope: null,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Add</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!vm.quantity) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
          } else {
            return vm.quantity;
          }
        }
      }
    ]
  });

  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });

}]);
