(function() {
    'use strict';

    angular
        .module('myrestaurant.controllers')
        .controller('OrderDetailsController', OrderDetailsController);

    OrderDetailsController.$inject = ['CartService', 'OrderService'];

    /* @ngInject */
    function OrderDetailsController(CartService, OrderService) {

        var vm = this;

        vm.CartService = CartService;
        vm.OrderService = OrderService;

        activate();

        function activate() {

        }
    }
})();
