import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/api-response';
import { HttpClient } from '@angular/common/http';
import { DoctorData } from '../interfaces/doctor-data';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  allDoctors = signal<DoctorData[]>([] as DoctorData[]);
  constructor(private http: HttpClient) {}
  doctors(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.backendUrl}doctor/list`);
  }

  doctor(id: string): Observable<ApiResponse> {
    // return this.http.get<ApiResponse>(`${environment.backendUrl}doctor/doctor/${id}`);
    return this.http.get<ApiResponse>(`${environment.backendUrl}doctor/doctor/${id}`);
  }
}
