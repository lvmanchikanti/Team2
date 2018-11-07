/* register the modules the application depends upon here*/
angular.module('user', 'listings', []);

/* register the application and inject all the necessary dependencies */
var app = angular.module('ufxApp', ['user', 'listings']);