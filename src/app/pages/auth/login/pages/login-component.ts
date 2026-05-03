import { Component } from '@angular/core';
import { AuthService } from '../../../../@core/services/auth-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.css'],
  standalone: false
})
export class LoginComponent {
  Email = '';
  password = '';
  error = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  login() {
    this.auth.login({ Email: this.Email, Password: this.password }).subscribe({
      next: () => {
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
        this.router.navigateByUrl(returnUrl);
      },
      error: (err) => {
        this.error =
          err.error?.errors?.Email?.[0] ||
          err.error?.errors?.Password?.[0] ||
          'Invalid email or password';
      }
    });
  }
}