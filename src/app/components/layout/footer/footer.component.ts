import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3 class="footer-title">
              <span class="footer-icon">✂️</span>
              Berberim
            </h3>
            <p class="footer-text">
              Modern ve profesyonel berber hizmetleri ile stilinizi tamamlayın. 
              Deneyimli ustalarımızla en kaliteli hizmeti sunuyoruz.
            </p>
          </div>
          
          <div class="footer-section">
            <h4 class="section-title">Hızlı Linkler</h4>
            <ul class="footer-links">
              <li><a href="/">Ana Sayfa</a></li>
              <li><a href="/hakkimizda">Hakkımızda</a></li>
              <li><a href="/randevu">Randevu Al</a></li>
              <li><a href="/iletisim">İletişim</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4 class="section-title">Hizmetlerimiz</h4>
            <ul class="footer-links">
              <li>Saç Kesimi</li>
              <li>Sakal Bakımı</li>
              <li>Cilt Bakımı</li>
              <li>Masaj</li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4 class="section-title">İletişim</h4>
            <div class="contact-info">
              <p>📞 0532 XXX XX XX</p>
              <p>📧 info&#64;berberim.com</p>
              <p>📍 İstanbul, Türkiye</p>
            </div>
            <div class="social-links">
              <a href="#" class="social-link">📘</a>
              <a href="#" class="social-link">📷</a>
              <a href="#" class="social-link">🐦</a>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2025 Berberim. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: linear-gradient(135deg, #1a252f 0%, #2c3e50 100%);
      color: white;
      padding: 50px 0 20px;
      margin-top: auto;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 40px;
      margin-bottom: 40px;
    }

    .footer-title {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      margin-bottom: 15px;
      color: #e74c3c;
    }

    .footer-icon {
      font-size: 2rem;
      margin-right: 10px;
    }

    .footer-text {
      color: #bdc3c7;
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .section-title {
      color: #e74c3c;
      margin-bottom: 15px;
      font-size: 1.1rem;
    }

    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-links li {
      margin-bottom: 8px;
    }

    .footer-links a {
      color: #bdc3c7;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-links a:hover {
      color: #e74c3c;
    }

    .contact-info p {
      color: #bdc3c7;
      margin-bottom: 8px;
    }

    .social-links {
      display: flex;
      gap: 15px;
      margin-top: 15px;
    }

    .social-link {
      display: inline-block;
      width: 40px;
      height: 40px;
      background: rgba(231, 76, 60, 0.1);
      border-radius: 50%;
      text-align: center;
      line-height: 40px;
      text-decoration: none;
      font-size: 1.2rem;
      transition: all 0.3s ease;
    }

    .social-link:hover {
      background: #e74c3c;
      transform: translateY(-3px);
    }

    .footer-bottom {
      border-top: 1px solid rgba(255,255,255,0.1);
      padding-top: 20px;
      text-align: center;
      color: #bdc3c7;
    }

    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        gap: 30px;
      }
      
      .footer {
        padding: 30px 0 20px;
      }
    }
  `]
})
export class FooterComponent {}
