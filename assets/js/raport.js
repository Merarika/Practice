var canvas = document.getElementById('visitorChart');
var ctx = canvas.getContext('2d');
var chart = new Chart(ctx, {

    type: 'line',


    data: {
        labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        datasets: [{
            label: 'Visitors',
            pointBorderColor: 'green',
            backgroundColor: 'rgb(33 150 232 / 20%)',
            borderColor: '#2196F3',
            data: [5,4,5,3,7,5,6,5]
        }]
    },

    options: {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                gridLines: {
                    color: "#9EA3B4",
                    offsetGridLines: true
                },
                ticks: {
                    fontSize: 16,
                    fontColor: '#fff'
                }
            }],
            yAxes: [ {
                ticks: {
                    max: 10,
                    min: 0,
                    beginAtZero: true,
                    display: false
                },
                gridLines: {
                    drawOnChartArea: false
                }
            } ]
        }
    }
});

var canvas = document.getElementById('Views_Chart');
var ctx = canvas.getContext('2d');
var chart = new Chart(ctx, {
    type: 'doughnut',
       data: {
        datasets: [{
            data: [75, 25],
            backgroundColor: [ 
            '#3671ce',
            '#9CA1B2' 
            ],
            borderWidth: 0
        }],
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        cutoutPercentage: 90
    }
});

var ctx = document.getElementById('Visitors_Chart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [35, 65],
            backgroundColor: [ 
            '#3671ce',
            '#9CA1B2'
            ],
            borderWidth: 0
        }],
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        cutoutPercentage: 90
    }
});

var ctx = document.getElementById('Impressions_Chart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [62, 100-62],
            backgroundColor: [ 
            '#3671ce',
            '#9CA1B2'
            ],
            borderWidth: 0
        }],
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        cutoutPercentage: 90
    }
});