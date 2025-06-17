import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="admin-layout">
      <!-- Sidebar -->
      <aside class="sidebar" [class.sidebar-open]="sidebarOpen">
        <div class="sidebar-header">
          <div class="logo">
            <div class="logo-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 1L9 7V9H21M21 16V11H9V16H21Z"/>
              </svg>
            </div>
            <div class="logo-text">
              <span class="brand-name">Berberim</span>
              <span class="brand-subtitle">Admin Panel</span>
            </div>
          </div>
          <button class="sidebar-toggle" (click)="toggleSidebar()">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"/>
            </svg>
          </button>
        </div>

        <nav class="sidebar-nav">
          <div class="nav-section">
            <span class="nav-section-title">Ana Menü</span>
            <ul class="nav-list">
              <li>
                <a routerLink="/admin/dashboard" routerLinkActive="active" class="nav-link">
                  <div class="nav-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z"/>
                    </svg>
                  </div>
                  <span class="nav-text">Dashboard</span>
                </a>
              </li>
              <li>
                <a routerLink="/admin/appointments" routerLinkActive="active" class="nav-link">
                  <div class="nav-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z"/>
                    </svg>
                  </div>
                  <span class="nav-text">Randevular</span>
                  <div class="nav-badge">{{appointmentCount}}</div>
                </a>
              </li>
              <li>
                <a routerLink="/admin/customers" routerLinkActive="active" class="nav-link">
                  <div class="nav-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16,4C18.2,4 20,5.8 20,8C20,10.2 18.2,12 16,12C13.8,12 12,10.2 12,8C12,5.8 13.8,4 16,4M16,13C18.67,13 24,14.33 24,17V20H8V17C8,14.33 13.33,13 16,13M8,4C10.2,4 12,5.8 12,8C12,10.2 10.2,12 8,12C5.8,12 4,10.2 4,8C4,5.8 5.8,4 8,4M8,13C10.67,13 16,14.33 16,17V20H0V17C0,14.33 5.33,13 8,13Z"/>
                    </svg>
                  </div>
                  <span class="nav-text">Müşteriler</span>
                </a>
              </li>
              <li>
                <a routerLink="/admin/services" routerLinkActive="active" class="nav-link">
                  <div class="nav-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 1L9 7V9H21M21 16V11H9V16H21Z"/>
                    </svg>
                  </div>
                  <span class="nav-text">Hizmetler</span>
                </a>
              </li>
              <li>
                <a routerLink="/admin/staff" routerLinkActive="active" class="nav-link">
                  <div class="nav-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
                    </svg>
                  </div>
                  <span class="nav-text">Personel</span>
                </a>
              </li>
            </ul>
          </div>

          <div class="nav-section">
            <span class="nav-section-title">Raporlar</span>
            <ul class="nav-list">
              <li>
                <a routerLink="/admin/reports" routerLinkActive="active" class="nav-link">
                  <div class="nav-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5,4H7V21H5V4M9,4H10V21H9V4M12,4H13V21H12V4M15,4H16V21H15V4M18,4H19V21H18V4Z"/>
                    </svg>
                  </div>
                  <span class="nav-text">Satış Raporları</span>
                </a>
              </li>
              <li>
                <a routerLink="/admin/analytics" routerLinkActive="active" class="nav-link">
                  <div class="nav-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16,11.78L20.24,4.45L21.97,5.45L16.74,14.5L10.23,10.75L5.46,19H22V21H2V3H4V17.54L9.5,8L16,11.78Z"/>
                    </svg>
                  </div>
                  <span class="nav-text">Analitik</span>
                </a>
              </li>
            </ul>
          </div>

          <div class="nav-section">
            <span class="nav-section-title">Ayarlar</span>
            <ul class="nav-list">
              <li>
                <a routerLink="/admin/settings" routerLinkActive="active" class="nav-link">
                  <div class="nav-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
                    </svg>
                  </div>
                  <span class="nav-text">Ayarlar</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div class="sidebar-footer">
          <div class="user-profile">
            <div class="user-avatar">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="Admin">
            </div>
            <div class="user-info">
              <span class="user-name">Admin User</span>
              <span class="user-role">Yönetici</span>
            </div>
          </div>
          <button (click)="logout()" class="logout-btn">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z"/>
            </svg>
          </button>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="main-content" [class.sidebar-open]="sidebarOpen">
        <!-- Top Header -->
        <header class="top-header">
          <div class="header-left">
            <button class="sidebar-toggle-mobile" (click)="toggleSidebar()">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"/>
              </svg>
            </button>
            <h1 class="page-title">{{currentPageTitle}}</h1>
          </div>
          
          <div class="header-right">
            <div class="header-stats">
              <div class="stat-item">
                <span class="stat-label">Bugünkü Randevular</span>
                <span class="stat-value">{{todayAppointments}}</span>
              </div>
              <div class="stat-item">
                <span class="stat-label">Günlük Gelir</span>
                <span class="stat-value">₺{{dailyRevenue}}</span>
              </div>
            </div>
            
            <div class="header-actions">
              <button class="notification-btn" [class.has-notifications]="hasNotifications">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M12,6A4,4 0 0,0 8,10V18H16V10A4,4 0 0,0 12,6Z"/>
                </svg>
                <span class="notification-count" *ngIf="notificationCount > 0">{{notificationCount}}</span>
              </button>
              
              <a routerLink="/" class="view-site-btn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
                </svg>
                <span>Siteyi Görüntüle</span>
              </a>
            </div>
          </div>
        </header>

        <!-- Page Content -->
        <div class="page-content">
          <router-outlet></router-outlet>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .admin-layout {
      display: flex;
      min-height: 100vh;
      background: #f8fafc;
    }

    /* Sidebar */
    .sidebar {
      width: 280px;
      background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
      display: flex;
      flex-direction: column;
      position: fixed;
      left: 0;
      top: 0;
      height: 100vh;
      z-index: 1000;
      transform: translateX(-100%);
      transition: transform 0.3s ease;
      overflow-y: auto;
    }

    .sidebar.sidebar-open {
      transform: translateX(0);
    }

    .sidebar-header {
      padding: 24px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .logo-icon {
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }

    .logo-icon svg {
      width: 20px;
      height: 20px;
    }

    .logo-text {
      display: flex;
      flex-direction: column;
    }

    .brand-name {
      color: white;
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 1;
    }

    .brand-subtitle {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.75rem;
      font-weight: 500;
    }

    .sidebar-toggle {
      background: none;
      border: none;
      color: rgba(255, 255, 255, 0.6);
      padding: 8px;
      cursor: pointer;
      border-radius: 6px;
      transition: all 0.2s ease;
    }

    .sidebar-toggle:hover {
      background: rgba(255, 255, 255, 0.1);
      color: white;
    }

    .sidebar-toggle svg {
      width: 20px;
      height: 20px;
    }

    /* Navigation */
    .sidebar-nav {
      flex: 1;
      padding: 24px 0;
    }

    .nav-section {
      margin-bottom: 32px;
    }

    .nav-section-title {
      color: rgba(255, 255, 255, 0.4);
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      padding: 0 24px;
      margin-bottom: 12px;
    }

    .nav-list {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .nav-link {
      display: flex;
      align-items: center;
      gap: 12px;
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
      padding: 12px 24px;
      transition: all 0.2s ease;
      position: relative;
    }

    .nav-link:hover {
      background: rgba(255, 255, 255, 0.05);
      color: white;
    }

    .nav-link.active {
      background: rgba(102, 126, 234, 0.2);
      color: #667eea;
      border-right: 3px solid #667eea;
    }

    .nav-link.active::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 3px;
      background: #667eea;
    }

    .nav-icon {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .nav-icon svg {
      width: 20px;
      height: 20px;
    }

    .nav-text {
      font-weight: 500;
      font-size: 0.9rem;
    }

    .nav-badge {
      background: #ef4444;
      color: white;
      font-size: 0.75rem;
      font-weight: 600;
      padding: 2px 8px;
      border-radius: 50px;
      margin-left: auto;
    }

    /* Sidebar Footer */
    .sidebar-footer {
      padding: 24px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .user-profile {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .user-avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      overflow: hidden;
    }

    .user-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .user-info {
      display: flex;
      flex-direction: column;
    }

    .user-name {
      color: white;
      font-size: 0.875rem;
      font-weight: 600;
      line-height: 1;
    }

    .user-role {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.75rem;
    }

    .logout-btn {
      background: none;
      border: none;
      color: rgba(255, 255, 255, 0.6);
      padding: 8px;
      cursor: pointer;
      border-radius: 6px;
      transition: all 0.2s ease;
    }

    .logout-btn:hover {
      background: rgba(239, 68, 68, 0.2);
      color: #ef4444;
    }

    .logout-btn svg {
      width: 18px;
      height: 18px;
    }

    /* Main Content */
    .main-content {
      flex: 1;
      margin-left: 0;
      display: flex;
      flex-direction: column;
      transition: margin-left 0.3s ease;
    }

    .main-content.sidebar-open {
      margin-left: 280px;
    }

    /* Top Header */
    .top-header {
      background: white;
      padding: 16px 24px;
      border-bottom: 1px solid #e5e7eb;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .sidebar-toggle-mobile {
      display: none;
      background: none;
      border: none;
      color: #6b7280;
      padding: 8px;
      cursor: pointer;
      border-radius: 6px;
      transition: all 0.2s ease;
    }

    .sidebar-toggle-mobile:hover {
      background: #f3f4f6;
      color: #374151;
    }

    .sidebar-toggle-mobile svg {
      width: 20px;
      height: 20px;
    }

    .page-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #1f2937;
      margin: 0;
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: 24px;
    }

    .header-stats {
      display: flex;
      gap: 24px;
    }

    .stat-item {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    .stat-label {
      font-size: 0.75rem;
      color: #6b7280;
      font-weight: 500;
    }

    .stat-value {
      font-size: 1.125rem;
      font-weight: 700;
      color: #1f2937;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .notification-btn {
      background: none;
      border: none;
      color: #6b7280;
      padding: 8px;
      cursor: pointer;
      border-radius: 8px;
      transition: all 0.2s ease;
      position: relative;
    }

    .notification-btn:hover {
      background: #f3f4f6;
      color: #374151;
    }

    .notification-btn.has-notifications {
      color: #f59e0b;
    }

    .notification-btn svg {
      width: 20px;
      height: 20px;
    }

    .notification-count {
      position: absolute;
      top: 4px;
      right: 4px;
      background: #ef4444;
      color: white;
      font-size: 0.625rem;
      font-weight: 600;
      padding: 2px 5px;
      border-radius: 50px;
      min-width: 16px;
      text-align: center;
    }

    .view-site-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #667eea;
      text-decoration: none;
      padding: 8px 16px;
      border-radius: 8px;
      font-weight: 500;
      font-size: 0.875rem;
      transition: all 0.2s ease;
      border: 1px solid #667eea;
    }

    .view-site-btn:hover {
      background: #667eea;
      color: white;
    }

    .view-site-btn svg {
      width: 16px;
      height: 16px;
    }

    /* Page Content */
    .page-content {
      flex: 1;
      padding: 24px;
      overflow-y: auto;
    }

    /* Mobile Responsive */
    @media (max-width: 1024px) {
      .sidebar {
        transform: translateX(-100%);
      }

      .sidebar.sidebar-open {
        transform: translateX(0);
      }

      .main-content {
        margin-left: 0;
      }

      .main-content.sidebar-open {
        margin-left: 0;
      }

      .sidebar-toggle-mobile {
        display: flex;
      }

      .header-stats {
        display: none;
      }
    }

    @media (max-width: 768px) {
      .page-content {
        padding: 16px;
      }

      .top-header {
        padding: 12px 16px;
      }

      .page-title {
        font-size: 1.25rem;
      }

      .header-actions {
        gap: 8px;
      }

      .view-site-btn span {
        display: none;
      }
    }
  `]
})
export class AdminLayoutComponent {
  sidebarOpen = false;
  currentPageTitle = 'Dashboard';
  appointmentCount = 12;
  todayAppointments = 8;
  dailyRevenue = 1250;
  hasNotifications = true;
  notificationCount = 3;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  logout() {
    // Logout logic here
    console.log('Logout clicked');
  }
}
