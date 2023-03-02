// Random Health Tip Card JavaScript for Random Health Tip Card Page (Inside Explore) Starting
// Wait for the page to finish loading before running the code
// $(document).ready(function () {
//   const tips = [
//     "Stay hydrated by drinking plenty of water throughout the day",
//     "Eat a well-balanced diet rich in fruits, vegetables, and lean proteins",
//     "Take regular prenatal vitamins as recommended by your healthcare provider",
//     "Get plenty of rest and prioritize sleep",
//     "Exercise regularly with low-impact activities like walking or prenatal yoga",
//     "Avoid alcohol, tobacco, and drugs during pregnancy",
//     "Attend all scheduled prenatal appointments with your healthcare provider",
//     "Practice stress-management techniques like meditation or deep breathing",
//     "Educate yourself on the signs and symptoms of preterm labor",
//     "Prepare for labor and delivery by taking childbirth education classes",
//     "Ask for help and support from friends, family, or a mental health professional if needed",
//   ];

//   $("#tip-button").click(function () {
//     const randomIndex = Math.floor(Math.random() * tips.length);
//     $("#tip-text").text(tips[randomIndex]);
//   });
// });
// Random Health Tip Card JavaScript for Random Health Tip Card Page (Inside Explore) Ending

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
