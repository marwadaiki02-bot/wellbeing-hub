import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WellbeingService {
  private apiUrl = 'http://localhost:3000/wellbeing';

  constructor(private http: HttpClient) {}

  getHydration(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/hydration?userId=${userId}`);
  }

  getSleep(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/sleep?userId=${userId}`);
  }

  getMood(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/mood?userId=${userId}`);
  }

  getActivity(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/activity?userId=${userId}`);
  }
}
