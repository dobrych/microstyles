var Microstyles = {
    init: function() {
        // calculate styles location
        this.style_base = $('link[rel="stylesheet"]').attr('href').replace(new RegExp("[0-9a-zA-Z_\-]+\.css"), '');
        // create box
        $('body').prepend($('<div id="style_select_box"><div id="style_selector"></div></div>'));
        // style box look
        $('#style_select_box').css({
            position: 'absolute', top: 0, left: 0, padding: '2px',
            background: '#222', color: '#f1f1f1', height: '14px',
            'font-size': '10px', 'font-family': 'Helvetica, Arial, sans-serif',
            'line-height': '1.5em', 'text-transform': 'uppercase'
        });
        $('#style_selector').css({float: 'left'});
        $('#style_selector').append($('<strong id="microstyle_list">switch styles:</strong>'));
    },
    // add stylesheet to box
    add_stylesheet: function(name, file) {
        var el = $('<a>' + name + '</a>').attr('href', this.style_base + file);
        el.css({padding: '2px', color: '#f1f1f1'});
        el.click(this.switch_stylesheet);
        $('#style_selector').append(el);
    },
    // change global stylesheet
    switch_stylesheet: function() {
        $('link[rel="stylesheet"]').attr('href', this.href);
        return false;
    },
    // animate box (hide/show on left)
    animate_box: function() {
        var selector_width = $('#style_selector').width() + 4; // 4px padding
        if ($('#style_select_box').css('left') == '0px')
            { $('#style_select_box').animate({'left': -selector_width + 'px'}); }
        else
            { $('#style_select_box').animate({'left': '0px'}); }
        return false;
    },
    setup_button: function() {
        var selector_width = $('#style_selector').width() + 4; // 4px padding
        $('#style_select_box').css('left', -selector_width);
        $('#style_select_box').append($('<a id="select_style_button" href="#microstyle_list">&larr;&nbsp;styles</a>'));
        $('#select_style_button').css({float: 'right', display: 'block', color: '#f1f1f1', 'text-decoration': 'none', margin: '0px 5px'});
        $('#select_style_button').click(Microstyles.animate_box);
    }
}

$(document).ready(function() {
    Microstyles.init();
    // add your stylesheet here
    Microstyles.add_stylesheet('monoskin', 'monoskin.css');
    Microstyles.add_stylesheet('cold ice', 'cold-ice.css');
    Microstyles.add_stylesheet('franzy', 'franzy.css');
    Microstyles.add_stylesheet('sushi', 'sushi.css');
    Microstyles.add_stylesheet('progmatic', 'progmatic.css');
    Microstyles.add_stylesheet('photomatic-dark', 'photomatic-dark.css');
    // end of stylesheets list
    // setup button control for styles box
    Microstyles.setup_button();
});
