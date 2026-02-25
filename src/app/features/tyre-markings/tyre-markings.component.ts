import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-tyre-markings',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <section class="page-hero">
      <div class="container">
        <div class="badge">
          <span class="material-symbols-outlined" style="font-size:0.9rem">menu_book</span>
          {{ t.tm_badge }}
        </div>
        <h1>{{ t.tm_h1 }}</h1>
        <p>{{ t.tm_sub }}</p>
      </div>
    </section>

    <div class="page-wrapper" style="padding-top: 1rem;">
      <div class="container">

        <!-- Hero diagram + download -->
        <div class="diagram-section">
          <div class="diagram-card card">
            <div class="tyre-visual">
              <div class="tyre-ring">
                <div class="tyre-bg"></div>
                <!-- Badge markers -->
                <div class="marker marker-a">A</div>
                <div class="marker marker-b">B</div>
                <div class="marker marker-c">C</div>
                <div class="marker marker-d">D</div>
                <div class="marker marker-e">E</div>
                <div class="spec-label">
                  <span class="spec-code">205 / 55 R16 91V</span>
                  <span class="spec-sub">Master Specification</span>
                </div>
              </div>
            </div>
          </div>
          <div class="diagram-aside">
            <h2 class="section-title">{{ t.tm_breakdown_title }}</h2>
            <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 2rem;">{{ t.tm_sub }}</p>
            <button class="download-btn">
              <span class="material-symbols-outlined">download</span>
              {{ t.tm_download }}
            </button>
          </div>
        </div>

        <!-- Marking cards grid -->
        <div class="markings-grid">

          <!-- A: Width -->
          <div class="marking-card card">
            <div class="card-header">
              <div class="marker-badge">A</div>
              <span class="material-symbols-outlined card-icon">straighten</span>
            </div>
            <h4>{{ t.tm_width }}</h4>
            <p>{{ t.tm_width_desc }}</p>
            <div class="example-tag">e.g. <strong>205</strong> mm</div>
          </div>

          <!-- B: Aspect Ratio -->
          <div class="marking-card card">
            <div class="card-header">
              <div class="marker-badge">B</div>
              <span class="material-symbols-outlined card-icon">aspect_ratio</span>
            </div>
            <h4>{{ t.tm_aspect }}</h4>
            <p>{{ t.tm_aspect_desc }}</p>
            <div class="example-tag">e.g. <strong>55</strong> %</div>
          </div>

          <!-- C: Diameter -->
          <div class="marking-card card">
            <div class="card-header">
              <div class="marker-badge">C</div>
              <span class="material-symbols-outlined card-icon">radio_button_unchecked</span>
            </div>
            <h4>{{ t.tm_diameter }}</h4>
            <p>{{ t.tm_diameter_desc }}</p>
            <div class="example-tag">e.g. R<strong>16</strong> in</div>
          </div>

          <!-- D: Load Index -->
          <div class="marking-card card">
            <div class="card-header">
              <div class="marker-badge">D</div>
              <span class="material-symbols-outlined card-icon">weight</span>
            </div>
            <h4>{{ t.tm_load }}</h4>
            <p>{{ t.tm_load_desc }}</p>
            <div class="info-note">
              <span class="material-symbols-outlined">info</span>
              <span>{{ t.tm_load_note }}</span>
            </div>
          </div>

          <!-- E: Speed Rating -->
          <div class="marking-card card">
            <div class="card-header">
              <div class="marker-badge">E</div>
              <span class="material-symbols-outlined card-icon">speed</span>
            </div>
            <h4>{{ t.tm_speed }}</h4>
            <p>{{ t.tm_speed_desc }}</p>
            <div class="info-note warning">
              <span class="material-symbols-outlined">warning</span>
              <span>{{ t.tm_speed_note }}</span>
            </div>
          </div>

          <!-- CTA card -->
          <div class="cta-card">
            <span class="material-symbols-outlined">shopping_cart</span>
            <h4>{{ t.tm_shop_title }}</h4>
            <p>{{ t.tm_shop_sub }}</p>
            <a routerLink="/book" class="shop-btn">{{ t.tm_shop_btn }}</a>
          </div>

        </div>

        <!-- Speed Rating Chart -->
        <div class="speed-chart card">
          <div class="chart-header">
            <div>
              <h3>{{ t.tm_speed_chart_title }}</h3>
              <p>{{ t.tm_speed_chart_sub }}</p>
            </div>
          </div>
          <div class="speed-grid">
            <div class="speed-item" *ngFor="let s of speedRatings">
              <span class="speed-letter">{{ s.letter }}</span>
              <span class="speed-km">{{ s.speed }}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  `,
  styles: [`
    .diagram-section {
      display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; margin-bottom: 4rem;
      @media (max-width: 768px) { grid-template-columns: 1fr; }
    }

    .diagram-card { padding: 2rem; display: flex; align-items: center; justify-content: center; }

    .tyre-visual { width: 100%; max-width: 360px; margin: 0 auto; aspect-ratio: 1; }

    .tyre-ring {
      width: 100%; height: 100%; border-radius: 50%;
      border: 28px solid var(--surface);
      box-shadow: inset 0 0 0 4px var(--border), 0 0 60px rgba(245,200,0,0.12);
      position: relative; display: flex; align-items: center; justify-content: center;
      background: radial-gradient(circle at 50%, rgba(245,200,0,0.05) 0%, transparent 70%);
    }

    .tyre-bg {
      position: absolute; inset: 0; border-radius: 50%;
      background: conic-gradient(from 0deg, #1a1a1a, #2a2a2a, #1a1a1a);
      opacity: 0.6;
    }

    .marker {
      position: absolute; width: 32px; height: 32px; border-radius: 50%;
      background: var(--primary); color: #111; font-weight: 900; font-size: 0.85rem;
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 4px 16px rgba(245,200,0,0.4); z-index: 2;
    }
    .marker-a { top: 18%; left: 28%; }
    .marker-b { top: 20%; left: 45%; }
    .marker-c { top: 26%; left: 62%; }
    .marker-d { top: 42%; right: 14%; }
    .marker-e { top: 58%; right: 10%; }

    .spec-label {
      position: relative; z-index: 3; text-align: center;
      background: rgba(255,255,255,0.06); backdrop-filter: blur(12px);
      padding: 1rem 1.5rem; border-radius: 1rem; border: 1px solid rgba(255,255,255,0.12);
    }
    .spec-code { display: block; font-size: 1.4rem; font-weight: 900; letter-spacing: 0.15em; color: var(--text); }
    .spec-sub { display: block; font-size: 0.65rem; color: var(--primary); font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 0.3rem; }

    .download-btn {
      display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.8rem 1.5rem;
      background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg);
      color: var(--text); font-weight: 700; font-size: 0.88rem; cursor: pointer;
      transition: border-color 0.2s, background 0.2s;
      .material-symbols-outlined { font-size: 1.1rem; }
      &:hover { border-color: var(--primary); background: rgba(245,200,0,0.06); }
    }

    .markings-grid {
      display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-bottom: 4rem;
      @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
      @media (max-width: 560px) { grid-template-columns: 1fr; }
    }

    .marking-card {
      padding: 1.75rem; transition: border-color 0.2s, transform 0.2s;
      &:hover { border-color: var(--primary); transform: translateY(-2px); }
    }

    .card-header {
      display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;
    }

    .marker-badge {
      width: 36px; height: 36px; border-radius: 50%; background: var(--primary);
      color: #111; font-weight: 900; font-size: 1rem; display: flex; align-items: center; justify-content: center;
    }

    .card-icon {
      font-size: 2.5rem; color: var(--border); transition: color 0.2s;
    }
    .marking-card:hover .card-icon { color: rgba(245,200,0,0.2); }

    h4 { font-size: 1.1rem; font-weight: 800; margin-bottom: 0.5rem; }
    p { font-size: 0.85rem; color: var(--text-muted); line-height: 1.7; }

    .example-tag {
      margin-top: 1rem; display: inline-block; font-size: 0.78rem; padding: 0.3rem 0.7rem;
      background: rgba(245,200,0,0.1); border: 1px solid rgba(245,200,0,0.2);
      border-radius: 9999px; color: var(--primary);
      strong { font-weight: 900; }
    }

    .info-note {
      margin-top: 1rem; display: flex; gap: 0.5rem; align-items: flex-start;
      padding: 0.75rem; border-radius: var(--radius-lg); border-left: 2px solid var(--primary);
      background: rgba(245,200,0,0.06); font-size: 0.78rem; color: var(--text-muted); line-height: 1.5;
      .material-symbols-outlined { color: var(--primary); font-size: 1rem; flex-shrink: 0; margin-top: 1px; }
      &.warning { border-color: #f59e0b; background: rgba(245,158,11,0.06);
        .material-symbols-outlined { color: #f59e0b; }
      }
    }

    .cta-card {
      background: var(--primary); border-radius: var(--radius-xl); padding: 1.75rem;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      text-align: center; color: #111;
      .material-symbols-outlined { font-size: 2.5rem; margin-bottom: 0.75rem; }
      h4 { font-size: 1.1rem; font-weight: 900; text-transform: uppercase; margin-bottom: 0.5rem; }
      p { font-size: 0.82rem; opacity: 0.75; margin-bottom: 1.25rem; color: #111; }
    }

    .shop-btn {
      display: block; width: 100%; padding: 0.75rem; background: #111; color: var(--primary);
      font-weight: 800; font-size: 0.85rem; border-radius: var(--radius-lg); text-decoration: none;
      text-align: center; transition: background 0.2s;
      &:hover { background: #222; }
    }

    /* Speed Chart */
    .speed-chart { padding: 2.5rem; }
    .chart-header {
      display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2rem;
      h3 { font-size: 1.4rem; font-weight: 800; margin-bottom: 0.4rem; }
      p { font-size: 0.85rem; color: var(--text-muted); max-width: 480px; }
    }
    .speed-grid {
      display: grid; grid-template-columns: repeat(8, 1fr); gap: 1rem;
      @media (max-width: 900px) { grid-template-columns: repeat(4, 1fr); }
      @media (max-width: 480px) { grid-template-columns: repeat(3, 1fr); }
    }
    .speed-item {
      display: flex; flex-direction: column; align-items: center; gap: 0.3rem;
      padding: 1rem 0.5rem; background: var(--bg); border-radius: var(--radius-lg);
      border: 1px solid var(--border); transition: border-color 0.2s;
      &:hover { border-color: var(--primary); }
    }
    .speed-letter { font-size: 1.5rem; font-weight: 900; color: var(--primary); }
    .speed-km { font-size: 0.7rem; color: var(--text-muted); text-align: center; }
  `]
})
export class TyreMarkingsComponent {
  private ts = inject(TranslationService);
  get t() { return this.ts.t; }

  speedRatings = [
    { letter: 'N', speed: '140 km/h' },
    { letter: 'P', speed: '150 km/h' },
    { letter: 'Q', speed: '160 km/h' },
    { letter: 'R', speed: '170 km/h' },
    { letter: 'S', speed: '180 km/h' },
    { letter: 'T', speed: '190 km/h' },
    { letter: 'H', speed: '210 km/h' },
    { letter: 'V', speed: '240 km/h' },
    { letter: 'W', speed: '270 km/h' },
    { letter: 'Y', speed: '300 km/h' },
    { letter: 'ZR', speed: '300+ km/h' },
  ];
}
