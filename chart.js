var labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var data = {
    labels: labels,
    datasets: [{
        label: '月平均最高気温',
        borderColor: 'rgb(255, 0, 0)',
        backgroundColor: 'rgb(0, 0, 0)',
        data: [1, 3, 8, 12, 18, 21, 22, 22, 18, 13, 7, 3],
    },
    {
        label: '月平均最低気温',
        borderColor: 'rgb(0, 0, 255)',
        backgroundColor: 'rgb(0, 0, 0)',
        data: [-3, -2, 1, 2, 7, 11, 13, 12, 10, 5, 1, -1],

    }]
};

var config = {
    type: 'line',
    data,
    options: {},
};

var lineChart = new Chart(
    document.getElementById('lineChart'),
    config,
);

