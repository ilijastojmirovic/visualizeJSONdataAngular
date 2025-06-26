import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RawEntry, TimeEntrySummary } from '../models/time-entry.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeEntryService {

  private apiUrl = "https://rc-vault-fap-live-1.azurewebsites.net/api/gettimeentries?code=vO17RnE8vuzXzPJo5eaLLjXjmRW07law99QTD90zat9FfOQJKKUcgQ=="

  constructor(private http: HttpClient) { }

  getSummarizedTimeEntries(): Observable<TimeEntrySummary[]> {
    return this.http.get<RawEntry[]>(this.apiUrl).pipe(
      map(entries => {
        const totals: { [key: string]: number } = {};

        for (const entry of entries) {
          if (
            !entry.DeletedOn &&
            entry.StarTimeUtc &&
            entry.EndTimeUtc &&
            new Date(entry.EndTimeUtc) > new Date(entry.StarTimeUtc) &&
            entry.EmployeeName
          ) {
            const start = new Date(entry.StarTimeUtc);
            const end = new Date(entry.EndTimeUtc);
            const hours = (end.getTime() - start.getTime()) / (1000 * 60 * 60);

            totals[entry.EmployeeName] = (totals[entry.EmployeeName] || 0) + hours;
          }
        }

      

        return Object.entries(totals)
          .map(([employee, totalHours]) => ({ employee, totalHours }))
          .sort((a, b) => b.totalHours - a.totalHours);
      })
    );
  }
}
