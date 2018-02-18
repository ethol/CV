import $ from 'jquery';
function iconRow(faString, hasHalf) {
  return (function (data, type, row, meta) {
    var htmlGod = "<i class='fa " + faString + " fa-2x'></i>";
    var htmlhalf = hasHalf ? "<i class='fa " + faString + "-half-o fa-2x'></i>" : htmlGod;
    var htmlBad = "<i class='fa " + faString + "-o fa-2x'></i>";
    var returner = "<div class='starBar' data-srcVal='" + data + "'>";
    for (var i = 0; i < 5; i++) {
      if (i < data) {

        if (i + 0.5 != data) {
          returner += htmlGod;
        } else {
          returner += htmlhalf;
        }
      } else
        returner += htmlBad
    }
    return returner + "</div>";
  })
}

$.extend($.fn.dataTableExt.oSort, {
  "dataSrcSearch-pre": function (a) {
    return $(a).data().srcval
  },

  "dataSrcSearch-asc": function (a, b) {
    return a - b;
  },

  "dataSrcSearch-desc": function (a, b) {
    return b - a;
  }
});


var prosjektsdt = [{
  name: "Regnskapsportalen",
  url: "",
  desc: "Regnskapsdata gjort tilgjengelig i en skyløsning.",
  tec: "JavaScript, Chart.js, Datatables, page.js, Bootstrap, require.js, NPM, Grunt, CSS, HTML og Azure autentisering."
}, {
  name: "Kommuneportalen",
  url: "https://www.kommuneportalen.no",
  desc: "Finnansrapport system for kommuner",
  tec: "JavaScript, D3.js, Footable, MVC, C#, Dapper, Docraptor, Bower, Bootstrap, NPM, Gulp, Signicat, CSS og HTML."
}, {
  name: "Sharepark",
  url: "",
  desc: "Parkering deling app",
  tec: "JavaScript, D3.js, Footable, page.js, require.js, C#, Bootstrap, NPM, Grunt, CSS og HTML."
}, {
  name: "EM1 Data Migrering",
  url: "",
  desc: "Stor migrering av EM1 data fra et system til et annet.",
  tec: "C#"
}, 
]



var prosjekts = [{
  name: "Regnskapsportalen",
  url: ""
}, {
  name: "Kommuneportalen",
  url: "https://www.kommuneportalen.no"
}, {
  name: "Sharepark",
  url: ""
}, {
  name: "EM1 Data Migrering",
  url: ""
}, {
  name: "Stackoverflow",
  url: "https://stackoverflow.com/users/6638478/tom-glover"
}, {
  name: "Bkraft",
  url: ""
}, {
  name: "NTNU",
  url: ""
},
{
  name: "CV",
  url: ""
},]

var dataSetTek = [

  ["JavaScript", "0,1,2,4,6,7", 4.5, 4],
  ["PHP", "5, 6", 2, 1],
  ["CSS", "0,1,2,5,6,7", 4, 3],
  ["HTML", "0,1,2,5,6,7", 3.5, 3],
  ["C#", "1,2,3", 3.5, 4],
  ["Java", "6", 3, 3],

];

var dataSetFrame = [
  ["MVC", "C#, .NET, JS, HTML, CSS", "1", 2.5, 3, "Rammeverk hvor frontend og backend er sammensatt på en strukturert måte. API og Webside sammen."],
  ["Grunt", "JS", "0,2", 4, 3, "JavaScript taskmanager, veldig nyttig i større prosjekter."],
  ["Page.js", "JS", "0,2", 4.5, 3, "Enkel tynklient for SPA."],
  ["NPM", "JS", "0,1,2,7", 4.5, 5, "Package manager som kan brukes til å enkelt laste ned javascript biblotek og rammeverk, og i tilegg kjøre skript."],
  ["Bower", "JS", "1", 3, 2, "Lignende NPM bare litt mer begrenset utvalg."],
  ["Require.js", "JS", "0,2", 3.5, 3, "Veldig kraftig modul og optimaliserings verktøy for JavaScript."],
  ["Webpack", "JS", "7", 2, 4, "Veldig kraftig modul og optimaliserings verktøy for JavaScript."],
  ["JQuery", "JS", "0,1,2,4,7", 5, 4, "JavaScript rammeverk DOM manipulasjon, AJAX, Cross-platform."],
  ["REST API", "", "0,1,2", 3, 5, "API Web Standard."],
  ["Gulp", "JS", "1", 2, 3, "JavaScript taskmanager, veldig nyttig i større prosjekter."],
  ["Chart.js", "JS, Canvas", "0, 4", 5, 4, "Graf-rammeverk for Canvas."],
  ["D3.js", "JS, SVG", "1,2", 4, 5, "Grafikk rammeverk med stor evene for detaljestyring av grafer. Høy læringskurve, men høyt potensial."],
  ["Datatables", "JS", "0,4,7", 5, 5, "Meget funksjonell og utvidbar tabell rammeverket."],
  ["Footable", "JS", "1,2", 3.5, 3, "Tabell rammeverk for responsive tabeller."],
  ["Bootstrap", "JS, CSS", "0,1,2,7", 5, 4, "Biblotek for responsive webdesign."],
  ["Less", "CSS", "0,2", 3.5, 4, "CSS preprocessor."],
  ["SASS", "CSS", "1,7", 3.5, 3, "CSS preprocessor."],
  ["IIS", "", "0,1,2", 3, 3, "Web server løsning til microsoft."],
  ["Azure", "", "0,7", 3, 3, "Skyløsning for blandt annet: Hosting og autentisering."],
  ["SQLServer", "SQL", "0,1,2,3", 4, 5, "Microsoft sin SQL løsning"],
  ["Docraptor", "HTML, CSS, JS, Prince", "1", 4, 5, "HTML, CSS og JavaScript til PDF generator som er bygget på Prince."],
  ["Moment.js", "JS", "2", 3.5, 5, "Date rammeverk for javascript"],
  ["React", "JS", "", 2, 4, "JavaScript rammeverk"],
  ["Swing", "Java", "6", 3, 4, "UI rammeverk"],
  ["Postman", "", "0,1,2", 3, 4, "API Testing verktøy"],
  ["Fiddle", "", "0,1,2", 3, 4, "Package inspector"],
];


