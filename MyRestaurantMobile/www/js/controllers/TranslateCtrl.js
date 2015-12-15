mrc.controller('TranslateCtrl', function($translate, $state, $ionicHistory) {
  
  var vm = this;

  vm.changeLanguage = function (langKey) {
    $translate.use(langKey);
    
    $ionicHistory.nextViewOptions({
	    disableBack: true
  	});

    $state.go('app.home');
    
  };

});