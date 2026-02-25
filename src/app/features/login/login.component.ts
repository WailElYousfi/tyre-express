import { Component, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  template: `
    <div class="login-wrapper">
      <div class="login-card card">

        <!-- Logo -->
        <div class="login-logo">
          <span class="material-symbols-outlined logo-icon">tire_repair</span>
          <span class="logo-text">Tyre-Express</span>
        </div>

        <div class="login-header">
          <h1>{{ t.login_title }}</h1>
          <p>{{ t.login_sub }}</p>
        </div>

        <div *ngIf="error()" class="error-alert">
          <span class="material-symbols-outlined">error</span>
          <span>Invalid email or password. Please try again.</span>
        </div>

        <div class="form-group">
          <label>{{ t.login_email }}</label>
          <div class="input-wrapper">
            <span class="material-symbols-outlined input-icon">mail</span>
            <input
              type="email"
              [(ngModel)]="email"
              placeholder="you@example.com"
              [class.has-error]="error()"
            />
          </div>
        </div>

        <div class="form-group">
          <div class="label-row">
            <label>{{ t.login_password }}</label>
            <a href="#" class="forgot-link">{{ t.login_forgot }}</a>
          </div>
          <div class="input-wrapper">
            <span class="material-symbols-outlined input-icon">lock</span>
            <input
              [type]="showPassword() ? 'text' : 'password'"
              [(ngModel)]="password"
              placeholder="••••••••"
              [class.has-error]="error()"
            />
            <button class="eye-btn" (click)="togglePassword()" type="button">
              <span class="material-symbols-outlined">{{ showPassword() ? 'visibility_off' : 'visibility' }}</span>
            </button>
          </div>
        </div>

        <label class="remember-row">
          <input type="checkbox" [(ngModel)]="rememberMe"/>
          <span>{{ t.login_remember }}</span>
        </label>

        <button class="login-btn" (click)="submit()" [class.loading]="loading()">
          <span *ngIf="!loading()" class="material-symbols-outlined">login</span>
          <span *ngIf="loading()" class="spinner"></span>
          <span *ngIf="!loading()">{{ t.login_btn }}</span>
          <span *ngIf="loading()">Signing in…</span>
        </button>

        <p class="no-account">
          {{ t.login_no_account }}
        </p>

      </div>

      <!-- Decorative side panel -->
      <div class="login-visual" aria-hidden="true">
        <div class="visual-inner">
          <span class="material-symbols-outlined visual-icon">tire_repair</span>
          <blockquote>"Professional mobile tire service at your doorstep."</blockquote>
          <div class="visual-dots">
            <span></span><span class="active"></span><span></span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      min-height: calc(100vh - 64px);
    }

    .login-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      min-height: calc(100vh - 64px);
      @media (max-width: 768px) { grid-template-columns: 1fr; }
    }

    .login-card {
      display: flex; flex-direction: column; justify-content: center;
      padding: 3rem 4rem; border: none; border-radius: 0;
      background: var(--bg);
      @media (max-width: 900px) { padding: 2rem 1.5rem; }
    }

    .login-logo {
      display: flex; align-items: center; gap: 0.5rem; margin-bottom: 2.5rem;
      .logo-icon { color: var(--primary); font-size: 2rem; }
      .logo-text { font-size: 1.2rem; font-weight: 900; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text); }
    }

    .login-header {
      margin-bottom: 2rem;
      h1 { font-size: 1.9rem; font-weight: 900; letter-spacing: -0.03em; margin-bottom: 0.4rem; }
      p { font-size: 0.88rem; color: var(--text-muted); }
    }

    .error-alert {
      display: flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1rem;
      background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.25);
      border-radius: var(--radius-lg); color: #f87171; font-size: 0.83rem; margin-bottom: 1.25rem;
      .material-symbols-outlined { font-size: 1rem; flex-shrink: 0; }
    }

    .form-group {
      display: flex; flex-direction: column; gap: 0.4rem; margin-bottom: 1.25rem;
      label {
        font-size: 0.78rem; font-weight: 700; color: var(--text-secondary);
        text-transform: uppercase; letter-spacing: 0.05em;
      }
    }

    .label-row {
      display: flex; justify-content: space-between; align-items: center;
    }

    .forgot-link {
      font-size: 0.75rem; color: var(--primary); font-weight: 600;
      text-decoration: none; transition: opacity 0.2s;
      &:hover { opacity: 0.8; }
    }

    .input-wrapper {
      position: relative;
      .input-icon {
        position: absolute; left: 0.85rem; top: 50%; transform: translateY(-50%);
        font-size: 1rem; color: var(--text-secondary); pointer-events: none;
      }
      input {
        width: 100%; padding: 0.75rem 0.9rem 0.75rem 2.5rem;
        background: var(--surface); border: 1px solid var(--border);
        border-radius: var(--radius-lg); color: var(--text); font-size: 0.9rem;
        font-family: var(--font); transition: border-color 0.2s;
        &:focus { outline: none; border-color: var(--primary); }
        &::placeholder { color: var(--text-secondary); opacity: 0.6; }
        &.has-error { border-color: #ef4444; }
      }
    }

    .eye-btn {
      position: absolute; right: 0.85rem; top: 50%; transform: translateY(-50%);
      background: none; border: none; cursor: pointer; color: var(--text-secondary);
      padding: 0.2rem; display: flex;
      .material-symbols-outlined { font-size: 1rem; }
      &:hover { color: var(--text); }
    }

    .remember-row {
      display: flex; align-items: center; gap: 0.6rem; margin-bottom: 1.75rem;
      cursor: pointer; user-select: none;
      input[type="checkbox"] {
        width: 16px; height: 16px; accent-color: var(--primary); cursor: pointer;
      }
      span { font-size: 0.85rem; color: var(--text-secondary); }
    }

    .login-btn {
      width: 100%; display: flex; align-items: center; justify-content: center; gap: 0.5rem;
      padding: 0.9rem; background: var(--primary); color: #111;
      font-weight: 800; font-size: 0.95rem; border: none; border-radius: var(--radius-lg);
      cursor: pointer; transition: background 0.2s, transform 0.15s;
      .material-symbols-outlined { font-size: 1.1rem; }
      &:hover { background: var(--primary-hover); transform: scale(1.01); }
      &.loading { opacity: 0.8; cursor: wait; }
    }

    .spinner {
      width: 18px; height: 18px; border: 2px solid #111;
      border-top-color: transparent; border-radius: 50%;
      animation: spin 0.7s linear infinite;
    }

    @keyframes spin { to { transform: rotate(360deg); } }

    .no-account {
      text-align: center; font-size: 0.82rem; color: var(--text-muted); margin-top: 1.5rem;
    }

    /* Visual side */
    .login-visual {
      background: var(--primary);
      display: flex; align-items: center; justify-content: center; padding: 3rem;
      @media (max-width: 768px) { display: none; }
    }

    .visual-inner {
      text-align: center; color: #111; max-width: 360px;
      .visual-icon { font-size: 5rem; margin-bottom: 2rem; display: block;
        font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
      blockquote {
        font-size: 1.2rem; font-weight: 700; line-height: 1.5; margin-bottom: 2rem; font-style: italic;
      }
    }

    .visual-dots {
      display: flex; justify-content: center; gap: 0.5rem;
      span {
        width: 8px; height: 8px; border-radius: 50%; background: rgba(0,0,0,0.25);
        &.active { background: #111; }
      }
    }
  `]
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
    if (!this.email || !this.password) {
      this.error.set(true);
      return;
    }
    this.loading.set(true);
    // Simulate API call
    setTimeout(() => {
      this.loading.set(false);
      // Demo: any credentials fail to show the error state
      this.error.set(true);
    }, 1200);
  }
}
