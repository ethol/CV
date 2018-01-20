import $ from 'jquery';
function iconRow(faString, hasHalf) {

    return (function(data, type, row, meta) {
      var htmlGod = "<i class='fa " + faString + " fa-2x'></i>";
      var htmlhalf = hasHalf ? "<i class='fa " + faString + "-half-o fa-2x'></i>" : htmlGod;
      var htmlBad = "<i class='fa " + faString + "-o fa-2x'></i>";
      var returner = "<div class='starBar' data-srcVal='" + data + "'>";
      for (var i = 0; i < 5; i++) {
        if (i < data) {
  
          if (i+0.5 != data ) {
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
    "dataSrcSearch-pre": function(a) {
      return $(a).data().srcval
    },
  
    "dataSrcSearch-asc": function(a, b) {
      return a - b;
    },
  
    "dataSrcSearch-desc": function(a, b) {
      return b - a;
    }
  });
  
  
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
    name: "Em1 Data Migrering",
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
  }, ]
  
  var dataSet = [
    ["MVC", "C#, .NET, JS, HTML, CSS", "1", 2.5, 3, "Stort potensial og veldig enkelt å sette opp, bra for små solo prosjekter."],
    ["Grunt", "JS", "0", 4, 3, "Velig nyttig med en taskmanager, veldig nyttig i større prosjekter."],
    ["Page.js", "JS", "0,2", 4.5, 3, "Enkel tynklient for SPA. "],
    ["NPM", "JS", "0,1,2", 4.5, 5, "Veldig glad i NPM"],
    ["Bower", "JS", "0,1,2", 3, 2, "Vil heller bruke NPM"],
    ["Require.js", "JS", "0,2", 3.5, 3, "Har gjort mye for meg en lengre tid, men jeg vil sansynligvis erstatte det med webpack"],
    ["Webpack", "JS", "7", 2, 4, "Driver å prøver det ut, virker som det er vanskelig men effektivt når jeg får tilslutt lært det."],
    ["JQuery", "JS", "0,2", 5, 4, "Bedre enn native DOM manipulasjon. Ajax er jeg også glad i."],
    ["REST API", "JS", "0,1,2", 3, 5, "Oversiktlig og funksjonelt"],
    ["Gulp", "JS", "1", 2, 3, "Samme som grunt bare jeg har mindre erfaring med det."],
    ["Chart.js", "JS Canvas", "0, 4", 5, 4, "Veldig bra graf rammeverk for Canvas, også veldig hurtig å sette opp."],
    ["D3.js", "JS SVG", "1", 4, 5, "Potensialet til dette rammeverket er kun begrenset av utvikleren. D3 for detaljestyring av grafer. SVG for kvalitet!"],
    ["Datatables", "JS", "0, 4", 5, 5, "Mest funksjonelle og utvidbare tabell rammeverket jeg har vært borti."],
    ["Footable", "JS", "1, 2", 3.5, 2, "Enkelt men mangler funksjonalitet som er i Datatable, men har noen fordeler som antall MB og AMD compatibelt"],
    //["JavaScript", "JS", "", 4.5, 3, ""],
    ["Bootstrap", "JS, CSS", "", 5, 4, "Veldig enkelt å få til noe som ser bra ut raskt, og det finnes alltid plugin funksjonalitet."],
    ["Less", "CSS", "0,2", 3.5, 4, "God css preprocessor"],
    ["SASS", "CSS", "1,7", 3.5, 3, "Virker bra nesten likt som less, men finner noen mangler sammenlignet."],
    ["PHP", "PHP", "5, 6", 2, 1, "ikke imponert"],
    ["IIS", "Microsoft", "0,1,2", 3, 3, "Ennå ikke nåd noe tak her på hva som kan gjøres."],
    //["C#", "Microsoft", "1,2,3", 3, 4, "Som Java bare anderledes, men med lync"],
    //["Java", "", "6", 3, 3, "Funker med objektorientert"],
    ["Azure", "Microsoft", "0", 3, 3, "Stort potensiale"],
    ["SQLServer", "Microsoft, SQL", "0,1,2,3", 4, 5, "Beste SQL systemet jeg har vært bort i så langt."],
    ["Docraptor", "HTML,CSS,JS", "1", 4, 5, "Veldig bra HTML til PDF generator som er bygget rundt prince."],
    ["Moment.js", "JS", "1", 3.5, 5, "Hærlig og sårt trengende date rammeverk for javascript"],
    ["Reacts", "JS", "", 2, 4, "Ganske stort paradigmeskift innen javascript utvikling"],
  
  ];
  
  $(document).ready(function() {
    $('#frameworkTable').DataTable({
      
      data: dataSet,
      columns: [{
          title: "Rammeverk", responsivePriority:0 ,
        }, {
          title: "Teknologi", responsivePriority:3,
        }, {
          title: "Prosjekter", class:"textContent", responsivePriority:4,
          render: function(data, type, row, meta) {
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
          title: "Evne", responsivePriority:1,
          class: 'iconRender',
          render: iconRow("fa-star", true)
        }, {
          title: "Glede", responsivePriority:2,
          class: 'iconRender',
          render: iconRow("fa-heart")
          
        },
        {title:"Min mening", class:"textContent", responsivePriority: 9999}
  
      ],
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
      }]
    });
  });
  