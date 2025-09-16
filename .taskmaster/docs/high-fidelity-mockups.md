# JG Bioestética - High-Fidelity Mockups Specification

## Visual Design System Implementation

This document provides detailed specifications for implementing the high-fidelity mockups based on the wireframes and brand guidelines.

---

## HOMEPAGE HIGH-FIDELITY MOCKUP

### Header Section
```css
/* Header Styling */
.header {
  background: #FFFFFF;
  border-bottom: 1px solid #F0F0F0;
  padding: 16px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo {
  height: 48px;
  width: auto;
}

.navigation {
  display: flex;
  gap: 32px;
  align-items: center;
}

.nav-link {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #333333;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
  color: #556B2F;
}

.cta-phone {
  background: #E2B850;
  color: white;
  padding: 12px 20px;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
}
```

### Hero Section
```css
.hero {
  background: linear-gradient(
    rgba(85, 107, 47, 0.7), 
    rgba(85, 107, 47, 0.7)
  ), url('hero-clinic-interior.jpg');
  background-size: cover;
  background-position: center;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.hero-content {
  max-width: 800px;
  padding: 0 20px;
}

.hero h1 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 1.2;
  margin-bottom: 16px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.hero .subtitle {
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 32px;
  opacity: 0.95;
}

.hero .cta-button {
  background: #E2B850;
  color: white;
  padding: 16px 32px;
  border: none;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.hero .cta-button:hover {
  background: #556B2F;
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(85, 107, 47, 0.3);
}
```

### Services Overview Section
```css
.services-overview {
  background: #F5F5DC;
  padding: 80px 0;
}

.section-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 36px;
  color: #333333;
  text-align: center;
  margin-bottom: 48px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.service-card {
  background: white;
  border-radius: 12px;
  padding: 32px 24px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(85, 107, 47, 0.1);
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(85, 107, 47, 0.15);
}

.service-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 16px;
  background: #EDE5B0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #556B2F;
  font-size: 28px;
}

.service-card h3 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #333333;
  margin-bottom: 12px;
}

.service-card p {
  font-family: 'Open Sans', sans-serif;
  color: #666666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.service-card .btn-secondary {
  background: transparent;
  border: 2px solid #556B2F;
  color: #556B2F;
  padding: 10px 24px;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.service-card .btn-secondary:hover {
  background: #556B2F;
  color: white;
}
```

### About Preview Section
```css
.about-preview {
  background: white;
  padding: 80px 0;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 48px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  align-items: center;
}

.about-image {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}

.about-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.about-text h2 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 32px;
  color: #333333;
  margin-bottom: 20px;
}

.about-text p {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  line-height: 1.7;
  color: #666666;
  margin-bottom: 24px;
}

.about-text .btn-primary {
  background: #E2B850;
  color: white;
  padding: 12px 28px;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.about-text .btn-primary:hover {
  background: #556B2F;
}
```

### Testimonials Section
```css
.testimonials {
  background: #F8F8F8;
  padding: 80px 0;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.testimonial-card {
  background: white;
  border-radius: 12px;
  padding: 32px;
  text-align: center;
  position: relative;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}

.testimonial-card::before {
  content: '"';
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 60px;
  color: #EDE5B0;
  font-family: serif;
}

.testimonial-text {
  font-family: 'Open Sans', sans-serif;
  font-style: italic;
  font-size: 16px;
  line-height: 1.6;
  color: #555555;
  margin-bottom: 20px;
}

.testimonial-author {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: #556B2F;
  font-size: 14px;
}
```

---

## MOBILE-RESPONSIVE SPECIFICATIONS

