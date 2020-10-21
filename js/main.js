/*************************************
 * BIGLIETTO TRENO
 *************************************/

/**
 * REFERENZA ELEMENTI
 */

var ticket = document.getElementById('ticket');
var btnGenera = document.getElementById('btnGenera');
var btnAnnulla = document.getElementById('btnAnnulla');

/**
* Eventi
**/

//Calcolo biglietto
btnGenera.addEventListener('click', function() {
  //Dati utente
  var name = document.getElementById('name').value;
  var kilometres = document.getElementById('kilometres').value;
  var ageRange = document.getElementById('age-range').value;

  //Costo e offerta biglietto
  var priceKm = 0.21
  var costTicket = priceKm * kilometres
  var offer = 'Biglietto Standard'

  //Ulteriore offerta
  if (ageRange === 'underage') {
      costTicket -= costTicket * 0.2;
      offer = 'Sconto Minorenni';
  } else if (ageRange === 'over65') {
      costTicket -= costTicket * 0.4;
      offer = 'Sconto Over65';
  }

//Output
costTicket = costTicket.toFixed(2) + '€';

var numberPassengerCar = Math.floor ( Math.random() * 10 ) + 1;

//Da 90000 a 100000 escluso
var codeCp = Math.floor ( Math.random() * (100000 - 90000) ) + 90000;

document.getElementById('passenger-name').innerHTML = name;
document.getElementById('offer-applied').innerHTML = offer;
document.getElementById('passenger-car').innerHTML = numberPassengerCar;
document.getElementById('code-cp').innerHTML = codeCp;
document.getElementById('cost').innerHTML = costTicket;

//Rendere visibile il biglietto
ticket.className = 'show';
});

//Reset biglietto
btnAnnulla.addEventListener('click', function(){
  ticket.className = 'hidden';

  //Input
  document.getElementById('name').value = '';
  document.getElementById('kilometres').value = '';
  document.getElementById('age-range').value = '';

  //Valori biglietto
  document.getElementById('passenger-name').innerHTML = '';
  document.getElementById('offer-applied').innerHTML = '';
  document.getElementById('passenger-car').innerHTML = '';
  document.getElementById('code-cp').innerHTML = '';
  document.getElementById('cost').innerHTML = '';
});
