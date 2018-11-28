// angular.module('items', []).factory('itemFactory', function($http) {
angular.module("ufxApp").factory('itemFactory', function($http) {
    var methods = {
      getAll: function() {
        return $http.get('/buying');
      },

      createBuying: function(listing) {
        return $http.post('/buying', listing);
      },

      getSelling: function() {
        return $http.get('/selling');
      },

      getCurrentItem: function(_id) {
        return $http.get('/selling/:_id', _id);
      },

      createSelling: function(listing) {
        return $http.post('/selling', listing);
      },

    };

    return methods;
  });
