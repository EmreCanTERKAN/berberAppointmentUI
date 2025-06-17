import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about">
      <!-- Hero Section -->
      <section class="about-hero">
        <div class="container">
          <h1 class="page-title">Hakkımızda</h1>
          <p class="page-subtitle">Berberim ailesi olarak sizlere en iyi hizmeti sunmak için buradayız</p>
        </div>
      </section>

      <!-- Story Section -->
      <section class="story">
        <div class="container">
          <div class="story-content">
            <div class="story-text">
              <h2 class="section-title">Hikayemiz</h2>
              <p>
                2015 yılında başlayan berberlik yolculuğumuzda, geleneksel berberlik sanatını modern tekniklerle 
                birleştirerek müşterilerimize eşsiz bir deneyim sunmayı hedefledik.
              </p>
              <p>
                Berberim olarak, sadece saç kesimi değil, aynı zamanda kişisel bakım ve rahatlama deneyimi yaşatmayı 
                misyon edindik. Her müşterimizin kendini özel hissetmesini sağlamak için titizlikle çalışıyoruz.
              </p>
            </div>
            <div class="story-image">
              <div class="image-placeholder">
                <span class="placeholder-icon">🏪</span>
                <p>Salonumuz</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="team">
        <div class="container">
          <h2 class="section-title">Ekibimiz</h2>
          <div class="team-grid">
            <div class="team-member" *ngFor="let member of teamMembers">
              <div class="member-avatar">
                <span class="avatar-icon">{{member.avatar}}</span>
              </div>
              <h3 class="member-name">{{member.name}}</h3>
              <p class="member-title">{{member.title}}</p>
              <p class="member-experience">{{member.experience}}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Values Section -->
      <section class="values">
        <div class="container">
          <h2 class="section-title">Değerlerimiz</h2>
          <div class="values-grid">
            <div class="value-card" *ngFor="let value of values">
              <div class="value-icon">{{value.icon}}</div>
              <h3 class="value-title">{{value.title}}</h3>
              <p class="value-description">{{value.description}}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="stats">
        <div class="container">
          <div class="stats-grid">
            <div class="stat-item" *ngFor="let stat of stats">
              <div class="stat-number">{{stat.number}}</div>
              <div class="stat-label">{{stat.label}}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .about {
      padding-top: 0;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    /* Hero Section */
    .about-hero {
      background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
      color: white;
      padding: 100px 0;
      text-align: center;
    }

    .page-title {
      font-size: 3rem;
      margin-bottom: 20px;
      font-weight: bold;
    }

    .page-subtitle {
      font-size: 1.2rem;
      opacity: 0.9;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }

    /* Story Section */
    .story {
      padding: 80px 0;
      background: white;
    }

    .story-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
    }

    .section-title {
      font-size: 2.5rem;
      color: #2c3e50;
      margin-bottom: 30px;
      position: relative;
    }

    .section-title::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 60px;
      height: 4px;
      background: #e74c3c;
      border-radius: 2px;
    }

    .story-text p {
      color: #7f8c8d;
      line-height: 1.8;
      margin-bottom: 20px;
      font-size: 1.1rem;
    }

    .image-placeholder {
      background: #f8f9fa;
      border-radius: 20px;
      padding: 60px 20px;
      text-align: center;
      border: 2px dashed #e74c3c;
    }

    .placeholder-icon {
      font-size: 4rem;
      display: block;
      margin-bottom: 20px;
    }

    /* Team Section */
    .team {
      padding: 80px 0;
      background: #f8f9fa;
    }

    .team .section-title {
      text-align: center;
      margin-bottom: 60px;
    }

    .team .section-title::after {
      left: 50%;
      transform: translateX(-50%);
    }

    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 40px;
    }

    .team-member {
      background: white;
      padding: 40px 30px;
      border-radius: 20px;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }

    .team-member:hover {
      transform: translateY(-10px);
    }

    .member-avatar {
      width: 80px;
      height: 80px;
      background: #e74c3c;
      border-radius: 50%;
      margin: 0 auto 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .avatar-icon {
      font-size: 2rem;
      color: white;
    }

    .member-name {
      font-size: 1.3rem;
      color: #2c3e50;
      margin-bottom: 10px;
    }

    .member-title {
      color: #e74c3c;
      font-weight: 600;
      margin-bottom: 10px;
    }

    .member-experience {
      color: #7f8c8d;
      font-size: 0.9rem;
    }

    /* Values Section */
    .values {
      padding: 80px 0;
      background: white;
    }

    .values .section-title {
      text-align: center;
      margin-bottom: 60px;
    }

    .values .section-title::after {
      left: 50%;
      transform: translateX(-50%);
    }

    .values-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 40px;
    }

    .value-card {
      text-align: center;
      padding: 30px 20px;
    }

    .value-icon {
      font-size: 3rem;
      margin-bottom: 20px;
    }

    .value-title {
      font-size: 1.3rem;
      color: #2c3e50;
      margin-bottom: 15px;
    }

    .value-description {
      color: #7f8c8d;
      line-height: 1.6;
    }

    /* Stats Section */
    .stats {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 60px 0;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 40px;
      text-align: center;
    }

    .stat-number {
      font-size: 3rem;
      font-weight: bold;
      color: #ffd700;
      margin-bottom: 10px;
    }

    .stat-label {
      font-size: 1.1rem;
      opacity: 0.9;
    }

    /* Mobile Responsive */
    @media (max-width: 768px) {
      .page-title {
        font-size: 2rem;
      }

      .story-content {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .section-title {
        font-size: 2rem;
      }

      .about-hero,
      .story,
      .team,
      .values {
        padding: 60px 0;
      }

      .stats {
        padding: 40px 0;
      }

      .stat-number {
        font-size: 2rem;
      }
    }
  `]
})
export class AboutComponent {
  teamMembers = [
    {
      name: 'Ahmet Usta',
      title: 'Baş Berber',
      experience: '15 yıl deneyim',
      avatar: '👨‍💼'
    },
    {
      name: 'Mehmet Usta',
      title: 'Kıdemli Berber',
      experience: '10 yıl deneyim',
      avatar: '👨‍🎨'
    },
    {
      name: 'Emre Usta',
      title: 'Berber',
      experience: '5 yıl deneyim',
      avatar: '👨‍💻'
    }
  ];

  values = [
    {
      icon: '🎯',
      title: 'Kalite',
      description: 'Her zaman en yüksek kaliteyi sunmayı hedefliyoruz'
    },
    {
      icon: '🤝',
      title: 'Güven',
      description: 'Müşterilerimizle güvene dayalı ilişkiler kuruyoruz'
    },
    {
      icon: '✨',
      title: 'Yenilik',
      description: 'Sürekli kendimizi geliştiriyor, yenilikleri takip ediyoruz'
    },
    {
      icon: '💯',
      title: 'Mükemmellik',
      description: 'Her detayda mükemmelliği yakalamaya odaklanıyoruz'
    }
  ];

  stats = [
    {
      number: '5000+',
      label: 'Mutlu Müşteri'
    },
    {
      number: '8',
      label: 'Yıl Deneyim'
    },
    {
      number: '3',
      label: 'Uzman Berber'
    },
    {
      number: '%100',
      label: 'Memnuniyet'
    }
  ];
}
