    $(function(){
                $('#last').click(function(){         
                $('#slam').dialog('open');
            });

        jQuery(document).ready(function() {
            jQuery("#slam").dialog({
                autoOpen: false,
                height: 315,
                title: "You're Welcome--Jump to 0:40",
                width: 485,
                modal: true,
                open: function(){
                jQuery('.ui-widget-overlay').bind('click',function(){
                jQuery('#slam').dialog('close');
                    })
                }
            });
        }); 
});


$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});