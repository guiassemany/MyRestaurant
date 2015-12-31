(function(){
  'use strict';

  angular
        .module('myrestaurant')
        .service('CartService', CartService);

  CartService.$inject = ['$rootScope', '$ionicPopup'];

  function CartService($rootScope, $ionicPopup) {
    var vm = this;

    vm.items = [];
    vm.shouldShowDelete = false;

    //
    vm.addItem            = addItem;
    vm.removeItem         = removeItem;
    vm.emptyCart          = emptyCart;
    vm.incrementQuantity  = incrementQuantity;
    vm.decrementQuantity  = decrementQuantity;
    vm.totalAmount        = totalAmount;
    vm.toggleDelete       = toggleDelete;
    vm.setItemQuantity    = setItemQuantity;
    vm.findItemQuantity   = findItemQuantity;
    vm.countItems         = countItems;

    // Add an item to the cart
     function addItem(item, quantity){

      //Verifies if product is already in cart
      var itemInCart = false;

      vm.items.forEach(function(itm, index, itms){
        if (itm.id === item.id) {
          itemInCart = itm;
          return;
        }
      });

      //If item in cart, just increment quantity.
      if (itemInCart) {
        vm.setItemQuantity(itemInCart, quantity); // Set the quantity of an item already in cart
      } else {
        item.quantity = 0;
        vm.setItemQuantity(item, quantity); // Sets the quantity of an item that was not in cart
        vm.items.push(item);
      }

    }

    //Sets the Item quantity
     function setItemQuantity(item, quantity) {
      item.quantity = parseInt(item.quantity) + parseInt(quantity);
    }

    //Removes an item from the cart
     function removeItem(item) {
      var index = vm.items.indexOf(item);
      vm.items.splice(index, 1);
    }

    //Increment quantity of an item
     function incrementQuantity(item){
        item.quantity++;
    }

    //Decrement quantity of an item
     function decrementQuantity(item){
      if(item.quantity != 1)
      {
        item.quantity--;
      }
    }

    //Remove all items from the cart
     function emptyCart() {
      vm.items = [];
    }

    //Calculates the total amount
     function totalAmount() {
      var total = 0;
       for (var i = 0; i < vm.items.length; i++) {
              total = total + (vm.items[i].price * vm.items[i].quantity );
            }
       return total;
    }

    //Toggles delete button
     function toggleDelete(){
       if(vm.shouldShowDelete === true){
         vm.shouldShowDelete = false;
       }else{
         vm.shouldShowDelete = true;
       }
     }

     function findItemQuantity(item){
       //console.log(item);
       vm.items.forEach(function(itm, index, itms){
         if (itm.id === item.id) {
           //console.log(vm.items[index].quantity);
           return vm.items[index].quantity;
         }
       });
       return 0;
     }

     function countItems(){
       return vm.items.length;
     }

    }

})();
