mrs.factory('ItemService', [ '$http', '$ionicLoading', 'apiConfig', function($http, $ionicLoading, apiConfig){

  // interface
  var service = {
      data: [],
      getAllItemsByCategoryId: getAllItemsByCategoryId,
      getItem: getItem
  };

  return service;

  // implementation
  function getAllItemsByCategoryId(category_id) {
    var apiUrl = apiConfig.base + apiConfig.categories + category_id + apiConfig.items + apiConfig.includeImages;
    $ionicLoading.show();
    return $http.get(apiUrl, { cache: true})
        .success(function(response) {
            $ionicLoading.hide();
            service.data = response.data;
        });

  }

  function getItem(category_id, item_id) {
    var apiUrl = apiConfig.base + apiConfig.categories + category_id + apiConfig.items + item_id + apiConfig.includeImages;
    $ionicLoading.show();
    return $http.get(apiUrl, { cache: true})
        .success(function(response) {
            $ionicLoading.hide();
            service.data = response.data;
        });

  }



}]);
