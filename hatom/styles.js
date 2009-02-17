$(document).ready(function() {
    $('body').prepend($('<div></div>').attr('id','style_selector'));
    $('#style_selector').css({position: 'absolute', top: 0, right: 0, background: '#E5E2AF', color: '#222', padding: '2px'});
    $('#style_selector').hide();
    // add your styleshit here
    $('#style_selector').append($('<strong>switch styles:</strong>'));
    $('#style_selector').append($('<a>monoskin</a>').attr('href','monoskin.css'));
    $('#style_selector').append($('<a>cold ice</a>').attr('href','cold-ice.css'));
    $('#style_selector').append($('<a>franzy</a>').attr('href','franzy.css'));
    $('#style_selector').append($('<a>sushi</a>').attr('href','sushi.css'));
    // end of stilesheet list
    $('#style_selector a').css({padding: '2px', color: '#222'});
    $('#style_selector a').click(function(){
        $('link[rel="stylesheet"]').attr('href', this.href);
        return false;
    });
    $('#style_selector').slideDown();
});
