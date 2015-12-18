mrs.factory('CategoryService', [ '$http', '$ionicLoading', 'appConfig', function($http, $ionicLoading, appConfig){

  // interface
  var service = {
      data: [],
      getAllCategories: getAllCategories
  };

  return service;

  // implementation
  function getAllCategories() {
    var apiUrl = appConfig.apiUrl + "/category";
    $ionicLoading.show();
    return $http.get(apiUrl, { cache: true})
        .success(function(response) {
            $ionicLoading.hide();
            service.data = response.data;
        });

  }

}]);
