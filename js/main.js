// Nav Link Active JavaScript Starting
document.querySelectorAll(".nav-links").forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  } else {
    link.classList.remove("active");
    link.setAttribute("aria-current", "page");
  }
});
// Nav Link Active JavaScript Ending

// Random Health Tip Card JavaScript for Random Health Tip Card Page (Inside Explore) Starting
// Wait for the page to finish loading before running the code
$(document).ready(function () {
  const tips = [
    "Stay hydrated by drinking plenty of water throughout the day",
    "Eat a well-balanced diet rich in fruits, vegetables, and lean proteins",
    "Take regular prenatal vitamins as recommended by your healthcare provider",
    "Get plenty of rest and prioritize sleep",
    "Exercise regularly with low-impact activities like walking or prenatal yoga",
    "Avoid alcohol, tobacco, and drugs during pregnancy",
    "Attend all scheduled prenatal appointments with your healthcare provider",
    "Practice stress-management techniques like meditation or deep breathing",
    "Educate yourself on the signs and symptoms of preterm labor",
    "Prepare for labor and delivery by taking childbirth education classes",
    "Ask for help and support from friends, family, or a mental health professional if needed",
  ];

  $("#tip-button").click(function () {
    const randomIndex = Math.floor(Math.random() * tips.length);
    $("#tip-text").text(tips[randomIndex]);
  });
});
// Random Health Tip Card JavaScript for Random Health Tip Card Page (Inside Explore) Ending

// Accordian JavaScript For FAQ Page Starting
const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  const header = accordion.querySelector(".accordion-header");
  const body = accordion.querySelector(".accordion-body");

  header.addEventListener("click", () => {
    accordion.classList.toggle("active");
    if (accordion.classList.contains("active")) {
      body.style.maxHeight = body.scrollHeight + "px";
    } else {
      body.style.maxHeight = 0;
    }
  });
});
// Accordian JavaScript For FAQ Page Ending
