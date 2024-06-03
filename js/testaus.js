$(document).ready(function () {
    const box1_button = document.getElementById("box1-button");
    const box2_button = document.getElementById("box2-button");
    var imgElement = document.getElementById("sohva");

    let svgArray = ["svg/sohva1.svg", "svg/sohva2.svg", "svg/sohva3.svg", "svg/sohva4.svg"];
    let current_index = 0;

    $("#sohva").hide();

    box1_button.disabled = true;

    $("#box1-button").click(function () {
        box1_button.disabled = true;
        box2_button.disabled = false;
    });

    $("#box2-button").click(function () {
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

    $("#sohva-nappi").click(function () {
        $("#sohva").toggle();
    });

    $("#left").on("click", function() {
        if (current_index == 0) {
            current_index = svgArray.length - 1;
            imgElement.src = svgArray[current_index];
        } else {
            current_index -= 1;
            imgElement.src = svgArray[current_index];
        }
    });

    $("#right").on("click", function() {
        if (current_index == svgArray.length - 1) {
            current_index = 0;
            imgElement.src = svgArray[current_index];
        } else {
            current_index += 1;
            imgElement.src = svgArray[current_index];
        }
    });
});
