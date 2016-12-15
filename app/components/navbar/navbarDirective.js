var closeNavbar = function() {

    function link(scope, element, attrs) {
        element.on('click', function(event) {
            if( $(event.target).is('a') ) {
                $(".navbar-collapse.in").collapse('hide');
                $(".menu-toggle").removeClass("rotate-right").addClass("rotate-left");
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


var rotateIcon = function() {

    function link(scope, element, attrs) {
        element.on('click', function(event) {
            if( $(event.currentTarget).hasClass("navbar-toggle") ) {
                if ($(".menu-toggle").hasClass("rotate-right")) {
                    $(".menu-toggle").removeClass("rotate-right").addClass("rotate-left");
                }
                else {
                    $(".menu-toggle").removeClass("rotate-left").addClass("rotate-right");
                }
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