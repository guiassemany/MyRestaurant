(function() {
    'use strict';

    angular
        .module('myrestaurant')
        .factory('CategoryService', CategoryService);

    CategoryService.$inject = ['$http', '$ionicLoading', '$ionicPopup', 'apiConfig'];

    /* @ngInject */
    function CategoryService($http, $ionicLoading, $ionicPopup, apiConfig) {
        var service = {
            data: [],
            error: false,
            getAllCategories: getAllCategories
        };

        return service;

        // implementation
        function getAllCategories() {
          var apiUrl = apiConfig.base + apiConfig.categories;
          $ionicLoading.show();
          return $http.get(apiUrl, { cache: true, timeout: 5000}).then(success, error);
        }

        //Handles success callback
        function success (response){
              $ionicLoading.hide();
              service.data = response.data.data;
              service.error = false;
        }

        //Handles error callback
        function error (){
              $ionicLoading.hide();
              $ionicPopup.alert({title: 'Ops!', template: 'An error ocurred while trying to get categories list! Make sure your internet connection is active.'});
              service.error = true;
        }
    }
})();
