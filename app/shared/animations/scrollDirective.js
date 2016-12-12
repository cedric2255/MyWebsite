var animationOnScroll = function() {
    
    function link(scope, element, attrs) {
        angular.element($(window)).bind("scroll", function()
        {
            // For slide to the top animation
            $(".slide-top-anim").each(function()
            {
                var pos = $(this).offset().top;
                var winTop = $(window).scrollTop();                
                if (pos < winTop + 600)
                {
                    $(this).removeClass("slide-top-anim").addClass("slide-top");
                }
            });

            // For slide to the left animation
            $(".slide-left-anim").each(function()
            {
                var pos = $(this).offset().top;
                var winTop = $(window).scrollTop();                
                if (pos < winTop + 600)
                {
                    $(this).removeClass("slide-left-anim").addClass("slide-left");
                }
            });

            // For slide to the right animation
            $(".slide-right-anim").each(function()
            {
                var pos = $(this).offset().top;
                var winTop = $(window).scrollTop();                
                if (pos < winTop + 600)
                {
                    $(this).removeClass("slide-right-anim").addClass("slide-right");
                }
            });

            // For width growth animation
            $(".width-growth-anim").each(function()
            {
                var pos = $(this).offset().top;
                var winTop = $(window).scrollTop();
                if (pos < winTop + 600)
                {
                    $(this).removeClass("width-growth-anim").addClass("width-growth");
                }
            });
        });
    }

    var dir = {
        restrict: 'A',
        scope: {},
        link: link
    };

    return dir;

}