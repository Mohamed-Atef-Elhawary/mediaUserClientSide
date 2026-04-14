import { effect, Injectable, signal } from '@angular/core';
import { AuthView } from '../types/authType';
import { UserRegister } from '../interfaces/user-register';
import { UserLogin } from '../interfaces/user-login';
import { ApiResponse } from '../interfaces/api-response';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    // effect(
    //   () => {
    //     const uToken = this.userToken();
    //     if (uToken) {
    //       localStorage.setItem('userToken', uToken);
    //       this.authView.set('authorized');
    //     } else {
    //       localStorage.removeItem('userToken');
    //       this.authView.set('outer');
    //     }
    //   },
    //   { allowSignalWrites: true },
    // );
  }
  userToken = signal<string | null>(localStorage.getItem('userToken'));
  userImage = signal<string | null>(localStorage.getItem('userImage'));
  authView = signal<AuthView>(this.userToken() ? 'authorized' : 'outer');

  updateAuthState(data: { token: string; image: string }) {
    if (data) {
      localStorage.setItem('userToken', data.token);
      localStorage.setItem('userImage', data.image);
      this.userToken.set(data.token);
      this.userImage.set(data.image);
      this.authView.set('authorized');
      this.router.navigate(['/home']);
    } else {
      localStorage.removeItem('userToken');
      localStorage.removeItem('userImage');
      this.userToken.set(null);
      this.userImage.set(null);
      this.authView.set('outer');
      this.router.navigate(['/outer']);
    }
  }
  register(data: UserRegister): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.backendUrl}user/register`, data);
  }
  login(data: UserLogin): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.backendUrl}user/login`, data);
  }
}
