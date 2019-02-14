// Holt aktuellen Monat
var today = new Date();
var months = ["Januar", "Februar", "März", "April",
              "Mai", "Juni", "Juli", "August",
              "September", "Oktober", "November", "Dezember"];
var aktMonat = today.getMonth();
document.getElementById("current-month").classList.add("aktueller--monat");
document.getElementById("current-month").innerHTML = months[aktMonat];

// 31. Dezember des vergangenen Jahres
var start = new Date(today.getFullYear(), 0, 0);
// Errechnet Anzahl vergangener Tage bis heute
var todayDay = Math.floor((today - start) / (1000 * 60 * 60 * 24)) - 1;

var einJahr = 365
// Schaltjahr ja oder nein
if (today.getFullYear() % 4 === 0) {
  einJahr = 366;
  sJahr = true;
} else {
  sJahr = false;
}

var alleTage = [];
var i = 0;
var weekday  = start.getDay() + 1; // 1. Januar des Jahres als Wochentag
// Teilt jedem Tag im Jahr den Wochentag zu
while (i < einJahr) {
  var days = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
  alleTage[i] = days[weekday];
  i++;
  weekday++;
  if (weekday == 7) {
    weekday = 0;
  }
}

switch(aktMonat) {
  case 0:  m = 31; startDay =   0; break;
  case 1:  if (sJahr) {m = 29; startDay =  31; } else {m = 28; startDay = 31;}; break;
  case 2:  m = 31; startDay =  59; break;
  case 3:  m = 30; startDay =  90; break;
  case 4:  m = 31; startDay = 120; break;
  case 5:  m = 30; startDay = 151; break;
  case 6:  m = 31; startDay = 181; break;
  case 7:  m = 31; startDay = 212; break;
  case 8:  m = 30; startDay = 243; break;
  case 9:  m = 31; startDay = 273; break;
  case 10: m = 30; startDay = 304; break;
  case 11: m = 31; startDay = 334; break;
}
// Bei einem Schaltjahr ist der Starttag jedes Monates nach dem Febrar + 1
if (aktMonat > 1 && sJahr) {
  startDay + 1;
}

// Welcher Wochentag hat der erste Tag des Monats
sd = days.indexOf(alleTage[startDay])
var weekdaycounter = 0;
while (sd != 1) {
  // Wenn der erste Tag im Monat ein Sonntag ist
  if (sd == 0) {
    var count = 1;
    while (count < 7) {
      var newDiv = document.createElement("div");
      newDiv.textContent = "&nbsp;";
      newDiv.classList.add("tag", "unused");
      document.getElementById("cal--tage").appendChild(newDiv);
      count++;
      weekdaycounter++;
    }
    break;
  }

  var newDiv = document.createElement("div");
  newDiv.textContent = "&nbsp;";
  newDiv.classList.add("tag", "unused");
  document.getElementById("cal--tage").appendChild(newDiv);
  weekdaycounter++;
  sd--;
}
var x = 1;
while (x <= m) {
  var newDiv = document.createElement("div");
  newDiv.textContent = x;
  newDiv.classList.add("tag", "used");
  document.getElementById("cal--tage").appendChild(newDiv);
  if (startDay - 1 + x == todayDay) {
    newDiv.classList.add("current-day");
  }
  x++;
  weekdaycounter++;
  if (weekdaycounter %7 === 0) {
    newDiv.classList.add("sonntag");
    document.getElementById("cal--tage").appendChild(document.createElement("br"));
  }
}
while (!(weekdaycounter %7 === 0)) {
  var newDiv = document.createElement("div");
  newDiv.textContent = "&nbsp;";
  newDiv.classList.add("tag", "unused");
  document.getElementById("cal--tage").appendChild(newDiv);
  weekdaycounter++;
}

