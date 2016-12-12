angular.module('home',[])

.controller('HomeCtrl', ['$scope', '$sce', function ($scope, $sce) {

    $scope.renderHtml = function(html_code)
    {
        return $sce.trustAsHtml(html_code);
    };

}]);
