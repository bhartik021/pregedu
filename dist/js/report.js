riskstatus = sessionStorage.getItem("risklevel");
recommend=""
suggestion=""
if (riskstatus == "low risk") {
  suggestion = "You have";
  recommend =
    "Low-risk pregnancy care guidelines include regular prenatal checkups, a healthy diet, regular exercise, and avoiding smoking, alcohol, and drugs. It is also important to take prenatal vitamins and get enough rest. If you have any questions or concerns, you should talk to your healthcare provider";
}
if (riskstatus == "mid risk") {
  suggestion =
    "Alert! Visit your doctor as soon as possible. Your health score is";
  recommend = "You have";
  ("Medium-risk pregnancy care guidelines include regular prenatal checkups, a healthy diet, regular exercise, and avoiding smoking, alcohol, and drugs. It is also important to take prenatal vitamins and get enough rest. If you have any questions or concerns, you should talk to your healthcare provider.");
}
if (riskstatus == "high risk") {
  suggestion =
    "Alert! Visit your doctor as soon as possible. Your health score is";
  recommend =
    "High-risk pregnancy care guidelines include more frequent prenatal visits and closer monitoring. If your condition is serious enough, you may even be referred to a maternal-fetal medicine (MFM) doctor for your care and treatment";
}
// document.getElementById("recommendation-heading-id").textContent=suggestion
document.getElementById("risklevel").textContent = riskstatus;
document.getElementById("recommend").textContent = recommend;
document.getElementById("recommendation-heading-id").textContent = suggestion;
