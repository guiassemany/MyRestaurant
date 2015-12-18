mrs.factory('CategoryService', [ '$http', '$ionicLoading', 'appConfig', '$ionicPopup', function($http, $ionicLoading, appConfig, $ionicPopup){

  // interface
  var service = {
      data: [],
      error: false,
      getAllCategories: getAllCategories
  };

  return service;

  // implementation
  function getAllCategories() {
    var apiUrl = appConfig.apiUrl + "/category";
    $ionicLoading.show();
    return $http.get(apiUrl, { cache: true}).then(success, error);
  }

  //Handles success callback
  function success (response){
        $ionicLoading.hide();
        service.data = response.data.data;
  }

  //Handles error callback
  function error (){
        $ionicLoading.hide();
        $ionicPopup.alert({title: 'Ops!', template: 'An error ocurred while trying to get categories list! Make sure your internet connection is active.'});
        service.error = true;
  }

}]);
