angular
      .module('myrestaurant.controllers')
      .controller('TranslateCtrl', TranslateCtrl);

TranslateCtrl.$inject = ['$translate', '$state', '$ionicHistory'];

function TranslateCtrl($translate, $state, $ionicHistory){
  var vm = this;

  vm.changeLanguage = changeLanguage;

  function changeLanguage (langKey) {
    $translate.use(langKey);

    $ionicHistory.nextViewOptions({
	    disableBack: true
  	});

    $state.go('app.home');

  }

}
