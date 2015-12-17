mrs.factory('CategoryService', [ '$http', '$rootScope', '$q', function($http, $rootScope, $q){

  var deffered = $q.defer();
  var data = [];
  var CategoryService = {};
  var apiUrl = $rootScope.app.apiUrl + "/category";

  CategoryService.getAll = function() {
    $http.get(apiUrl)
    .success(function (response) {
      data = response.data;
      deffered.resolve();
    });
    return deffered.promise;
  };

  CategoryService.data = function() {
    return data;
  };

  return CategoryService;

}]);
