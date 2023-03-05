//SMTP JS
function sendEmail() {
  var name = $("#name").val();
  var email = $("#email").val();
  var subject = $("#subject").val();
  var message = $("#message").val();

  var Body =
    "Name: " +
    name +
    "<br/>Email: " +
    email +
    "<br/>Subject: " +
    subject +
    "<br/>Message: " +
    message;

  Email.send({
    SecureToken: "3b44b1b4-22d0-42b8-a2a3-2b837b25c1d5",
    To: "education.preg@gmail.com",
    From: document.getElementById("email").value,
    Subject: "This is the subject" + name,
    Body: Body,
  }).then((message) => {
    if (message == "OK") {
      alert("Your message has been sent successfully!");
    } else {
      alert("There is error at sending message!");
    }
  });
}


