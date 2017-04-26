(function(){
  'use strict';

  angular.module('app').factory('RestFulResponse', function(Restangular) {
      return Restangular.withConfig(function(RestangularConfigurer) {
          RestangularConfigurer.setFullResponse(true);
      });
  });


})();
