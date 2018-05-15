var app = angular.module('mainApp', [
    'ngRoute'
]);


app.config(function ($routeProvider) {
    //Add write, view, edit
    $routeProvider
        .when('/', {
            controller: 'boardCtrl',
            templateUrl: '/views/main.html'
        }).otherwise({
            redirectTo: '/'
        });
});