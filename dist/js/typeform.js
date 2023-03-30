let error = document.getElementById("validate");
let label = document.getElementsByTagName("label");
personhealth = {};
// calculate age
document.getElementById("agebtn").onclick = function () {
  let value = document.getElementById("ageinput").value;
  if (value != null) {
    personhealth.age = value;
  }
  next("age", "temp", "ageinput");
};

// calculate body temp
document.getElementById("tempbtn").onclick = function () {
  let value = document.getElementById("tempinput").value;
  if (value != null) {
    personhealth.temp = value;
  }
  next("temp", "isdiabetes", "tempinput");
};
// if diagnosed with diabetes before
document.getElementById("isdiabetesbtn").onclick = function () {
  var radioButton = document.getElementById("isdiabetes-yes");
  if (radioButton.checked == true) {
    next("isdiabetes", "pickbs", "isdiabetes-yes");
  } else {
    next("isdiabetes", "diabetessymp", "isdiabetes-no");
  }
};
// if diagnosed with bp
document.getElementById("isbpbtn").onclick = function () {
  var radiobtn = document.getElementById("isbp-yes").checked;
  if (radiobtn) {
    next("isbp", "picksbp", "isbp-yes");
  } else {
    next("isbp", "sbpsymp", "isbp-no");
  }
};
// if symptoms of diabetes are there
document.getElementById("diabetessympbtn").onclick = function () {
  var radiobtn = document.getElementById("isdiabetessymp-yes").checked;
  if (radiobtn) {
    personhealth.bs = 10;
  } else {
    personhealth.bs = 6.7;
  }

  next("diabetessymp", "isbp", "isdiabetessymp-yes");
};
// pick bs level
document.getElementById("pickbsbtn").onclick = function () {
  let value = document.getElementById("bslevel").value;
  if (value != null) {
    personhealth.bs = value;
  }
  next("pickbs", "isbp", "bslevel");
};
// symptoms of dbp
document.getElementById("sympbtn").onclick = function () {
  let value = document.getElementById("isheadache-yes").checked;
  if (value) {
    personhealth.dbp = 60;
  } else {
    personhealth.dbp = 80;
  }
  next("symp", "isbp", "isdiabetessymp-yes");
};
// pick sbp
document.getElementById("picksbpbtn").onclick = function () {
  let value = document.getElementById("sbplevel").value;
  if (value != null) {
    personhealth.sbp = value;
  }

  next("picksbp", "pickdbp", "sbplevel");
};
// pick dbp
document.getElementById("pickdbpbtn").onclick = function () {
  personhealth.dbp = document.getElementById("dbplevel").value;
  next("pickdbp", "isheartrateknown", "dbplevel");
};
// symp of sbp
document.getElementById("sbpsympbtn").onclick = function () {
  var radioButton = document.getElementById("issbp-yes").checked;
  if (radioButton) {
    personhealth.sbp = 140;
  } else {
    personhealth.sbp = 120;
  }

  next("sbpsymp", "isheartrateknown", "issbp-yes");
};
// is heart rate known
document.getElementById("isheartrateknownbtn").onclick = function () {

  var btn = document.getElementById("isheartrateknown-yes").checked;
  if (btn) {
    next("isheartrateknown", "pickheartrate", "isheartrateknown-yes");
  } else {
    next("isheartrateknown", "heartratesymp", "isheartrateknown-no");
  }
};
document.getElementById("submitbtnheartrateknown").onclick = function () {
  let v = document.getElementById("heartrate").value;
  personhealth.heartrate = v;
  console.log(personhealth);
  getresult(personhealth);
};
// submit button when heart symptom are there
document.getElementById("submitbtnheartsymp").onclick = function () {
  let v = document.getElementById("isheartrate-yes").checked;
  if (v) {
    personhealth.heartrate = 110;
  } else {
    personhealth.heartrate = 79;
  }
  console.log(personhealth);
  getresult(personhealth);
};
// pick the value of heart rate

///////////////////////////////////////////////////listeners/////////////////////////////////////////

function previous(from, to) {
  error.innerHTML = "";
  console.log();
  document.getElementById(from).classList.remove("is-visible");
  document.getElementById(to).classList.add("is-visible");
}

function next(from, to, val) {
  error.innerHTML = "";
  let value = document.getElementById(val).value;

  if (value != "") {
    error.innerHTML = "";
    document.getElementById(from).classList.remove("is-visible");
    document.getElementById(to).classList.add("is-visible");
  } else {
    error.innerHTML = "Enter the Value of field";
  }
}

function getresult(obj) {
  const data = {
    Age: obj.age,
    SystolicBP: obj.sbp,
    DiastolicBP: obj.dbp,
    BS: obj.bs,
    BodyTemp: obj.temp,
    HeartRate: obj.heartrate,
  };

const options = {
  method: "POST",
  url: "http://35.239.45.225:80/api/getresult",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
};
    fetch("http://35.239.45.225:80/api/getresult", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.risklevel)
        sessionStorage.setItem("risklevel", response.risklevel);
        window.location.href = "../../report.html";
      })
      .catch((err) => console.error(err));
  }

// 1970;
