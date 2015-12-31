(function() {
    'use strict';

    angular
        .module('myrestaurant')
        .factory('ItemService', ItemService);

    ItemService.$inject = ['$http', '$ionicLoading', 'apiConfig'];

    /* @ngInject */
    function ItemService($http, $ionicLoading, apiConfig) {

        var service = {
          data: [],
          getAllItemsByCategoryId: getAllItemsByCategoryId,
          getItem: getItem
        };

        return service;

        // implementation
        function getAllItemsByCategoryId(category_id) {
          var apiUrl = apiConfig.base + apiConfig.categories + category_id + apiConfig.items + apiConfig.includeImages;
          $ionicLoading.show();
          return $http.get(apiUrl, { cache: true})
              .then(function(response) {
                  $ionicLoading.hide();
                  service.data = response.data.data;
              });

        }

        function getItem(category_id, item_id) {
          var apiUrl = apiConfig.base + apiConfig.categories + category_id + apiConfig.items + item_id + apiConfig.includeImages;
          $ionicLoading.show();
          return $http.get(apiUrl, { cache: true})
              .then(function(response) {
                  $ionicLoading.hide();
                  service.data = response.data.data;
              });

        }
    }
})();
