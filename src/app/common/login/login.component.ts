import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
   imports: [FormsModule],  
  templateUrl: './login.component.html',
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

onLogin(form: any) {
  const credentials = {
    email: form.value.email,
    passwordHash: form.value.password
  };

  this.authService.login(credentials).subscribe({
    next: (res: any) => {
      console.log('Login success', res);

      localStorage.setItem('token', res.token);
      localStorage.setItem('role', res.role);
      localStorage.setItem('userId', res.userId);

      this.router.navigate(['/home']);
    },
    error: (err: any) => {
      console.error('Login failed', err);
      alert('Invalid credentials');
    }
  });
}
}
