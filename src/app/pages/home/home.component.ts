import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="home">
      <!-- Hero Section -->
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <div class="hero-text">
              <h1 class="hero-title">
                Stilinizi <span class="highlight">Berberim</span> ile Tamamlayın
              </h1>
              <p class="hero-subtitle">
                Profesyonel berber hizmetleri, modern salon atmosferi ve deneyimli ustalarımızla 
                mükemmel görünümünüze kavuşun.
              </p>
              <div class="hero-buttons">
                <a routerLink="/randevu" class="btn btn-primary">Hemen Randevu Al</a>
                <a routerLink="/hakkimizda" class="btn btn-secondary">Hakkımızda</a>
              </div>
            </div>
            <div class="hero-image">
              <div class="hero-graphic">
                <div class="barber-chair">🪑</div>
                <div class="scissors">✂️</div>
                <div class="mirror">🪞</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section class="services">
        <div class="container">
          <h2 class="section-title">Hizmetlerimiz</h2>
          <div class="services-grid">
            <div class="service-card" *ngFor="let service of services">
              <div class="service-icon">{{service.icon}}</div>
              <h3 class="service-title">{{service.title}}</h3>
              <p class="service-description">{{service.description}}</p>
              <div class="service-price">{{service.price}}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="features">
        <div class="container">
          <h2 class="section-title">Neden Berberim?</h2>
          <div class="features-grid">
            <div class="feature-card" *ngFor="let feature of features">
              <div class="feature-icon">{{feature.icon}}</div>
              <h3 class="feature-title">{{feature.title}}</h3>
              <p class="feature-description">{{feature.description}}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta">
        <div class="container">
          <div class="cta-content">
            <h2 class="cta-title">Bugün Randevunuzu Alın!</h2>
            <p class="cta-subtitle">
              Profesyonel berber hizmetleri için hemen randevu alın ve stilinizi yenileyin.
            </p>
            <a routerLink="/randevu" class="btn btn-primary btn-large">Randevu Al</a>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .home {
      overflow-x: hidden;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    /* Hero Section */
    .hero {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 100px 0;
      position: relative;
    }

    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: bold;
      margin-bottom: 20px;
      line-height: 1.2;
    }

    .highlight {
      color: #ffd700;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .hero-subtitle {
      font-size: 1.2rem;
      margin-bottom: 30px;
      opacity: 0.9;
      line-height: 1.6;
    }

    .hero-buttons {
      display: flex;
      gap: 20px;
    }

    .btn {
      padding: 15px 30px;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      display: inline-block;
      text-align: center;
    }

    .btn-primary {
      background: #e74c3c;
      color: white;
      box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
    }

    .btn-primary:hover {
      background: #c0392b;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(231, 76, 60, 0.4);
    }

    .btn-secondary {
      background: transparent;
      color: white;
      border: 2px solid white;
    }

    .btn-secondary:hover {
      background: white;
      color: #667eea;
      transform: translateY(-2px);
    }

    .hero-graphic {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 30px;
      font-size: 4rem;
      opacity: 0.8;
    }

    .barber-chair, .scissors, .mirror {
      animation: float 3s ease-in-out infinite alternate;
    }

    .scissors {
      animation-delay: 0.5s;
    }

    .mirror {
      animation-delay: 1s;
    }

    @keyframes float {
      0% { transform: translateY(0px); }
      100% { transform: translateY(-20px); }
    }

    /* Services Section */
    .services {
      padding: 80px 0;
      background: #f8f9fa;
    }

    .section-title {
      text-align: center;
      font-size: 2.5rem;
      color: #2c3e50;
      margin-bottom: 60px;
      position: relative;
    }

    .section-title::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: #e74c3c;
      border-radius: 2px;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }

    .service-card {
      background: white;
      padding: 40px 30px;
      border-radius: 20px;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }

    .service-card:hover {
      transform: translateY(-10px);
    }

    .service-icon {
      font-size: 3rem;
      margin-bottom: 20px;
    }

    .service-title {
      font-size: 1.3rem;
      color: #2c3e50;
      margin-bottom: 15px;
    }

    .service-description {
      color: #7f8c8d;
      margin-bottom: 20px;
      line-height: 1.6;
    }

    .service-price {
      font-size: 1.5rem;
      font-weight: bold;
      color: #e74c3c;
    }

    /* Features Section */
    .features {
      padding: 80px 0;
      background: white;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 40px;
    }

    .feature-card {
      text-align: center;
      padding: 30px 20px;
    }

    .feature-icon {
      font-size: 3rem;
      margin-bottom: 20px;
    }

    .feature-title {
      font-size: 1.3rem;
      color: #2c3e50;
      margin-bottom: 15px;
    }

    .feature-description {
      color: #7f8c8d;
      line-height: 1.6;
    }

    /* CTA Section */
    .cta {
      background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
      color: white;
      padding: 80px 0;
    }

    .cta-content {
      text-align: center;
    }

    .cta-title {
      font-size: 2.5rem;
      margin-bottom: 20px;
    }

    .cta-subtitle {
      font-size: 1.2rem;
      margin-bottom: 40px;
      opacity: 0.9;
    }

    .btn-large {
      padding: 20px 40px;
      font-size: 1.1rem;
    }

    /* Mobile Responsive */
    @media (max-width: 768px) {
      .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 40px;
      }

      .hero-title {
        font-size: 2.5rem;
      }

      .hero-buttons {
        justify-content: center;
        flex-wrap: wrap;
      }

      .hero-graphic {
        font-size: 3rem;
      }

      .services, .features, .cta {
        padding: 60px 0;
      }

      .section-title {
        font-size: 2rem;
      }

      .cta-title {
        font-size: 2rem;
      }
    }
  `]
})
export class HomeComponent {
  services = [
    {
      icon: '✂️',
      title: 'Profesyonel Saç Kesimi',
      description: 'Deneyimli berberlerimiz ile en trend saç kesimleri',
      price: '₺50'
    },
    {
      icon: '🧔',
      title: 'Sakal Düzenleme',
      description: 'Sakal şekillendirme ve bakım hizmetleri',
      price: '₺30'
    },
    {
      icon: '💆',
      title: 'Cilt Bakımı',
      description: 'Yüz temizliği ve cilt bakım uygulamaları',
      price: '₺40'
    },
    {
      icon: '💈',
      title: 'Geleneksel Berber',
      description: 'Klasik berber hizmetleri ve traş',
      price: '₺60'
    }
  ];

  features = [
    {
      icon: '👨‍💼',
      title: 'Deneyimli Ustalar',
      description: 'Alanında uzman, deneyimli berberlerimiz ile kaliteli hizmet'
    },
    {
      icon: '🏆',
      title: 'Kaliteli Ürünler',
      description: 'Sadece en kaliteli ve markalı ürünler kullanıyoruz'
    },
    {
      icon: '⏰',
      title: 'Randevu Sistemi',
      description: 'Online randevu sistemi ile zamandan tasarruf edin'
    },
    {
      icon: '🏪',
      title: 'Modern Salon',
      description: 'Hijyenik ve modern salon ortamında hizmet'
    }
  ];
}
