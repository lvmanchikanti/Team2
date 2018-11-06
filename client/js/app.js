/* register the modules the application depends upon here*/
angular.module('user', []);

/* register the application and inject all the necessary dependencies */
// var app = angular.module('ufxApp', ['user', require('angular-route')]);
var app = angular.module('ufxApp', ['user', 'ngRoute']);


app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: '/',
            controller: 
        })
		.when('/login', {
			templateUrl: 'js/html/login.html',
			controller: 'loginController'
		})
		.when('/view2', {
			templateUrl: 'view2.html',
			controller: 'SecondController'
		})
		// .otherwise({
		// 	redirectTo: '/view1'
		// });
});