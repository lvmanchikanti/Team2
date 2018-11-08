angular.module('items').controller('ItemController', ['$scope', 'itemFactory',
  function($scope, itemFactory) {
    /* Get all the items, then bind it to the scope */

    console.log('hi')
    // Items.getAll().then(function(response) {
    //   $scope.items = response.data;
    //   //console.log($scope.items._id);
    // }, function(error) {
    //   console.log('Unable to retrieve items:', error);
    // })

    itemFactory.getSelling().then(function(response) {
      console.log('response data is ' + JSON.stringify(res.data));
      $scope.items = response.data;
      console.log('$scope.user is ' + JSON.stringify($scope.items));
      console.log(JSON.stringify($scope.items[0]._id));
      console.log(JSON.stringify($scope.items[1].title));
      var listing = $scope.items.filter(items => items._id === $scope.items[0]._id);
      $scope.items._id = listing[0]._id;
      $scope.items.title = listing[0].title;
      $scope.items.price = listing[0].price;
    }, function(error) {
      console.log('Unable to retrieve selling items:', error);
    });

    $scope.getCurrentItem = function(index){
      var listing = $scope.items.filter(items => items._id === $scope.items[index]._id);
      $scope.items._id = listing[index]._id;
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

      Items.createBuying($scope.newItem).then(function(err)
      {
        if(err)
        {
          $scope.errorMessage = "Error. Listing not successfully added";
          console.log('Unable to add listing', err);
        }

        $scope.newItem = {};

      });
    }

    $scope.saveSelling = function() {
      $scope.items.push($scope.newItem);

      Items.createSelling($scope.newItem).then(function(err)
      {
        if(err)
        {
          $scope.errorMessage = "Error. Listing not successfully added";
          console.log('Unable to add listing', err);
        }

        $scope.newItem = {};


      });
    }

  }
]);
