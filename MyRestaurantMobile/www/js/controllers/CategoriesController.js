(function() {
    'use strict';

    angular
          .module('myrestaurant.controllers')
          .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['CategoryService', '$rootScope'];

    function CategoriesController(CategoryService, $rootScope){
      var vm = this;

      vm.categories = [];
      vm.error = false;
      vm.doRefresh = doRefresh;

      CategoryService.getAllCategories().then(function() {
        if(CategoryService.error){
            vm.error = true;
        }
        vm.categories = CategoryService.data;
      });

      function doRefresh() {
        CategoryService.getAllCategories().then(function() {
          if(CategoryService.error){
              vm.error = true;
          }
          vm.categories = CategoryService.data;
        }).finally(function() {
           // Stop the ion-refresher from spinning
           $rootScope.$broadcast('scroll.refreshComplete');
         });
      }

    }
})();
