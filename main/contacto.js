function send(event) {
    event.preventDefault();           
    Email.send({
      name:document.getElementById('nombre').value,    
      Host : "smtp.gmail.com",
      Username : "enviarcorreop@gmail.com",
      Password : "opgocvyrixcflgqv",
      To : "recepcion@centrodecardiologiadeantigua.com",
      From : document.getElementById('email').value,
      Subject : document.getElementById('nombre').value,
      Body : document.getElementById('asunto').value
      }).then(function(response){ 
       if (response == 'OK') {              
           alert("Recibimos tu correo, te responderemos lo más pronto posible.");
        } else {
            throw new Error("Error: " + response.statusText);
        } 
     });

}   