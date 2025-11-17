// diagram
var ctx = document.getElementById("lineChart").getContext("2d");
ctx.canvas.height = 80;
// ctx.canvas.width = 73;

var myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"],
        datasets: [
            {
                data: [
                    0, 0.35, 0.25, 0.68, 0.47, 0.68, 0.45, 0.85, 0.61, 0.58, 0.7, 0.52, 0.5, 0.78,
                ],
                backgroundColor: ["rgba(254, 140, 69, 1)"],
                borderColor: ["rgba(254, 140, 69, 1)"],
                borderWidth: 2,
            },
        ],
    },
    options: {
        plugins: {
            legend: false,
            tooltip: true,
        },
        responsive: true,
        scales: {
            x: {
                top: 10,
                grid: {
                    color: 'rgba(249, 249, 249, 0.1)', // Màu của các đường lưới trục Y
                },
                ticks: {
                    display: false,
                },
            },
            y: {
                grid: {
                    color: 'rgba(249, 249, 249, 0.1)', // Màu của các đường lưới trục Y
                },
                ticks: {
                    callback: function (value) {
                        return '$ ' + value;
                    },
                    stepSize: 0.2,
                    bottom: 50,
                    font: {
                        size: 14,
                        family: `"Red Hat Display", sans-serif`,

                    },
                    color: '#7791ba',
                    bottom: 10,
                },
                beginAtZero: true,
            },
        },
    },
});
