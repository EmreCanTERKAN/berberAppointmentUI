import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="contact">
      <!-- Hero Section -->
      <section class="contact-hero">
        <div class="container">
          <h1 class="page-title">İletişim</h1>
          <p class="page-subtitle">Bizimle iletişime geçin, sorularınızı yanıtlayalım</p>
        </div>
      </section>

      <!-- Contact Content -->
      <section class="contact-content">
        <div class="container">
          <div class="contact-grid">
            <!-- Contact Form -->
            <div class="contact-form-section">
              <h2 class="section-title">Mesaj Gönder</h2>
              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
                <div class="form-group">
                  <label for="name">Ad Soyad *</label>
                  <input 
                    type="text" 
                    id="name" 
                    formControlName="name"
                    placeholder="Adınız ve soyadınız"
                    [class.error]="contactForm.get('name')?.invalid && contactForm.get('name')?.touched">
                </div>

                <div class="form-group">
                  <label for="email">E-posta *</label>
                  <input 
                    type="email" 
                    id="email" 
                    formControlName="email"
                    placeholder="ornek@email.com"
                    [class.error]="contactForm.get('email')?.invalid && contactForm.get('email')?.touched">
                </div>

                <div class="form-group">
                  <label for="phone">Telefon</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    formControlName="phone"
                    placeholder="05XX XXX XX XX">
                </div>

                <div class="form-group">
                  <label for="subject">Konu *</label>
                  <select 
                    id="subject" 
                    formControlName="subject"
                    [class.error]="contactForm.get('subject')?.invalid && contactForm.get('subject')?.touched">
                    <option value="">Konu seçiniz</option>
                    <option value="appointment">Randevu</option>
                    <option value="service">Hizmetler</option>
                    <option value="complaint">Şikayet</option>
                    <option value="suggestion">Öneri</option>
                    <option value="other">Diğer</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="message">Mesaj *</label>
                  <textarea 
                    id="message" 
                    formControlName="message"
                    placeholder="Mesajınızı buraya yazın..."
                    rows="6"
                    [class.error]="contactForm.get('message')?.invalid && contactForm.get('message')?.touched">
                  </textarea>
                </div>

                <button type="submit" class="btn btn-primary" [disabled]="contactForm.invalid">
                  Mesaj Gönder
                </button>
              </form>
            </div>

            <!-- Contact Info -->
            <div class="contact-info-section">
              <h2 class="section-title">İletişim Bilgileri</h2>
              
              <div class="info-cards">
                <div class="info-card">
                  <div class="info-icon">📞</div>
                  <div class="info-content">
                    <h3>Telefon</h3>
                    <p>0532 XXX XX XX</p>
                    <p>0212 XXX XX XX</p>
                  </div>
                </div>

                <div class="info-card">
                  <div class="info-icon">📧</div>
                  <div class="info-content">
                    <h3>E-posta</h3>
                    <p>info&#64;berberim.com</p>
                    <p>randevu&#64;berberim.com</p>
                  </div>
                </div>

                <div class="info-card">
                  <div class="info-icon">📍</div>
                  <div class="info-content">
                    <h3>Adres</h3>
                    <p>Örnek Mahallesi<br>
                    Berber Sokak No: 123<br>
                    Kadıköy / İstanbul</p>
                  </div>
                </div>

                <div class="info-card">
                  <div class="info-icon">⏰</div>
                  <div class="info-content">
                    <h3>Çalışma Saatleri</h3>
                    <p><strong>Pazartesi - Cumartesi:</strong><br>09:00 - 21:00</p>
                    <p><strong>Pazar:</strong><br>10:00 - 18:00</p>
                  </div>
                </div>
              </div>

              <!-- Social Media -->
              <div class="social-section">
                <h3>Sosyal Medya</h3>
                <div class="social-links">
                  <a href="#" class="social-link facebook">
                    <span class="icon">📘</span>
                    <span class="text">Facebook</span>
                  </a>
                  <a href="#" class="social-link instagram">
                    <span class="icon">📷</span>
                    <span class="text">Instagram</span>
                  </a>
                  <a href="#" class="social-link twitter">
                    <span class="icon">🐦</span>
                    <span class="text">Twitter</span>
                  </a>
                  <a href="#" class="social-link whatsapp">
                    <span class="icon">💬</span>
                    <span class="text">WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Map Section -->
      <section class="map-section">
        <div class="container">
          <h2 class="section-title">Konumumuz</h2>
          <div class="map-placeholder">
            <div class="map-content">
              <div class="map-icon">🗺️</div>
              <h3>Harita</h3>
              <p>Kadıköy / İstanbul</p>
              <p>Gerçek harita entegrasyonu için Google Maps API kullanılabilir</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .contact {
      padding-top: 0;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    /* Hero Section */
    .contact-hero {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
    }

    /* Contact Content */
    .contact-content {
      padding: 80px 0;
      background: #f8f9fa;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
    }

    .section-title {
      font-size: 2rem;
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

    /* Contact Form */
    .contact-form-section {
      background: white;
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
    }

    .form-group label {
      color: #2c3e50;
      font-weight: 600;
      margin-bottom: 8px;
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
      padding: 12px 15px;
      border: 2px solid #e0e0e0;
      border-radius: 10px;
      font-size: 1rem;
      transition: border-color 0.3s ease;
      font-family: inherit;
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #e74c3c;
    }

    .form-group input.error,
    .form-group select.error,
    .form-group textarea.error {
      border-color: #e74c3c;
    }

    .form-group textarea {
      resize: vertical;
      min-height: 120px;
    }

    .btn {
      padding: 15px 30px;
      background: #e74c3c;
      color: white;
      border: none;
      border-radius: 50px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .btn:hover:not(:disabled) {
      background: #c0392b;
      transform: translateY(-2px);
    }

    .btn:disabled {
      background: #bdc3c7;
      cursor: not-allowed;
    }

    /* Contact Info */
    .contact-info-section {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    .info-cards {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .info-card {
      background: white;
      padding: 25px;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      display: flex;
      align-items: flex-start;
      gap: 20px;
    }

    .info-icon {
      font-size: 2rem;
      flex-shrink: 0;
    }

    .info-content h3 {
      color: #2c3e50;
      margin-bottom: 10px;
      font-size: 1.1rem;
    }

    .info-content p {
      color: #7f8c8d;
      margin-bottom: 5px;
      line-height: 1.5;
    }

    /* Social Media */
    .social-section {
      background: white;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }

    .social-section h3 {
      color: #2c3e50;
      margin-bottom: 20px;
    }

    .social-links {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }

    .social-link {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 15px;
      background: #f8f9fa;
      border-radius: 10px;
      text-decoration: none;
      color: #2c3e50;
      transition: all 0.3s ease;
    }

    .social-link:hover {
      background: #e74c3c;
      color: white;
      transform: translateY(-2px);
    }

    .social-link .icon {
      font-size: 1.2rem;
    }

    /* Map Section */
    .map-section {
      padding: 80px 0;
      background: white;
    }

    .map-section .section-title {
      text-align: center;
      margin-bottom: 40px;
    }

    .map-section .section-title::after {
      left: 50%;
      transform: translateX(-50%);
    }

    .map-placeholder {
      background: #f8f9fa;
      border-radius: 20px;
      padding: 80px 20px;
      text-align: center;
      border: 2px dashed #e74c3c;
      min-height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .map-content {
      max-width: 400px;
    }

    .map-icon {
      font-size: 4rem;
      margin-bottom: 20px;
    }

    .map-content h3 {
      color: #2c3e50;
      margin-bottom: 15px;
      font-size: 1.5rem;
    }

    .map-content p {
      color: #7f8c8d;
      margin-bottom: 10px;
    }

    /* Mobile Responsive */
    @media (max-width: 768px) {
      .page-title {
        font-size: 2rem;
      }

      .contact-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .contact-form-section {
        padding: 30px 20px;
      }

      .social-links {
        grid-template-columns: 1fr;
      }

      .contact-content,
      .map-section {
        padding: 60px 0;
      }

      .map-placeholder {
        padding: 60px 20px;
      }

      .map-icon {
        font-size: 3rem;
      }
    }
  `]
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern(/^05[0-9]{9}$/)]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      console.log('İletişim formu gönderildi:', formData);
      alert('Mesajınız başarıyla gönderilmiştir! En kısa sürede size dönüş yapacağız.');
      this.contactForm.reset();
    }
  }
}
