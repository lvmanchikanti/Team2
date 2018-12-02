// angular.module('items', []).factory('itemFactory', function($http) {
angular.module("ufxApp").factory('itemFactory', function($http) {
    var currId;
    var methods = {
      getAll: function() {
        return $http.get('http://localhost:3000/buying');
      },

      createBuying: function(listing) {
        return $http.post('http://localhost:3000/buying', listing);
      },

      getSelling: function() {
        return $http.get('http://localhost:3000/selling');
      },

      setId: function(listingId){
        currId = listingId;
      },

      findItem: function(_id) {
        return $http.get('http://localhost:3000/selling/' + _id);
      },

      createSelling: function(listing) {
        return $http.post('http://localhost:3000/selling', listing);
      },

      delete: function(_id) {

        return $http.delete('http://localhost:3000/selling/' + _id);

      },

    };

    return methods;
  });
