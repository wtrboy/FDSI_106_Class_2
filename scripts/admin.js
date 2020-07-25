
function register() {
    var code = $("#txtCode").val();
    var title = $("#txtTitle").val();
    var price = $("#txtPrice").val();
    var cat = $("#txtCategory").val();
    var image = $("#txtImage").val();

    console.log(code, title, price, cat, image);
}



function init(){
    //hook events
    $("#btnSave").click(register);
    // load data
}



window.onload = init;
