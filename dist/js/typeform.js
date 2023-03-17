let error = document.getElementById("validate");
let label = document.getElementsByTagName("label");

//
document.getElementById("agebtn").onclick = function () {
  next("age", "isdiabetes", "ageinput");
};
document.getElementById("isdiabetesbtn").onclick = function () {
  var radioButton = document.getElementById("isdiabetes-yes");
  if (radioButton.checked == true) {
    next("isdiabetes", "pickbs", "isdiabetes-yes");
  } else {
    next("isdiabetes", "diabetessymp", "isdiabetes-no");
  }
};

document.getElementById("diabetessympbtn").onclick = function () {
  next("diabetessymp", "symp", "isdiabetessymp-yes");
};
document.getElementById("pickbsbtn").onclick = function () {
  next("pickbs", "symp", "bslevel");
};

document.getElementById("sympbtn").onclick = function () {
  next("symp", "isbp", "isdiabetessymp-yes");
};
document.getElementById("isbpbtn").onclick = function () {
  var radiobtn = document.getElementById("isbp-yes").checked;
  if (radiobtn) {
    next("isbp", "picksbp", "isbp-yes");
  } else {
    next("isbp", "sbpsymp", "isbp-no");
  }
};
document.getElementById("picksbpbtn").onclick = function () {
  next("picksbp", "pickdbp", "sbplevel");
};
document.getElementById("pickdbpbtn").onclick = function () {
  next("pickdbp", "isheartrateknown", "dbplevel");
};

document.getElementById("sbpsympbtn").onclick = function () {
  next("sbpsympbtn", "isheartrateknown", "issbp-yes");
};
document.getElementById("isheartrateknownbtn").onclick = function () {
  alert("yes");
  var btn = document.getElementById("isheartrateknown-yes").checked;
  if (btn) {
    next("isheartrateknown", "pickheartrate", "isheartrateknown-yes");
  } else {
    next("isheartrateknown", "heartratesymp", "isheartrateknown-no");
  }
};

////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById("age").addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    next("age", "isdiabetes", "ageinput");
  }
});

document
  .getElementById("isdiabetes-yes")
  .addEventListener("keyup", function () {
    if (e.keyCode === 13) {
      e.preventDefault();
      var radioButton = document.getElementById("isdiabetes-yes");
      if (radioButton.checked == true) {
        next("isdiabetes", "pickbs", "isdiabetes-yes");
      } else {
        next("isdiabetes", "diabetessymp", "isdiabetes-no");
      }
    }
  });

document
  .getElementById("diabetessympbtn")
  .addEventListener("keyup", function () {
    if (e.keyCode === 13) {
      next("diabetessymp", "symp", "isdiabetessymp-yes");
    }
  });
document.getElementById("pickbs").addEventListener("keyup", function () {
  if (e.keyCode === 13) {
    next("pickbs", "symp", "bslevel");
  }
});

document.getElementById("symp").addEventListener("keyup", function () {
  if (e.keyCode === 13) {
    next("symp", "isbp", "isdiabetessymp-yes");
  }
});
document.getElementById("isbp").addEventListener("keyup", function () {
  if (e.keyCode === 13) {
    var radiobtn = document.getElementById("isbp-yes").checked;
    if (radiobtn) {
      next("isbp", "picksbp", "isbp-yes");
    } else {
      next("isbp", "sbpsymp", "isbp-no");
    }
  }
});
document.getElementById("picksbp").addEventListener("keyup", function () {
  if (e.keyCode === 13) {
    next("picksbp", "pickdbp", "sbplevel");
  }
});
document.getElementById("pickdbp").addEventListener("keyup", function () {
  if (e.keyCode === 13) {
    next("pickdbp", "isheartrateknown", "dbplevel");
  }
});

document.getElementById("sbpsymp").addEventListener("keyup", function () {
  if (e.keyCode === 13) {
    next("sbpsympbtn", "isheartrateknown", "issbp-yes");
  }
});
document
  .getElementById("isheartrateknown")
  .addEventListener("keyup", function () {
    if (e.keyCode === 13) {
      var btn = document.getElementById("isheartrateknown-yes").checked;
      if (btn) {
        next("isheartrateknown", "pickheartrate", "isheartrateknown-yes");
      } else {
        next("isheartrateknown", "heartratesymp", "isheartrateknown-no");
      }
    }
  });

function next(from, to) {
  error.innerHTML = "";
  let value = document.getElementById(from).children[1].value;
  if (!value || value === "") {
    error.innerHTML = "Please enter a value";
  } else {
    error.innerHTML = "";
    document.getElementById(from).classList.remove("is-visible");
    document.getElementById(to).classList.add("is-visible");
  }
}

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
