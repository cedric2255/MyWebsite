var closeNavbar = function() {

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


var rotateIcon = function() {

    function link(scope, element, attrs) {
        element.on('click', function(event) {
            if( $(event.currentTarget).is('button') ) {
                if ($(event.currentTarget.childNodes[1]).hasClass("rotate-right")) {
                    $(event.currentTarget.childNodes[1]).removeClass("rotate-right").addClass("rotate-left");
                }
                else {
                    $(event.currentTarget.childNodes[1]).removeClass("rotate-left").addClass("rotate-right");
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