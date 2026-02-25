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

  // ── Step 1: Vehicle ───────────────────────────────────────────────────────
  vehicleTab = signal<'plate' | 'manual'>('plate');
  plateInput = signal('');
  vehicleFound = signal(false);
  vehicleInfo = signal<{ make: string; model: string; year: string; trim: string; plate: string } | null>(null);

  manualForm = { make: '', model: '', year: '', trim: '' };

  findVehicle() {
    const plate = this.plateInput().trim();
    if (plate.length >= 4) {
      // Simulate vehicle lookup
      this.vehicleInfo.set({ make: 'Volkswagen', model: 'Golf', year: '2021', trim: '1.6 TDI Comfortline', plate: plate.toUpperCase() });
      this.vehicleFound.set(true);
    }
  }

  clearVehicle() {
    this.vehicleFound.set(false);
    this.vehicleInfo.set(null);
    this.plateInput.set('');
  }

  // ── Step 2: Services ──────────────────────────────────────────────────────
  get availableServices(): Service[] {
    return [
      { id: 'change', icon: 'tire_repair', title: this.t.nav_services === 'Services' ? 'Tire Change' : 'Bandenwisseling', desc: this.t.nav_services === 'Services' ? 'On-site replacement of all tire types.' : 'Ter plaatse vervangen van alle bandentypen.', price: 40 },
      { id: 'balance', icon: 'settings', title: this.t.nav_services === 'Services' ? 'Wheel Balancing' : 'Wielbalancering', desc: this.t.nav_services === 'Services' ? 'Computer balancing for a vibration-free ride.' : 'Computerbalancering voor een trillingsvrije rit.', price: 20 },
      { id: 'rim', icon: 'build', title: this.t.nav_services === 'Services' ? 'Rim Repair' : 'Velgreparatie', desc: this.t.nav_services === 'Services' ? 'Fix scratches and dents on alloy wheels.' : 'Herstel krassen en deuken op velgen.', price: 60 },
      { id: 'swap', icon: 'ac_unit', title: this.t.nav_services === 'Services' ? 'Seasonal Swap' : 'Seizoenswisseling', desc: this.t.nav_services === 'Services' ? 'Winter/summer changeover with storage.' : 'Winter/zomer wisseling met opslag.', price: 55 },
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

  get calendarDays() {
    const today = new Date();
    const days = [];
    for (let i = 1; i <= 14; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const dayNames = this.ts.lang === 'en'
        ? ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
        : ['Zo','Ma','Di','Wo','Do','Vr','Za'];
      days.push({
        date: d.toISOString().split('T')[0],
        dayName: dayNames[d.getDay()],
        dayNum: d.getDate(),
        disabled: d.getDay() === 0 // no Sundays
      });
    }
    return days;
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
    this.vehicleFound.set(false);
    this.vehicleInfo.set(null);
    this.plateInput.set('');
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
      case 1: return this.vehicleFound() || (this.manualForm.make !== '' && this.manualForm.model !== '');
      case 2: return this.selectedServices().size > 0;
      case 3: return this.selectedDate() !== '' && this.selectedTime() !== '' && this.locationInput().trim() !== '';
      case 4: return this.contactName().trim() !== '' && this.contactPhone().trim() !== '';
      default: return false;
    }
  }
}
