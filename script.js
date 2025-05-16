const colors = ['#f9c2ff', '#c2e9fb', '#c2f9d1', '#ffe3a9', '#cdb4db'];

// 1. Vertical Bar
new Chart(document.getElementById('barChart'), {
  type: 'bar',
  data: {
    labels: ['Yan', 'Fev', 'Mar', 'Apr'],
    datasets: [
      { label: 'Qizlar', data: [12, 19, 3, 5], backgroundColor: colors[0] },
      { label: 'O‘g‘il bolalar', data: [5, 10, 13, 8], backgroundColor: colors[1] },
      { label: 'Yoshlar', data: [9, 7, 6, 12], backgroundColor: colors[2] }
    ]
  },
  options: { responsive: true, scales: { y: { beginAtZero: true } } }
});

// 2. Horizontal Bar
new Chart(document.getElementById('horizontalBarChart'), {
  type: 'bar',
  data: {
    labels: ['A', 'B', 'C', 'D'],
    datasets: [
      { label: 'Maʼlumot 1', data: [10, 15, 8, 6], backgroundColor: colors[3] },
      { label: 'Maʼlumot 2', data: [7, 9, 12, 4], backgroundColor: colors[4] }
    ]
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    scales: { x: { beginAtZero: true } }
  }
});

// 3. Line Chart
new Chart(document.getElementById('lineChart'), {
  type: 'line',
  data: {
    labels: ['Yan', 'Fev', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: '2024',
        data: [3, 7, 9, 5, 2],
        borderColor: colors[0],
        fill: false,
        tension: 0.4
      },
      {
        label: '2025',
        data: [4, 6, 5, 9, 4],
        borderColor: colors[1],
        fill: false,
        tension: 0.4
      }
    ]
  },
  options: { responsive: true }
});

// 4. Mixed Chart (bar + line)
new Chart(document.getElementById('mixedChart'), {
  data: {
    labels: ['Yan', 'Fev', 'Mar', 'Apr'],
    datasets: [
      {
        type: 'bar',
        label: 'Bar',
        data: [10, 12, 6, 9],
        backgroundColor: colors[2]
      },
      {
        type: 'line',
        label: 'Line',
        data: [5, 7, 9, 3],
        borderColor: colors[4],
        fill: false
      }
    ]
  },
  options: { responsive: true }
});

// 5. Radar Chart
new Chart(document.getElementById('radarChart'), {
  type: 'radar',
  data: {
    labels: ['HTML', 'CSS', 'JS', 'React', 'Node'],
    datasets: [
      {
        label: 'Bilim darajasi',
        data: [8, 9, 7, 6, 5],
        backgroundColor: 'rgba(255, 192, 203, 0.3)',
        borderColor: colors[0]
      }
    ]
  },
  options: { responsive: true }
});

// 6. Doughnut Chart
new Chart(document.getElementById('doughnutChart'), {
  type: 'doughnut',
  data: {
    labels: ['Frontend', 'Backend', 'Mobil', 'AI', 'DevOps'],
    datasets: [{
      data: [20, 15, 10, 30, 25],
      backgroundColor: colors
    }]
  },
  options: { responsive: true }
});

// 7. Ikkinchi Line Chart
new Chart(document.getElementById('lineChart2'), {
  type: 'line',
  data: {
    labels: ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma'],
    datasets: [
      {
        label: 'O‘quvchilar',
        data: [3, 4, 6, 3, 7],
        borderColor: colors[3],
        fill: false
      },
      {
        label: 'Talabalar',
        data: [2, 5, 3, 8, 4],
        borderColor: colors[4],
        fill: false
      }
    ]
  },
  options: { responsive: true }
});

// 8. Pie Chart
new Chart(document.getElementById('pieChart'), {
  type: 'pie',
  data: {
    labels: ['A', 'B', 'C', 'D', 'E'],
    datasets: [{
      data: [10, 20, 15, 25, 30],
      backgroundColor: colors
    }]
  },
  options: { responsive: true }
});