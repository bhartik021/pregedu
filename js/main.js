document.querySelectorAll(".nav-links").forEach((link) => {
    if (link.href === window.location.href) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
    }else {
        link.classList.remove("active");
        link.setAttribute("aria-current", "page");
    }
});


// Wait for the page to finish loading before running the code
$(document).ready(function() {
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
      "Ask for help and support from friends, family, or a mental health professional if needed"
    ];
  
    $("#tip-button").click(function() {
      const randomIndex = Math.floor(Math.random() * tips.length);
      $("#tip-text").text(tips[randomIndex]);
    });
  });
  