export interface RawEntry {
  Id: string;
  EmployeeName: string;
  StarTimeUtc: string;
  EndTimeUtc: string;
  EntryNotes: string;
  DeletedOn: string | null;
}

export interface TimeEntrySummary {
  employee: string;
  totalHours: number;
}