mrc.controller('AppCtrl', ['$scope', '$ionicModal', '$timeout', '$state', '$auth', '$rootScope', '$ionicPopup', '$filter', 'appConfig',
                  function($scope, $ionicModal, $timeout, $state, $auth, $rootScope, $ionicPopup, $filter, appConfig) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  var vm = this;

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

  // Perform the login action when the user submits the login form
  vm.doLogin = function(provider) {
    $auth.login(vm.loginData, {url: appConfig.apiUrl + '/auth/authenticate', method: 'POST'})
    .then(function(response) {
      alert('teste');
      console.log(response);
      vm.closeLogin();
    })
    .catch(function(response) {
      alert('testea');
      // Handle errors here, such as displaying a notification
      // for invalid email and/or password.
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
