$('#character-legend li').mouseenter(function() {
    var character = $(this).text();

    if (character === 'Holt') {
        $('#Holt').find('img').remove();
        $('#Holt').append('<img src="/images/holt_animated.gif"/>');
    }
    if (character === 'Talon') {
        $('#Talon').find('img').remove();
        $('#Talon').append('<img src="/images/talon_animated.gif"/>');
    }
    if (character === 'Brinton') {
        $('#Brinton').find('img').remove();
        $('#Brinton').append('<img src="/images/brinton_animated.gif"/>');
    }
    if (character === 'Avicenna') {
        $('#Avicenna').find('img').remove();
        $('#Avicenna').append('<img src="/images/avicenna_animated.gif"/>');
    }
    if (character === 'Grigg') {
        $('#Grigg').find('img').remove();
        $('#Grigg').append('<img src="/images/grigg_animated.gif"/>');
    }
    if (character === 'Kosomov') {
        $('#Kosomov').find('img').remove();
        $('#Kosomov').append('<img src="/images/kosomov_animated.gif"/>');
    }
    if (character === 'Blutock') {
        $('#Blutock').find('img').remove();
        $('#Blutock').append('<img src="/images/blutock_animated"/>');
    }
    if (character === 'Marxman') {
        $('#Marxman').find('img').remove();
        $('#Marxman').append('<img src="/images/marxman_animated.gif"/>');
    }
});

$('#character-legend li').mouseleave(function() {
    var character = $(this).text();

    if (character === 'Holt') {
        $('#Holt').find('img').remove();
        $('#Holt').append('<img src="/images/holt_still.gif"/>');
    }
    if  character === 'Talon' {
        $('#Talon').find('img').remove();
        $('#Talon').append('<img src="/images/talon_still.gif"/>');
    }
    if (character === 'Brinton') {
        $('#Brinton').find('img').remove();
        $('#Brinton').append('<img src="/images/brinton_still.gif"/>');
    }
    if (character === 'Avicenna') {
        $('#Avicenna').find('img').remove();
        $('#Avicenna').append('<img src="/images/avicenna_still.gif"/>');
    }
    if (character === 'Grigg') {
        $('#Grigg').find('img').remove();
        $('#Grigg').append('<img src="/images/grigg_still.gif"/>');
    }
    if (character === 'Kosomov') {
        $('#Kosomov').find('img').remove();
        $('#Kosomov').append('<img src="/images/kosomov_still.gif"/>');
    }
    if (character === 'Blutock') {
        $('#Blutock').find('img').remove();
        $('#Blutock').append('<img src="/images/blutock_still.gif"/>');
    }
    if (character === 'Marxman') {
        $('#Marxman').find('img').remove();
        $('#Marxman').append('<img src="/images/marxman_still.gif"/>');
    }
});
