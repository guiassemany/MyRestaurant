(function() {
  'use strict';

  angular
        .module('myrestaurant')
        .config(routes);

  routes.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routes($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/navigation.html',
      controller: 'AppController',
      controllerAs: 'AppController'
    })

    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html'
        }
      }
    })

    .state('app.menu', {
        url: '/menu',
        views: {
          'menuContent': {
            templateUrl: 'templates/categories.html',
            controller: 'CategoriesController',
            controllerAs: 'category'
          }
        }
      })
      .state('app.category', {
        url: '/menu/category/:category_name/:category_id',
        views: {
          'menuContent': {
            templateUrl: 'templates/category.html',
            controller: 'CategoryController',
            controllerAs: 'category'
          }
        }
      })
      .state('app.item', {
        url: '/menu/item/category/:category_id/item/:item_id',
        views: {
          'menuContent': {
            templateUrl: 'templates/item.html',
            controller: 'ItemController',
            controllerAs: 'item'
          }
        }
      })
      .state('app.cart', {
        url: '/cart',
        views: {
          'menuContent': {
            templateUrl: 'templates/cart.html',
            controller: 'CartController',
            controllerAs: 'cart'
          }
        }
      })

      .state('app.orderDetails', {
        url: '/orderDetails',
        views: {
          'menuContent': {
            templateUrl: 'templates/order-details.html',
            controller: 'OrderDetailsController',
            controllerAs: 'order'
          }
        }
      })

      .state('app.contact', {
        url: '/contact',
        views: {
          'menuContent': {
            templateUrl: 'templates/contact.html',
            controller: 'ContactController',
            controllerAs: 'contact'
          }
        }
      })
    .state('app.settings', {
      url: '/settings',
      views: {
        'menuContent': {
          templateUrl: 'templates/settings.html',
          controller: 'SettingsController'
        }
      }
    })

    .state('app.languages', {
      url: '/settings/languages',
      views: {
        'menuContent': {
          templateUrl: 'templates/settings-languages.html',
          controller: 'TranslateController',
          controllerAs: 'translate'
        }
      }
    })


    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginController',
      controllerAs: 'login'
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('app/home');

  }

})();
