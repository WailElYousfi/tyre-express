import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <section class="page-hero">
      <div class="container">
        <div class="badge">
          <span class="material-symbols-outlined" style="font-size:0.9rem">groups</span>
          {{ t.ab_badge }}
        </div>
        <h1>{{ t.ab_h1 }}</h1>
        <p>{{ t.ab_sub }}</p>
      </div>
    </section>

    <div class="page-wrapper" style="padding-top: 2rem;">
      <div class="container">

        <!-- Story -->
        <div class="story-grid">
          <div class="story-text">
            <h2 class="section-title">{{ t.ab_story_title }}</h2>
            <p>{{ t.ab_story_p1 }}</p>
            <p>{{ t.ab_story_p2 }}</p>
            <div class="milestones">
              <div class="milestone" *ngFor="let m of milestones">
                <span class="milestone-year text-primary">{{ m.year }}</span>
                <span>{{ m.event }}</span>
              </div>
            </div>
          </div>
          <div class="story-visual">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcZ3bfzFeRJ63e6nECZ-beybW_q6iKsFPx3SdXGEpkDVaMoSUGbtcz2bw15t7Q5H8Qpdok1zsbykwRtea8EkLSGR8IYczpwHMDHpHIxjE0rAooKVf0vF-wk-BtDSwzKQgOeGr2Z29zUc_Pm4ZCDOhclbtivBHna63nmUrh6_qs9x3MjT7lqQgM0yYi-aaHxUs1vDR4C27ZbmxRFbC4yfX4sW4Gth7vvCgvvn2tkW-Fv3Yc7RKTlxBKt4TBfkqACowguDC6z4Ppr_D6"
              alt="Tyre-Express van"
            />
          </div>
        </div>

        <!-- Values -->
        <div class="values-section">
          <h2 class="section-title text-center" style="margin-bottom: 2.5rem">{{ t.ab_values_title }}</h2>
          <div class="values-grid">
            <div class="value-card card" *ngFor="let v of values">
              <div class="v-icon">
                <span class="material-symbols-outlined">{{ v.icon }}</span>
              </div>
              <h3>{{ v.title }}</h3>
              <p>{{ v.desc }}</p>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div style="text-align: center; margin-top: 4rem;">
          <a routerLink="/contact" class="btn-cta">{{ t.ab_cta }}</a>
        </div>

      </div>
    </div>
  `,
  styles: [`
    .story-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; margin-bottom: 5rem;
      @media (max-width: 768px) { grid-template-columns: 1fr; }
    }
    .story-text {
      h2 { margin-bottom: 1.5rem; }
      p { font-size: 0.9rem; color: var(--text-muted); line-height: 1.8; margin-bottom: 1rem; }
    }
    .milestones { margin-top: 2rem; display: flex; flex-direction: column; gap: 0.75rem; border-left: 2px solid var(--primary); padding-left: 1.25rem; }
    .milestone { display: flex; gap: 0.75rem; align-items: flex-start; font-size: 0.83rem;
      .milestone-year { font-weight: 900; flex-shrink: 0; }
      span:last-child { color: var(--text-muted); }
    }
    .story-visual {
      border-radius: var(--radius-xl); overflow: hidden; border: 1px solid var(--border-dark);
      box-shadow: 0 20px 50px rgba(0,0,0,0.4);
      img { width: 100%; height: 360px; object-fit: cover; }
    }
    .values-section { padding: 3rem 0; }
    .values-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;
      @media (max-width: 900px) { grid-template-columns: 1fr 1fr; }
      @media (max-width: 560px) { grid-template-columns: 1fr; }
    }
    .value-card { padding: 2rem;
      h3 { font-size: 1rem; font-weight: 700; margin: 0.75rem 0 0.5rem; }
      p { font-size: 0.82rem; color: var(--text-muted); line-height: 1.65; }
    }
    .v-icon {
      width: 48px; height: 48px; border-radius: 12px; background: rgba(245,200,0,0.12);
      display: flex; align-items: center; justify-content: center;
      .material-symbols-outlined { color: var(--primary); font-size: 1.4rem; }
    }
    .btn-cta {
      display: inline-flex; align-items: center; padding: 1rem 2.5rem;
      background: var(--primary); color: #fff; font-weight: 800; font-size: 1rem;
      border-radius: var(--radius-xl); text-decoration: none;
      box-shadow: 0 8px 30px rgba(245,200,0,0.3); transition: background 0.2s, transform 0.15s;
      &:hover { background: var(--primary-hover); transform: scale(1.03); }
    }
  `]
})
export class AboutComponent {
  private ts = inject(TranslationService);
  get t() { return this.ts.t; }
  milestones = [
    { year: '2018', event: 'Founded in Lede with a single service van.' },
    { year: '2020', event: 'Expanded to cover all of East Flanders.' },
    { year: '2022', event: 'Reached 1,000 satisfied customers.' },
    { year: '2024', event: '2,000+ drivers served across Belgium.' },
  ];

  values = [
    { icon: 'speed', title: 'Efficiency', desc: 'We respect your time. Every service is optimized to get you back on the road quickly.' },
    { icon: 'verified_user', title: 'Quality', desc: 'Certified technicians and professional-grade equipment on every job, no exceptions.' },
    { icon: 'handshake', title: 'Transparency', desc: 'Clear pricing, no hidden fees, and honest recommendations every time.' },
    { icon: 'eco', title: 'Sustainability', desc: 'Responsible recycling, efficient routing, and eco-conscious operations.' },
    { icon: 'star', title: 'Excellence', desc: 'We hold ourselves to the highest standards in the mobile tire industry.' },
    { icon: 'support_agent', title: 'Customer First', desc: 'Your satisfaction is our priority. We are always just a call away.' },
  ];
}
