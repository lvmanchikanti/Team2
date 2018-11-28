/* register the modules the application depends upon here*/
angular.module('items', []);
angular.module('user', []);



/* register the application and inject all the necessary dependencies */
// var app = angular.module('ufxAppItem', ['items']);
var app = angular.module('ufxApp', ['user', 'items', 'ngRoute']);
app.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when("/selling/:_id", {
    templateUrl: '/js/html/listing.html',
    controller: 'ItemController'
  });

}]);
