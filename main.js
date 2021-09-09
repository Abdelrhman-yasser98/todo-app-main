let cont = document.getElementById('content');
$('#counter').text(cont.childElementCount - 2);
$('#enter').click(function() {
    if ($('input').val() == "") {
        alert('please insert a Text')
    } else {
        let div = document.createElement('div');
        let div2 = document.createElement('div');
        let p = document.createElement('p')
        let span = $('#enter').clone(false)
        let img = document.createElement('img');
        img.src = 'images/icon-cross.svg';
        $(div).addClass('pure');
        $(span).click(function() {
            $(this).children().toggleClass('clicked');
            $(div).toggleClass('pure');
            $(div).toggleClass('checked');

        })
        $(div).css({
            display: 'flex',
            padding: '10px',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgb(196, 195, 195)'
        });
        $(img).css('cursor', 'pointer');
        $(div2).css({
            display: 'flex',
            width: '80%'
        })
        $(p).text($('input').val())
        $(div2).append(span);
        $(div2).append(p);
        $(div).append(div2);
        $(div).append(img);
        $('#added').hide();
        $('#content').prepend(div);
        $('#counter').text(cont.childElementCount - 2);
        $(img).click(function() {
            $(this).parent().slideUp(250, function() {
                $(this).remove();
                $('#counter').text(cont.childElementCount - 2);
                if ((cont.childElementCount - 2) === 0) {
                    $('#added').show(500)
                }
            });

        });
        $('input').val('');

        $('#states a:contains(All)').click(function() {
            $(div).show(500);
        });
        $('#states a:contains(Active)').click(function() {
            $('.checked').hide(500);
            $('.pure').show()
        });
        $('#states a:contains(Completed)').click(function() {
            $('.pure').hide(500);
            $('.checked').show();

        });
        $('#rmcomp').click(function() {
            $('.checked').remove();
            $('#counter').text(cont.childElementCount - 2);
        })

    };


});

$('#states a').click(function() {
    $(this).siblings().removeClass('lighted');
    $(this).addClass('lighted');
});


$('#head span').on('click', function() {
    $('#head span img').toggleClass('none');
    $('body').toggleClass('darkbody');
    $('#add,#content').toggleClass('darksections');
    $('input').toggleClass('darkinput');
    $('.check img').toggleClass('darkimg')
});