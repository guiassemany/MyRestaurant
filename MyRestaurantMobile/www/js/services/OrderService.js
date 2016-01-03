(function() {
    'use strict';

    angular
        .module('myrestaurant.services')
        .factory('OrderService', OrderService);

    OrderService.$inject = ['$http', 'apiConfig', '$ionicLoading'];

    /* @ngInject */
    function OrderService($http, apiConfig, $ionicLoading) {

        var service = {
            makeOrder: makeOrder
        };

        return service;

        function makeOrder(items) {
          var apiUrl = apiConfig.base + apiConfig.makeOrder;
          $ionicLoading.show();
          return $http.post(apiUrl, {
            method: 'POST',
            cache: true,
            timeout: 5000,
            data:{items: items }
          }).then(success, error);
        }

        function success() {
          $ionicLoading.hide();
        }

        function error() {
          $ionicLoading.hide();
        }
    }
})();
