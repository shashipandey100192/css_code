$(document).ready(function () {

    var m = 0;
    $("#one h1").click(function () {
        $(this).animate({ marginLeft: m })
        m = m + 200;
        if (m >= 1200) {
            m = 0;
        }
    });


    $("#two button").click(function () {
        var b = $(this).text();
        console.log(b);
        if (b == "show") {
            $("#two input").attr({ "type": "text" });
            $("#two button").text("hide");
        }
        else {
            {
                $("#two input").attr({ "type": "password" });
                $("#two button").text("show");
            }
        }

    });

   



})


