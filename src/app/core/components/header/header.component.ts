import { Component, HostListener, signal, computed, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  // OnPush: re-renders only when signals/inputs change — not on every CD cycle
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  private ts = inject(TranslationService);
  private themeService = inject(ThemeService);

  isScrolled = signal(false);
  mobileMenuOpen = signal(false);
  langDropdownOpen = signal(false);

  // Derived signals — only recompute when the language signal changes
  readonly lang = computed(() => this.ts.langSignal());
  readonly currentLang = computed(() => this.lang() === 'en' ? '🇬🇧 EN' : '🇳🇱 NL');
  readonly isDark = computed(() => this.themeService.themeSignal() === 'dark');

  // Computed array: rebuilt only when lang changes, not on every CD cycle
  readonly navLinks = computed(() => {
    const t = this.ts.t;
    return [
      { label: t.nav_services,    path: '/services' },
      { label: t.nav_how_it_works, path: '/how-it-works' },
      { label: t.nav_service_area, path: '/service-area' },
      { label: t.nav_about,       path: '/about' },
      { label: t.nav_tyre_guide,  path: '/tyre-markings' },
      { label: t.nav_contact,     path: '/contact' },
    ];
  });

  // Computed translation object — single reactive reference
  readonly t = computed(() => {
    this.ts.langSignal(); // track the signal
    return this.ts.t;
  });

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMobileMenu() { this.mobileMenuOpen.update(v => !v); }
  closeMobileMenu()  { this.mobileMenuOpen.set(false); }
  toggleLangDropdown() { this.langDropdownOpen.update(v => !v); }
  toggleTheme()      { this.themeService.toggle(); }

  setLang(lang: 'en' | 'nl') {
    this.ts.setLang(lang);
    this.langDropdownOpen.set(false);
  }
}
