// Griglia 6x6, ad ogni click parte una
// richiesta AJAX che prende un
// numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro
// del quadrato
$(document).ready(function() {

  var source = $("#square-template").html();
  var template = Handlebars.compile(source);

  for(var i = 1; i <= 36; i++ ) {
    var html = template();
    $(".wrapper").append(html);
  }

  $(".square").click(function() {

  var square = $(this);

  if(!square.hasClass("green") && !square.hasClass("yellow")) {
    $.ajax(
      {
        "url": "https://flynn.boolean.careers/exercises/api/random/int",
        "method": "GET",
        "success": function (data, status) {

          var numberRandom = data.response;

          if(numberRandom <= 5) {
            square.addClass("yellow");
            // Se è <= 5 il quadrato diventa giallo,
          } else {
            square.addClass("green");
            // se è > di 5 il quadrato diventa verde.
          }

          square.text(numberRandom);

        },
        "error": function (richiesta, stato, errori) {
          alert("E' avvenuto un errore. " + errori);
        }
      }
    );

  } else {
    alert("hai già cliccato su questo quadrat!!");
  }


  });

});
