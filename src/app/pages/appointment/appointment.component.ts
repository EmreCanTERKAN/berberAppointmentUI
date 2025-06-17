import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="appointment">
      <!-- Hero Section -->
      <section class="appointment-hero">
        <div class="container">
          <h1 class="page-title">Randevu Al</h1>
          <p class="page-subtitle">Size en uygun tarih ve saatte randevunuzu alın</p>
        </div>
      </section>

      <!-- Services Selection -->
      <section class="services-selection">
        <div class="container">
          <h2 class="section-title">Hizmet Seçin</h2>
          <div class="services-grid">
            <div class="service-card" 
                 *ngFor="let service of services" 
                 [class.selected]="selectedService === service.id"
                 (click)="selectService(service)">
              <div class="service-icon">{{service.icon}}</div>
              <h3 class="service-title">{{service.title}}</h3>
              <p class="service-duration">{{service.duration}}</p>
              <div class="service-price">{{service.price}}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Appointment Form -->
      <section class="appointment-form" *ngIf="selectedService">
        <div class="container">
          <div class="form-wrapper">
            <h2 class="form-title">Randevu Bilgileri</h2>
            <form [formGroup]="appointmentForm" (ngSubmit)="onSubmit()">
              <div class="form-grid">
                <div class="form-group">
                  <label for="name">Ad Soyad *</label>
                  <input 
                    type="text" 
                    id="name" 
                    formControlName="name"
                    placeholder="Adınız ve soyadınız"
                    [class.error]="appointmentForm.get('name')?.invalid && appointmentForm.get('name')?.touched">
                </div>

                <div class="form-group">
                  <label for="phone">Telefon *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    formControlName="phone"
                    placeholder="05XX XXX XX XX"
                    [class.error]="appointmentForm.get('phone')?.invalid && appointmentForm.get('phone')?.touched">
                </div>

                <div class="form-group">
                  <label for="date">Tarih *</label>
                  <input 
                    type="date" 
                    id="date" 
                    formControlName="date"
                    [min]="minDate"
                    [class.error]="appointmentForm.get('date')?.invalid && appointmentForm.get('date')?.touched">
                </div>

                <div class="form-group">
                  <label for="time">Saat *</label>
                  <select 
                    id="time" 
                    formControlName="time"
                    [class.error]="appointmentForm.get('time')?.invalid && appointmentForm.get('time')?.touched">
                    <option value="">Saat seçiniz</option>
                    <option *ngFor="let time of availableTimes" [value]="time">{{time}}</option>
                  </select>
                </div>

                <div class="form-group full-width">
                  <label for="notes">Notlar</label>
                  <textarea 
                    id="notes" 
                    formControlName="notes"
                    placeholder="Özel istekleriniz varsa belirtiniz"
                    rows="4">
                  </textarea>
                </div>
              </div>

              <div class="selected-service-info">
                <h3>Seçilen Hizmet</h3>
                <div class="service-summary">
                  <span class="summary-service">{{getSelectedServiceInfo()?.title}}</span>
                  <span class="summary-duration">{{getSelectedServiceInfo()?.duration}}</span>
                  <span class="summary-price">{{getSelectedServiceInfo()?.price}}</span>
                </div>
              </div>

              <button type="submit" class="btn btn-primary" [disabled]="appointmentForm.invalid">
                Randevu Al
              </button>
            </form>
          </div>
        </div>
      </section>

      <!-- Contact Info -->
      <section class="contact-info">
        <div class="container">
          <div class="info-grid">
            <div class="info-card">
              <div class="info-icon">📞</div>
              <h3>Telefon</h3>
              <p>0532 XXX XX XX</p>
            </div>
            <div class="info-card">
              <div class="info-icon">📍</div>
              <h3>Adres</h3>
              <p>İstanbul, Türkiye</p>
            </div>
            <div class="info-card">
              <div class="info-icon">⏰</div>
              <h3>Çalışma Saatleri</h3>
              <p>09:00 - 21:00</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .appointment {
      padding-top: 0;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    /* Hero Section */
    .appointment-hero {
      background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
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

    /* Services Selection */
    .services-selection {
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
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
    }

    .service-card {
      background: white;
      padding: 30px 20px;
      border-radius: 15px;
      text-align: center;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      cursor: pointer;
      transition: all 0.3s ease;
      border: 3px solid transparent;
    }

    .service-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.15);
    }

    .service-card.selected {
      border-color: #e74c3c;
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(231, 76, 60, 0.2);
    }

    .service-icon {
      font-size: 2.5rem;
      margin-bottom: 15px;
    }

    .service-title {
      font-size: 1.2rem;
      color: #2c3e50;
      margin-bottom: 10px;
    }

    .service-duration {
      color: #7f8c8d;
      margin-bottom: 15px;
    }

    .service-price {
      font-size: 1.3rem;
      font-weight: bold;
      color: #e74c3c;
    }

    /* Appointment Form */
    .appointment-form {
      padding: 80px 0;
      background: white;
    }

    .form-wrapper {
      max-width: 800px;
      margin: 0 auto;
      background: #f8f9fa;
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }

    .form-title {
      text-align: center;
      font-size: 2rem;
      color: #2c3e50;
      margin-bottom: 40px;
    }

    .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 30px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
    }

    .form-group.full-width {
      grid-column: 1 / -1;
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

    .selected-service-info {
      background: white;
      padding: 20px;
      border-radius: 10px;
      margin-bottom: 30px;
    }

    .selected-service-info h3 {
      color: #2c3e50;
      margin-bottom: 15px;
    }

    .service-summary {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
    }

    .summary-service {
      font-weight: 600;
      color: #2c3e50;
    }

    .summary-duration {
      color: #7f8c8d;
    }

    .summary-price {
      font-weight: bold;
      color: #e74c3c;
      font-size: 1.1rem;
    }

    .btn {
      padding: 15px 40px;
      background: #e74c3c;
      color: white;
      border: none;
      border-radius: 50px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      width: 100%;
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
    .contact-info {
      padding: 60px 0;
      background: #2c3e50;
      color: white;
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
    }

    .info-card {
      text-align: center;
      padding: 20px;
    }

    .info-icon {
      font-size: 2.5rem;
      margin-bottom: 15px;
    }

    .info-card h3 {
      color: #e74c3c;
      margin-bottom: 10px;
    }

    .info-card p {
      opacity: 0.9;
    }

    /* Mobile Responsive */
    @media (max-width: 768px) {
      .page-title {
        font-size: 2rem;
      }

      .form-grid {
        grid-template-columns: 1fr;
      }

      .form-wrapper {
        padding: 30px 20px;
      }

      .services-selection,
      .appointment-form {
        padding: 60px 0;
      }

      .service-summary {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  `]
})
export class AppointmentComponent {
  appointmentForm: FormGroup;
  selectedService: string | null = null;
  minDate: string;

  services = [
    {
      id: 'haircut',
      icon: '✂️',
      title: 'Saç Kesimi',
      duration: '30-45 dk',
      price: '₺50'
    },
    {
      id: 'beard',
      icon: '🧔',
      title: 'Sakal Düzenleme',
      duration: '20-30 dk',
      price: '₺30'
    },
    {
      id: 'skincare',
      icon: '💆',
      title: 'Cilt Bakımı',
      duration: '45-60 dk',
      price: '₺40'
    },
    {
      id: 'traditional',
      icon: '💈',
      title: 'Geleneksel Berber',
      duration: '60-90 dk',
      price: '₺60'
    }
  ];

  availableTimes = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30'
  ];

  constructor(private fb: FormBuilder) {
    this.appointmentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.pattern(/^05[0-9]{9}$/)]],
      date: ['', Validators.required],
      time: ['', Validators.required],
      notes: ['']
    });

    // Set minimum date to today
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
  }

  selectService(service: any) {
    this.selectedService = service.id;
  }

  getSelectedServiceInfo() {
    return this.services.find(s => s.id === this.selectedService);
  }

  onSubmit() {
    if (this.appointmentForm.valid && this.selectedService) {
      const formData = {
        ...this.appointmentForm.value,
        service: this.selectedService,
        serviceInfo: this.getSelectedServiceInfo()
      };
      
      console.log('Randevu bilgileri:', formData);
      alert('Randevunuz başarıyla alınmıştır! Size SMS ile onay gönderilecektir.');
      
      // Reset form
      this.appointmentForm.reset();
      this.selectedService = null;
    }
  }
}
