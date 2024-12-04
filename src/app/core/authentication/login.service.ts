import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token, User } from './interface';
import { Menu } from '@core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(protected http: HttpClient) {}

  register(username: string, password: string, rememberMe = false) {
    return this.http.post<Token>('/v1/auth/register', { email: username, password });
  }

  login(username: string, password: string, rememberMe = false) {
    return this.http.post<Token>('/v1/auth/login', { email: username, password });
  }

  refresh(params: Record<string, any>) {
    return this.http.post<Token>('/v1/auth/refresh-token', params);
  }

  logout(email: any) {
    return this.http.post<any>('/v1/auth/logout', { email});
  }

  me() {
    return this.http.get<User>('/v1/users/profile');
  }

  menu() {
    return this.http
      .get<{ menu: Menu[] }>('assets/data/menu.json?_t=' + Date.now())
      .pipe(map(res => res.menu));
  }
}
