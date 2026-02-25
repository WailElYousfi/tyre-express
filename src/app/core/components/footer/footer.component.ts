import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  private ts = inject(TranslationService);
  currentYear = new Date().getFullYear();

  get t() { return this.ts.t; }

  get quickLinks() {
    return [
      { label: this.t.footer_about, path: '/about' },
      { label: this.t.footer_services, path: '/services' },
      { label: this.t.footer_how, path: '/how-it-works' },
      { label: this.t.nav_tyre_guide, path: '/tyre-markings' },
      { label: this.t.footer_pricing, path: '/contact' },
    ];
  }

  get supportLinks() {
    return [
      { label: this.t.footer_faq, path: '/contact' },
      { label: this.t.footer_service_area, path: '/service-area' },
      { label: this.t.footer_contact, path: '/contact' },
      { label: this.t.footer_terms, path: '/contact' },
    ];
  }
}