### Mobile Navigation
```css
@media (max-width: 768px) {
  .header {
    padding: 12px 0;
  }
  
  .navigation {
    display: none;
  }
  
  .mobile-menu {
    display: block;
    background: none;
    border: none;
    font-size: 24px;
    color: #556B2F;
  }
  
  .mobile-nav-menu {
    position: fixed;
    top: 0;
    left: -100%;
    width: 80%;
    height: 100vh;
    background: white;
    transition: left 0.3s ease;
    padding: 80px 20px 20px;
    z-index: 1001;
  }
  
  .mobile-nav-menu.active {
    left: 0;
  }
  
  .mobile-nav-menu .nav-link {
    display: block;
    padding: 16px 0;
    border-bottom: 1px solid #F0F0F0;
    font-size: 18px;
  }
}
```

### Mobile Hero Adjustments
```css
@media (max-width: 768px) {
  .hero {
    height: 500px;
    padding: 0 16px;
  }
  
  .hero h1 {
    font-size: 32px;
  }
  
  .hero .subtitle {
    font-size: 18px;
  }
  
  .hero .cta-button {
    padding: 14px 24px;
    font-size: 16px;
  }
}
```

### Mobile Grid Adjustments
```css
@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 0 16px;
  }
  
  .about-content {
    grid-template-columns: 1fr;
    gap: 32px;
    text-align: center;
  }
  
  .testimonials-grid {
    grid-template-columns: 1fr;
    padding: 0 16px;
  }
}
```

---

## CONTACT PAGE MOCKUP SPECIFICATIONS

### Contact Form Styling
```css
.contact-form {
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}

.form-group {
  margin-bottom: 24px;
}

.form-label {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  color: #333333;
  margin-bottom: 8px;
  display: block;
}

.form-input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #E0E0E0;
  border-radius: 6px;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: #556B2F;
  box-shadow: 0 0 0 3px rgba(85, 107, 47, 0.1);
}

.form-textarea {
  min-height: 120px;
  resize: vertical;
}

.form-submit {
  background: #E2B850;
  color: white;
  padding: 14px 32px;
  border: none;
  border-radius: 6px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.form-submit:hover {
  background: #556B2F;
  transform: translateY(-1px);
}
```

### Contact Info Cards
```css
.contact-info-card {
  background: white;
  border-radius: 12px;
  padding: 32px;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  margin-bottom: 24px;
}

.contact-icon {
  width: 48px;
  height: 48px;
  background: #EDE5B0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  color: #556B2F;
  font-size: 20px;
}

.contact-info-card h3 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: #333333;
  margin-bottom: 8px;
}

.contact-info-card p {
  font-family: 'Open Sans', sans-serif;
  color: #666666;
  line-height: 1.5;
}
```

---

## ACCESSIBILITY & INTERACTION SPECIFICATIONS

### Focus States
```css
.btn:focus,
.form-input:focus,
.nav-link:focus {
  outline: 2px solid #556B2F;
  outline-offset: 2px;
}
```

### Loading States
```css
.btn.loading {
  position: relative;
  color: transparent;
}

.btn.loading::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border: 2px solid transparent;
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}
```

### Error States
```css
.form-input.error {
  border-color: #E74C3C;
  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
}

.error-message {
  color: #E74C3C;
  font-size: 14px;
  margin-top: 4px;
  font-family: 'Open Sans', sans-serif;
}
```

---

## PERFORMANCE OPTIMIZATION

### Image Specifications
- **Hero Images**: WebP format, 1920x800px, compressed to <200KB
- **Service Icons**: SVG format for scalability
- **Team Photos**: WebP format, 300x300px, compressed to <50KB each
- **Background Images**: WebP with JPEG fallback

### CSS Optimization
- Use CSS custom properties for consistent theming
- Implement critical CSS inlining
- Minimize unused CSS with PurgeCSS

### Animation Performance
```css
/* Use transform and opacity for smooth animations */
.card {
  will-change: transform;
}

.card:hover {
  transform: translateY(-4px);
}

/* Prefer transform over changing layout properties */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

This high-fidelity mockup specification provides detailed implementation guidance for creating a professional, accessible, and performant website that aligns with the JG Bioestética brand guidelines and user experience requirements.