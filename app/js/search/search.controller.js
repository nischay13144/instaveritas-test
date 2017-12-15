angular.module('search.controller', [])
	.directive('showPreview', function(){
		return {
			scope: {
				showglob: '='
			},
			templateUrl: '../views/showpreview.html'
		}
	})
	.controller('SearchController', function ($scope, SearchService) {
		$scope.search = function () {
			SearchService.query({
				name: $scope.name,
			}, function (response) {
				$scope.swap = response;
			});
		};
	
});
