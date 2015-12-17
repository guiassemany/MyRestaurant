mrs.factory('ItemService', [ '$http', '$rootScope', '$q', '$ionicLoading', function($http, $rootScope, $q, $ionicLoading){

  // interface
  var service = {
      data: [],
      getAllItemsByCategoryId: getAllItemsByCategoryId,
      getItem: getItem
  };

  return service;

  // implementation
  function getAllItemsByCategoryId(category_id) {
    var apiUrl = $rootScope.app.apiUrl + "/category/" + category_id + "/item";
    $ionicLoading.show();
    return $http.get(apiUrl, { cache: true})
        .success(function(response) {
            $ionicLoading.hide();
            service.data = response.data;
        });

  }

  function getItem(category_id, item_id) {
    var apiUrl = $rootScope.app.apiUrl + "/category/" + category_id + "/item/" + item_id;
    $ionicLoading.show();
    return $http.get(apiUrl, { cache: true})
        .success(function(response) {
            $ionicLoading.hide();
            service.data = response.data;
        });

  }



}]);
