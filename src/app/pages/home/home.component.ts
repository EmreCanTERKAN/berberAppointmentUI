import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],  template: `
    <div class="home">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-background">
          <div class="hero-shapes">
            <div class="shape shape-1"></div>
            <div class="shape shape-2"></div>
            <div class="shape shape-3"></div>
          </div>
        </div>
        
        <div class="container">
          <div class="hero-content">
            <div class="hero-text">
              <div class="hero-badge">
                <span class="badge-icon">✨</span>
                <span>Türkiye'nin En İyi Berber Salonu</span>
              </div>
              
              <h1 class="hero-title">
                Stilinizi 
                <span class="highlight">Berberim</span> 
                ile Keşfedin
              </h1>
              
              <p class="hero-subtitle">
                Profesyonel berber hizmetleri, modern salon atmosferi ve uzman ekibimizle 
                size özel stil yaratıyoruz. Kendi tarzınızı keşfetme zamanı.
              </p>
              
              <div class="hero-stats">
                <div class="stat">
                  <span class="stat-number">5000+</span>
                  <span class="stat-label">Mutlu Müşteri</span>
                </div>
                <div class="stat">
                  <span class="stat-number">8+</span>
                  <span class="stat-label">Yıl Deneyim</span>
                </div>
                <div class="stat">
                  <span class="stat-number">%100</span>
                  <span class="stat-label">Memnuniyet</span>
                </div>
              </div>
              
              <div class="hero-buttons">
                <a routerLink="/randevu" class="btn btn-primary">
                  <span>Hemen Randevu Al</span>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13,3A9,9 0 0,0 4,12H1L4.89,15.89L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3Z"/>
                  </svg>
                </a>
                <a routerLink="/hakkimizda" class="btn btn-secondary">
                  <span>Hakkımızda</span>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div class="hero-visual">
              <div class="visual-container">
                <div class="main-visual">
                  <div class="visual-card card-1">
                    <div class="card-icon">✂️</div>
                    <div class="card-content">
                      <h3>Saç Kesimi</h3>
                      <p>Trend kesimler</p>
                      <span class="price">₺50</span>
                    </div>
                  </div>
                  
                  <div class="visual-card card-2">
                    <div class="card-icon">🧔</div>
                    <div class="card-content">
                      <h3>Sakal Bakımı</h3>
                      <p>Profesyonel şekillendirme</p>
                      <span class="price">₺30</span>
                    </div>
                  </div>
                  
                  <div class="visual-card card-3">
                    <div class="card-icon">💆</div>
                    <div class="card-content">
                      <h3>Cilt Bakımı</h3>
                      <p>Rahatlatıcı bakım</p>
                      <span class="price">₺40</span>
                    </div>
                  </div>
                </div>
                
                <div class="floating-elements">
                  <div class="element element-1">💈</div>
                  <div class="element element-2">✨</div>
                  <div class="element element-3">⭐</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section class="services">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">Hizmetlerimiz</span>
            <h2 class="section-title">Size Özel Berber Hizmetleri</h2>
            <p class="section-subtitle">
              Uzman ekibimizle size en uygun hizmeti sunuyoruz
            </p>
          </div>
          
          <div class="services-grid">
            <div class="service-card" *ngFor="let service of services; let i = index" 
                 [style.animation-delay]="(i * 100) + 'ms'">
              <div class="service-header">
                <div class="service-icon">{{service.icon}}</div>
                <div class="service-price">{{service.price}}</div>
              </div>
              <div class="service-content">
                <h3 class="service-title">{{service.title}}</h3>
                <p class="service-description">{{service.description}}</p>
                <div class="service-features">
                  <span class="feature" *ngFor="let feature of service.features">{{feature}}</span>
                </div>
              </div>
              <div class="service-action">
                <a routerLink="/randevu" class="service-btn">
                  <span>Randevu Al</span>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="features">
        <div class="container">
          <div class="features-content">
            <div class="features-text">
              <span class="section-badge">Neden Berberim?</span>
              <h2 class="section-title">Farkımızı Keşfedin</h2>
              <p class="section-description">
                8 yıllık deneyimimiz ve modern yaklaşımımızla size en iyi hizmeti sunuyoruz.
                Her detayda mükemmelliği hedefliyoruz.
              </p>
              
              <div class="features-list">
                <div class="feature-item" *ngFor="let feature of features">
                  <div class="feature-icon">{{feature.icon}}</div>
                  <div class="feature-content">
                    <h3 class="feature-title">{{feature.title}}</h3>
                    <p class="feature-description">{{feature.description}}</p>
                  </div>
                </div>
              </div>
              
              <a routerLink="/hakkimizda" class="btn btn-outline">
                <span>Daha Fazla Bilgi</span>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"/>
                </svg>
              </a>
            </div>
            
            <div class="features-visual">
              <div class="visual-grid">
                <div class="visual-item item-1">
                  <div class="item-content">
                    <span class="item-number">01</span>
                    <span class="item-text">Rezervasyon</span>
                  </div>
                </div>
                <div class="visual-item item-2">
                  <div class="item-content">
                    <span class="item-number">02</span>
                    <span class="item-text">Konsültasyon</span>
                  </div>
                </div>
                <div class="visual-item item-3">
                  <div class="item-content">
                    <span class="item-number">03</span>
                    <span class="item-text">Hizmet</span>
                  </div>
                </div>
                <div class="visual-item item-4">
                  <div class="item-content">
                    <span class="item-number">04</span>
                    <span class="item-text">Memnuniyet</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta">
        <div class="cta-background">
          <div class="cta-pattern"></div>
        </div>
        
        <div class="container">
          <div class="cta-content">
            <div class="cta-text">
              <h2 class="cta-title">Hayalinizdeki Stile Ulaşın</h2>
              <p class="cta-subtitle">
                Size özel berber hizmetleri için bugün randevunuzu alın. 
                Uzman ekibimiz sizi bekliyor.
              </p>
            </div>
            
            <div class="cta-actions">
              <a routerLink="/randevu" class="btn btn-white">
                <span>Randevu Al</span>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/>
                </svg>
              </a>
              
              <a href="tel:+905xxxxxxxxx" class="btn btn-outline-white">
                <span>Hemen Ara</span>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,  styles: [`
    .home {
      overflow-x: hidden;
    }

    .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 24px;
    }

    /* Hero Section */
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      overflow: hidden;
    }

    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
    }

    .hero-shapes {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .shape {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
    }

    .shape-1 {
      width: 300px;
      height: 300px;
      top: 10%;
      right: 10%;
      animation: float 6s ease-in-out infinite;
    }

    .shape-2 {
      width: 200px;
      height: 200px;
      bottom: 20%;
      left: 5%;
      animation: float 8s ease-in-out infinite reverse;
    }

    .shape-3 {
      width: 150px;
      height: 150px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: float 10s ease-in-out infinite;
    }

    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      align-items: center;
      position: relative;
      z-index: 2;
      padding: 80px 0;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
      padding: 8px 16px;
      border-radius: 50px;
      color: white;
      font-size: 0.9rem;
      font-weight: 500;
      margin-bottom: 24px;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .badge-icon {
      font-size: 1rem;
    }

    .hero-title {
      font-size: 4rem;
      font-weight: 800;
      color: white;
      line-height: 1.1;
      margin-bottom: 24px;
      letter-spacing: -0.02em;
    }

    .highlight {
      background: linear-gradient(45deg, #ffd700, #ffed4a);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-shadow: none;
    }

    .hero-subtitle {
      font-size: 1.3rem;
      color: rgba(255, 255, 255, 0.9);
      line-height: 1.6;
      margin-bottom: 32px;
      max-width: 500px;
    }

    .hero-stats {
      display: flex;
      gap: 32px;
      margin-bottom: 40px;
    }

    .stat {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .stat-number {
      font-size: 2rem;
      font-weight: 800;
      color: #ffd700;
      line-height: 1;
    }

    .stat-label {
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.8);
      font-weight: 500;
      margin-top: 4px;
    }

    .hero-buttons {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 16px 32px;
      border-radius: 16px;
      text-decoration: none;
      font-weight: 600;
      font-size: 1rem;
      transition: all 0.3s ease;
      border: none;
      cursor: pointer;
    }

    .btn svg {
      width: 20px;
      height: 20px;
      transition: transform 0.3s ease;
    }

    .btn:hover svg {
      transform: translateX(4px);
    }

    .btn-primary {
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: white;
      box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 35px rgba(16, 185, 129, 0.4);
    }

    .btn-secondary {
      background: rgba(255, 255, 255, 0.1);
      color: white;
      border: 2px solid rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(10px);
    }

    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
    }

    /* Hero Visual */
    .hero-visual {
      position: relative;
    }

    .visual-container {
      position: relative;
      height: 500px;
    }

    .main-visual {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .visual-card {
      position: absolute;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      border-radius: 20px;
      padding: 24px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      min-width: 200px;
    }

    .visual-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }

    .card-1 {
      top: 10%;
      left: 0;
      animation: float 6s ease-in-out infinite;
    }

    .card-2 {
      top: 50%;
      right: 0;
      animation: float 8s ease-in-out infinite reverse;
    }

    .card-3 {
      bottom: 10%;
      left: 50%;
      transform: translateX(-50%);
      animation: float 10s ease-in-out infinite;
    }

    .card-icon {
      font-size: 2rem;
      margin-bottom: 12px;
    }

    .card-content h3 {
      font-size: 1.1rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 4px;
    }

    .card-content p {
      font-size: 0.9rem;
      color: #6b7280;
      margin-bottom: 8px;
    }

    .price {
      font-size: 1.2rem;
      font-weight: 700;
      color: #059669;
    }

    .floating-elements {
      position: absolute;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    .element {
      position: absolute;
      font-size: 2rem;
      opacity: 0.6;
    }

    .element-1 {
      top: 20%;
      right: 20%;
      animation: rotate 20s linear infinite;
    }

    .element-2 {
      bottom: 30%;
      left: 10%;
      animation: pulse 4s ease-in-out infinite;
    }

    .element-3 {
      top: 60%;
      right: 40%;
      animation: bounce 3s ease-in-out infinite;
    }

    /* Services Section */
    .services {
      padding: 120px 0;
      background: #f8fafc;
    }

    .section-header {
      text-align: center;
      max-width: 600px;
      margin: 0 auto 80px;
    }

    .section-badge {
      display: inline-block;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 8px 20px;
      border-radius: 50px;
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 16px;
    }

    .section-title {
      font-size: 3rem;
      font-weight: 800;
      color: #1f2937;
      margin-bottom: 16px;
      line-height: 1.2;
    }

    .section-subtitle {
      font-size: 1.2rem;
      color: #6b7280;
      line-height: 1.6;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 32px;
    }

    .service-card {
      background: white;
      border-radius: 24px;
      padding: 32px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
      border: 1px solid #f1f5f9;
      animation: fadeInUp 0.6s ease-out forwards;
      opacity: 0;
      transform: translateY(30px);
    }

    .service-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
    }

    .service-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .service-icon {
      font-size: 3rem;
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .service-price {
      font-size: 1.5rem;
      font-weight: 700;
      color: #059669;
    }

    .service-title {
      font-size: 1.4rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 12px;
    }

    .service-description {
      color: #6b7280;
      line-height: 1.6;
      margin-bottom: 16px;
    }

    .service-features {
      display: flex;
      gap: 8px;
      margin-bottom: 24px;
      flex-wrap: wrap;
    }

    .feature {
      background: #f0f9ff;
      color: #0284c7;
      padding: 4px 12px;
      border-radius: 50px;
      font-size: 0.8rem;
      font-weight: 500;
    }

    .service-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 12px 24px;
      border-radius: 12px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      width: 100%;
      justify-content: center;
    }

    .service-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
    }

    .service-btn svg {
      width: 16px;
      height: 16px;
    }

    /* Features Section */
    .features {
      padding: 120px 0;
      background: white;
    }

    .features-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      align-items: center;
    }

    .section-description {
      font-size: 1.2rem;
      color: #6b7280;
      line-height: 1.6;
      margin-bottom: 40px;
    }

    .features-list {
      margin-bottom: 40px;
    }

    .feature-item {
      display: flex;
      gap: 20px;
      margin-bottom: 32px;
      padding: 24px;
      background: #f8fafc;
      border-radius: 16px;
      transition: all 0.3s ease;
    }

    .feature-item:hover {
      background: #f1f5f9;
      transform: translateX(8px);
    }

    .feature-item .feature-icon {
      font-size: 2rem;
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .feature-content .feature-title {
      font-size: 1.2rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 8px;
    }

    .feature-content .feature-description {
      color: #6b7280;
      line-height: 1.5;
    }

    .btn-outline {
      background: transparent;
      color: #667eea;
      border: 2px solid #667eea;
    }

    .btn-outline:hover {
      background: #667eea;
      color: white;
      transform: translateY(-2px);
    }

    .features-visual {
      position: relative;
    }

    .visual-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      height: 400px;
    }

    .visual-item {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
    }

    .visual-item::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(255, 255, 255, 0.1);
      transform: translateX(-100%);
      transition: transform 0.6s ease;
    }

    .visual-item:hover::before {
      transform: translateX(0);
    }

    .visual-item:hover {
      transform: scale(1.05);
    }

    .item-content {
      text-align: center;
      z-index: 1;
      position: relative;
    }

    .item-number {
      font-size: 2rem;
      font-weight: 800;
      display: block;
      margin-bottom: 8px;
    }

    .item-text {
      font-size: 1rem;
      font-weight: 600;
    }

    .item-1 { grid-row: span 1; }
    .item-2 { grid-row: span 1; }
    .item-3 { grid-row: span 1; }
    .item-4 { grid-row: span 1; }

    /* CTA Section */
    .cta {
      padding: 120px 0;
      position: relative;
      background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
      overflow: hidden;
    }

    .cta-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
    }

    .cta-pattern {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0);
      background-size: 40px 40px;
    }

    .cta-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      z-index: 2;
      gap: 40px;
    }

    .cta-title {
      font-size: 3rem;
      font-weight: 800;
      color: white;
      margin-bottom: 16px;
      line-height: 1.2;
    }

    .cta-subtitle {
      font-size: 1.2rem;
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.6;
      max-width: 500px;
    }

    .cta-actions {
      display: flex;
      gap: 16px;
      flex-shrink: 0;
    }

    .btn-white {
      background: white;
      color: #1f2937;
    }

    .btn-white:hover {
      background: #f9fafb;
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
    }

    .btn-outline-white {
      background: transparent;
      color: white;
      border: 2px solid rgba(255, 255, 255, 0.3);
    }

    .btn-outline-white:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: white;
      transform: translateY(-2px);
    }

    /* Animations */
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }

    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 0.6; }
      50% { transform: scale(1.1); opacity: 0.8; }
    }

    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Mobile Responsive */
    @media (max-width: 1024px) {
      .hero-content,
      .features-content {
        grid-template-columns: 1fr;
        gap: 60px;
      }

      .cta-content {
        flex-direction: column;
        text-align: center;
      }

      .hero-title {
        font-size: 3rem;
      }

      .section-title {
        font-size: 2.5rem;
      }
    }

    @media (max-width: 768px) {
      .container {
        padding: 0 16px;
      }

      .hero {
        min-height: auto;
        padding: 80px 0;
      }

      .hero-title {
        font-size: 2.5rem;
      }

      .hero-stats {
        gap: 20px;
      }

      .hero-buttons {
        justify-content: center;
      }

      .services,
      .features,
      .cta {
        padding: 80px 0;
      }

      .section-title {
        font-size: 2rem;
      }

      .cta-title {
        font-size: 2rem;
      }

      .visual-container {
        height: 300px;
      }

      .visual-card {
        min-width: 150px;
        padding: 16px;
      }

      .services-grid {
        grid-template-columns: 1fr;
      }

      .cta-actions {
        flex-direction: column;
        width: 100%;
      }

      .btn {
        justify-content: center;
      }
    }
  `]
})
export class HomeComponent {  services = [
    {
      icon: '✂️',
      title: 'Profesyonel Saç Kesimi',
      description: 'Trend ve klasik saç kesimleri',
      price: '₺50',
      features: ['Yıkama', 'Kesim', 'Styling']
    },
    {
      icon: '🧔',
      title: 'Sakal Düzenleme',
      description: 'Sakal şekillendirme ve bakım',
      price: '₺30',
      features: ['Şekillendirme', 'Bakım', 'Nemlendirme']
    },
    {
      icon: '💆',
      title: 'Cilt Bakımı',
      description: 'Yüz temizliği ve bakım uygulamaları',
      price: '₺40',
      features: ['Temizlik', 'Maske', 'Nemlendirme']
    },
    {
      icon: '💈',
      title: 'Geleneksel Berber',
      description: 'Klasik berber hizmetleri ve traş',
      price: '₺60',
      features: ['Traş', 'Masaj', 'Bakım']
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
