import { Injectable, signal } from '@angular/core';
import { AuthView } from '../types/authType';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authView = signal<AuthView>('outer');
}
