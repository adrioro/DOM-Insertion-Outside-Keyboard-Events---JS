//.keydown
//On keydown move text to box.

$("#textarea").keyup(function () {
    var text = $('textarea#textarea').val(); //Retrieving text from textarea.
    $("div#boxId").html(text);
});