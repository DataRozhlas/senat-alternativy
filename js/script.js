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

$(function () {

    Highcharts.setOptions({
            lang: {
                months: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],
                weekdays: ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'],
                shortMonths: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],
                thousandsSep: '',
                decimalPoint:',',
                rangeSelectorZoom: 'Zobrazit'
            }
        });

var datatrebic12 = [
// 1. kolo
  ["Miroslav Michálek, ANO", "Miroslav Michálek, ANO ", 66],
  ["Michal Šalomoun, Piráti", "Michal Šalomoun, Piráti", 0],
  ["Hana Žáková, STAN", "Hana Žáková, STAN ", 64],
  ["Michal Šalomoun, Piráti", "Michal Šalomoun, Piráti ", 65],
  ["Marie Dudíková, KDU-ČSL", "Marie Dudíková, KDU-ČSL ", 45],
  ["Marek Nevoral, KSČM", "Marek Nevoral, KSČM ", 32],
  ["Stanislav Zíma, Nezávislý kandidát", "Stanislav Zíma, Nezávislý kandidát ", 28],
  ["Naděžda Dobešová, ČSSD", "Naděžda Dobešová, ČSSD ", 26],
  ["Petr Paul, SPD", "Petr Paul, SPD ", 22],
  ["Vladimír Kotek, Rozumní", "Naděžda Dobešová, ČSSD ", 5],
  ["Vladimír Kotek, Rozumní", "Miroslav Michálek, ANO ", 4],
  ["Vladimír Kotek, Rozumní", "Stanislav Zíma, Nezávislý kandidát ", 3],
  ["Vladimír Kotek, Rozumní", "Hana Žáková, STAN ", 2],
  ["Vladimír Kotek, Rozumní", "Petr Paul, SPD ", 1],
  ["Vladimír Kotek, Rozumní", "propadlé hlasy ", 1],
// 2. kolo
  ["Michal Šalomoun, Piráti ", "Michal Šalomoun, Piráti  ", 65],
  ["Miroslav Michálek, ANO ", "Miroslav Michálek, ANO  ", 70],
  ["Hana Žáková, STAN ", "Hana Žáková, STAN  ", 66],
  ["Marie Dudíková, KDU-ČSL ", "Marie Dudíková, KDU-ČSL  ", 45],
  ["Marek Nevoral, KSČM ", "Marek Nevoral, KSČM  ", 32],
  ["Stanislav Zíma, Nezávislý kandidát ", "Stanislav Zíma, Nezávislý kandidát  ", 31],
  ["Naděžda Dobešová, ČSSD ", "Naděžda Dobešová, ČSSD  ", 31],
  ["propadlé hlasy ", "propadlé hlasy  ", 1],
  ["Petr Paul, SPD ", "Michal Šalomoun, Piráti  ", 7],
  ["Petr Paul, SPD ", "Marek Nevoral, KSČM  ", 4],
  ["Petr Paul, SPD ", "Stanislav Zíma, Nezávislý kandidát  ", 4],
  ["Petr Paul, SPD ", "propadlé hlasy  ", 8]
];

