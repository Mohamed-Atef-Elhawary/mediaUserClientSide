import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/api-response';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  constructor(private http: HttpClient) {}
  doctors(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.backendUrl}doctor/list`);
  }

  doctor(id: string): Observable<ApiResponse> {
    // return this.http.get<ApiResponse>(`${environment.backendUrl}doctor/doctor/${id}`);
    return this.http.get<ApiResponse>(
      `http://localhost:4000/api/doctor/doctor/69d91b9d68477e635477c349`,
    );
  }
}
