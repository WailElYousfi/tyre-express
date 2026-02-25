import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-service-area',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <section class="page-hero">
      <div class="container">
        <div class="badge">
          <span class="material-symbols-outlined" style="font-size:0.9rem">location_on</span>
          {{ t.sa_badge }}
        </div>
        <h1>{{ t.sa_h1 }}</h1>
        <p>{{ t.sa_sub }}</p>
      </div>
    </section>

    <div class="page-wrapper" style="padding-top:2rem;">
      <div class="container">
        <div class="area-layout">

          <!-- Cities List -->
          <div class="cities-panel">
            <h3>{{ t.sa_covered }}</h3>
            <div class="cities-grid">
              <div class="city-item" *ngFor="let city of cities">
                <span class="material-symbols-outlined">location_on</span>
                <div>
                  <span class="city-name">{{ city.name }}</span>
                  <span class="city-province">{{ city.province }}</span>
                </div>
                <span class="badge-covered">{{ t.sa_covered_badge }}</span>
              </div>
            </div>

            <div class="not-listed card" style="margin-top: 2rem; padding: 1.5rem;">
              <span class="material-symbols-outlined" style="color: var(--primary); font-size: 1.5rem;">help</span>
              <div>
                <h4>{{ t.sa_not_listed_title }}</h4>
                <p>{{ t.sa_not_listed_sub }}</p>
              </div>
              <a routerLink="/contact" class="btn-check">{{ t.sa_check }}</a>
            </div>
          </div>

          <!-- Map placeholder -->
          <div class="map-panel">
            <div class="map-card">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcQor-qmDW3V-6uq8-FgZ_DP0YXDsCkCQdRq4Nv_bEkMWNZPiwIiubBtocRt6DMXEHe4gSWwTVq1JuRmMAAzLICqHxPbiB5U7Ly68XjUi9muJDUiU10bRcvjZn3Jn6pwlf0gDlCl9eeawT4UbfTLGqfVDBn3ZJGd4efa8OCd2HdB3CCuE8F7an93qGWpG-nEF2taHC758DvLRSJaEsnPpMhILut-hzpuEspsOvUKthDYvQ6conKinVtohD6wDYxSewp3aCRrQpxKJ_"
                alt="Map of East Flanders, Belgium"
              />
              <div class="map-pin">
                <span class="material-symbols-outlined">location_on</span>
                <div class="pin-pulse"></div>
              </div>
              <div class="map-label">East Flanders, Belgium</div>
            </div>

            <div class="area-stats">
              <div class="stat card" *ngFor="let s of stats">
                <span class="material-symbols-outlined">{{ s.icon }}</span>
                <div>
                  <div class="stat-value text-primary">{{ s.value }}</div>
                  <div class="stat-label">{{ s.label }}</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  `,
  styles: [`
    .area-layout { display: grid; grid-template-columns: 1fr 1.2fr; gap: 3rem;
      @media (max-width: 900px) { grid-template-columns: 1fr; }
    }
    .cities-panel h3 { font-size: 1.1rem; font-weight: 800; margin-bottom: 1.25rem; }
    .cities-grid { display: flex; flex-direction: column; gap: 0.5rem; }
    .city-item {
      display: flex; align-items: center; gap: 0.75rem; padding: 0.85rem 1rem;
      border-radius: var(--radius-lg); border: 1px solid var(--border);
      background: var(--surface); transition: border-color 0.2s;
      &:hover { border-color: rgba(245,200,0,0.4); }
      .material-symbols-outlined { color: var(--primary); font-size: 1.1rem; flex-shrink: 0; }
    }
    .city-name { font-weight: 700; font-size: 0.9rem; display: block; }
    .city-province { font-size: 0.75rem; color: var(--text-muted); }
    .badge-covered {
      margin-left: auto; font-size: 0.65rem; font-weight: 700; padding: 0.2rem 0.6rem;
      border-radius: 9999px; background: rgba(34,197,94,0.1); color: #4ade80; border: 1px solid rgba(34,197,94,0.2);
    }
    .not-listed { display: flex; align-items: center; gap: 1rem;
      h4 { font-size: 0.9rem; font-weight: 700; }
      p { font-size: 0.78rem; color: var(--text-muted); }
    }
    .btn-check {
      margin-left: auto; padding: 0.5rem 1.1rem; background: var(--primary); color: #fff;
      border-radius: var(--radius-lg); font-size: 0.8rem; font-weight: 700; text-decoration: none; white-space: nowrap;
      flex-shrink: 0; transition: background 0.2s;
      &:hover { background: var(--primary-hover); }
    }
    .map-card {
      border-radius: var(--radius-xl); overflow: hidden; position: relative;
      border: 1px solid var(--border); box-shadow: 0 20px 50px rgba(0,0,0,0.4);
      img { width: 100%; height: 320px; object-fit: cover; filter: grayscale(30%) brightness(0.8); }
    }
    .map-pin {
      position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
      .material-symbols-outlined { color: var(--primary); font-size: 2.5rem; display: block; }
    }
    .pin-pulse {
      position: absolute; top: 4px; right: 0; width: 12px; height: 12px; border-radius: 50%;
      background: var(--primary); animation: ping 1.5s cubic-bezier(0,0,0.2,1) infinite;
    }
    @keyframes ping { 75%,100% { transform: scale(2); opacity: 0; } }
    .map-label {
      position: absolute; bottom: 1rem; left: 50%; transform: translateX(-50%);
      background: rgba(18,18,18,0.85); padding: 0.4rem 1rem; border-radius: 9999px;
      font-size: 0.75rem; font-weight: 600; backdrop-filter: blur(8px); white-space: nowrap;
    }
    .area-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-top: 1.5rem; }
    .stat {
      padding: 1.25rem; display: flex; align-items: center; gap: 0.75rem;
      .material-symbols-outlined { color: var(--primary); font-size: 1.4rem; flex-shrink: 0; }
      .stat-value { font-size: 1.2rem; font-weight: 900; }
      .stat-label { font-size: 0.72rem; color: var(--text-muted); }
    }
  `]
})
export class ServiceAreaComponent {
  private ts = inject(TranslationService);
  get t() { return this.ts.t; }
  cities = [
    { name: 'Liedekerke', province: 'Flemish Brabant' },
    { name: 'Wetteren', province: 'East Flanders' },
    { name: 'Gent', province: 'East Flanders' },
    { name: 'Lede', province: 'East Flanders' },
    { name: 'Aalst', province: 'East Flanders' },
    { name: 'Dendermonde', province: 'East Flanders' },
    { name: 'Sint-Niklaas', province: 'East Flanders' },
    { name: 'Ninove', province: 'East Flanders' },
  ];

  stats = [
    { icon: 'location_city', value: '8+', label: 'Cities covered' },
    { icon: 'route', value: '80km', label: 'Service radius' },
    { icon: 'groups', value: '2k+', label: 'Happy drivers' },
  ];
}
