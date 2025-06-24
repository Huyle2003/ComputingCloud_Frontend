import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private baseUrl = 'https://computingcloud-backend.onrender.com/api/ghe'; // Điều chỉnh URL backend của bạn

  constructor(private http: HttpClient) { }

  getAvailableSeats(scheduleId: number, roomId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${scheduleId}/rooms/${roomId}/available-seats`);
  }
}
