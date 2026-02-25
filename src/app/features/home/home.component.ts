import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  @ViewChildren('fadeEl') fadeEls!: QueryList<ElementRef>;

  private ts = inject(TranslationService);
  get t() { return this.ts.t; }

  // #1 — Services now pull from translation keys
  get services() {
    return [
      { title: this.t.home_svc_change_title,  desc: this.t.home_svc_change_desc,  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTHaQqj_f4ng4Xr4BVbIk6GAaQjbqdPht73tWD9GNyq2hBdDU5GIun794hyoHUXefn-icJj4BH8p-LNaNgJ4zQoi0PPamKIzbAdrybTpMha7f_ny951757-mppQ1Ya7nsifIZ-l1LSF3vbw_Q4n7VeuQjcbYjoYoUlliy79BcP6yxUxDyceGucuioZcvJfWd2AT-be9HwvCx5g2eW1oPbn31OLb84V88D-PyKBwl0lPVI55_gr46FVc2-msBEXTNQDfOmt0DZ9lFlD' },
      { title: this.t.home_svc_balance_title, desc: this.t.home_svc_balance_desc, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByCwRyolgnlQUT-26uzbSDu-MTv0svEt3ZNx01NRTSgR6TFdVfuELeLRBuTFasNetSyGIsEvAkZnoeo8mWlrlwy1SYdqkrtC-f3QYp6TpBpHG5IwXhEFQByNWLtN3QJOnT5wXIUlOvKlwJdjwOmFwsFIkszPn6shqASfyxnuh6qBZF2RRaut7NlnF9sCSKPmEJkdW-KmePAEbN-BCE6JA5W0ehM-qqqjmzTvv8WcxGN7hEWumMIVkR7zVELCpgJNsQERDTl2j39YFH' },
      { title: this.t.home_svc_rim_title,     desc: this.t.home_svc_rim_desc,     img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQMcQINEgJotv37rV1DOWf3FEsy_TJIVy-fzgfIorxROS2NvwggNPU7K0RUpzsjkZZOlU3D419Zm19CVV9ICJigXsGA7_y5jBn7ox4uXEZQujvZ6jg4FBy4Eglkgn8G0kwJxF4nX-qLE81_ozSmf3y9D41_2kjlltjJvEWuSS7-XjSmaPKpF_SDo5wzdVhWpfGz1qFfStdw-5NqMJOnzk35QwrTBbgBeH-k7fB2D99CGRIaCZv-LGhz1Smf3konTFaGbQQ3ZqZD2qt' },
      { title: this.t.home_svc_swap_title,    desc: this.t.home_svc_swap_desc,    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTuB_iLmYKV77iWzy9W4FpPbbzbmo_f1qaNB6PX_Y2X2zTrtNeByw8nqLIFxp9Wl6yVdnMtxXWuMB_Iv-qlFuedLlygm4Nf_hCT-iVx5jziddeDhgUg1GLpZB6UYwIxsyKBAGfojGxGj2Sz42srbgbs6wwJhYZl-b0OAGnZbdX7BRR3uzTQA6QlQ8dKrffH-qKeu9wNHGSWrb2j8jqyf6bI9_Fo81dMx65kM5L8rLwhzI5u0K9RfdB95WZygPy_Se8c4atx_8ybZhc' },
    ];
  }

  testimonials = [
    { text: "Absolute lifesaver. Had a flat while at work in Gent. They arrived within 40 minutes and I didn't even have to leave my desk.", author: 'Thomas Van Der Berg' },
    { text: 'Professional service and very clean work. The seasonal swap at home saves me hours of waiting at the garage every year.', author: 'Sarah Peeters' },
    { text: 'High-quality balancing. My car feels smoother than ever. Highly recommend Tyre-Express for their expertise and convenience.', author: 'Mark Jacobs' }
  ];

  // #2 — Opening hours days now use translation keys
  get openingHours() {
    const todayIndex = new Date().getDay();
    const jsToIndex: Record<number, number> = { 1:0, 2:1, 3:2, 4:3, 5:4, 6:5, 0:6 };
    const days = [
      { day: this.t.day_monday,    slots: ['08:30–12:00', '13:00–18:00'] },
      { day: this.t.day_tuesday,   slots: ['08:30–12:00', '13:00–18:00'] },
      { day: this.t.day_wednesday, slots: ['08:30–12:00', '13:00–18:00'] },
      { day: this.t.day_thursday,  slots: ['08:30–12:00', '13:00–18:00'] },
      { day: this.t.day_friday,    slots: ['08:30–12:00', '13:00–18:00'] },
      { day: this.t.day_saturday,  slots: ['08:30–12:00'] },
      { day: this.t.day_sunday,    slots: [] },
    ];
    return days.map((d, i) => ({ ...d, isToday: i === jsToIndex[todayIndex] }));
  }

  isOpen(): boolean {
    const now = new Date();
    const day = now.getDay();
    if (day === 0) return false;
    const mins = now.getHours() * 60 + now.getMinutes();
    if (day === 6) return mins >= 510 && mins < 720;
    return (mins >= 510 && mins < 720) || (mins >= 780 && mins < 1080);
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.15 });
    this.fadeEls.forEach(el => observer.observe(el.nativeElement));
  }
}
