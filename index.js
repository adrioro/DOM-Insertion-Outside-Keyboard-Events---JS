//.keydown
//On keydup move text to div box.

$("#textarea").keyup(function () {
    let text = $("#textarea").val(); //Retrieving text from textarea.
    $("div#boxId").html(text); //Adding it to the box.
});
//On click move text to div.
$("#button").click(function () { //When button is clicked.
    let text2 = $("textarea#textarea2").val(); //Text is retrieved.
    $("#boxId2").html(text2); //And moved to the box.
});

//On click move INPUT text, from textarea, after paragraph.
$("#button3").click(function () {
    let text3 = $("#textarea3").val(); //Retrieving text from textarea.
    $("<p></p>").html(text3).insertAfter("p.myParagh").css("color", "red"); //Adding it to the box.
    //the new element created - the text inside of it - the location where it'll be inserted.
});