var frameColumns = [
  {
    title: "Rammeverk", responsivePriority: 0,
  }, {
    title: "Teknologi", responsivePriority: 3,
  }, {
    title: "Brukt på", class: "textContent", responsivePriority: 4,
    render: function (data, type, row, meta) {
      var split = data.split(",");
      if (!split[0]) {
        return "";
      }
      var html = "";
      for (var i = 0; i < split.length; i++) {
        var prosjekt = prosjekts[split[i].trim()]
        if (prosjekt.url)
          html += "<a target='_blank' href='" + prosjekt.url + "'>" + prosjekt.name + "</a>, "
        else
          html += "<span>" + prosjekt.name + "</a>, "
      }
      return html.slice(0, html.length - 2);
    }
  }, {
    title: "Evne", responsivePriority: 1,
    class: 'iconRender',
    render: iconRow("fa-star", true)
  }, {
    title: "Glede", responsivePriority: 2,
    class: 'iconRender',
    render: iconRow("fa-heart")

  },
  { title: "Hva er dette?", class: "textContent", responsivePriority: 9999 }
]

var tekColumns = [
  {
    title: "Rammeverk", responsivePriority: 0,
  }, {
    title: "Brukt på", class: "textContent", responsivePriority: 4,
    render: function (data, type, row, meta) {
      var split = data.split(",");
      if (!split[0]) {
        return "";
      }
      var html = "";
      for (var i = 0; i < split.length; i++) {
        var prosjekt = prosjekts[split[i].trim()]
        if (prosjekt.url)
          html += "<a target='_blank' href='" + prosjekt.url + "'>" + prosjekt.name + "</a>, "
        else
          html += "<span>" + prosjekt.name + "</a>, "
      }
      return html.slice(0, html.length - 2);
    }
  }, {
    title: "Evne", responsivePriority: 1,
    class: 'iconRender',
    render: iconRow("fa-star", true)
  }, {
    title: "Glede", responsivePriority: 2,
    class: 'iconRender',
    render: iconRow("fa-heart")

  }
  
]



function createframeTable(target, dataSet, columnsDef) {
  target.DataTable({
    data: dataSet,
    columns: columnsDef,
    "order": [
      [3, "desc"],
      [4, "desc"]
    ],
    "columnDefs": [{
      "type": "dataSrcSearch",
      targets: 3
    }, {
      "type": "dataSrcSearch",
      targets: 4
    }],
  
  });
}

function createTekTable(target, dataSet, columnsDef) {
  target.DataTable({
    data: dataSet,
    columns: columnsDef,
    "order": [
      [2, "desc"],
      [3, "desc"]
    ],
    "columnDefs": [{
      "type": "dataSrcSearch",
      targets: 2
    }, {
      "type": "dataSrcSearch",
      targets: 3
    }],
    "paging":   false,
    "info":     false,
    "searching": false,
  });
}

function createProjTable(target, dataSet) {
  target.DataTable({
    data: dataSet,
    columns: [
      {
        title: "Prosjekt", data:'name', responsivePriority: 0,
        render: function (data, type, row, meta) {
          if(row.url)
         return "<a target='_blank' href='" + row.url + "'>" + data + "</a>";
         else
         return data;
        }
      },
      {
        title: "Beskrivelse", data :"desc"
      },
      {
        title: "Teknologier", data :"tec"
      }
    ],
    "paging":   false,
    "info":     false,
    "searching": false,
  });
}

$(document).ready(function () {
  createframeTable($("#frameworkTable"), dataSetFrame, frameColumns);
  createTekTable($("#TekTable"), dataSetTek, tekColumns);
  createProjTable($("#projectsTable"), prosjektsdt)
});
