import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js'; // Use 'chart.js' instead of 'node_modules/chart.js'
import { BondserviceService } from '../bondservice.service';

Chart.register(...registerables);

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  constructor(private service: BondserviceService) { }

  ngOnInit(): void {
    this.renderChart();
    this.renderdoughChart();
    this.renderdoughChart1();
  }

  renderChart() {
    const barchart = document.getElementById('barchart') as HTMLCanvasElement;
    new Chart(barchart, {
      type: 'bar',
      data: {
        labels: ['Treasury note', 'FX', 'Bond', 'Derivative', 'overdrafts/loans'],
        datasets: [{
          label: '# of Votes',
          data: [90, 150, 100, -100, 80],
          borderWidth: 1,
          barPercentage: 1.8,
          categoryPercentage: 0.3,
          backgroundColor: '#FCA542'
        }]
      },
      options: {
        scales: {
          x: {
            grid: {
              display: false,
             
            },
          },
          y: {
              beginAtZero: true,
              // display: false
            }
          
        },
        animation: {
          duration: 0
        },
        plugins: {
          legend: {
            display: false 
          },
          tooltip: {
            enabled: false
          }
        }
      }
    });
  }
  renderdoughChart() {
    const dochart = document.getElementById('dochart') as HTMLCanvasElement;
      
    new Chart(dochart, {
      type: 'doughnut',
      data: {
        labels: [
          '#5E227F',
          '#FCA542',
          '#1C6DCA',
          '#56CCF2',
          '#2D0C52',
          '#944EE4',
        ],       
         datasets: [{
          label: 'My First Dataset',
          data: [100, 50, 40,20, 10,40],
          backgroundColor: [
            '#5E227F',
            '#FCA542',
            '#1C6DCA',
            '#56CCF2',
            '#2D0C52',
            '#944EE4',
          ],

          hoverOffset: 4,
        }]
      },
      options: {
        radius: '50%',
        plugins: {
          legend: {
            position: 'bottom', 
            labels: {
              // generateLabels: function (chart: Chart) {
              //   const data = chart.data;
              //   if (data && data.labels && data.labels.length && data.datasets && data.datasets.length) {
              //     return data.labels.map(function (label, i) {
              //       const color = label;
              //       return {
              //         text: colorLabels[color as string],
              //         fillStyle: color as string,
              //       };
              //     });
              //   }
              //   return [];
              // },
            },
            
          },
        },
      },
    });
  }
  renderdoughChart1() {
    const dochart1 = document.getElementById('dochart1') as HTMLCanvasElement;
      
    new Chart(dochart1, {
      type: 'doughnut',
      data: {
        labels: [
          '#5E227F',
          '#FCA542',
          '#1C6DCA',
          '#56CCF2',
          '#2D0C52',
          '#944EE4',
        ],       
         datasets: [{
          label: 'My First Dataset',
          data: [100, 50, 40,20, 10,40],
          backgroundColor: [
            '#5E227F',
            '#FCA542',
            '#1C6DCA',
            '#56CCF2',
            '#2D0C52',
            '#944EE4',
          ],

          hoverOffset: 4,
        }]
      },
      options: {
        radius: '50%',
        plugins: {
          legend: {
            position: 'bottom', 
            labels: {
              // generateLabels: function (chart: Chart) {
              //   const data = chart.data;
              //   if (data && data.labels && data.labels.length && data.datasets && data.datasets.length) {
              //     return data.labels.map(function (label, i) {
              //       const color = label;
              //       return {
              //         text: colorLabels[color as string],
              //         fillStyle: color as string,
              //       };
              //     });
              //   }
              //   return [];
              // },
            },
            
          },
        },
      },
    });
  }


}
