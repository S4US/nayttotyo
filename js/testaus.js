$(document).ready(function () {
    const box1_button = document.getElementById("box1-button");
    const box2_button = document.getElementById("box2-button");

    box1_button.disabled = true;

    $("#box1-button").click(function() {
        box1_button.disabled = true;
        box2_button.disabled = false;
    });

    $("#box2-button").click(function() {
        box1_button.disabled = false;
        box2_button.disabled = true;
    });

    $(".nappula").click(function () {
        if (box1_button.disabled && !box2_button.disabled) {
            $("#box1").css({
                'background-color': $(this).css("background-color")
            });
        } else if (!box1_button.disabled && box2_button.disabled) {
            $("#box2").css({
                'background-color': $(this).css("background-color")
            });
        }
    });
});