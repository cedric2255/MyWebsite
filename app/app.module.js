angular.module('myResume', ['ui.bootstrap', 'duScroll', 'ngAnimate', 'navbar', 'home', 'skills', 'experience', 'passions', 'contact', 'footer'])

.value('duScrollDuration', 800)

.directive('scroll', animationOnScroll)

.run(['$rootScope', function($rootScope) {

    // Default language
    $rootScope.lang = 'en';

    // Initialization for material-kit
    angular.element(document).ready(function () {
        $.material.init();

        //  Activate the Tooltips
        $('[data-toggle="tooltip"], [rel="tooltip"]').tooltip();
        
        // Activate Popovers
        $('[data-toggle="popover"]').popover();
    });

}]);
