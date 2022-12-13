async function myFunction() {
  // Gets input value
  var arrival = document.getElementById("arrival").value;
  var departure = document.getElementById("departure").value;
  
  var checkin = document.getElementById("checkin-date").value;
  var checkout = document.getElementById("checkout-date").value;
  
  
  var transport = document.getElementById("room-selection");
  var value = transport.options[transport.selectedIndex].text;
  
  // Saves data to retrieve later
  
  let values = {"arrival": arrival};
  //var data = JSON.stringify(values);
  
 
  let response = await fetch('http://127.0.0.1:5001/apitest', {
    credentials: 'include',
    method: 'POST',
    mode: 'no-cors',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': 'http://127.0.0.1:5001/apitest',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET, DELETE, HEAD, OPTIONS',
    },
    body: JSON.stringify(values)

})  

  
}