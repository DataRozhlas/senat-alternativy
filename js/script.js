var uid = new Date().getTime() + '_' + Math.floor((Math.random() * 1000) + 1);

function janecekCall() {

  var plusJanecci = 0,
      minusJanecci = 0;

  for(var i = 0; i < 9; i++) {
    if(document.getElementsByClassName("janecekplus")[i].checked) {
      plusJanecci++;
    }
    if(document.getElementsByClassName("janecekminus")[i].checked) {
      minusJanecci++;
    }
  }

  if((plusJanecci < 2) && (minusJanecci < 1)) {
    for(var i = 0; i < 9; i++) {
      if (!document.getElementsByClassName("janecekminus")[i].checked) {
        document.getElementsByClassName("janecekminus")[i].disabled = true;
      }
      document.getElementsByClassName("janecekplus")[i].disabled = false;
    }
  }

  if((plusJanecci == 2) && (minusJanecci < 1)) {
    for(var i = 0; i < 9; i++) {
      if (!document.getElementsByClassName("janecekplus")[i].checked) {
        document.getElementsByClassName("janecekplus")[i].disabled = true;
      } else {
        document.getElementsByClassName("janecekplus")[i].disabled = false;
      }
      document.getElementsByClassName("janecekminus")[i].disabled = false;
    }
  }

  if((plusJanecci == 2) && (minusJanecci == 1)) {
    for(var i = 0; i < 9; i++) {
      if (!document.getElementsByClassName("janecekminus")[i].checked) {
        document.getElementsByClassName("janecekminus")[i].disabled = true;
      }
      document.getElementsByClassName("janecekplus")[i].disabled = true;
    }
  }
}

function hlasovani(system) {

  var vysledky = [];

  vysledky[0] = system;

  var text = "Děkujeme za hlasování"

  for(var i = 0; i < 9; i++) {
    if(system == 'alternativni') {
      vysledky[i+1] = document.getElementsByClassName(system)[i].value;
      var button = document.getElementById("hlasovaniAlternativni");
    } else if (system == 'approval') {
      vysledky[i+1] = +(document.getElementsByClassName(system)[i].checked)
      var button = document.getElementById("hlasovaniApproval");
    } else if (system == 'janecek') {
      vysledky[i+1] = +(document.getElementsByClassName('janecekplus')[i].checked);
      vysledky[i+1] = +(document.getElementsByClassName('janecekminus')[i].checked);
      var button = document.getElementById("hlasovaniJanecek");
    }
  }

  button.innerHTML = text;
  button.disabled = true;
  button.style.opacity = 0.5;

  $.ajax({
    url: encodeURI('https://mzj6uoe3y2.execute-api.eu-central-1.amazonaws.com/prod?vals=' + JSON.stringify({ 
      "uid": uid, "results": vysledky
    })),
    type: "GET",
    crossDomain: !0,
    headers: {
      'Content-Type': 'application/json'
    },
    dataType: "json",
    success: function (response) {
      return
    }
  });
}