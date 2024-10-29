import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async login() {
    const success = await this.authService.login(this.email, this.password);
    if (success) {
      this.router.navigate(['/home']); // Redireciona para a página home ao logar com sucesso
    } else {
      this.error = 'Login ou senha incorretos';
    }
  }
}
