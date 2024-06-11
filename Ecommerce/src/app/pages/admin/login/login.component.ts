import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedModule } from '../../../shared/shared.module';// Adjust the path as necessary

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginobj: any = {
    username: '',
    password: ''
  };

  constructor(private router: Router, private snackBar: MatSnackBar) {}

  onlogin() {
    if (this.loginobj.username === 'admin' && this.loginobj.password === '757382') {
      this.snackBar.open('Login Successful', 'Close', {
        duration: 3000, // duration in milliseconds
        panelClass: ['snackbar-success'],
      });
      this.router.navigateByUrl('/products');
    } else {
      this.snackBar.open('Wrong Password', 'Close', {
        duration: 3000, // duration in milliseconds
        panelClass: ['snackbar-error'],
      });
    }
  }
}
