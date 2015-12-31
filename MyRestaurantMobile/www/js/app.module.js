(function() {
    'use strict';

    angular
        .module('myrestaurant', [
          'ionic',
          'myrestaurant.controllers',
          'myrestaurant.services',
          'pascalprecht.translate',
          'satellizer'
        ]);
})();
