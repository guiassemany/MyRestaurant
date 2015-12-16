// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
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
    controller: 'AppCtrl',
    controllerAs: 'AppCtrl'
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
          controller: 'CategoriesCtrl',
          controllerAs: 'category'
        }
      }
    })
    .state('app.category', {
      url: '/menu/category/:categoryId',
      views: {
        'menuContent': {
          templateUrl: 'templates/category.html',
          controller: 'CategoryCtrl',
          controllerAs: 'category'
        }
      }
    })
    .state('app.item', {
      url: '/menu/item/:itemId',
      views: {
        'menuContent': {
          templateUrl: 'templates/item.html',
          controller: 'ItemCtrl',
          controllerAs: 'item'
        }
      }
    })

    .state('app.contact', {
      url: '/contact',
      views: {
        'menuContent': {
          templateUrl: 'templates/contact.html',
          controller: 'ContactCtrl',
          controllerAs: 'contact'
        }
      }
    })
  .state('app.settings', {
    url: '/settings',
    views: {
      'menuContent': {
        templateUrl: 'templates/settings.html',
        controller: 'SettingsCtrl'
      }
    }
  })
  .state('app.languages', {
    url: '/settings/languages',
    views: {
      'menuContent': {
        templateUrl: 'templates/settings-languages.html',
        controller: 'TranslateCtrl',
        controllerAs: 'translate'
      }
    }
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
    prefix: '/i18n/',
    suffix: '.json'
  });

})
.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {

    // Set some reference to access them from any scope
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    // GLOBAL APP SCOPE
    // set below basic information
    $rootScope.app = {
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
        },
        apiUrl: 'http://myrestaurant.dev'
    };
}])
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

    // Generic OAuth 2.0
    // $authProvider.oauth2({
    //   name: 'MyRestaurantAPI',
    //   url: 'http://localhost:8000/api/auth/authenticate',
    //   clientId: null,
    //   redirectUri: window.location.origin,
    //   authorizationEndpoint: 'http://localhost:8000/api/auth/authenticate',
    //   defaultUrlParams: ['response_type', 'client_id', 'redirect_uri'],
    //   requiredUrlParams: null,
    //   optionalUrlParams: null,
    //   scope: null,
    //   scopePrefix: null,
    //   scopeDelimiter: null,
    //   state: null,
    //   type: 2.0,
    //   popupOptions: null,
    //   responseType: 'code',
    //   responseParams: {
    //     code: 'code',
    //     clientId: 'clientId',
    //     redirectUri: 'redirectUri'
    //   }
    // });


    // No additional setup required for Twitter

  });
