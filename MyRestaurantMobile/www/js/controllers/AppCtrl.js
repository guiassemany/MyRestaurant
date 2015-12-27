mrc.controller('AppCtrl', ['$scope', '$ionicModal', '$timeout', '$state', '$auth', '$rootScope', '$ionicPopup', '$filter', 'apiConfig', 'UserService', '$ionicLoading', 'CartService',
                  function($scope, $ionicModal, $timeout, $state, $auth, $rootScope, $ionicPopup, $filter, apiConfig, UserService, $ionicLoading, CartService) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  var vm = this;

  vm.CartService = CartService;

  // Form data for the login modals
  vm.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    vm.modal = modal;
  });

  //Triggered in the login modal to close it
  vm.closeLogin = function() {
    vm.modal.hide();
  };

  // Open the login modal
  vm.login = function() {
    vm.modal.show();
  };

  // Logout
  vm.logout = function() {
    $auth.logout();
    $rootScope.$broadcast("deletestate");
    vm.showAlert('global.LOGOUT_SUCCESS_TITLE', 'global.LOGOUT_SUCCESS_MESSAGE');
  };

  // Perform the login action when the user submits the login form
  vm.doLogin = function(provider) {
    $ionicLoading.show();
    $auth.login(vm.loginData, {url: apiConfig.base + apiConfig.auth, method: 'POST'})
    .then(function(response) {
      UserService.getAuthenticatedUser();
      $rootScope.$broadcast("savestate");
      vm.showAlert('global.LOGIN_SUCCESS_TITLE', 'global.LOGIN_SUCCESS_MESSAGE');
      vm.closeLogin();
      $ionicLoading.hide();
    })
    .catch(function(response) {
      // Handle errors here, such as displaying a notification
      // for invalid email and/or password.
      $ionicLoading.hide();
      vm.showAlert('global.LOGIN_ERROR_TITLE', 'global.LOGIN_ERROR_MESSAGE');
      vm.loginData.password = null;

    });

  };

  vm.isActive = function(stateName){
    return $state.includes(stateName);
  };

  vm.isAuthenticated = function() {
    return $auth.isAuthenticated();
  };

  vm.goToCart = function() {
    return $state.go('app.cart');
  };

  vm.showAlert = function(title, message) {

         //Translates title and message
         var titleTranslated = $filter('translate')(title);
         var messageTranslated = $filter('translate')(message);

         //Creates the popup
         var alertPopup = $ionicPopup.alert({
           title: titleTranslated,
           template: messageTranslated
         });

         //Displays the popup
         alertPopup.then(function(res) {
           console.log('Thank you for not eating my delicious ice cream cone');
         });
       };

}]);
