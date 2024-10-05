// Get the carbon footprint element
const carbonFootprintElement = document.getElementById('carbon-footprint');

// Get the progress chart element
const progressChartElement = document.getElementById('progress-chart');

// Get the insights chart element
const insightsChartElement = document.getElementById('insights-chart');

// Get the get started button
const getStartedButton = document.getElementById('get-started');

// Add an event listener to the get started button
getStartedButton.addEventListener('click', () => {
    window.location.href="plankton.html";
});

insightsChartElement.addEventListener('click', () => {
    window.location.href="insight.html";
});