var tempM = aktMonat;
function monthChange(changeValue) {
  if (changeValue == 1) { tempM++; }
  if (changeValue == 0) { tempM--; }

  if (tempM <  0) { tempM+=1; }
  if (tempM > 11) { tempM-=1; }

  newMonth(tempM)
}
function newMonth(tempM) {
  document.getElementById("cal--tage").remove();

  var firstStep = document.createElement("div");
  firstStep.id = "cal--tage";
  document.getElementsByTagName("BODY")[0].appendChild(firstStep);

  // Holt aktuellen Monat
  var today = new Date();
  var months = ["Januar", "Februar", "März", "April",
                "Mai", "Juni", "Juli", "August",
                "September", "Oktober", "November", "Dezember"];
  var aktMonat = tempM
  document.getElementById("current-month").innerHTML = months[aktMonat];

  var start = new Date(today.getFullYear(), 0, 0);
  var todayDay = Math.floor((today - start) / (1000 * 60 * 60 * 24)) - 1;
  var einJahr = 365
  if (today.getFullYear() % 4 === 0) {
    einJahr = 366;
    sJahr = true;
  } else {
    sJahr = false;
  }

  var alleTage = [];
  var i = 0;
  var weekday  = start.getDay() + 1; // 1. Januar des Jahres als Wochentag
  while (i < einJahr) {
    var days = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
    alleTage[i] = days[weekday];
    i++;
    weekday++;
    if (weekday == 7) {
      weekday = 0;
    }
  }

  switch(aktMonat) {
    case 0:  m = 31; startDay =   0; break;
    case 1:  if (sJahr) {m = 29; startDay =  31; } else {m = 28; startDay = 31;}; break;
    case 2:  m = 31; startDay =  59; break;
    case 3:  m = 30; startDay =  90; break;
    case 4:  m = 31; startDay = 120; break;
    case 5:  m = 30; startDay = 151; break;
    case 6:  m = 31; startDay = 181; break;
    case 7:  m = 31; startDay = 212; break;
    case 8:  m = 30; startDay = 243; break;
    case 9:  m = 31; startDay = 273; break;
    case 10: m = 30; startDay = 304; break;
    case 11: m = 31; startDay = 334; break;
  }
  if (aktMonat > 1 && sJahr) {
    startDay + 1;
  }

  var x = 1;
  sd = days.indexOf(alleTage[startDay])
  var weekdaycounter = 0;
  while (sd != 1) {
    if (sd == 0) {
      var count = 1;
      while (count < 7) {
        var newDiv = document.createElement("div");
        newDiv.textContent = "&nbsp;";
        newDiv.classList.add("tag", "unused");
        document.getElementById("cal--tage").appendChild(newDiv);
        count++;
        weekdaycounter++;
      }
      break;
    }

    var newDiv = document.createElement("div");
    newDiv.textContent = "&nbsp;";
    newDiv.classList.add("tag", "unused");
    document.getElementById("cal--tage").appendChild(newDiv);
    weekdaycounter++;
    sd--;
  }
  while (x <= m) {
    var newDiv = document.createElement("div");
    newDiv.textContent = x;
    newDiv.classList.add("tag", "used");
    document.getElementById("cal--tage").appendChild(newDiv);
    if (startDay - 1 + x == todayDay) {
      newDiv.classList.add("current-day");
    }
    x++;
    weekdaycounter++;
    if (weekdaycounter %7 === 0) {
      newDiv.classList.add("sonntag");
      document.getElementById("cal--tage").appendChild(document.createElement("br"));
    }
  }
  while (!(weekdaycounter %7 === 0)) {
    var newDiv = document.createElement("div");
    newDiv.textContent = "&nbsp;";
    newDiv.classList.add("tag", "unused");
    document.getElementById("cal--tage").appendChild(newDiv);
    weekdaycounter++;
  }
  if (aktMonat == today.getMonth()) {
    document.getElementById("current-month").classList.add("aktueller--monat");
  } else {
    document.getElementById("current-month").classList.remove("aktueller--monat");
  }
}
