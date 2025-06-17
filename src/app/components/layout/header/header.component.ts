import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <a routerLink="/" class="logo-link">
              <span class="logo-icon">✂️</span>
              <span class="logo-text">Berberim</span>
            </a>
          </div>
          
          <nav class="nav" [class.nav-open]="isMenuOpen">
            <ul class="nav-list">
              <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Ana Sayfa</a></li>
              <li><a routerLink="/hakkimizda" routerLinkActive="active">Hakkımızda</a></li>
              <li><a routerLink="/randevu" routerLinkActive="active">Randevu Al</a></li>
              <li><a routerLink="/iletisim" routerLinkActive="active">İletişim</a></li>
            </ul>
          </nav>
          
          <button class="menu-toggle" (click)="toggleMenu()" [attr.aria-expanded]="isMenuOpen">
            <span class="hamburger"></span>
            <span class="hamburger"></span>
            <span class="hamburger"></span>
          </button>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
      box-shadow: 0 2px 20px rgba(0,0,0,0.1);
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 70px;
    }

    .logo-link {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
    }

    .logo-icon {
      font-size: 2rem;
      margin-right: 10px;
    }

    .nav-list {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 30px;
    }

    .nav-list a {
      color: white;
      text-decoration: none;
      font-weight: 500;
      padding: 8px 16px;
      border-radius: 25px;
      transition: all 0.3s ease;
      position: relative;
    }

    .nav-list a:hover {
      background: rgba(255,255,255,0.1);
      transform: translateY(-2px);
    }

    .nav-list a.active {
      background: #e74c3c;
      color: white;
    }

    .menu-toggle {
      display: none;
      flex-direction: column;
      background: none;
      border: none;
      padding: 10px;
      cursor: pointer;
    }

    .hamburger {
      width: 25px;
      height: 3px;
      background: white;
      margin: 3px 0;
      transition: 0.3s;
    }

    /* Mobile Styles */
    @media (max-width: 768px) {
      .nav {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: #2c3e50;
        border-radius: 0 0 20px 20px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
      }

      .nav-open {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }

      .nav-list {
        flex-direction: column;
        padding: 20px;
        gap: 10px;
      }

      .nav-list a {
        display: block;
        padding: 15px 20px;
        border-radius: 10px;
      }

      .menu-toggle {
        display: flex;
      }
    }
  `]
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
