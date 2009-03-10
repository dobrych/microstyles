$(document).ready(function() {
    $('body').prepend($('<div id="style_select_box"><div id="style_selector"></div></div>'));
    // style box look
    $('#style_select_box').css({position: 'absolute', top: 0, left: 0});
    $('#style_selector').css({
        background: '#E5E2AF', color: '#222', border: '1px solid #222', padding: '2px',
        'font-size': '10px', 'font-family': 'Helvetica, Arial, sans-serif',
        'line-height': '1.5em', 'text-transform': 'uppercase', float: 'left',
        height: '14px'
    });
    //$('#style_selector').hide();
    // add your styleshit here
    $('#style_selector').append($('<strong id="microstyle_list">switch styles:</strong>'));
    $('#style_selector').append($('<a href="monoskin.css">monoskin</a>'));
    $('#style_selector').append($('<a href="cold-ice.css">cold ice</a>'));
    $('#style_selector').append($('<a href="franzy.css">franzy</a>'));
    $('#style_selector').append($('<a href="sushi.css">sushi</a>'));
    // end of stilesheets list
    $('#style_selector a').css({padding: '2px', color: '#222'});
    $('#style_selector a').click(function(){
        $('link[rel="stylesheet"]').attr('href', this.href);
        return false;
    });
    var selector_width = $('#style_selector').width() + 6; // 6 = 4px padding + 2px border
    $('#style_selector').css('margin-left', -selector_width);
    $('#style_select_box').append($('<a id="select_style_button" href="#microstyle_list"><img src="http://somerandomdude.com/images/sanscons/document.gif"/></a>'));
    $('#select_style_button').css({float: 'right'});
    $('#select_style_button').click(function(){
        $('#style_selector').animate({'margin-left': 0});
        return false;
    });
});
