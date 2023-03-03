import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})

export class Grafica1Component {

  public labels1: string[] = ['Pan', 'Refresco', 'Tacos'];
  public data1: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [
      { data: [ 10, 45, 100 ] }
    ]
  };

  public labels2: string[] = ['Pan', 'Refresco', 'Tacos'];
  public data2: ChartData<'doughnut'> = {
    labels: this.labels2,
    datasets: [
      { data: [ 100, 100, 100 ] }
    ]
  };

}