var datatrebic34 = [
// 3. kolo
  ["Michal Šalomoun, Piráti", "Michal Šalomoun, Piráti", 0],
  ["Miroslav Michálek, ANO", "Miroslav Michálek, ANO ", 70],
  ["Michal Šalomoun, Piráti", "Michal Šalomoun, Piráti ", 72],
  ["Hana Žáková, STAN", "Hana Žáková, STAN ", 66],
  ["Marie Dudíková, KDU-ČSL", "Marie Dudíková, KDU-ČSL ", 45],
  ["Marek Nevoral, KSČM", "Marek Nevoral, KSČM", 0],
  ["Stanislav Zíma, Nezávislý kandidát", "Stanislav Zíma, Nezávislý kandidát ", 35],
  ["Marek Nevoral, KSČM", "Marek Nevoral, KSČM ", 36],
  ["Naděžda Dobešová, ČSSD", "Miroslav Michálek, ANO ", 7],
  ["Naděžda Dobešová, ČSSD", "Marie Dudíková, KDU-ČSL ", 5],
  ["Naděžda Dobešová, ČSSD", "Stanislav Zíma, Nezávislý kandidát ", 5],
  ["Naděžda Dobešová, ČSSD", "Hana Žáková, STAN ", 4],
  ["Naděžda Dobešová, ČSSD", "Michal Šalomoun, Piráti ", 1],
  ["Naděžda Dobešová, ČSSD", "Marek Nevoral, KSČM ", 1],
  ["Naděžda Dobešová, ČSSD", "propadlé hlasy ", 8],
  ["propadlé hlasy", "propadlé hlasy ", 9],
// 4. kolo
  ["Miroslav Michálek, ANO ", "Miroslav Michálek, ANO  ", 77],
  ["Michal Šalomoun, Piráti ", "Michal Šalomoun, Piráti  ", 73],
  ["Hana Žáková, STAN ", "Hana Žáková, STAN  ", 70],
  ["Marie Dudíková, KDU-ČSL ", "Marie Dudíková, KDU-ČSL  ", 50],
  ["Stanislav Zíma, Nezávislý kandidát ", "Stanislav Zíma, Nezávislý kandidát  ", 40],
  ["Marek Nevoral, KSČM ", "Miroslav Michálek, ANO  ", 6],
  ["Marek Nevoral, KSČM ", "Hana Žáková, STAN  ", 5],
  ["Marek Nevoral, KSČM ", "Stanislav Zíma, Nezávislý kandidát  ", 4],
  ["Marek Nevoral, KSČM ", "Michal Šalomoun, Piráti  ", 3],
  ["Marek Nevoral, KSČM ", "Marie Dudíková, KDU-ČSL  ", 1],
  ["Marek Nevoral, KSČM ", "propadlé hlasy  ", 18],
  ["propadlé hlasy ", "propadlé hlasy  ", 17]
];

var datatrebic57 = [
// 5. kolo
  ["Miroslav Michálek, ANO", "Miroslav Michálek, ANO ", 83],
  ["Michal Šalomoun, Piráti", "Michal Šalomoun, Piráti", 0],
  ["Hana Žáková, STAN", "Hana Žáková, STAN ", 75],
  ["Michal Šalomoun, Piráti", "Michal Šalomoun, Piráti ", 76],
  ["Marie Dudíková, KDU-ČSL", "Marie Dudíková, KDU-ČSL ", 51],
  ["Stanislav Zíma, Nezávislý kandidát", "Hana Žáková, STAN ", 11],
  ["Stanislav Zíma, Nezávislý kandidát", "Miroslav Michálek, ANO ", 5],
  ["Stanislav Zíma, Nezávislý kandidát", "Michal Šalomoun, Piráti ", 5],
  ["Stanislav Zíma, Nezávislý kandidát", "Marie Dudíková, KDU-ČSL ", 4],
  ["Stanislav Zíma, Nezávislý kandidát", "propadlé hlasy ", 19],
  ["propadlé hlasy", "propadlé hlasy ", 35],
// 6. kolo
  ["Hana Žáková, STAN ", "Hana Žáková, STAN  ", 86],
  ["Miroslav Michálek, ANO ", "Miroslav Michálek, ANO  ", 88],
  ["Michal Šalomoun, Piráti ", "Michal Šalomoun, Piráti  ", 81],
  ["Marie Dudíková, KDU-ČSL ", "Hana Žáková, STAN  ", 18],
  ["Marie Dudíková, KDU-ČSL ", "Michal Šalomoun, Piráti  ", 8],
  ["Marie Dudíková, KDU-ČSL ", "Miroslav Michálek, ANO  ", 5],
  ["Marie Dudíková, KDU-ČSL ", "propadlé hlasy  ", 24],
  ["propadlé hlasy ", "propadlé hlasy  ", 54],
// 7. kolo
  ["Hana Žáková, STAN  ", "Hana Žáková, STAN   ", 104],
  ["Miroslav Michálek, ANO  ", "Miroslav Michálek, ANO   ", 93],
  ["Michal Šalomoun, Piráti  ", "Hana Žáková, STAN   ", 31],
  ["Michal Šalomoun, Piráti  ", "Miroslav Michálek, ANO   ", 9],
  ["Michal Šalomoun, Piráti  ", "propadlé hlasy   ", 49],
  ["propadlé hlasy  ", "propadlé hlasy   ", 78]
];

