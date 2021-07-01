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
                $(".refresh").click();
            }
        })
    })

    $(".refresh").click(function () {

        $.get("http://localhost:63342/rehber-uygulama/listele.php",{}, function (response) {
        var jsondata= JSON.parse(response);
        $(".liste").html('');
        $(jsondata).each(function (index, item) {
            var line = item.fullname + " [" + item.eposta + "] " + "["+ item.telefon +"]";
            $(".liste").append("<li>" + line + "</li>")
        })
        })
    })
})