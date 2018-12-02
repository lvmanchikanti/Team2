// angular.module('items', []).factory('itemFactory', function($http) {
angular.module("ufxApp").factory('itemFactory', function($http) {
    var currId;
    var methods = {
      getCurrentUser: function(){
        console.log('in fac id')
        return $http.get('/account/getinfo');
      },
      getBuying: function() {
        return $http.get('/buying');
      },

      getSelling: function() {
        return $http.get('/selling');
      },

      createBuying: function(listing) {
        return $http.post('/buying', listing);
      },

      createSelling: function(listing) {
        return $http.post('/selling', listing);
      },
      setId: function(listingId){
        currId = listingId;
      },

      findSellingItem: function(_id) {
        return $http.get('/selling/' + _id);
      },

      findBuyingItem: function(_id) {
        return $http.get('/buying/' + _id);
      },

      deleteSelling: function(_id) {
        return $http.delete('/selling/' + _id);
      },

      deleteBuying: function(_id) {
        return $http.delete('/buying/' + _id);
      },

    };

    return methods;
  });