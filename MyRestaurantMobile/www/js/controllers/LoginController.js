(function() {
    'use strict';

    angular
          .module('myrestaurant.controllers')
          .controller('LoginController', LoginController);

    LoginController.$inject = ['AuthService'];

    function LoginController(AuthService){
      var vm = this;
      vm.AuthService = AuthService;
    }
})();
