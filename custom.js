$(document).ready(function () {
    $(".guncelle").click(function () {

        var data = {
            fullname : $("#fullname").val(),
            eposta : $("#eposta").val(),
            telefon  : $("#telefon").val(),

        };
        $.post("http://localhost:63342/rehber-uygulama/insert.php",data,function (response) {
            if (response == 1){
                alert("bilgileriniz başarılı bir şekilde rehbere kaydedilmiştir.")
            }
        })
    })
})