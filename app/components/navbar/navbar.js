angular.module('navbar',['pascalprecht.translate'])

.config(['$translateProvider', function($translateProvider) {

    $translateProvider
    .useStaticFilesLoader({
        prefix: 'assets/translations/',
        suffix: '.json'
    })
    .preferredLanguage('en')
    .useMissingTranslationHandlerLog()
    .useSanitizeValueStrategy('escapeParameters');
}])

.directive('btnAutoCollapse', closeNavbar)
.directive('btnRotateIcon', rotateIcon)

.controller('NavbarCtrl', ['$scope', '$rootScope', '$translate', function ($scope, $rootScope, $translate) {

    $scope.changeLanguage = function(event, langKey) {
        $translate.use(langKey);
    };

    $rootScope.$on('$translateChangeSuccess', function(event, data) {
        $rootScope.lang = data.language;
    });

}]);
