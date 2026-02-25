import { Injectable, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private _theme = signal<Theme>('dark');

  get theme() { return this._theme(); }
  get themeSignal() { return this._theme; }
  get isDark() { return this._theme() === 'dark'; }

  setTheme(theme: Theme) {
    this._theme.set(theme);
    if (theme === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
    localStorage.setItem('tyre_theme', theme);
  }

  toggle() {
    this.setTheme(this._theme() === 'dark' ? 'light' : 'dark');
  }

  init() {
    const saved = localStorage.getItem('tyre_theme') as Theme;
    if (saved === 'light' || saved === 'dark') {
      this.setTheme(saved);
    }
  }
}
