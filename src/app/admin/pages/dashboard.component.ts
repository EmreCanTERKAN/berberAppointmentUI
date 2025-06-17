import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="dashboard">
      <!-- Stats Cards -->
      <div class="stats-grid">
        <div class="stat-card" *ngFor="let stat of stats">
          <div class="stat-icon" [style.background]="stat.color">
            <div [innerHTML]="stat.icon"></div>
          </div>
          <div class="stat-content">
            <div class="stat-value">{{stat.value}}</div>
            <div class="stat-label">{{stat.label}}</div>
            <div class="stat-change" [class]="stat.changeType">
              <span class="change-icon">{{stat.changeType === 'positive' ? '↗' : '↘'}}</span>
              <span>{{stat.change}}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Charts and Data -->
      <div class="dashboard-grid">
        <!-- Revenue Chart -->
        <div class="dashboard-card">
          <div class="card-header">
            <h3 class="card-title">Gelir Grafiği</h3>
            <div class="card-actions">
              <select class="period-select">
                <option>Son 7 Gün</option>
                <option>Son 30 Gün</option>
                <option>Son 3 Ay</option>
              </select>
            </div>
          </div>
          <div class="card-content">
            <div class="chart-container">
              <div class="chart-placeholder">
                <div class="chart-bars">
                  <div class="bar" style="height: 60%"></div>
                  <div class="bar" style="height: 80%"></div>
                  <div class="bar" style="height: 45%"></div>
                  <div class="bar" style="height: 90%"></div>
                  <div class="bar" style="height: 70%"></div>
                  <div class="bar" style="height: 95%"></div>
                  <div class="bar" style="height: 85%"></div>
                </div>
                <div class="chart-labels">
                  <span>Pzt</span>
                  <span>Sal</span>
                  <span>Çar</span>
                  <span>Per</span>
                  <span>Cum</span>
                  <span>Cmt</span>
                  <span>Paz</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Recent Appointments -->
        <div class="dashboard-card">
          <div class="card-header">
            <h3 class="card-title">Son Randevular</h3>
            <a routerLink="/admin/appointments" class="view-all-link">Tümünü Gör</a>
          </div>
          <div class="card-content">
            <div class="appointment-list">
              <div class="appointment-item" *ngFor="let appointment of recentAppointments">
                <div class="appointment-avatar">
                  <img [src]="appointment.avatar" [alt]="appointment.customerName">
                </div>
                <div class="appointment-info">
                  <div class="customer-name">{{appointment.customerName}}</div>
                  <div class="appointment-service">{{appointment.service}}</div>
                </div>
                <div class="appointment-time">
                  <div class="time">{{appointment.time}}</div>
                  <div class="status" [class]="appointment.status">{{appointment.statusText}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Popular Services -->
        <div class="dashboard-card">
          <div class="card-header">
            <h3 class="card-title">Popüler Hizmetler</h3>
          </div>
          <div class="card-content">
            <div class="service-list">
              <div class="service-item" *ngFor="let service of popularServices">
                <div class="service-info">
                  <div class="service-name">{{service.name}}</div>
                  <div class="service-stats">{{service.bookings}} rezervasyon</div>
                </div>
                <div class="service-progress">
                  <div class="progress-bar">
                    <div class="progress-fill" [style.width]="service.percentage + '%'"></div>
                  </div>
                  <span class="progress-text">{{service.percentage}}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="dashboard-card">
          <div class="card-header">
            <h3 class="card-title">Hızlı İşlemler</h3>
          </div>
          <div class="card-content">
            <div class="quick-actions">
              <button class="quick-action-btn" *ngFor="let action of quickActions" (click)="performAction(action.action)">
                <div class="action-icon" [innerHTML]="action.icon"></div>
                <span class="action-text">{{action.text}}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Today's Schedule -->
      <div class="schedule-section">
        <div class="dashboard-card full-width">
          <div class="card-header">
            <h3 class="card-title">Bugünün Programı</h3>
            <div class="schedule-date">{{today | date:'fullDate':'tr'}}</div>
          </div>
          <div class="card-content">
            <div class="schedule-timeline">
              <div class="timeline-item" *ngFor="let item of todaySchedule">
                <div class="timeline-time">{{item.time}}</div>
                <div class="timeline-content" [class]="item.type">
                  <div class="timeline-header">
                    <span class="timeline-title">{{item.title}}</span>
                    <span class="timeline-badge" [class]="item.status">{{item.statusText}}</span>
                  </div>
                  <div class="timeline-details">
                    <span class="customer">{{item.customer}}</span>
                    <span class="service">{{item.service}}</span>
                    <span class="staff" *ngIf="item.staff">{{item.staff}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard {
      max-width: 1400px;
      margin: 0 auto;
    }

    /* Stats Grid */
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 24px;
      margin-bottom: 32px;
    }

    .stat-card {
      background: white;
      border-radius: 16px;
      padding: 24px;
      display: flex;
      align-items: center;
      gap: 16px;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
      border: 1px solid #f1f5f9;
      transition: all 0.3s ease;
    }

    .stat-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
    }

    .stat-icon {
      width: 60px;
      height: 60px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.5rem;
    }

    .stat-content {
      flex: 1;
    }

    .stat-value {
      font-size: 2rem;
      font-weight: 800;
      color: #1f2937;
      line-height: 1;
      margin-bottom: 4px;
    }

    .stat-label {
      color: #6b7280;
      font-size: 0.875rem;
      font-weight: 500;
      margin-bottom: 8px;
    }

    .stat-change {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 0.75rem;
      font-weight: 600;
    }

    .stat-change.positive {
      color: #10b981;
    }

    .stat-change.negative {
      color: #ef4444;
    }

    .change-icon {
      font-size: 1rem;
    }

    /* Dashboard Grid */
    .dashboard-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 24px;
      margin-bottom: 32px;
    }

    .dashboard-card {
      background: white;
      border-radius: 16px;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
      border: 1px solid #f1f5f9;
      overflow: hidden;
    }

    .dashboard-card.full-width {
      grid-column: 1 / -1;
    }

    .card-header {
      padding: 20px 24px;
      border-bottom: 1px solid #f1f5f9;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .card-title {
      font-size: 1.125rem;
      font-weight: 700;
      color: #1f2937;
      margin: 0;
    }

    .card-content {
      padding: 24px;
    }

    .period-select {
      border: 1px solid #d1d5db;
      border-radius: 8px;
      padding: 6px 12px;
      font-size: 0.875rem;
      background: white;
      color: #374151;
    }

    .view-all-link {
      color: #667eea;
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 600;
      transition: color 0.2s ease;
    }

    .view-all-link:hover {
      color: #5b73e8;
    }

    /* Chart */
    .chart-container {
      height: 200px;
    }

    .chart-placeholder {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .chart-bars {
      display: flex;
      align-items: end;
      gap: 8px;
      height: 160px;
    }

    .bar {
      flex: 1;
      background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
      border-radius: 4px 4px 0 0;
      transition: all 0.3s ease;
    }

    .bar:hover {
      opacity: 0.8;
    }

    .chart-labels {
      display: flex;
      justify-content: space-between;
      font-size: 0.75rem;
      color: #6b7280;
      font-weight: 500;
    }

    /* Appointments */
    .appointment-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .appointment-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      border-radius: 8px;
      transition: background 0.2s ease;
    }

    .appointment-item:hover {
      background: #f8fafc;
    }

    .appointment-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      flex-shrink: 0;
    }

    .appointment-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .appointment-info {
      flex: 1;
    }

    .customer-name {
      font-weight: 600;
      color: #1f2937;
      font-size: 0.875rem;
    }

    .appointment-service {
      color: #6b7280;
      font-size: 0.75rem;
    }

    .appointment-time {
      text-align: right;
    }

    .time {
      font-weight: 600;
      color: #1f2937;
      font-size: 0.875rem;
    }

    .status {
      font-size: 0.75rem;
      font-weight: 500;
      margin-top: 2px;
    }

    .status.confirmed { color: #10b981; }
    .status.pending { color: #f59e0b; }
    .status.cancelled { color: #ef4444; }

    /* Services */
    .service-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .service-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }

    .service-info {
      flex: 1;
    }

    .service-name {
      font-weight: 600;
      color: #1f2937;
      font-size: 0.875rem;
    }

    .service-stats {
      color: #6b7280;
      font-size: 0.75rem;
    }

    .service-progress {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 120px;
    }

    .progress-bar {
      flex: 1;
      height: 6px;
      background: #f1f5f9;
      border-radius: 3px;
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
      transition: width 0.3s ease;
    }

    .progress-text {
      font-size: 0.75rem;
      font-weight: 600;
      color: #6b7280;
      min-width: 30px;
    }

    /* Quick Actions */
    .quick-actions {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }

    .quick-action-btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      padding: 16px;
      background: none;
      border: 2px solid #f1f5f9;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .quick-action-btn:hover {
      border-color: #667eea;
      background: rgba(102, 126, 234, 0.05);
    }

    .action-icon {
      font-size: 1.5rem;
      color: #667eea;
    }

    .action-text {
      font-size: 0.75rem;
      font-weight: 600;
      color: #374151;
    }

    /* Schedule */
    .schedule-section {
      margin-top: 32px;
    }

    .schedule-date {
      color: #6b7280;
      font-size: 0.875rem;
      font-weight: 500;
    }

    .schedule-timeline {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .timeline-item {
      display: flex;
      gap: 16px;
      align-items: flex-start;
    }

    .timeline-time {
      font-weight: 700;
      color: #1f2937;
      font-size: 0.875rem;
      min-width: 60px;
      padding-top: 4px;
    }

    .timeline-content {
      flex: 1;
      background: #f8fafc;
      border-radius: 12px;
      padding: 16px;
      border-left: 4px solid #e5e7eb;
    }

    .timeline-content.appointment {
      border-left-color: #667eea;
      background: rgba(102, 126, 234, 0.05);
    }

    .timeline-content.break {
      border-left-color: #f59e0b;
      background: rgba(245, 158, 11, 0.05);
    }

    .timeline-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
    }

    .timeline-title {
      font-weight: 600;
      color: #1f2937;
    }

    .timeline-badge {
      font-size: 0.75rem;
      font-weight: 500;
      padding: 2px 8px;
      border-radius: 50px;
    }

    .timeline-badge.confirmed {
      background: #dcfce7;
      color: #166534;
    }

    .timeline-badge.pending {
      background: #fef3c7;
      color: #92400e;
    }

    .timeline-details {
      display: flex;
      gap: 16px;
      font-size: 0.875rem;
    }

    .customer {
      color: #1f2937;
      font-weight: 500;
    }

    .service {
      color: #6b7280;
    }

    .staff {
      color: #667eea;
      font-weight: 500;
    }

    /* Mobile Responsive */
    @media (max-width: 768px) {
      .stats-grid {
        grid-template-columns: 1fr;
        gap: 16px;
      }

      .dashboard-grid {
        grid-template-columns: 1fr;
        gap: 16px;
      }

      .card-header {
        padding: 16px 20px;
      }

      .card-content {
        padding: 20px;
      }

      .quick-actions {
        grid-template-columns: 1fr;
      }

      .timeline-item {
        flex-direction: column;
        gap: 8px;
      }

      .timeline-time {
        min-width: auto;
      }
    }
  `]
})
export class AdminDashboardComponent {
  today = new Date();

  stats = [
    {
      icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z"/></svg>',
      value: '24',
      label: 'Bugünkü Randevular',
      change: '+12%',
      changeType: 'positive',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"/></svg>',
      value: '₺3,250',
      label: 'Günlük Gelir',
      change: '+8%',
      changeType: 'positive',
      color: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
    },
    {
      icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16,4C18.2,4 20,5.8 20,8C20,10.2 18.2,12 16,12C13.8,12 12,10.2 12,8C12,5.8 13.8,4 16,4M16,13C18.67,13 24,14.33 24,17V20H8V17C8,14.33 13.33,13 16,13M8,4C10.2,4 12,5.8 12,8C12,10.2 10.2,12 8,12C5.8,12 4,10.2 4,8C4,5.8 5.8,4 8,4M8,13C10.67,13 16,14.33 16,17V20H0V17C0,14.33 5.33,13 8,13Z"/></svg>',
      value: '148',
      label: 'Toplam Müşteri',
      change: '+25',
      changeType: 'positive',
      color: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
    },
    {
      icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/></svg>',
      value: '96%',
      label: 'Müşteri Memnuniyeti',
      change: '+2%',
      changeType: 'positive',
      color: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
    }
  ];

  recentAppointments = [
    {
      customerName: 'Ahmet Yılmaz',
      service: 'Saç Kesimi',
      time: '14:30',
      status: 'confirmed',
      statusText: 'Onaylandı',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
    },
    {
      customerName: 'Mehmet Demir',
      service: 'Sakal Düzenleme',
      time: '15:00',
      status: 'pending',
      statusText: 'Bekliyor',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face'
    },
    {
      customerName: 'Can Özkan',
      service: 'Cilt Bakımı',
      time: '15:30',
      status: 'confirmed',
      statusText: 'Onaylandı',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face'
    }
  ];

  popularServices = [
    { name: 'Saç Kesimi', bookings: 45, percentage: 85 },
    { name: 'Sakal Düzenleme', bookings: 32, percentage: 65 },
    { name: 'Cilt Bakımı', bookings: 28, percentage: 55 },
    { name: 'Geleneksel Traş', bookings: 18, percentage: 35 }
  ];

  quickActions = [
    {
      icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg>',
      text: 'Yeni Randevu',
      action: 'new-appointment'
    },
    {
      icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M6,10V7H4V10H1V12H4V15H6V12H9V10M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12Z"/></svg>',
      text: 'Yeni Müşteri',
      action: 'new-customer'
    },
    {
      icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 1L9 7V9H21M21 16V11H9V16H21Z"/></svg>',
      text: 'Yeni Hizmet',
      action: 'new-service'
    },
    {
      icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5,4H7V21H5V4M9,4H10V21H9V4M12,4H13V21H12V4M15,4H16V21H15V4M18,4H19V21H18V4Z"/></svg>',
      text: 'Rapor Görüntüle',
      action: 'view-reports'
    }
  ];

  todaySchedule = [
    {
      time: '09:00',
      title: 'Salon Açılışı',
      type: 'break',
      status: 'confirmed',
      statusText: 'Tamamlandı',
      customer: '',
      service: 'Hazırlık',
      staff: 'Tüm Ekip'
    },
    {
      time: '09:30',
      title: 'Randevu',
      type: 'appointment',
      status: 'confirmed',
      statusText: 'Onaylandı',
      customer: 'Ali Veli',
      service: 'Saç Kesimi',
      staff: 'Berber Ahmet'
    },
    {
      time: '10:00',
      title: 'Randevu',
      type: 'appointment',
      status: 'pending',
      statusText: 'Bekliyor',
      customer: 'Mehmet Yılmaz',
      service: 'Sakal + Saç',
      staff: 'Berber Mehmet'
    },
    {
      time: '12:00',
      title: 'Öğle Molası',
      type: 'break',
      status: 'confirmed',
      statusText: 'Planlandı',
      customer: '',
      service: 'Mola',
      staff: ''
    }
  ];

  performAction(action: string) {
    switch(action) {
      case 'new-appointment':
        console.log('Yeni randevu oluştur');
        break;
      case 'new-customer':
        console.log('Yeni müşteri ekle');
        break;
      case 'new-service':
        console.log('Yeni hizmet ekle');
        break;
      case 'view-reports':
        console.log('Raporları görüntüle');
        break;
      default:
        console.log('Bilinmeyen aksiyon:', action);
    }
  }
}
