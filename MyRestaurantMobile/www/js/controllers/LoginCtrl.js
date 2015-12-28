angular
      .module('myrestaurant.controllers')
      .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['LoginService'];

function LoginCtrl(LoginService){
  var vm = this;
  vm.LoginService = LoginService;
}
