import Chart from 'chart.js/auto';
import 'chartjs-adapter-luxon';
import ChartStreaming from 'chartjs-plugin-streaming';
Chart.register(ChartStreaming);

// A wrapper of Chart.js that configures the realtime line chart.
export default class RealTimeChart {
  constructor(ctx) {
    const config = {
      type: 'line',
      data: { datasets: [] },
      options: {
        datasets: {
          line: {
            tension: 0.2,
          },
        },
        plugins: {
          title: {
            display: true,
            text: 'OS Monitoring Application',
            font: { size: 20 },
          },
          streaming: {
            // Your code for streaming here
            duration: 60 * 1000,
            delay: 1500,
          },
        },
        scales: {
          x: {
            // type: 'realtime',
            title: {
              display: true,
              text: 'Time (HH:MM:SS)',
              font: { size: 13 },
            },
          },
        },
      },
    };

    this.chart = new Chart(ctx, config);
  }

  dynamicColor() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgba(" + r + "," + g + "," + b + ", 0.5)";
  }

  newLabel(label) {
    let colour = this.dynamicColor();
    const newDataset = { label, data: [], backgroundColor: colour, borderColor: colour }
    this.chart.data.datasets.push(newDataset);
    return newDataset;
  }

  existingLabel(label) {
    return this.chart.data.datasets.find((dataset) => dataset.label === label);
  }

  newPoints(label, value) {
    const dataset = this.existingLabel(label) || this.newLabel(label);
    dataset.data.push({ x: Date.now(), y: value });
    this.chart.update();
  }
}
