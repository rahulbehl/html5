$(document).ready(function () {

    $(document).on('submit', '.form-styled', function (event) {
        $.ajax({
            url: 'rsvp.php',
            data: {
                'name': $('.form-styled input[name="name"]').val(),
                'email': $('.form-styled input[name="email"]').val(),
                'guest_no': $('.form-styled input[name="guest_no"]').val()
            },
            dataType: 'json',
            method: 'POST',
            success: function (resp) {
                $('.form-styled .result').html(resp);
                setTimeout(function () {
                    $('.form-styled .result').html('');
                }, 5000);

            },
            error: function (resp) {
                $('.form-styled .result').html(resp);
                setTimeout(function () {
                    $('.form-styled .result').html('');
                }, 5000);

            }
        });
        event.preventDefault();
    });

    $(".form-styled").validate({
        ignore: ":hidden:not(select)",
        rules: {
            name: {
                required: true
            },
            email: {
                required: true
            },
            guest_no: {
                required: true
            }, submitHandler: function (form) {
                // do other things for a valid form
                form.submit();
            }
        } // end rules          
    }); // end validate	



    //Click event to scroll to top
    $('.toTop').click(function () {
        $('html, body').animate({scrollTop: 0}, 1800);
        return false;
    });

});