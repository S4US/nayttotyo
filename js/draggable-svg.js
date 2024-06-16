const sohva = document.getElementById("sohva");
let draggable = null;

$('#lock').change(function () {
    if ($(this).is(':checked')) {
        console.log("checked")
        if (draggable != null) {
            draggable.remove();
            draggable = null;
            console.log(draggable);
        }
    } else {
        console.log("not checked..")
        if (draggable == null) {
            draggable = new PlainDraggable(sohva);
            console.log(draggable);
        }
    }
});