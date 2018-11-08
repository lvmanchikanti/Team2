angular.module('items', []).factory('itemFactory', function($http) {
  console.log('hi');
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

      getCurrentItem: function(_id) {
        console.log("id =" + _id);
        return $http.get('http://localhost:3000/selling/:_id', _id);
      },

      createSelling: function(listing) {
        return $http.post('http://localhost:3000/selling', listing);
      },

    };

    return methods;
  });
