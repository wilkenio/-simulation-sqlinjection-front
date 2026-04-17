import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './users.html',
  styleUrls: ['./users.css']
})
export class UsersComponent {
  username: string = '';
  request: any;
  response: any;
  users: any[] = [];

  constructor(private apiService: ApiService) { }

  search() {
    this.request = {
      method: 'GET',
      url: `http://localhost:3000/users?username=${this.username}`
    };
    this.apiService.getUsers(this.username).subscribe({
      next: (data) => {
        this.response = data;
        this.users = Array.isArray(data) ? data : [data];
        console.log('Users found', data);
      },
      error: (err) => {
        this.response = err;
        this.users = [];
        console.error('Error searching users', err);
      }
    });
  }
}
