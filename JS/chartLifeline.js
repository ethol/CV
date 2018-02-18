import $ from 'jquery';
import Chart from 'chart.js'

var textData = [

    [//Arbeid
        , , , , , , , , , , "Hæren Vaktkommandør Jørstamoen" ,, ,,
        "NTNU Studass MMI",
        "NTNU Studass MMI",
        "NTNU Studass Intro AI",
        "Utvikler Knowit Reaktor, Oslo",
        "Areto solutions",
        "Sparebank 1 Regnskapshuset"
    ],
    [//Utdannelse

        "Greverud skole",
        "Greverud skole",
        "Greverud skole",
        "Fløysbon ungdomsskole",
        "Fløysbon ungdomsskole",
        "Flåtestad skole",
        "Roald Amundsen Vidregåends skole",
        "Ås Vidregåends skole | International Baccalaureate",
        "Roald Amundsen Vidregåends skole",
        "Voss folkehøyskole",
        , 
        "NTNU Informatikk bachelor",
        "NTNU Informatikk bachelor",
        "NTNU Informatikk bachelor",
        "NTNU Informatikk bachelor",
        "NTNU Informatikk bachelor",
        "NTNU Informatikk Master Kunstig innteliegens",
        "NTNU Informatikk Master Kunstig innteliegens",

    ],
    [//Trening
        "fotball",
        "fotball",
        "fotball",
        "Karate",
        "Karate",
        "Karate",
        "Tennis",
        "Tennis",
        "Karate",
        "Karate",
        ,
        ,
        ,
        "Sykling",
        "Sykling",
        "Karate og Sykling",
        "Sykling",
        "Sykling, Svømming",
        "Sykling, Svømming",
        "Sykling, Svømming",

    ],
    [//Hobby
        "Sosialisering, Lesing",
        "Sosialisering, Lesing",
        "Sosialisering, Lesing",
        "Sosialisering, Lesing, Rollespill (pen og papir)",
        "Sosialisering, Lesing, Rollespill (pen og papir)",
        "Sosialisering, Lesing, Rollespill (pen og papir), Warhammer figurer",
        "Sosialisering, Lesing, Rollespill (pen og papir), Warhammer figurer",
        "Sosialisering, Lesing, Rollespill (pen og papir), Spilling",
        "Sosialisering, Lesing, Rollespill (pen og papir), Spilling",
        "Sosialisering, Lesing, Gitar, Webutvikling, Spilling",
        "Sosialisering, Lesing, Gitar, Webutvikling, Spilling",
        "Sosialisering, Lesing, Gitar, Spilling",
        "Sosialisering, Lesing, Gitar, Brettspill, Spilling",
        "Sosialisering, Lesing, Gitar, Brettspill, Spilling",
        "Sosialisering, Lesing, Gitar, Brettspill, Spilling",
        "Sosialisering, Lesing, Gitar, Brettspill, Spilling",
        "Sosialisering, Lesing, Gitar, Brettspill, Spilling",
        "Sosialisering, Lesing, Gitar, Brettspill, Spilling",
        "Sosialisering, Lesing, Gitar, Brettspill, Spilling",
        "Sosialisering, Lesing, Gitar, Brettspill, Spilling",
         

    ],
]
var data = {
    labels: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    datasets: [
        {
            data: [, , , , , , , , , -1, 10, -1, , -1, 1, 1, 1, 2, 8, 8],
            label: "Arbeid",
            borderColor: "#5D4037",
            backgroundColor: "#BCAAA4"

        },
        {
            data: [6, 6, 6, 7, 7, 7, 8, 8, 8, 8, -1, 8, 8, 8, 8, 8, 8, 10, -1],
            label: "Utdannelse",
            borderColor: "#1976D2",
            backgroundColor: "#90CAF9"
        },
        {
            data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, -1, 0, 1, 1, 1, 1, 1, 1, 1],
            label: "Trening",
            borderColor: "#d32f2f",
            backgroundColor: "#ef9a9a"

        },
        {
            data: [],
            label: "Hobby",
            borderColor: "#00796B",
            backgroundColor: "#80CBC4"

        }
    ]
};
for(var i = 0; i<99; i++){
    data.datasets[3].data[i] = 17 
    - (data.datasets[0].data[i] ? Math.max(data.datasets[0].data[i], 0) : 0)
    - (data.datasets[1].data[i] ? Math.max(data.datasets[1].data[i], 0) : 0) 
    - (data.datasets[2].data[i] ? Math.max(data.datasets[2].data[i], 0) : 0) 
}
console.log(data);
$(document).ready(function () {

    var canvas = document.getElementById("lifeLine");
    var ctx = canvas.getContext("2d");
    // canvas.height = 500;
    var myNewChart = new Chart(ctx, {
        type: 'line',
        data: data,

        options: {
           //responsive: true,
            // maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    stacked: true,
                    ticks: {
                        min: 0,
                        max:16,
                        callback: function (value) {
                            return value + " t"
                        },
                        stepSize: 4
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        labelString: 'År',
                        fontStyle: 'bold'
                    },
                    ticks: {
                        callback: function (value, index, values) {
                            return 1988 + value + " (" + value + " år)"
                        },

                    }
                }],
            },
            tooltips: {
                mode: "index",
                intersect: false,
                callbacks: {
                    title: function (arr, data) {
                        console.log(arr);
                        return arr[0].xLabel;
                    },
                    label: function (tool, data) {
                        console.log(tool);
                        if (tool.yLabel <= 0) {
                            return "";
                        }
                        var info = textData[tool.datasetIndex][tool.index];
                        return tool.yLabel + " t " + (info ? " | " + info : "");
                    }
                }
            }
        }
    });





});