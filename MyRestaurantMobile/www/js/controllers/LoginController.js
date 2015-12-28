angular
      .module('myrestaurant.controllers')
      .controller('LoginController', LoginController);

LoginController.$inject = ['LoginService'];

function LoginController(LoginService){
  var vm = this;
  vm.LoginService = LoginService;
}
