document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById('investmentChart');
    if (ctx) {
        new Chart(ctx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Cổ phiếu A', 'Trái phiếu B', 'Bất động sản C'],
                datasets: [{
                    label: 'Tăng trưởng (%)',
                    data: [15, 8, 20],
                    backgroundColor: ['red', 'blue', 'green']
                }]
            }
        });
    }
});
