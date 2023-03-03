import { Component, Input } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() title: string = 'Sin titulo';

  // Doughnut
  public doughnutChartLabels: string[] = [ 'Label 1', 'Label 2', 'Label 2' ];

  @Input('data') public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ] }
    ]
  };

}
