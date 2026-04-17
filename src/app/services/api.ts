import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    console.log('Sending login request:', credentials);
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  getUsers(username: string): Observable<any> {
    const params = new HttpParams().set('username', username);
    console.log(`Sending get users request with username: ${username}`);
    return this.http.get(`${this.apiUrl}/users`, { params });
  }

  getProducts(name: string): Observable<any> {
    const params = new HttpParams().set('name', name);
    console.log(`Sending get products request with name: ${name}`);
    return this.http.get(`${this.apiUrl}/products`, { params });
  }

  deleteUser(id: string): Observable<any> {
    const params = new HttpParams().set('id', id);
    console.log(`Sending delete user request with id: ${id}`);
    return this.http.delete(`${this.apiUrl}/users`, { params });
  }
}
