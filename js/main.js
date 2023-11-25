$(document).on('click', '.send', function() {
    /* Form Input */
    var input_name = $("#name").val(),
        input_phone = $("#phone").val(),
        input_pembayaran = $("#pembayaran").val(),
        input_madu = $("#madu").val(),
        input_description = $("#description").val();

    /* Whatsapp Setting */
    var walink = 'https://web.whatsapp.com/send',
        phone = '6285710786069',
        text = 'Hi admin ' + '%0A' + 'Data order Madu + Promo',
        text_yes = 'Your order was successfully sent.',
        text_no = 'Fill this form to order.';

    /* Smartphone Support */
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var walink = 'whatsapp://send';
    }

    // Validation: Check if input_phone contains only numbers
    if (!/^\d+$/.test(input_phone)) {
        document.getElementById("text-info").innerHTML = '<div class="alert alert-danger">Invalid phone number format</div>';
        return; // Stop further execution
    }

    if (input_name != "" && input_phone != "" && input_pembayaran != "" && input_madu != "" && input_description != "") {
        /* Whatsapp URL */
        var checkout_whatsapp = walink + '?phone=' + phone + '&text=' + text + '%0A%0A' +
            '*Nama Lengkap Penerima* : ' + input_name + '%0A' +
            '*No. Whatsapp* : ' + input_phone + '%0A' +
            '*Alamat Lengkap* : ' + input_description + '%0A' +
            '*Madu* : ' + input_madu + '%0A' +
            '*Pembayaran* : ' + input_pembayaran + '%0A' ;

        /* Whatsapp Window Open */
        window.open(checkout_whatsapp, '_blank');
        document.getElementById("text-info").innerHTML = '<div class="alert alert-success">' + text_yes + '</div>';
    } else {
        document.getElementById("text-info").innerHTML = '<div class="alert alert-danger">' + text_no + '</div>';
    }
});
