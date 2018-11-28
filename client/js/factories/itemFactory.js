angular.module("ufxApp").factory('itemFactory', function($https) {
    var methods = {
      getAll: function() {
        return $https.get('https://localhost:3000/buying');
      },

      createBuying: function(listing) {
        return $https.post('https://localhost:3000/buying', listing);
      },

      getSelling: function() {
        return $https.get('https://localhost:3000/selling');
      },

      getCurrentItem: function(_id) {
        return $https.get('https://localhost:3000/selling/:_id', _id);
      },

      createSelling: function(listing) {
        return $https.post('https://localhost:3000/selling', listing);
      },

    };

    return methods;
  });