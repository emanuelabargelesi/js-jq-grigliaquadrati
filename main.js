// Creare una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi
// Sopra alla griglia deve esserci un contatore che conta quanti rossi e quanti verdi sono stati scoperti;




$(document).ready(function() {


  $('.green').one("click", function() {
    $(this).attr('style', 'background-color:green');
    $('#counter').html(function(i, val) {
      return +val + 1
    });
  });

  $('.red').one("click", function() {
    $(this).attr('style', 'background-color:red');
    $('#counter2').html(function(i, val) {
      return +val + 1
    });
  });






});
