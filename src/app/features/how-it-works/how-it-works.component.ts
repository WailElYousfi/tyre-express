import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <section class="page-hero">
      <div class="container">
        <div class="badge">
          <span class="material-symbols-outlined" style="font-size:0.9rem">info</span>
          {{ t.hiw_badge }}
        </div>
        <h1>{{ t.hiw_h1 }}</h1>
        <p>{{ t.hiw_sub }}</p>
      </div>
    </section>

    <div class="page-wrapper" style="padding-top: 2rem;">
      <div class="container">

        <!-- Steps Timeline -->
        <div class="timeline">
          <div class="tl-item" *ngFor="let step of steps; let i = index">
            <div class="tl-left">
              <div class="tl-icon">
                <span class="material-symbols-outlined">{{ step.icon }}</span>
              </div>
              <div class="tl-line" *ngIf="i < steps.length - 1"></div>
            </div>
            <div class="tl-content card">
              <div class="tl-num">{{ step.num }}</div>
              <h3>{{ step.title }}</h3>
              <p>{{ step.desc }}</p>
              <ul>
                <li *ngFor="let d of step.details">
                  <span class="material-symbols-outlined">arrow_right</span> {{ d }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- FAQ -->
        <div class="faq-section">
          <h2 class="section-title text-center" style="margin-bottom:2.5rem">{{ t.hiw_faq_title }}</h2>
          <div class="faq-grid">
            <div class="faq-item card" *ngFor="let faq of faqs">
              <h4><span class="material-symbols-outlined">help</span> {{ faq.q }}</h4>
              <p>{{ faq.a }}</p>
            </div>
          </div>
        </div>

        <div style="text-align:center; margin-top: 4rem;">
          <a routerLink="/contact" class="btn-cta">{{ t.hiw_book_btn }}</a>
        </div>

      </div>
    </div>
  `,
  styles: [`
    .timeline { display: flex; flex-direction: column; gap: 0; margin-bottom: 5rem; }
    .tl-item { display: flex; gap: 2rem; align-items: flex-start; }
    .tl-left { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; }
    .tl-icon {
      width: 64px; height: 64px; border-radius: 50%; background: var(--primary);
      display: flex; align-items: center; justify-content: center; z-index: 1;
      box-shadow: 0 8px 24px rgba(245,200,0,0.35);
      .material-symbols-outlined { color: #fff; font-size: 1.8rem; }
    }
    .tl-line { width: 2px; flex: 1; min-height: 40px; background: linear-gradient(to bottom, var(--primary), transparent); margin: 4px 0; }
    .tl-content {
      padding: 1.75rem 2rem; margin-bottom: 1.5rem; flex: 1;
    }
    .tl-num { font-size: 0.75rem; font-weight: 800; color: var(--primary); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.4rem; }
    h3 { font-size: 1.25rem; font-weight: 800; margin-bottom: 0.5rem; }
    p { font-size: 0.88rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 0.75rem; }
    ul { list-style: none; display: flex; flex-direction: column; gap: 0.3rem;
      li { display: flex; align-items: center; gap: 0.3rem; font-size: 0.82rem; color: #94a3b8;
        .material-symbols-outlined { color: var(--primary); font-size: 1rem; }
      }
    }
    .faq-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.25rem;
      @media (max-width: 768px) { grid-template-columns: 1fr; }
    }
    .faq-item { padding: 1.5rem;
      h4 { display: flex; align-items: center; gap: 0.5rem; font-size: 0.95rem; font-weight: 700; margin-bottom: 0.6rem;
        .material-symbols-outlined { color: var(--primary); font-size: 1.1rem; }
      }
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
export class HowItWorksComponent {
  private ts = inject(TranslationService);
  get t() { return this.ts.t; }
  steps = [
    {
      num: 'Step 01',
      icon: 'calendar_month',
      title: 'Book Online or Call',
      desc: 'Select your service type, preferred date and time slot through our booking system or by calling us directly.',
      details: ['Choose from available slots', 'Specify your vehicle type', 'Add special instructions', 'Receive confirmation email']
    },
    {
      num: 'Step 02',
      icon: 'pin_drop',
      title: 'We Come to You',
      desc: 'Our fully-equipped mobile workshop van arrives at your home, office, parking lot, or roadside location.',
      details: ['Real-time GPS tracking', 'Technician notification', 'Full equipment on board', 'Any location in our service area']
    },
    {
      num: 'Step 03',
      icon: 'speed',
      title: 'Service Completed',
      desc: 'Our certified technician completes the job to the highest standards. Most services are done in under 45 minutes.',
      details: ['Certified technicians only', 'Digital inspection report', 'Secure payment on-site', 'Back on the road quickly']
    }
  ];

  faqs = [
    { q: 'How long does a tire change take?', a: 'Most tire changes are completed in 30-45 minutes, depending on vehicle type and number of tires.' },
    { q: 'Do I need to be present?', a: 'You do not need to be present for the full service, but you must be reachable by phone and authorize the work.' },
    { q: 'What payment methods do you accept?', a: 'We accept cash, credit/debit cards, and bank transfer. Payment is collected after service completion.' },
    { q: 'Can you come to my workplace?', a: 'Absolutely! We service any location in our coverage area including offices, parking garages, and public spaces.' },
    { q: 'Do you supply tires as well?', a: 'Yes, we stock a wide range of brands. Contact us in advance so we can prepare the right tires for your vehicle.' },
    { q: 'What if the weather is bad?', a: 'We operate in most weather conditions. We will contact you if conditions are unsafe and reschedule at no cost.' }
  ];
}
