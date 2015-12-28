angular
      .module('myrestaurant.controllers')
      .controller('CategoriesCtrl', CategoriesCtrl);

CategoriesCtrl.$inject = ['CategoryService'];

function CategoriesCtrl(CategoryService){
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
