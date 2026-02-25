import { Component, signal, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';

interface Service {
  id: string;
  icon: string;
  title: string;
  desc: string;
  price: number;
}

interface TimeSlot {
  time: string;
  available: boolean;
}

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  private ts = inject(TranslationService);
  get t() { return this.ts.t; }

  // ── Stepper ──────────────────────────────────────────────────────────────
  currentStep = signal(1);
  totalSteps = 4;

  steps = computed(() => [
    { n: 1, label: this.t.bk_step1 },
    { n: 2, label: this.t.bk_step2 },
    { n: 3, label: this.t.bk_step3 },
    { n: 4, label: this.t.bk_step4 },
  ]);

  // ── Step 1: Vehicle (manual entry only) ─────────────────────────────────
  manualForm = { make: '', model: '', year: '', trim: '', regNumber: '' };

  // ── Step 2: Services ──────────────────────────────────────────────────────
  get availableServices(): Service[] {
    return [
      { id: 'change', icon: 'tire_repair', title: this.t.bk_svc_change_title,  desc: this.t.bk_svc_change_desc,  price: 40 },
      { id: 'balance', icon: 'settings',   title: this.t.bk_svc_balance_title, desc: this.t.bk_svc_balance_desc, price: 20 },
      { id: 'rim',    icon: 'build',        title: this.t.bk_svc_rim_title,     desc: this.t.bk_svc_rim_desc,     price: 60 },
      { id: 'swap',   icon: 'ac_unit',      title: this.t.bk_svc_swap_title,    desc: this.t.bk_svc_swap_desc,    price: 55 },
    ];
  }

  selectedServices = signal<Set<string>>(new Set());

  toggleService(id: string) {
    this.selectedServices.update(set => {
      const n = new Set(set);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
  }

  isServiceSelected(id: string) { return this.selectedServices().has(id); }

  get selectedServiceItems() {
    return this.availableServices.filter(s => this.selectedServices().has(s.id));
  }

  // ── Step 3: Schedule ──────────────────────────────────────────────────────
  selectedDate = signal<string>('');
  selectedTime = signal<string>('');

  // ── Real calendar navigation ──────────────────────────────────────────────
  private _today = new Date();
  calendarYear = signal(this._today.getFullYear());
  calendarMonth = signal(this._today.getMonth()); // 0-based

  get calendarMonthLabel() {
    const en = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const nl = ['Januari','Februari','Maart','April','Mei','Juni','Juli','Augustus','September','Oktober','November','December'];
    const names = this.ts.lang === 'en' ? en : nl;
    return names[this.calendarMonth()] + ' ' + this.calendarYear();
  }

  get calendarGrid() {
    const year = this.calendarYear();
    const month = this.calendarMonth();
    const today = this._today;
    const dayNamesEn = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const dayNamesNl = ['Zo','Ma','Di','Wo','Do','Vr','Za'];
    const dayNames = this.ts.lang === 'en' ? dayNamesEn : dayNamesNl;

    // First day of month (0=Sun) and days in month
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const cells: { date: string; dayName: string; dayNum: number; disabled: boolean; past: boolean; empty: boolean }[] = [];

    // Leading empty cells (so Mon = index 0 in display: shift Sun to end)
    const startOffset = (firstDay === 0 ? 6 : firstDay - 1); // Mon-based
    for (let i = 0; i < startOffset; i++) {
      cells.push({ date: '', dayName: '', dayNum: 0, disabled: true, past: true, empty: true });
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(year, month, d);
      const isSunday = date.getDay() === 0;
      const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
      cells.push({
        date: date.toISOString().split('T')[0],
        dayName: dayNames[date.getDay()],
        dayNum: d,
        disabled: isSunday || isPast,
        past: isPast,
        empty: false
      });
    }
    return cells;
  }

  get canGoPrevMonth() {
    const t = this._today;
    return this.calendarYear() > t.getFullYear() ||
      (this.calendarYear() === t.getFullYear() && this.calendarMonth() > t.getMonth());
  }

  prevMonth() {
    if (!this.canGoPrevMonth) return;
    if (this.calendarMonth() === 0) { this.calendarMonth.set(11); this.calendarYear.update(y => y - 1); }
    else { this.calendarMonth.update(m => m - 1); }
  }

  nextMonth() {
    if (this.calendarMonth() === 11) { this.calendarMonth.set(0); this.calendarYear.update(y => y + 1); }
    else { this.calendarMonth.update(m => m + 1); }
  }

  get weekDayHeaders() {
    return this.ts.lang === 'en'
      ? ['Mo','Tu','We','Th','Fr','Sa','Su']
      : ['Ma','Di','Wo','Do','Vr','Za','Zo'];
  }

  timeSlots: TimeSlot[] = [
    { time: '07:00', available: true },
    { time: '08:00', available: true },
    { time: '09:00', available: false },
    { time: '10:00', available: true },
    { time: '11:00', available: true },
    { time: '12:00', available: false },
    { time: '13:00', available: true },
    { time: '14:00', available: true },
    { time: '15:00', available: true },
    { time: '16:00', available: false },
    { time: '17:00', available: true },
    { time: '18:00', available: true },
  ];

  locationInput = signal('');

  // ── Step 4: Confirm ───────────────────────────────────────────────────────
  confirmed = signal(false);
  contactName = signal('');
  contactPhone = signal('');
  contactEmail = signal('');

  confirmBooking() {
    this.confirmed.set(true);
  }

  // ── Pricing ───────────────────────────────────────────────────────────────
  get subtotal() {
    const base = 40;
    return this.selectedServiceItems.reduce((sum, s) => sum + s.price, base);
  }
  get tax() { return +(this.subtotal * 0.1).toFixed(2); }
  get total() { return +(this.subtotal + this.tax).toFixed(2); }

  // ── Navigation ────────────────────────────────────────────────────────────
  goNext() {
    if (this.currentStep() < this.totalSteps) {
      this.currentStep.update(s => s + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  goBack() {
    if (this.currentStep() > 1) {
      this.currentStep.update(s => s - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  goToStep(n: number) {
    if (n < this.currentStep()) {
      this.currentStep.set(n);
    }
  }

  resetBooking() {
    this.currentStep.set(1);
    this.confirmed.set(false);
this.selectedServices.set(new Set());
    this.selectedDate.set('');
    this.selectedTime.set('');
    this.locationInput.set('');
    this.contactName.set('');
    this.contactPhone.set('');
    this.contactEmail.set('');
  }

  get canContinue(): boolean {
    switch (this.currentStep()) {
      case 1: return this.manualForm.make !== '' && this.manualForm.model !== '';
      case 2: return this.selectedServices().size > 0;
      case 3: return this.selectedDate() !== '' && this.selectedTime() !== '' && this.locationInput().trim() !== '';
      case 4: return this.contactName().trim() !== '' && this.contactPhone().trim() !== '';
      default: return false;
    }
  }
}
