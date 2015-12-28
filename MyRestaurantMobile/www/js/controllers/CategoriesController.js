(function() {
    'use strict';
    
    angular
          .module('myrestaurant.controllers')
          .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['CategoryService'];

    function CategoriesController(CategoryService){
      var vm = this;

      vm.categories = [];
      vm.error = false;

      CategoryService.getAllCategories().then(function() {
        if(CategoryService.error){
            vm.error = true;
        }
        vm.categories = CategoryService.data;
      });
    }
})();