var datanodes = [
  {id: 'Miroslav Michálek, ANO', color: '#2C2C60'},
  {id: 'Miroslav Michálek, ANO ', color: '#2C2C60'},
  {id: 'Miroslav Michálek, ANO  ', color: '#2C2C60'},
  {id: 'Miroslav Michálek, ANO   ', color: '#2C2C60'},
  {id: 'Hana Žáková, STAN', color: '#A7CB4B'},
  {id: 'Hana Žáková, STAN ', color: '#A7CB4B'},
  {id: 'Hana Žáková, STAN  ', color: '#A7CB4B'},
  {id: 'Hana Žáková, STAN   ', color: '#A7CB4B'},
  {id: 'Michal Šalomoun, Piráti', color: '#000000'},
  {id: 'Michal Šalomoun, Piráti ', color: '#000000'},
  {id: 'Michal Šalomoun, Piráti  ', color: '#000000'},
  {id: 'Marie Dudíková, KDU-ČSL', color: '#FFDB07'},
  {id: 'Marie Dudíková, KDU-ČSL ', color: '#FFDB07'},
  {id: 'Marie Dudíková, KDU-ČSL  ', color: '#FFDB07'},
  {id: 'Marek Nevoral, KSČM', color: '#FE0000'},
  {id: 'Marek Nevoral, KSČM ', color: '#FE0000'},
  {id: 'Marek Nevoral, KSČM  ', color: '#FE0000'},
  {id: 'Stanislav Zíma, Nezávislý kandidát', color: '#4C4C4C'},
  {id: 'Stanislav Zíma, Nezávislý kandidát ', color: '#4C4C4C'},
  {id: 'Stanislav Zíma, Nezávislý kandidát  ', color: '#4C4C4C'},
  {id: 'Naděžda Dobešová, ČSSD', color: '#FF8E00'},
  {id: 'Naděžda Dobešová, ČSSD ', color: '#FF8E00'},
  {id: 'Naděžda Dobešová, ČSSD  ', color: '#FF8E00'},
  {id: 'Petr Paul, SPD', color: '#0064A5'},
  {id: 'Petr Paul, SPD ', color: '#0064A5'},
  {id: 'Vladimír Kotek, Rozumní', color: '#4CB8C6'},
  {id: 'propadlé hlasy', color: 'grey'},
  {id: 'propadlé hlasy ', color: 'grey'},
  {id: 'propadlé hlasy  ', color: 'grey'},
  {id: 'propadlé hlasy   ', color: 'grey'}
];

Highcharts.chart('trebic12', {

    title: {
        text: 'Alternativní hlasování do Senátu, obvod Třebíč'
    },

    subtitle: {
        text: '1. a 2. kolo přepočtu'
    },

    tooltip: {
    },

    exporting: {
        enabled: false
    },

    credits: {
        href: '',
        text: 'Zdroj: průzkum Medianu'
    },

    plotOptions: {
        series: {
            linkOpacity: 0.2
        }
    },

    series: [{
        keys: ['from', 'to', 'weight'],
        data: datatrebic12,
        nodes: datanodes,
        type: 'sankey',
        name: 'Počet prvních hlasů'
    }]

});

Highcharts.chart('trebic34', {

    title: {
        text: 'Alternativní hlasování do Senátu, obvod Třebíč'
    },

    subtitle: {
        text: '3. a 4. kolo přepočtu'
    },

    tooltip: {
    },

    exporting: {
        enabled: false
    },

    credits: {
        href: '',
        text: 'Zdroj: průzkum Medianu'
    },

    plotOptions: {
        series: {
            linkOpacity: 0.2
        }
    },

    series: [{
        keys: ['from', 'to', 'weight'],
        data: datatrebic34,
        nodes: datanodes,
        type: 'sankey',
        name: 'Počet prvních hlasů'
    }]

});

Highcharts.chart('trebic57', {

    title: {
        text: 'Alternativní hlasování do Senátu, obvod Třebíč'
    },

    subtitle: {
        text: '5. až 7. kolo přepočtu'
    },

    tooltip: {
    },

    exporting: {
        enabled: false
    },

    credits: {
        href: '',
        text: 'Zdroj: průzkum Medianu'
    },

    plotOptions: {
        series: {
            linkOpacity: 0.2
        }
    },

    series: [{
        keys: ['from', 'to', 'weight'],
        data: datatrebic57,
        nodes: datanodes,
        type: 'sankey',
        name: 'Počet prvních hlasů'
    }]

});

});