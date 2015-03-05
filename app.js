"use strict";
$( document ).ready(function() {
  var count = 0;

    $(".square").click(function () {
      count += 1;

      if (count % 2 == 0) {
        $(this).html("X");
      } else {
        $(this).html("O");
      }
    });

    $("#1").click(function () {

      if ($(this).html == "X" || $(this).html == "O") {
        console.log("fart");
      }
    });

    // $( "#1" ).click(function( event ) {
    //     $('#1').html("X");
    // });
    //
    // $( "#2" ).click(function( event ) {
    //     $('#2').html("X");
    // });
    //
    // $( "#3" ).click(function( event ) {
    //     $('#3').html("X");
    // });
    //
    // $( "#4" ).click(function( event ) {
    //     $('#4').html("X");
    // });
    //
    // $( "#5" ).click(function( event ) {
    //     $('#5').html("X");
    // });
    //
    // $( "#6" ).click(function( event ) {
    //     $('#6').html("X");
    // });
    //
    // $( "#7" ).click(function( event ) {
    //     $('#7').html("X");
    // });
    //
    // $( "#8" ).click(function( event ) {
    //     $('#8').html("X");
    // });
    //
    // $( "#9" ).click(function( event ) {
    //     $('#9').html("X");
    // });

});
