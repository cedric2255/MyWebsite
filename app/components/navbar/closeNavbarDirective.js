var closeNavbarDirective = function() {

    function link(scope, element, attrs) {
        element.on('click', function(event) {
            if( $(event.target).is('a') ) {
                $(".navbar-collapse.in").collapse('hide');
            }
        });
    }

    var dir = {
        restrict: 'A',
        scope: {},
        link: link
    };

    return dir;
}