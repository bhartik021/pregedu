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

// Google Translate JS
function loadGoogleTranslate() {
  new google.translate.TranslateElement("google_element");
}

// Reading Time JS
// Calculate Read Time Function
function calculateReadingTime() {
  const text = document.getElementById("article").innerText;
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  document.getElementById("time").innerText = time;
}
calculateReadingTime();

// Function to open the chatbot
function openChat() {
  // create chatbot container
  var chatbotContainer = document.createElement("div");
  chatbotContainer.classList.add("chatbot-container");

  // create close button
  var closeButton = document.createElement("button");
  closeButton.innerHTML = "&times;";
  closeButton.classList.add("close-button");
  closeButton.addEventListener("click", function () {
    chatbotContainer.style.display = "none";
  });

  // create chatbot iframe
  var chatbotIframe = document.createElement("iframe");
  chatbotIframe.setAttribute(
    "src",
    "https://console.dialogflow.com/api-client/demo/embedded/ca15b9b8-4dcc-45b8-a32a-74170736b9af"
  );

  // append close button and chatbot iframe to chatbot container
  chatbotContainer.appendChild(closeButton);
  chatbotContainer.appendChild(chatbotIframe);

  // append chatbot container to page body
  document.body.appendChild(chatbotContainer);
}

//Table JS
function myTableFunction() {
  document.getElementById("table").style.borderCollapse = "collapse";
}

// Filter Table Function
function filterTable() {
  var input = document.getElementById("filter");
  var filter = input.value.toUpperCase();
  var rows = document.getElementsByTagName("tr");

  for (var i = 1; i < rows.length; i++) {
    var country = rows[i].getElementsByTagName("td")[2];
    if (country) {
      var text = country.textContent.toUpperCase();
      if (text.indexOf(filter) > -1) {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none";
      }
    }
  }
}

// add filter functionality on table
var filterInput = document.createElement("input");
filterInput.setAttribute("type", "text");
filterInput.setAttribute("id", "filter");
filterInput.setAttribute("placeholder", "Enter a country name...");
document.body.insertBefore(
  filterInput,
  document.getElementsByTagName("table")[0]
);

var filterButton = document.createElement("button");
filterButton.setAttribute("onclick", "filterTable()");
filterButton.innerHTML = "Filter";
document.body.insertBefore(
  filterButton,
  document.getElementsByTagName("table")[0]
);
