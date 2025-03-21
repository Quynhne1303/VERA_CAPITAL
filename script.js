document.addEventListener("DOMContentLoaded", function () {
    function showSection(sectionId) {
        document.querySelectorAll(".container").forEach(section => {
            section.classList.remove("active");
        });
        document.getElementById(sectionId).classList.add("active");
    }

    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            showSection(this.getAttribute("data-section"));
        });
    });

    showSection("about");

    var ctx = document.getElementById('investmentChart').getContext('2d');
    var investmentChart = new Chart(ctx, {
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
});