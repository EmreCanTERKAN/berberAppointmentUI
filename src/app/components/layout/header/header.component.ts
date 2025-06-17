import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],  template: `
    <header class="header" [class.scrolled]="isScrolled">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <a routerLink="/" class="logo-link">
              <div class="logo-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 1L9 7V9H21M21 16V11H9V16H21M6.5 10C7.3 10 8 10.7 8 11.5S7.3 13 6.5 13 5 12.3 5 11.5 5.7 10 6.5 10M1.5 10C2.3 10 3 10.7 3 11.5S2.3 13 1.5 13 0 12.3 0 11.5 0.7 10 1.5 10M6.5 17.5C7.3 17.5 8 18.2 8 19S7.3 20.5 6.5 20.5 5 19.8 5 19 5.7 17.5 6.5 17.5M1.5 17.5C2.3 17.5 3 18.2 3 19S2.3 20.5 1.5 20.5 0 19.8 0 19 0.7 17.5 1.5 17.5Z"/>
                </svg>
              </div>
              <div class="logo-text">
                <span class="brand-name">Kinyas Barber</span>
                <span class="brand-subtitle">Jess Erkek Kuaförü</span>
              </div>
            </a>
          </div>
          
          <nav class="nav" [class.nav-open]="isMenuOpen">
            <ul class="nav-list">
              <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
                <span class="nav-text">Ana Sayfa</span>
              </a></li>
              <li><a routerLink="/hakkimizda" routerLinkActive="active">
                <span class="nav-text">Hakkımızda</span>
              </a></li>
              <li><a routerLink="/randevu" routerLinkActive="active" class="cta-nav">
                <span class="nav-text">Randevu Al</span>
              </a></li>
              <li><a routerLink="/iletisim" routerLinkActive="active">
                <span class="nav-text">İletişim</span>
              </a></li>
            </ul>
          </nav>            <div class="header-actions">
              <a routerLink="/randevu" class="btn-appointment">
                <span>Randevu Al</span>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 1L9 7V9H21M21 16V11H9V16H21Z"/>
                </svg>
              </a>
              <a routerLink="/admin" class="btn-admin">
                <span>Admin</span>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
                </svg>
              </a>
              <button class="menu-toggle" (click)="toggleMenu()" [attr.aria-expanded]="isMenuOpen">
                <span class="hamburger" [class.active]="isMenuOpen"></span>
                <span class="hamburger" [class.active]="isMenuOpen"></span>
                <span class="hamburger" [class.active]="isMenuOpen"></span>
              </button>
            </div>
        </div>
      </div>
    </header>
  `,  styles: [`
    .header {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      position: sticky;
      top: 0;
      z-index: 1000;
      transition: all 0.3s ease;
    }

    .header.scrolled {
      background: rgba(255, 255, 255, 0.98);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
    }

    .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 24px;
    }

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 80px;
    }

    .logo-link {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #1a1a1a;
      transition: all 0.3s ease;
    }

    .logo-icon {
      width: 48px;
      height: 48px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 16px;
      color: white;
      transition: all 0.3s ease;
    }

    .logo-icon svg {
      width: 24px;
      height: 24px;
    }

    .logo-link:hover .logo-icon {
      transform: scale(1.05);
      box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
    }

    .logo-text {
      display: flex;
      flex-direction: column;
    }

    .brand-name {
      font-size: 1.75rem;
      font-weight: 700;
      color: #1a1a1a;
      line-height: 1;
      letter-spacing: -0.02em;
    }

    .brand-subtitle {
      font-size: 0.875rem;
      color: #6b7280;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .nav-list {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 8px;
    }

    .nav-list a {
      color: #374151;
      text-decoration: none;
      font-weight: 500;
      padding: 12px 20px;
      border-radius: 12px;
      transition: all 0.3s ease;
      position: relative;
      font-size: 0.95rem;
    }

    .nav-list a:hover {
      background: rgba(102, 126, 234, 0.1);
      color: #667eea;
      transform: translateY(-1px);
    }

    .nav-list a.active {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    }

    .nav-list a.cta-nav {
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: white;
      font-weight: 600;
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
    }

    .nav-list a.cta-nav:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .btn-appointment {
      display: flex;
      align-items: center;
      gap: 8px;
      background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
      color: white;
      padding: 12px 24px;
      border-radius: 12px;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.95rem;
      box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
      transition: all 0.3s ease;
    }

    .btn-appointment svg {
      width: 18px;
      height: 18px;
    }    .btn-appointment:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(245, 158, 11, 0.4);
    }

    .btn-admin {
      display: flex;
      align-items: center;
      gap: 8px;
      background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
      color: white;
      padding: 12px 24px;
      border-radius: 12px;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.95rem;
      box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
      transition: all 0.3s ease;
    }

    .btn-admin svg {
      width: 18px;
      height: 18px;
    }

    .btn-admin:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(139, 92, 246, 0.4);
    }

    .menu-toggle {
      display: none;
      flex-direction: column;
      background: none;
      border: none;
      padding: 12px;
      cursor: pointer;
      border-radius: 8px;
      transition: all 0.3s ease;
    }

    .menu-toggle:hover {
      background: rgba(0, 0, 0, 0.05);
    }

    .hamburger {
      width: 24px;
      height: 2px;
      background: #374151;
      margin: 3px 0;
      transition: all 0.3s ease;
      border-radius: 2px;
    }

    .hamburger.active:nth-child(1) {
      transform: rotate(45deg) translate(6px, 6px);
    }

    .hamburger.active:nth-child(2) {
      opacity: 0;
    }

    .hamburger.active:nth-child(3) {
      transform: rotate(-45deg) translate(6px, -6px);
    }    /* Mobile Styles */
    @media (max-width: 1024px) {
      .btn-appointment,
      .btn-admin {
        display: none;
      }
    }

    @media (max-width: 768px) {
      .container {
        padding: 0 16px;
      }

      .header-content {
        height: 70px;
      }

      .logo-icon {
        width: 40px;
        height: 40px;
        margin-right: 12px;
      }

      .logo-icon svg {
        width: 20px;
        height: 20px;
      }

      .brand-name {
        font-size: 1.5rem;
      }

      .brand-subtitle {
        font-size: 0.75rem;
      }

      .nav {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(20px);
        border-radius: 0 0 24px 24px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
        transform: translateY(-20px);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
      }

      .nav-open {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }

      .nav-list {
        flex-direction: column;
        padding: 24px;
        gap: 4px;
      }

      .nav-list a {
        display: block;
        padding: 16px 20px;
        border-radius: 12px;
        font-size: 1rem;
      }

      .menu-toggle {
        display: flex;
      }
    }

    @media (max-width: 480px) {
      .logo-text {
        display: none;
      }

      .logo-icon {
        margin-right: 0;
      }
    }
  `]
})
export class HeaderComponent {
  isMenuOpen = false;
  isScrolled = false;

  constructor() {
    // Listen for scroll events
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.isScrolled = window.scrollY > 50;
      });
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
