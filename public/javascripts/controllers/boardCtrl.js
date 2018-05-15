app.controller('boardCtrl',['$scope', '$http' ,'$routeParams', '$rootScope', function($scope, $http, $routeParams, $rootScope) {


	$scope.initList = function(){
	    $http({
	        url: '/board/list', 
	        method: "GET"
	    }).success(function (data) {
	    $scope.BoardPostList = data;
	});
	};
}]);