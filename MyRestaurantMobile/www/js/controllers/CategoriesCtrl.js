mrc.controller('CategoriesCtrl', [ 'CategoryService', function(CategoryService) {

  var vm = this;

  vm.categories = [];
  vm.error = false;

  CategoryService.getAllCategories().then(function() {
    if(CategoryService.error){
        vm.error = true;
    }
    vm.categories = CategoryService.data;
    console.log(vm.categories);
  });

}]);
