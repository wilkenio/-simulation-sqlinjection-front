import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { UsersComponent } from './pages/users/users';
import { ProductsComponent } from './pages/products/products';
import { DeleteUserComponent } from './pages/delete-user/delete-user';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'users', component: UsersComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'delete-user', component: DeleteUserComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
