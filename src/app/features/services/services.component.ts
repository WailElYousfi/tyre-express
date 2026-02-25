import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  private ts = inject(TranslationService);
  get t() { return this.ts.t; }

  readonly imgs = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDTHaQqj_f4ng4Xr4BVbIk6GAaQjbqdPht73tWD9GNyq2hBdDU5GIun794hyoHUXefn-icJj4BH8p-LNaNgJ4zQoi0PPamKIzbAdrybTpMha7f_ny951757-mppQ1Ya7nsifIZ-l1LSF3vbw_Q4n7VeuQjcbYjoYoUlliy79BcP6yxUxDyceGucuioZcvJfWd2AT-be9HwvCx5g2eW1oPbn31OLb84V88D-PyKBwl0lPVI55_gr46FVc2-msBEXTNQDfOmt0DZ9lFlD',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuByCwRyolgnlQUT-26uzbSDu-MTv0svEt3ZNx01NRTSgR6TFdVfuELeLRBuTFasNetSyGIsEvAkZnoeo8mWlrlwy1SYdqkrtC-f3QYp6TpBpHG5IwXhEFQByNWLtN3QJOnT5wXIUlOvKlwJdjwOmFwsFIkszPn6shqASfyxnuh6qBZF2RRaut7NlnF9sCSKPmEJkdW-KmePAEbN-BCE6JA5W0ehM-qqqjmzTvv8WcxGN7hEWumMIVkR7zVELCpgJNsQERDTl2j39YFH',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBQMcQINEgJotv37rV1DOWf3FEsy_TJIVy-fzgfIorxROS2NvwggNPU7K0RUpzsjkZZOlU3D419Zm19CVV9ICJigXsGA7_y5jBn7ox4uXEZQujvZ6jg4FBy4Eglkgn8G0kwJxF4nX-qLE81_ozSmf3y9D41_2kjlltjJvEWuSS7-XjSmaPKpF_SDo5wzdVhWpfGz1qFfStdw-5NqMJOnzk35QwrTBbgBeH-k7fB2D99CGRIaCZv-LGhz1Smf3konTFaGbQQ3ZqZD2qt',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBTuB_iLmYKV77iWzy9W4FpPbbzbmo_f1qaNB6PX_Y2X2zTrtNeByw8nqLIFxp9Wl6yVdnMtxXWuMB_Iv-qlFuedLlygm4Nf_hCT-iVx5jziddeDhgUg1GLpZB6UYwIxsyKBAGfojGxGj2Sz42srbgbs6wwJhYZl-b0OAGnZbdX7BRR3uzTQA6QlQ8dKrffH-qKeu9wNHGSWrb2j8jqyf6bI9_Fo81dMx65kM5L8rLwhzI5u0K9RfdB95WZygPy_Se8c4atx_8ybZhc'
  ];

  get services() {
    return [
      {
        title: this.t.sp_svc_change_title,
        icon: 'tire_repair',
        desc: this.t.sp_svc_change_desc,
        features: [this.t.sp_svc_change_f1, this.t.sp_svc_change_f2, this.t.sp_svc_change_f3, this.t.sp_svc_change_f4],
        img: this.imgs[0]
      },
      {
        title: this.t.sp_svc_balance_title,
        icon: 'settings',
        desc: this.t.sp_svc_balance_desc,
        features: [this.t.sp_svc_balance_f1, this.t.sp_svc_balance_f2, this.t.sp_svc_balance_f3, this.t.sp_svc_balance_f4],
        img: this.imgs[1]
      },
      {
        title: this.t.sp_svc_rim_title,
        icon: 'build',
        desc: this.t.sp_svc_rim_desc,
        features: [this.t.sp_svc_rim_f1, this.t.sp_svc_rim_f2, this.t.sp_svc_rim_f3, this.t.sp_svc_rim_f4],
        img: this.imgs[2]
      },
      {
        title: this.t.sp_svc_swap_title,
        icon: 'ac_unit',
        desc: this.t.sp_svc_swap_desc,
        features: [this.t.sp_svc_swap_f1, this.t.sp_svc_swap_f2, this.t.sp_svc_swap_f3, this.t.sp_svc_swap_f4],
        img: this.imgs[3]
      }
    ];
  }
}
