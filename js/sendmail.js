function emailSend() {
  var username = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "binary2ai@gmail.com",
    Password: "2B31BA6F4880E56DD2C730B737D55C02789F",
    To: "sarmankhanom1979@gmail.com",
    From: "binary2ai@gmail.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
