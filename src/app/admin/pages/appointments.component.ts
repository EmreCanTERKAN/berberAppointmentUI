import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-appointments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="appointments-page">
      <!-- Page Header -->
      <div class="page-header">
        <div class="header-content">
          <h1 class="page-title">Randevu Yönetimi</h1>
          <p class="page-subtitle">Tüm randevuları görüntüleyin ve yönetin</p>
        </div>
        <div class="header-actions">
          <button class="btn btn-secondary" (click)="exportAppointments()">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
            </svg>
            <span>Dışa Aktar</span>
          </button>
          <button class="btn btn-primary" (click)="openNewAppointmentModal()">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/>
            </svg>
            <span>Yeni Randevu</span>
          </button>
        </div>
      </div>

      <!-- Filters -->
      <div class="filters-section">
        <div class="filters-row">
          <div class="filter-group">
            <label>Tarih Aralığı</label>
            <div class="date-range">
              <input type="date" [(ngModel)]="filters.startDate" class="form-input">
              <span class="date-separator">-</span>
              <input type="date" [(ngModel)]="filters.endDate" class="form-input">
            </div>
          </div>
          
          <div class="filter-group">
            <label>Durum</label>
            <select [(ngModel)]="filters.status" class="form-select">
              <option value="">Tümü</option>
              <option value="confirmed">Onaylandı</option>
              <option value="pending">Bekliyor</option>
              <option value="cancelled">İptal Edildi</option>
              <option value="completed">Tamamlandı</option>
            </select>
          </div>

          <div class="filter-group">
            <label>Personel</label>
            <select [(ngModel)]="filters.staff" class="form-select">
              <option value="">Tümü</option>
              <option value="ahmet">Berber Ahmet</option>
              <option value="mehmet">Berber Mehmet</option>
              <option value="ali">Berber Ali</option>
            </select>
          </div>

          <div class="filter-group">
            <label>Arama</label>
            <div class="search-input">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"/>
              </svg>
              <input type="text" [(ngModel)]="filters.search" placeholder="Müşteri adı veya telefon ara...">
            </div>
          </div>

          <div class="filter-actions">
            <button class="btn btn-outline" (click)="applyFilters()">
              <span>Filtrele</span>
            </button>
            <button class="btn btn-ghost" (click)="clearFilters()">
              <span>Temizle</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Stats Cards -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon confirmed">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
            </svg>
          </div>
          <div class="stat-content">
            <span class="stat-value">{{stats.confirmed}}</span>
            <span class="stat-label">Onaylandı</span>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon pending">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"/>
            </svg>
          </div>
          <div class="stat-content">
            <span class="stat-value">{{stats.pending}}</span>
            <span class="stat-label">Bekliyor</span>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon completed">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 1L9 7V9H21M21 16V11H9V16H21Z"/>
            </svg>
          </div>
          <div class="stat-content">
            <span class="stat-value">{{stats.completed}}</span>
            <span class="stat-label">Tamamlandı</span>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon cancelled">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>
            </svg>
          </div>
          <div class="stat-content">
            <span class="stat-value">{{stats.cancelled}}</span>
            <span class="stat-label">İptal Edildi</span>
          </div>
        </div>
      </div>

      <!-- Appointments Table -->
      <div class="appointments-table-container">
        <div class="table-header">
          <h3>Randevular</h3>
          <div class="table-actions">
            <div class="view-toggle">
              <button 
                class="toggle-btn" 
                [class.active]="viewMode === 'table'"
                (click)="setViewMode('table')">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,3H21V5H3V3M3,7H21V9H3V7M3,11H21V13H3V11M3,15H21V17H3V15M3,19H21V21H3V19Z"/>
                </svg>
              </button>
              <button 
                class="toggle-btn" 
                [class.active]="viewMode === 'calendar'"
                (click)="setViewMode('calendar')">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="appointments-table" *ngIf="viewMode === 'table'">
          <table>
            <thead>
              <tr>
                <th>Müşteri</th>
                <th>Hizmet</th>
                <th>Tarih & Saat</th>
                <th>Personel</th>
                <th>Durum</th>
                <th>Fiyat</th>
                <th>İşlemler</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let appointment of filteredAppointments" [class]="appointment.status">
                <td>
                  <div class="customer-cell">
                    <div class="customer-avatar">
                      <img [src]="appointment.customerAvatar" [alt]="appointment.customerName">
                    </div>
                    <div class="customer-info">
                      <span class="customer-name">{{appointment.customerName}}</span>
                      <span class="customer-phone">{{appointment.customerPhone}}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="service-cell">
                    <span class="service-name">{{appointment.service}}</span>
                    <span class="service-duration">{{appointment.duration}} dk</span>
                  </div>
                </td>
                <td>
                  <div class="datetime-cell">
                    <span class="date">{{appointment.date}}</span>
                    <span class="time">{{appointment.time}}</span>
                  </div>
                </td>
                <td>
                  <div class="staff-cell">
                    <span class="staff-name">{{appointment.staff}}</span>
                  </div>
                </td>
                <td>
                  <span class="status-badge" [class]="appointment.status">
                    {{appointment.statusText}}
                  </span>
                </td>
                <td>
                  <span class="price">₺{{appointment.price}}</span>
                </td>
                <td>
                  <div class="action-buttons">
                    <button class="action-btn edit" (click)="editAppointment(appointment)" title="Düzenle">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"/>
                      </svg>
                    </button>
                    <button class="action-btn delete" (click)="deleteAppointment(appointment)" title="Sil">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"/>
                      </svg>
                    </button>
                    <button class="action-btn status" (click)="toggleStatus(appointment)" title="Durum Değiştir">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"/>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Calendar View -->
        <div class="calendar-view" *ngIf="viewMode === 'calendar'">
          <div class="calendar-placeholder">
            <div class="calendar-message">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z"/>
              </svg>
              <h3>Takvim Görünümü</h3>
              <p>Takvim görünümü yakında eklenecek</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="pagination" *ngIf="totalPages > 1">
        <button 
          class="page-btn"
          [disabled]="currentPage === 1"
          (click)="goToPage(currentPage - 1)">
          Önceki
        </button>
        
        <div class="page-numbers">
          <button 
            *ngFor="let page of getPageNumbers()"
            class="page-btn"
            [class.active]="page === currentPage"
            (click)="goToPage(page)">
            {{page}}
          </button>
        </div>
        
        <button 
          class="page-btn"
          [disabled]="currentPage === totalPages"
          (click)="goToPage(currentPage + 1)">
          Sonraki
        </button>
      </div>
    </div>
  `,
  styles: [`
    .appointments-page {
      max-width: 1400px;
      margin: 0 auto;
    }

    .page-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 32px;
      flex-wrap: wrap;
      gap: 16px;
    }

    .header-content h1 {
      font-size: 2rem;
      font-weight: 800;
      color: #1f2937;
      margin: 0 0 4px 0;
    }

    .header-content p {
      color: #6b7280;
      margin: 0;
    }

    .header-actions {
      display: flex;
      gap: 12px;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 20px;
      border-radius: 12px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      border: none;
      cursor: pointer;
      font-size: 0.875rem;
    }

    .btn svg {
      width: 18px;
      height: 18px;
    }

    .btn-primary {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    }

    .btn-secondary {
      background: white;
      color: #374151;
      border: 1px solid #d1d5db;
    }

    .btn-outline {
      background: transparent;
      color: #667eea;
      border: 2px solid #667eea;
    }

    .btn-ghost {
      background: transparent;
      color: #6b7280;
      border: none;
    }

    /* Filters */
    .filters-section {
      background: white;
      border-radius: 16px;
      padding: 24px;
      margin-bottom: 24px;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
      border: 1px solid #f1f5f9;
    }

    .filters-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      align-items: end;
    }

    .filter-group label {
      display: block;
      font-weight: 600;
      color: #374151;
      margin-bottom: 8px;
      font-size: 0.875rem;
    }

    .form-input, .form-select {
      width: 100%;
      border: 2px solid #e5e7eb;
      border-radius: 8px;
      padding: 10px 12px;
      font-size: 0.875rem;
      transition: border-color 0.2s ease;
    }

    .form-input:focus, .form-select:focus {
      outline: none;
      border-color: #667eea;
    }

    .date-range {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .date-separator {
      color: #6b7280;
      font-weight: 500;
    }

    .search-input {
      position: relative;
    }

    .search-input svg {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      width: 16px;
      height: 16px;
      color: #9ca3af;
    }

    .search-input input {
      padding-left: 40px;
    }

    .filter-actions {
      display: flex;
      gap: 8px;
    }

    /* Stats */
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-bottom: 32px;
    }

    .stat-card {
      background: white;
      border-radius: 12px;
      padding: 20px;
      display: flex;
      align-items: center;
      gap: 16px;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
      border: 1px solid #f1f5f9;
    }

    .stat-icon {
      width: 48px;
      height: 48px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }

    .stat-icon.confirmed { background: #10b981; }
    .stat-icon.pending { background: #f59e0b; }
    .stat-icon.completed { background: #667eea; }
    .stat-icon.cancelled { background: #ef4444; }

    .stat-icon svg {
      width: 24px;
      height: 24px;
    }

    .stat-content {
      display: flex;
      flex-direction: column;
    }

    .stat-value {
      font-size: 1.5rem;
      font-weight: 800;
      color: #1f2937;
      line-height: 1;
    }

    .stat-label {
      color: #6b7280;
      font-size: 0.875rem;
      font-weight: 500;
    }

    /* Table */
    .appointments-table-container {
      background: white;
      border-radius: 16px;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
      border: 1px solid #f1f5f9;
      overflow: hidden;
    }

    .table-header {
      padding: 20px 24px;
      border-bottom: 1px solid #f1f5f9;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .table-header h3 {
      font-size: 1.125rem;
      font-weight: 700;
      color: #1f2937;
      margin: 0;
    }

    .view-toggle {
      display: flex;
      border-radius: 8px;
      border: 1px solid #e5e7eb;
      overflow: hidden;
    }

    .toggle-btn {
      background: white;
      border: none;
      padding: 8px 12px;
      cursor: pointer;
      color: #6b7280;
      transition: all 0.2s ease;
    }

    .toggle-btn.active {
      background: #667eea;
      color: white;
    }

    .toggle-btn svg {
      width: 16px;
      height: 16px;
    }

    .appointments-table {
      overflow-x: auto;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    th {
      background: #f8fafc;
      color: #374151;
      font-weight: 600;
      font-size: 0.875rem;
      padding: 16px;
      text-align: left;
      border-bottom: 1px solid #e5e7eb;
    }

    td {
      padding: 16px;
      border-bottom: 1px solid #f1f5f9;
      font-size: 0.875rem;
    }

    tr:hover {
      background: #f8fafc;
    }

    .customer-cell {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .customer-avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      overflow: hidden;
    }

    .customer-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .customer-info {
      display: flex;
      flex-direction: column;
    }

    .customer-name {
      font-weight: 600;
      color: #1f2937;
    }

    .customer-phone {
      color: #6b7280;
      font-size: 0.75rem;
    }

    .service-cell {
      display: flex;
      flex-direction: column;
    }

    .service-name {
      font-weight: 500;
      color: #1f2937;
    }

    .service-duration {
      color: #6b7280;
      font-size: 0.75rem;
    }

    .datetime-cell {
      display: flex;
      flex-direction: column;
    }

    .date {
      font-weight: 500;
      color: #1f2937;
    }

    .time {
      color: #6b7280;
      font-size: 0.75rem;
    }

    .staff-name {
      color: #667eea;
      font-weight: 500;
    }

    .status-badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 50px;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .status-badge.confirmed {
      background: #dcfce7;
      color: #166534;
    }

    .status-badge.pending {
      background: #fef3c7;
      color: #92400e;
    }

    .status-badge.cancelled {
      background: #fee2e2;
      color: #991b1b;
    }

    .status-badge.completed {
      background: #e0e7ff;
      color: #3730a3;
    }

    .price {
      font-weight: 700;
      color: #10b981;
      font-size: 1rem;
    }

    .action-buttons {
      display: flex;
      gap: 4px;
    }

    .action-btn {
      background: none;
      border: none;
      padding: 6px;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .action-btn:hover {
      background: #f3f4f6;
    }

    .action-btn svg {
      width: 14px;
      height: 14px;
    }

    .action-btn.edit {
      color: #667eea;
    }

    .action-btn.delete {
      color: #ef4444;
    }

    .action-btn.status {
      color: #f59e0b;
    }

    /* Calendar View */
    .calendar-view {
      padding: 60px 20px;
    }

    .calendar-placeholder {
      text-align: center;
    }

    .calendar-message svg {
      width: 48px;
      height: 48px;
      color: #9ca3af;
      margin-bottom: 16px;
    }

    .calendar-message h3 {
      color: #374151;
      margin-bottom: 8px;
    }

    .calendar-message p {
      color: #6b7280;
    }

    /* Pagination */
    .pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      margin-top: 32px;
    }

    .page-btn {
      background: white;
      border: 1px solid #d1d5db;
      color: #374151;
      padding: 8px 12px;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.2s ease;
      font-size: 0.875rem;
    }

    .page-btn:hover:not(:disabled) {
      background: #f9fafb;
    }

    .page-btn.active {
      background: #667eea;
      color: white;
      border-color: #667eea;
    }

    .page-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .page-numbers {
      display: flex;
      gap: 4px;
    }

    /* Mobile Responsive */
    @media (max-width: 768px) {
      .page-header {
        flex-direction: column;
        align-items: stretch;
      }

      .header-actions {
        justify-content: stretch;
      }

      .header-actions .btn {
        flex: 1;
        justify-content: center;
      }

      .filters-row {
        grid-template-columns: 1fr;
        gap: 16px;
      }

      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
      }

      .appointments-table {
        font-size: 0.75rem;
      }

      th, td {
        padding: 12px 8px;
      }

      .customer-cell {
        gap: 8px;
      }

      .customer-avatar {
        width: 28px;
        height: 28px;
      }
    }
  `]
})
export class AdminAppointmentsComponent {
  viewMode: 'table' | 'calendar' = 'table';
  currentPage = 1;
  totalPages = 5;

  filters = {
    startDate: '',
    endDate: '',
    status: '',
    staff: '',
    search: ''
  };

  stats = {
    confirmed: 18,
    pending: 5,
    completed: 32,
    cancelled: 3
  };

  appointments = [
    {
      id: 1,
      customerName: 'Ahmet Yılmaz',
      customerPhone: '+90 532 123 4567',
      customerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      service: 'Saç Kesimi',
      duration: 30,
      date: '2024-06-17',
      time: '14:30',
      staff: 'Berber Ahmet',
      status: 'confirmed',
      statusText: 'Onaylandı',
      price: 50
    },
    {
      id: 2,
      customerName: 'Mehmet Demir',
      customerPhone: '+90 533 234 5678',
      customerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      service: 'Sakal Düzenleme',
      duration: 20,
      date: '2024-06-17',
      time: '15:00',
      staff: 'Berber Mehmet',
      status: 'pending',
      statusText: 'Bekliyor',
      price: 30
    },
    {
      id: 3,
      customerName: 'Can Özkan',
      customerPhone: '+90 534 345 6789',
      customerAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
      service: 'Cilt Bakımı',
      duration: 45,
      date: '2024-06-17',
      time: '15:30',
      staff: 'Berber Ali',
      status: 'completed',
      statusText: 'Tamamlandı',
      price: 40
    },
    {
      id: 4,
      customerName: 'Emre Kaya',
      customerPhone: '+90 535 456 7890',
      customerAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face',
      service: 'Geleneksel Traş',
      duration: 40,
      date: '2024-06-18',
      time: '10:00',
      staff: 'Berber Ahmet',
      status: 'cancelled',
      statusText: 'İptal Edildi',
      price: 60
    }
  ];

  filteredAppointments = [...this.appointments];

  setViewMode(mode: 'table' | 'calendar') {
    this.viewMode = mode;
  }

  applyFilters() {
    this.filteredAppointments = this.appointments.filter(appointment => {
      let matches = true;

      if (this.filters.status && appointment.status !== this.filters.status) {
        matches = false;
      }

      if (this.filters.search) {
        const searchTerm = this.filters.search.toLowerCase();
        if (!appointment.customerName.toLowerCase().includes(searchTerm) &&
            !appointment.customerPhone.includes(searchTerm)) {
          matches = false;
        }
      }

      return matches;
    });
  }

  clearFilters() {
    this.filters = {
      startDate: '',
      endDate: '',
      status: '',
      staff: '',
      search: ''
    };
    this.filteredAppointments = [...this.appointments];
  }

  openNewAppointmentModal() {
    console.log('Yeni randevu modal açılacak');
  }

  exportAppointments() {
    console.log('Randevular dışa aktarılacak');
  }

  editAppointment(appointment: any) {
    console.log('Randevu düzenlenecek:', appointment);
  }

  deleteAppointment(appointment: any) {
    console.log('Randevu silinecek:', appointment);
  }

  toggleStatus(appointment: any) {
    console.log('Randevu durumu değiştirilecek:', appointment);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  getPageNumbers(): number[] {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }
}
