angular.module('items', [])
.controller('DetailController', ['$scope', '$location', '$window','itemFactory',
  function($scope, $location, $window, itemFactory, _id) {

    // itemFactory.getSelling().then(function(response) {
    //   // console.log('response data is ' + JSON.stringify(response.data));
    //   $scope.items = response.data;
    //   // console.log("Check1");
    //
    // }, function(error) {
    //   console.log('Unable to retrieve selling items:', error);
    // });
    // var _id = '5bfeedc70dc5fc48d629d6db';

    itemFactory.findItem(_id).then(function(response){
      console.log(_id);
      console.log('in detail controller');
      console.log(JSON.stringify(response.data));
      var currItem = response.data;
      $scope.listing = currItem;
      console.log('scope current user' + JSON.stringify($scope.listing));
    }, function(error){
      console.log('Unable to retrieve selling items:', error);
    })
    // console.log('in detail controller');
    // console,log(JSON.stringify())
    // itemFactory.findItem(id)
    // .then(
    //   function(response){
    //     $scope.listing = response.data;
    //     console.log($scope.listing);
    //   }, function(error){
    //     console.log('Unable to retrieve selling items:', error);
    //   })



  }]);
