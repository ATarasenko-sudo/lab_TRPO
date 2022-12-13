
function getName() {
  return localStorage.getItem("arrival");
}

function updateHTML() {
  var name = getName();
  let input = name;
  alert(input)
}

function myFunction() {
  // Gets input value
  var arrival = document.getElementById("arrival").value;
  var departure = document.getElementById("departure").value;
  
  var checkin = document.getElementById("checkin-date").value;
  var checkout = document.getElementById("checkout-date").value;
  
  
  var transport = document.getElementById("room-selection");
  var value = transport.options[transport.selectedIndex].text;
  
  // Saves data to retrieve later
  
  var values = {"arrival":arrival, "departure":departure, "arrivalDate":checkin,"departureDate":checkout,"transportType":value};
  var data = JSON.stringify(values);
  
  fetch('127.0.0.1:5000/apitest', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
})
.then(response => response.json())
.then(response => console.log(JSON.stringify(response)))
  //var httpRequest = new XMLHttpRequest();
  //httpRequest.open('POST', 'apitest');
  //httpRequest.send(data);

  
  
  
  // Updates HTML
  updateHTML();
}
