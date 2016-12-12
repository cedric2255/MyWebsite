angular.module('contact',[])

.controller('ContactCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.sendEmail = function()
    {
        var hasError = false;
        $scope.emailAlerts = [];
        
        if ($scope.contact === undefined)
        {
            hasError = true;
            $scope.emailAlerts.push({type:'danger', icon:'error_outline', msg:'MANDATORY_FIELDS'});
        }
        else
        {
            if ($scope.contact.name === undefined)
            {
                hasError = true;
                $scope.emailAlerts.push({type:'danger', icon:'error_outline', msg:'NAME_NOT_VALID'});
            }
            else if ($scope.contact.email === undefined)
            {
                hasError = true;
                $scope.emailAlerts.push({type:'danger', icon:'error_outline', msg:'EMAIL_NOT_VALID'});
            }
            else if ($scope.contact.content === undefined)
            {
                hasError = true;
                $scope.emailAlerts.push({type:'danger', icon:'error_outline', msg:'CONTENT_NOT_VALID'});
            }
        }
        
        if (hasError === false)
        {
            // Send email
            var config = { headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'} };
            var data = $.param({
                'name': $scope.contact.name,
                'email': $scope.contact.email,
                'content': $scope.contact.content
            });
            
            $http.post("php/sendEmail.php", data, config).then(function successCallback(response)
            {
                console.log(response.data);
                if (response.data === "1")
                {
                    $scope.emailAlerts.push({type:'success', icon:'check', msg:'EMAIL_SUCCESS'});
                    $scope.contact = null;
                }
                else
                {
                    $scope.emailAlerts.push({type:'danger', icon:'error_outline', msg:'ERROR_OCCURRED'});
                }
            }, function errorCallback(response)
            {
                console.log(response.data);
                $scope.emailAlerts.push({type:'danger', icon:'error_outline', msg:'ERROR_OCCURRED'});
            });
        }
    }

}]);
