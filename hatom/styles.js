$(document).ready(function() {
    $('body').prepend($('<div></div>').attr('id','style_selector'));
    $('#style_selector').css({position: 'absolute', top: 0, right: 0, background: '#E5E2AF', padding: '2px'});
    $('#style_selector').hide();
    // add your styleshit here
    $('#style_selector').append($('<strong>switch styles:</strong>'));
    $('#style_selector').append($('<a>monoskin</a>').attr('href','monoskin.css'));
    $('#style_selector').append($('<a>franzy</a>').attr('href','franzy.css'));
    // end of stilesheet list
    $('#style_selector a').css('padding', '2px');
    $('#style_selector a').click(function(){
        $('link[rel="stylesheet"]').attr('href', this.href);
        return false;
    });
    $('#style_selector').slideDown();
});
