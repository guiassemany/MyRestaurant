(function() {
    'use strict';

    angular
          .module('myrestaurant.controllers')
          .controller('TranslateController', TranslateController);

    TranslateController.$inject = ['$translate', '$state', '$ionicHistory'];

    function TranslateController($translate, $state, $ionicHistory){
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
})();
