/* register the modules the application depends upon here*/
angular.module('user', 'items', []);

/* register the application and inject all the necessary dependencies */
var app = angular.module('ufxApp', ['items']);

var userApp = angular.module('ufxUserApp', ['user']);