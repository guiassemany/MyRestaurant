(function() {
  'use strict';

  angular
        .module('myrestaurant')
        .constant('appConfig', {
            name: 'My Restaurant', // name of your project
            author: 'Guilherme Assemany', // author's name or company name
            description: 'Restaurant App', // brief description
            version: '1.0', // current version
            year: ((new Date()).getFullYear()) // automatic current year (for copyright information)
        })
        .constant('apiConfig', {
          base: 'http://assemany.com/projeto/MyRestaurant/api',
          auth: '/auth/authenticate',
          authUser: '/auth/user',
          categories: '/category/',
          items: '/item/',
          includeImages: '?include=images'
        });

})();
