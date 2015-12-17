mrc.controller('CategoriesCtrl', function($translate, $state, $ionicHistory, $http, CategoryService) {

  var vm = this;

  vm.categories = [];

  CategoryService.getAll().then(function() {
    vm.categories = CategoryService.data();
  });

  




});
