import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js'; // Use 'chart.js' instead of 'node_modules/chart.js'
import { BondserviceService } from '../bondservice.service';
import 'chartjs-plugin-datalabels';

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
    this.renderLineChart();
    this.renderChart2();
  }

  renderChart() {
    const barchart = document.getElementById('barchart') as HTMLCanvasElement;
    new Chart(barchart, {
      type: 'bar',
      data: {
        labels: ['Treasury note', 'FX', 'Bond', 'Derivative', 'overdrafts/loans'],
        datasets: [{
          label: '# of Votes',
          data: [90, 150, 100, -50, 80],
          borderWidth: 1,
          barPercentage: 1.8,
          categoryPercentage: 0.3,
          backgroundColor: '#FCA542'
        }]
      },
      options: {
        plugins: {
          legend: {
              display: false,
          },
      },
        scales: {
          x: {
            grid: {
              display: false,
             
            },
          },
          y: {
            title: {
              display: true,
              text: '$000,000',
              font: {
                family: 'Nunito Sans',
                weight: 'bold'
              }

            },
            border: { dash: [4,4]},
            grid: {
              tickBorderDash: [2,3],
              display: true,
              lineWidth: 2,
              color: 'rgb(200,200,200)'
            },
            beginAtZero: true,
            ticks: { 
              stepSize: 50, // Adjust the step size as needed
                    callback: function(value, index, values) {
                        if (value === 100) return '100M';
                        if (value === 50) return '50M';
                        if (value === 0) return '0';
                        if (value === -50) return '-50M';
                        if (value === -100) return '-100M';
                        return value;
                    }
            }
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
        radius: '40%',
        plugins: {
          legend: {
            position: 'bottom', 
            labels: {
            },
            
          },
        },
        layout: {
          padding: {
              left: 30, 
              right: 50, 
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
          data: [0, 0, 40, 80, 120],
          barPercentage: 1.8,
          categoryPercentage: 0.7,
          borderWidth: 1,
          backgroundColor: '#FCA542',
           
        }]
      },
      options: {
        scales: {
          x: {
            border: { dash: [8,8]},
            grid: {
              display: true,
              tickBorderDash: [2,3],
              lineWidth: 2,
            },
          },
          y: {
              grid: {
                display: true,
                color: 'rgba(0, 0, 0, 0)',
              },
              ticks: {
                callback: function (value, index, values) {
                  const textLabels = ['','','', '','Till Maturity','', 'Available for Sale', '', 'Trading',''];
                  return textLabels[index];
                },
              },
            }
          
        },
        
        plugins: {
          legend: {
            display: false 
          },
          title: {
            display: true,
            position: 'bottom',
                text: '$`000,000',
                   font: {
                  family: 'Nunito, sans-serif',
                  weight: 'bold'
             }
            }
          
        }
      }
    });
  }
  // renderLineChart() {
  //   const linechart = document.getElementById('lineChart') as HTMLCanvasElement;
  //   new Chart(linechart, {
  //     type: 'line',
  //     data: {
  //       labels: ['Nigeria', 'East Africa', 'West Africa', 'UK', 'US'],
  //       datasets: [{
  //         label: 'Line 1',
  //         data: [0.05, 0.10, 0.15, 0.20, 1.00],
  //         borderWidth: 3,
  //         backgroundColor: '#FCA542', 
  //         borderColor: '#FCA542', 
  //         tension: 0.4
  //       }, {
  //         label: 'Line 2',
  //         data: [0.03, 0.08, 0.12, 0.18, 0.90], 
  //         borderWidth: 3,
  //         backgroundColor: '#8455B9',
  //         borderColor: '#8455B9', 
  //         tension: 0.4

  //       }]
  //     },
  //     options: {
  //       scales: {
  //         x: {
  //           grid: {
  //             display: false,
  //           },
  //         },
  //         y: {
  //           beginAtZero: false,
  //           display: false,
  //           min: 0.05,
  //           max: 1.00,
  //           ticks: {
  //             maxTicksLimit: 5,
  //             callback: function (value, index, values) {
  //               const customLabels = ['5%', '10%', '15%', '20%', '100%'];
  //               return customLabels[index] || ''; 
  //             }
  //           }
            
  //         }
  //       },
  //       plugins: {
  //         legend: {
  //           display: false 
  //         },
  //         tooltip: {
  //           enabled: false
  //         },
  //         datalabels: {
  //           anchor: 'end',
  //           align: 'end',
  //           formatter: (value) => {
  //             return (value * 100) + '%';
  //           },
  //         }
  //       },
       
  //     }
  //   });
  // }
  renderLineChart() {
  const linechart = document.getElementById('lineChart') as HTMLCanvasElement;
  new Chart(linechart, {
      type: 'line',
      data: {
        labels: ['Nigeria','East Africa', '','West Africa','', 'UK','','US' ],
        datasets: [
            {
                label: 'Budget',
                data: [12, 13, 16,16, 13, 11, 13, 16, 13,15,15,13,13,],
                backgroundColor: 'rgba(252, 165, 66, 0.2)',
                borderColor: 'rgba(255, 165, 66, 1)',
                tension: 0.4,
                borderWidth: 3,
            },
            {
                label: 'Actual',
                data: [13, 15,15, 12,12, 15,15, 12, 14, 13, 15,15,13,13, 30],
                backgroundColor: 'rgba(132, 85, 185, 1)',
                borderColor: 'rgba(132, 85, 185, 1)',
                tension: 0.4,
                borderWidth: 3,

            },
        ]
    },
      
      options: {
          plugins: {
              legend: {
                  display: false,
              },
          },

          layout: {
            padding: {
                left: 30, 
                right: 50, 
            },
        },
          aspectRatio: 1.7,
          scales: {
              x: {
                  grid: {
                      drawOnChartArea: false,
                  },
              },
              y: {
                  beginAtZero: true,
                  ticks: {
                    callback: function (tickValue, index, ticks) {
                    return tickValue + '%';  
                    },
                  },
                  grid: {
                      drawOnChartArea: true,
                  },
              }
          }
      }
  });

}
renderChart2() {
    const barchart2 = document.getElementById('barchart2') as HTMLCanvasElement;
    new Chart(barchart2, {
      type: 'bar',
      data: {
        labels: ['Treasury note', 'FX', 'Bond', 'Derivative', 'overdrafts/loans'],
        datasets: [{
          label: 'Line 2',
          data: [90, 100, 70, 100, 40], 
          borderWidth: 1,
          backgroundColor: '#5E227F',
          barPercentage: 1.2,
          categoryPercentage: 0.5,
        }, {
          label: 'Line 1',
          data: [70, 150, 75, 80, 30],
          borderWidth: 1,
          backgroundColor: '#FCA542', 
          barPercentage: 1.2,
          categoryPercentage: 0.5,
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
