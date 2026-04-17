import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  credentials = { username: '', password: '' };
  request: any;
  response: any;

  constructor(private apiService: ApiService) { }

  login() {
    this.request = {
      method: 'POST',
      url: 'http://localhost:3000/login',
      body: this.credentials
    };
    this.apiService.login(this.credentials).subscribe({
      next: (data) => {
        this.response = data;
        console.log('Login successful', data);
      },
      error: (err) => {
        this.response = err;
        console.error('Login failed', err);
      }
    });
  }
}
