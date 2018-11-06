angular.module('listings', []).factory('Listings', function($http) {
    var methods = {
      getAll: function() {
        return $http.get('http://localhost:8080/buying');
      },

      createBuying: function(listing) {
        return $http.post('http://localhost:8080/buying', listing);
      },

      getSelling: function() {
        return $http.get('http://localhost:8080/selling');
      },

      getCurrentSelling: function(id) {
        console.log("here1");
        return $http.get('http://localhost:8080/selling/:id', id);
      },

      createSelling: function(listing) {
        return $http.post('http://localhost:8080/selling', listing);
      },

    };

    return methods;
  });
