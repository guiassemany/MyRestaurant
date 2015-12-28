mrs.service('LoginService', function ($state, $ionicHistory, apiConfig, $ionicLoading, $auth, $ionicPopup, $filter, UserService, $rootScope) {
    var vm = this;

    // Form data for the login inputs
    vm.loginData = {};

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

    vm.closeLogin = function() {
      $ionicHistory.nextViewOptions({
        disableBack: true
      });
      $state.go('app.home');
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

    // Logout
    vm.logout = function() {
      $auth.logout();
      $rootScope.$broadcast("deletestate");
      vm.showAlert('global.LOGOUT_SUCCESS_TITLE', 'global.LOGOUT_SUCCESS_MESSAGE');
    };

    //Verify if user is authenticated
    vm.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };

});
