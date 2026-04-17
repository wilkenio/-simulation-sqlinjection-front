import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-delete-user',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './delete-user.html',
  styleUrls: ['./delete-user.css']
})
export class DeleteUserComponent {
  id: string = '';
  request: any;
  response: any;

  constructor(private apiService: ApiService) { }

  delete() {
    this.request = {
      method: 'DELETE',
      url: `http://localhost:3000/users?id=${this.id}`
    };
    this.apiService.deleteUser(this.id).subscribe({
      next: (data) => {
        this.response = data;
        console.log('User deleted', data);
      },
      error: (err) => {
        this.response = err;
        console.error('Error deleting user', err);
      }
    });
  }
}
