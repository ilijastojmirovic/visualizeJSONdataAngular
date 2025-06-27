import { Component, OnInit } from '@angular/core';
import {ChartOptions, ChartType } from 'chart.js';
import { TimeEntrySummary } from 'src/app/models/time-entry.model';
import { TimeEntryService } from 'src/app/services/time-entry.service';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart } from 'chart.js';

Chart.register(ChartDataLabels);

@Component({
  selector: 'app-time-entry-table',
  templateUrl: './time-entry-table.component.html',
  styleUrls: ['./time-entry-table.component.css']
})
export class TimeEntryTableComponent implements OnInit{

  entries: TimeEntrySummary[] = [];

  public pieChartLabels: string[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public ChartDataLabels = ChartDataLabels;
  pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || '';
            const value = context.raw as number;
            return `${label}: ${value.toFixed(2)} hours`;
          }
        }
      },
      datalabels: {
        color: '#000',
        formatter: (value: number, context) => {
          const total = context.chart.data.datasets[0].data
            .reduce((a: any, b: any) => a + b, 0);
          const percentage = (value / total * 100).toFixed(1);
          return `${percentage}%`;
        }
      }
    }
  };

  
  constructor(private timeEntryService: TimeEntryService) {}

  ngOnInit(): void {
    this.timeEntryService.getSummarizedTimeEntries().subscribe(data => {
      this.entries = data;
      this.pieChartLabels = data.map(d => d.employee);
      this.pieChartData = data.map(d => parseFloat(d.totalHours.toFixed(2)));
    });
  }
}
