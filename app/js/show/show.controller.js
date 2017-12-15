angular.module('show.controller', [])
.directive('showCast', function(){
	return {
		restrict: 'EA',
		scope: {
			showcasts: '='
		},
		templateUrl: '../views/showcast.html'
	}
})
	.controller('ShowController', function ($scope, show) {
		$scope.show = show;
});
