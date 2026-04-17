import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class ProductsComponent {
  name: string = '';
  request: any;
  response: any;
  products: any[] = [];

  constructor(private apiService: ApiService) { }

  search() {
    this.request = {
      method: 'GET',
      url: `http://localhost:3000/products?name=${this.name}`
    };
    this.apiService.getProducts(this.name).subscribe({
      next: (data) => {
        this.response = data;
        this.products = Array.isArray(data) ? data : [data];
        console.log('Products found', data);
      },
      error: (err) => {
        this.response = err;
        this.products = [];
        console.error('Error searching products', err);
      }
    });
  }
}
