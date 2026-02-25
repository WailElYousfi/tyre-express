import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="page-hero">
      <div class="container">
        <div class="badge">
          <span class="material-symbols-outlined" style="font-size:0.9rem">mail</span>
          {{ t.co_badge }}
        </div>
        <h1>{{ t.co_h1 }}</h1>
        <p>{{ t.co_sub }}</p>
      </div>
    </section>

    <div class="page-wrapper" style="padding-top: 2rem;">
      <div class="container contact-layout">

        <!-- Form -->
        <div class="form-panel">
          <div *ngIf="!submitted()" class="card form-card">
            <h2>{{ t.co_form_title }}</h2>
            <p>{{ t.co_form_sub }}</p>

            <div class="form-group">
              <label>{{ t.co_name }}</label>
              <input type="text" [(ngModel)]="form.name" placeholder="Jan De Smet"/>
            </div>
            <div class="form-group">
              <label>{{ t.co_phone }}</label>
              <input type="tel" [(ngModel)]="form.phone" placeholder="+32 499 00 00 00"/>
            </div>
            <div class="form-group">
              <label>{{ t.co_email }}</label>
              <input type="email" [(ngModel)]="form.email" placeholder="jan@example.be"/>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label>{{ t.co_service }}</label>
                <select [(ngModel)]="form.service">
                  <option value="">{{ t.co_service_placeholder }}</option>
                  <option>Tire Change</option>
                  <option>Wheel Balancing</option>
                  <option>Rim Repair</option>
                  <option>Winter/Summer Swap</option>
                </select>
              </div>
              <div class="form-group">
                <label>{{ t.co_date }}</label>
                <input type="date" [(ngModel)]="form.date"/>
              </div>
            </div>
            <div class="form-group">
              <label>{{ t.co_location }}</label>
              <input type="text" [(ngModel)]="form.location" [placeholder]="t.co_location_placeholder"/>
            </div>
            <div class="form-group">
              <label>{{ t.co_message }}</label>
              <textarea [(ngModel)]="form.message" rows="3" [placeholder]="t.co_message_placeholder"></textarea>
            </div>
            <button class="submit-btn" (click)="submitForm()">
              <span class="material-symbols-outlined">send</span>
              {{ t.co_submit }}
            </button>
          </div>

          <div *ngIf="submitted()" class="card success-card">
            <span class="material-symbols-outlined success-icon">check_circle</span>
            <h2>{{ t.co_success_title }}</h2>
            <p>{{ t.co_success_sub }}</p>
            <button (click)="resetForm()">{{ t.co_book_another }}</button>
          </div>
        </div>

        <!-- Info panel -->
        <div class="info-panel">
          <div class="info-card card" *ngFor="let info of contactInfo">
            <span class="material-symbols-outlined">{{ info.icon }}</span>
            <div>
              <h4>{{ info.title }}</h4>
              <p>{{ info.value }}</p>
            </div>
          </div>

          <div class="hours-card card">
            <h4>
              <span class="material-symbols-outlined">schedule</span>
              {{ t.co_hours_title }}
            </h4>
            <div class="hours-list">
              <div *ngFor="let h of hours" class="hour-row">
                <span>{{ h.day }}</span>
                <span class="time">{{ h.time }}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  `,
  styles: [`
    .contact-layout { display: grid; grid-template-columns: 1.5fr 1fr; gap: 3rem; align-items: start;
      @media (max-width: 900px) { grid-template-columns: 1fr; }
    }
    .form-card { padding: 2.5rem;
      h2 { font-size: 1.3rem; font-weight: 800; margin-bottom: 0.4rem; }
      > p { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 2rem; }
    }
    .form-group { display: flex; flex-direction: column; gap: 0.4rem; margin-bottom: 1rem;
      label { font-size: 0.78rem; font-weight: 700; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em; }
      input, select, textarea {
        background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg);
        padding: 0.7rem 0.9rem; color: var(--text); font-size: 0.88rem; font-family: var(--font); width: 100%;
        transition: border-color 0.2s;
        &:focus { outline: none; border-color: var(--primary); }
        &::placeholder { color: var(--text-secondary); }
      }
      textarea { resize: vertical; }
    }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    .submit-btn {
      width: 100%; display: flex; align-items: center; justify-content: center; gap: 0.5rem;
      padding: 0.9rem; background: var(--primary); color: #111; font-weight: 800; font-size: 0.92rem;
      border: none; border-radius: var(--radius-lg); cursor: pointer; transition: background 0.2s, transform 0.15s;
      margin-top: 0.5rem;
      .material-symbols-outlined { font-size: 1.1rem; }
      &:hover { background: var(--primary-hover); transform: scale(1.02); }
    }
    .success-card {
      padding: 3rem; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 1rem;
      .success-icon { font-size: 3.5rem; color: #4ade80; font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
      h2 { font-size: 1.5rem; font-weight: 800; }
      p { font-size: 0.88rem; color: var(--text-muted); }
      button { padding: 0.7rem 1.5rem; background: var(--primary); color: #111; border: none; border-radius: var(--radius-lg);
        font-weight: 700; cursor: pointer; &:hover { background: var(--primary-hover); } }
    }
    .info-panel { display: flex; flex-direction: column; gap: 1rem; }
    .info-card { padding: 1.25rem; display: flex; align-items: flex-start; gap: 0.9rem;
      .material-symbols-outlined { color: var(--primary); font-size: 1.3rem; flex-shrink: 0; margin-top: 1px; }
      h4 { font-size: 0.82rem; font-weight: 700; margin-bottom: 0.2rem; }
      p { font-size: 0.8rem; color: var(--text-muted); }
    }
    .hours-card { padding: 1.5rem;
      h4 { display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; font-weight: 700; margin-bottom: 1rem;
        .material-symbols-outlined { color: var(--primary); font-size: 1.1rem; }
      }
    }
    .hours-list { display: flex; flex-direction: column; gap: 0.5rem; }
    .hour-row { display: flex; justify-content: space-between; font-size: 0.8rem;
      span { color: var(--text-muted); }
      .time { font-weight: 600; color: var(--text); }
    }
  `]
})
export class ContactComponent {
  private ts = inject(TranslationService);
  get t() { return this.ts.t; }
  submitted = signal(false);

  form = { name: '', phone: '', email: '', service: '', date: '', location: '', message: '' };

  contactInfo = [
    { icon: 'call', title: 'Phone', value: '+32 00 000 00 00' },
    { icon: 'mail', title: 'Email', value: 'info@tyre-express.be' },
    { icon: 'location_on', title: 'Base Location', value: '9340 Lede, East Flanders, Belgium' },
  ];

  hours = [
    { day: 'Mon – Fri', time: '08:30–12:00, 13:00–18:00' },
    { day: 'Saturday', time: '08:30–12:00' },
    { day: 'Sunday', time: 'Closed' },
  ];

  submitForm() {
    if (this.form.name && this.form.phone) {
      this.submitted.set(true);
    }
  }

  resetForm() {
    this.form = { name: '', phone: '', email: '', service: '', date: '', location: '', message: '' };
    this.submitted.set(false);
  }
}
