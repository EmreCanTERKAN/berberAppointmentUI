import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-staff',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="staff-page">
      <div class="page-header">
        <h1>Personel Yönetimi</h1>
        <p>Salon personelini görüntüleyin ve yönetin</p>
      </div>
      <div class="content-placeholder">
        <h3>Personel yönetimi yakında eklenecek</h3>
      </div>
    </div>
  `,
  styles: [`
    .staff-page {
      max-width: 1400px;
      margin: 0 auto;
    }
    .page-header h1 {
      font-size: 2rem;
      font-weight: 800;
      color: #1f2937;
      margin: 0 0 4px 0;
    }
    .page-header p {
      color: #6b7280;
      margin: 0 0 32px 0;
    }
    .content-placeholder {
      background: white;
      border-radius: 16px;
      padding: 60px;
      text-align: center;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    }
  `]
})
export class AdminStaffComponent {}
