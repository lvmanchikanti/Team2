angular.module('items', [])
.controller('ItemController', ['$scope', '$location', '$window','itemFactory',
  function($scope, $location, $window, itemFactory) {
    /* Get all the items, then bind it to the scope */
    // Items.getAll().then(function(response) {
    //   $scope.items = response.data;
    //   //console.log($scope.items._id);
    // }, function(error) {
    //   console.log('Unable to retrieve items:', error);
    // })
    itemFactory.getSelling().then(function(response) {
      // console.log('response data is ' + JSON.stringify(response.data));
      $scope.items = response.data;
      // console.log("Check1");

    }, function(error) {
      console.log('Unable to retrieve selling items:', error);
    });

    $scope.detailedInfo = undefined;
    //
    // $scope.getCurrentItem = function(index){
    //   var listing = $scope.items.filter(items => items._id === $scope.items[index]._id);
    //
    //   $scope.detailedInfo = listing[0];
    //   var _id = $scope.detailedInfo._id;
    //   $location.path('/selling/' + _id);
    //   // window.location.href = '/selling/' + _id;
    //   // window.location.href = '/js/html/listing.html';
    //   console.log($scope.detailedInfo);
    // }

    $scope.getCurrentItem = function(itemId){
      // window.location.href = '/selling/' + _id;
      // window.location.href = '/js/html/listing.html';
      var listing = $scope.items.filter(items => items._id === itemId);

      $scope.detailedInfo = listing[0];
      // window.location.href = '/selling/' + _id;
      // window.location.href = '/js/html/listing.html';
      console.log($scope.detailedInfo);
      console.log(itemId);
      itemFactory.findItem(itemId).then(function(response){
        console.log(itemId);
        console.log('in detail controller');
        console.log(JSON.stringify(response.data));
        var currItem = response.data;
        $scope.listing = currItem;
        console.log('scope current user' + JSON.stringify($scope.listing));
      }, function(error){
        console.log('Unable to retrieve selling items:', error);
      });
      // window.location.href = '/selling/' + itemId;
      // $location.path("/js/html/lsiting.html");
      // $location.path("/selling/" + itemId);
    }

    $scope.setCondition = function(condition) {
      //setting the location from dropdown
      $scope.newItem.condition = condition;
      $scope.items.push($scope.newItem.condition);
    }

    $scope.setLocation = function(location) {
      //setting the location from dropdown
      $scope.newItem.location = location;
      $scope.items.push($scope.newItem.location);
    }

    $scope.saveBuying = function() {
      $scope.items.push($scope.newItem);

      console.log(JSON.stringify($scope.newItem));
      itemFactory.createBuying($scope.newItem).then(function(res,err)
      {
        // if(err)
        // {
        //   $scope.errorMessage = "Error. Listing not successfully added";
        //   console.log('Unable to add listing', err);
        // }

        if(res.status !== 200)
        {
            console.log("\nunable to add listing");
        }

        $scope.newItem = {};

      });
    }

    $scope.saveSelling = function() {
      $scope.items.push($scope.newItem);

      console.log(JSON.stringify($scope.newItem));
      itemFactory.createSelling($scope.newItem).then(function(res,err)
      {
        if(res.status !== 200)
        {
            console.log("\nunable to add listing");
        }

        $scope.newItem = {};


      });
    }

  }
]);

// app.config(['$routeProvider', function($routeProvider){
//   console.log("CHECK3");
//   $routeProvider
//   .when("/selling/:_id", {
//     templateUrl: 'listing.html',
//     controller: 'ItemController'
//   });
// }]);
