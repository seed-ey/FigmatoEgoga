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
    this.renderChart1();
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
        // animation: {
        //   duration: 0
        // },
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
        // labels: [
        //   '#5E227F',
        //   '#FCA542',
        //   '#1C6DCA',
        //   '#56CCF2',
        //   '#2D0C52',
        //   '#944EE4',
        // ],       
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
        radius: '40%',
        plugins: {
          legend: {
            position: 'bottom', 
            labels: {
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
        // labels: [
        //   '#5E227F',
        //   '#FCA542',
        //   '#1C6DCA',
        //   '#56CCF2',
        //   '#2D0C52',
        //   '#944EE4',
        // ],       
         datasets: [{
          label: 'My First Dataset',
          data: [100, 50, 40,20, 10,40,30],
          backgroundColor: [
            '#5E227F',
            '#FCA542',
            '#1C6DCA',
            '#56CCF2',
            '#2D0C52',
            '#944EE4',
            '#89CE94',
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
            },
            
          },
        },
      },
    });
  }
  renderChart1() {
    const barchart1 = document.getElementById('barchart1') as HTMLCanvasElement;
    new Chart(barchart1, {
      type: 'bar',
      data: {
        labels: [0, 20, 40, 60, 80, 100, 120, 140],
        datasets: [{
          label: 'My First Dataset',
          indexAxis: 'y',
          data: [65, 59, 80, 81, 56, 55, 40],
          // fill: false,
          borderWidth: 1,
          backgroundColor: '#FCA542',
           
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
              display: true
            }
          
        },
        // animation: {
        //   duration: 0
        // },
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


}
