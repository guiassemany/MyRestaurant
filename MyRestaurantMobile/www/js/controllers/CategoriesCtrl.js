mrc.controller('CategoriesCtrl', function($translate, $state, $ionicHistory, $http) {

  var vm = this;

  vm.categories = [];

  vm.getCategories = function(){
    // Simple GET request example:
    $http({
      method: 'GET',
      url: 'http://myrestaurant.dev/api/category'
    }).then(function successCallback(response) {
        angular.forEach(response.data.categories, function(value,key){
          vm.categories.push(value);
        });
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
  };

  vm.getCategories();


});
