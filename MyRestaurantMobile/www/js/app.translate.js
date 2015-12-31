(function(){
  'use strict';

  angular
        .module('myrestaurant')
        .config(translate);

    translate.$inject = ['$translateProvider'];

    function translate($translateProvider){

      $translateProvider.preferredLanguage('en-us');

      $translateProvider.useSanitizeValueStrategy('sanitizeParameters');

      //Handle Translation
      $translateProvider.useStaticFilesLoader({
        prefix: 'i18n/',
        suffix: '.json'
      });

    }

})();
