import { Component, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private ts = inject(TranslationService);
  get t() { return this.ts.t; }

  email = '';
  password = '';
  rememberMe = false;
  showPassword = signal(false);
  loading = signal(false);
  error = signal(false);

  togglePassword() { this.showPassword.update(v => !v); }

  submit() {
    this.error.set(false);
    if (!this.email || !this.password) { this.error.set(true); return; }
    this.loading.set(true);
    setTimeout(() => { this.loading.set(false); this.error.set(true); }, 1200);
  }
}
