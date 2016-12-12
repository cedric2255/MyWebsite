angular.module('footer',[])

.controller('FooterCtrl', ['$scope', function ($scope) {
    
    // Get the current year for the copyright
    var date = new Date();
    $scope.currentYear = date.getFullYear();

    // Function to scroll to the top
    $scope.toTheTop = function() {
        $(document).scrollTopAnimated(0, 800);
    }

}]);
