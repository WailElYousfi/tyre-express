import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <section class="page-hero">
      <div class="container">
        <div class="badge">
          <span class="material-symbols-outlined" style="font-size:0.9rem">build_circle</span>
          {{ t.sp_badge }}
        </div>
        <h1>{{ t.sp_h1 }}</h1>
        <p>{{ t.sp_sub }}</p>
      </div>
    </section>

    <div class="page-wrapper">
      <div class="container">
        <div class="services-list">
          <div class="service-row card" *ngFor="let s of services; let i = index" [class.reverse]="i % 2 !== 0">
            <div class="sr-img">
              <img [src]="s.img" [alt]="s.title"/>
            </div>
            <div class="sr-content">
              <div class="sr-icon">
                <span class="material-symbols-outlined">{{ s.icon }}</span>
              </div>
              <h2>{{ s.title }}</h2>
              <p>{{ s.desc }}</p>
              <ul>
                <li *ngFor="let f of s.features">
                  <span class="material-symbols-outlined">check_circle</span> {{ f }}
                </li>
              </ul>
              <a routerLink="/contact" class="btn-primary">{{ t.sp_book_service }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .services-list { display: flex; flex-direction: column; gap: 2rem; }
    .service-row {
      display: grid; grid-template-columns: 1fr 1fr; gap: 0; overflow: hidden;
      @media (max-width: 768px) { grid-template-columns: 1fr; }
      &.reverse { direction: rtl; > * { direction: ltr; } }
    }
    .sr-img {
      aspect-ratio: 4/3;
      img { width: 100%; height: 100%; object-fit: cover; }
    }
    .sr-content {
      padding: 2.5rem;
      display: flex; flex-direction: column; gap: 1rem; justify-content: center;
    }
    .sr-icon {
      width: 52px; height: 52px; border-radius: 12px;
      background: rgba(245,200,0,0.12); display: flex; align-items: center; justify-content: center;
      .material-symbols-outlined { color: var(--primary); font-size: 1.5rem; }
    }
    h2 { font-size: 1.5rem; font-weight: 800; }
    p { font-size: 0.88rem; color: var(--text-muted); line-height: 1.7; }
    ul { list-style: none; display: flex; flex-direction: column; gap: 0.5rem;
      li { display: flex; align-items: center; gap: 0.5rem; font-size: 0.83rem; color: #cbd5e1;
        .material-symbols-outlined { color: var(--primary); font-size: 1rem; }
      }
    }
    .btn-primary {
      display: inline-flex; align-items: center; gap: 0.4rem;
      padding: 0.7rem 1.5rem; background: var(--primary); color: #fff;
      border-radius: var(--radius-lg); font-weight: 700; font-size: 0.85rem;
      text-decoration: none; width: fit-content; transition: background 0.2s;
      &:hover { background: var(--primary-hover); }
    }
  `]
})
export class ServicesComponent {
  private ts = inject(TranslationService);
  get t() { return this.ts.t; }
  services = [
    {
      title: 'Tire Change',
      icon: 'tire_repair',
      desc: 'On-site replacement of summer, winter, or all-season tires for any vehicle. Our technicians handle everything from removal to fitting and torquing.',
      features: ['All vehicle types', 'Same-day service', 'OEM-spec torque settings', 'TPMS sensor check'],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTHaQqj_f4ng4Xr4BVbIk6GAaQjbqdPht73tWD9GNyq2hBdDU5GIun794hyoHUXefn-icJj4BH8p-LNaNgJ4zQoi0PPamKIzbAdrybTpMha7f_ny951757-mppQ1Ya7nsifIZ-l1LSF3vbw_Q4n7VeuQjcbYjoYoUlliy79BcP6yxUxDyceGucuioZcvJfWd2AT-be9HwvCx5g2eW1oPbn31OLb84V88D-PyKBwl0lPVI55_gr46FVc2-msBEXTNQDfOmt0DZ9lFlD'
    },
    {
      title: 'Wheel Balancing',
      icon: 'settings',
      desc: 'State-of-the-art computer balancing to ensure a smooth, vibration-free ride. Eliminates uneven tire wear and extends the life of your tires.',
      features: ['Digital computerized balancing', 'Eliminates vibration', 'Extends tire lifespan', 'Improves fuel efficiency'],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByCwRyolgnlQUT-26uzbSDu-MTv0svEt3ZNx01NRTSgR6TFdVfuELeLRBuTFasNetSyGIsEvAkZnoeo8mWlrlwy1SYdqkrtC-f3QYp6TpBpHG5IwXhEFQByNWLtN3QJOnT5wXIUlOvKlwJdjwOmFwsFIkszPn6shqASfyxnuh6qBZF2RRaut7NlnF9sCSKPmEJkdW-KmePAEbN-BCE6JA5W0ehM-qqqjmzTvv8WcxGN7hEWumMIVkR7zVELCpgJNsQERDTl2j39YFH'
    },
    {
      title: 'Rim Repair',
      icon: 'build',
      desc: 'Fixing curbside damage, scratches, and minor dents on your alloy wheels. Restore your rims to their original condition without expensive replacements.',
      features: ['Alloy & steel rims', 'Scratch & dent repair', 'Cosmetic refinishing', 'Same session as tire service'],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQMcQINEgJotv37rV1DOWf3FEsy_TJIVy-fzgfIorxROS2NvwggNPU7K0RUpzsjkZZOlU3D419Zm19CVV9ICJigXsGA7_y5jBn7ox4uXEZQujvZ6jg4FBy4Eglkgn8G0kwJxF4nX-qLE81_ozSmf3y9D41_2kjlltjJvEWuSS7-XjSmaPKpF_SDo5wzdVhWpfGz1qFfStdw-5NqMJOnzk35QwrTBbgBeH-k7fB2D99CGRIaCZv-LGhz1Smf3konTFaGbQQ3ZqZD2qt'
    },
    {
      title: 'Winter / Summer Swap',
      icon: 'ac_unit',
      desc: 'Seasonal changeovers and storage solutions for your off-season tire sets. Never worry about getting caught in the wrong tires.',
      features: ['Storage included', 'Seasonal reminders', 'Full balancing included', 'Fleet packages available'],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTuB_iLmYKV77iWzy9W4FpPbbzbmo_f1qaNB6PX_Y2X2zTrtNeByw8nqLIFxp9Wl6yVdnMtxXWuMB_Iv-qlFuedLlygm4Nf_hCT-iVx5jziddeDhgUg1GLpZB6UYwIxsyKBAGfojGxGj2Sz42srbgbs6wwJhYZl-b0OAGnZbdX7BRR3uzTQA6QlQ8dKrffH-qKeu9wNHGSWrb2j8jqyf6bI9_Fo81dMx65kM5L8rLwhzI5u0K9RfdB95WZygPy_Se8c4atx_8ybZhc'
    }
  ];
}
