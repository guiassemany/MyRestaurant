(function() {
    'use strict';
  // angular.module is a global place for creating, registering and retrieving Angular modules
  // 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
  // the 2nd parameter is an array of 'requires'
  // 'myrestaurant.controllers' is found in js/modules.js
angular.module('myrestaurant', [
                'ionic',
                'myrestaurant.controllers',
                'myrestaurant.services',
                'pascalprecht.translate',
                'satellizer'
                ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
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
  })

  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('app/home');

})

//Translation Settings
.config(function($translateProvider){

  $translateProvider.preferredLanguage('en-us');

  $translateProvider.useSanitizeValueStrategy('sanitizeParameters');

  //Handle Translation
  $translateProvider.useStaticFilesLoader({
    prefix: 'i18n/',
    suffix: '.json'
  });

})
.constant('appConfig', {
    name: 'My Restaurant', // name of your project
    author: 'Guilherme Assemany', // author's name or company name
    description: 'Restaurant App', // brief description
    version: '1.0', // current version
    year: ((new Date()).getFullYear()), // automatic current year (for copyright information)
    layout: {
        isNavbarFixed: true, //true if you want to initialize the template with fixed header
        isSidebarFixed: true, // true if you want to initialize the template with fixed sidebar
        isSidebarClosed: false, // true if you want to initialize the template with closed sidebar
        isFooterFixed: false, // true if you want to initialize the template with fixed footer
        theme: 'theme-1', // indicate the theme chosen for your project
        logo: 'assets/images/logo.png', // relative path of the project logo
    }
})
.constant('apiConfig', {
  base: 'http://myrestaurant.dev/api',
  auth: '/auth/authenticate',
  authUser: '/auth/user',
  categories: '/category/',
  items: '/item/',
  includeImages: '?include=images'
})
//App Info
.run(['$rootScope', '$state', '$stateParams', 'appConfig', function ($rootScope, $state, $stateParams, appConfig) {

    // Set some reference to access them from any scope
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    // GLOBAL APP SCOPE - Get Only necessary info from appConfig constant - Leaving $rootScope as clean as possible
    // Maybe only values that need to be accesed on the view without going on any controller before
    $rootScope.app = {
        name: appConfig.name,
    };

}])
//Authentication Settings
.config(function($authProvider) {

    $authProvider.facebook({
      clientId: 'Facebook App ID'
    });

    $authProvider.google({
      clientId: 'Google Client ID'
    });

    $authProvider.github({
      clientId: 'GitHub Client ID'
    });

    $authProvider.linkedin({
      clientId: 'LinkedIn Client ID'
    });

    $authProvider.live({
      clientId: 'Microsoft Client ID'
    });

  });
})();
