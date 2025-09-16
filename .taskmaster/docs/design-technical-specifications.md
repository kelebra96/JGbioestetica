# JG Bioestética - Design Technical Specifications

## Implementation Guide for Developers

This document provides technical implementation details for converting the wireframes and high-fidelity mockups into functional code.

---

## COMPONENT ARCHITECTURE

### Layout Components
```javascript
// Suggested component structure for the application
components/
├── Layout/
│   ├── Header.ejs
│   ├── Footer.ejs
│   ├── Navigation.ejs
│   └── MobileMenu.ejs
├── Sections/
│   ├── Hero.ejs
│   ├── ServicesOverview.ejs
│   ├── AboutPreview.ejs
│   ├── Testimonials.ejs
│   └── ContactPreview.ejs
├── Cards/
│   ├── ServiceCard.ejs
│   ├── TestimonialCard.ejs
│   ├── BlogCard.ejs
│   └── TeamCard.ejs
└── Forms/
    ├── ContactForm.ejs
    ├── NewsletterForm.ejs
    └── FormElements.ejs
```

### CSS Architecture
```scss
// SCSS file structure following BEM methodology
styles/
├── abstracts/
│   ├── _variables.scss    // Brand colors, fonts, breakpoints
│   ├── _mixins.scss       // Reusable mixins
│   └── _functions.scss    // Utility functions
├── base/
│   ├── _reset.scss        // CSS reset
│   ├── _typography.scss   // Font definitions
│   └── _base.scss         // Base element styles
├── components/
│   ├── _buttons.scss      // Button styles
│   ├── _forms.scss        // Form element styles
│   ├── _cards.scss        // Card component styles
│   └── _navigation.scss   // Navigation styles
├── layout/
│   ├── _header.scss       // Header layout
│   ├── _footer.scss       // Footer layout
│   └── _grid.scss         // Grid system
└── pages/
    ├── _home.scss         // Homepage specific styles
    ├── _about.scss        // About page specific styles
    ├── _services.scss     // Services page specific styles
    ├── _contact.scss      // Contact page specific styles
    └── _blog.scss         // Blog page specific styles
```

---

## DESIGN SYSTEM VARIABLES

### SCSS Variables
```scss
// Brand Colors
$color-primary: #556B2F;      // Verde Musgo
$color-secondary: #F5F5DC;    // Bege
$color-accent: #EDE5B0;       // Amarelo Claro
$color-gold: #E2B850;         // Dourado

// Neutral Colors
$color-white: #FFFFFF;
$color-dark: #333333;
$color-gray: #666666;
$color-light-gray: #F8F8F8;
$color-border: #E0E0E0;

// Status Colors
$color-success: #27AE60;
$color-warning: #F39C12;
$color-error: #E74C3C;
$color-info: #3498DB;

// Typography
$font-primary: 'Montserrat', sans-serif;  // Headers
$font-secondary: 'Open Sans', sans-serif; // Body text

// Font Weights
$font-light: 300;
$font-regular: 400;
$font-medium: 500;
$font-semibold: 600;
$font-bold: 700;

// Font Sizes
$font-size-xs: 12px;
$font-size-sm: 14px;
$font-size-base: 16px;
$font-size-lg: 18px;
$font-size-xl: 20px;
$font-size-2xl: 24px;
$font-size-3xl: 28px;
$font-size-4xl: 32px;
$font-size-5xl: 36px;
$font-size-6xl: 48px;

// Spacing Scale (8px base)
$spacing-xs: 4px;
$spacing-sm: 8px;
$spacing-md: 16px;
$spacing-lg: 24px;
$spacing-xl: 32px;
$spacing-2xl: 48px;
$spacing-3xl: 64px;
$spacing-4xl: 80px;

// Border Radius
$border-radius-sm: 4px;
$border-radius-md: 6px;
$border-radius-lg: 8px;
$border-radius-xl: 12px;

// Shadows
$shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
$shadow-md: 0 4px 12px rgba(85, 107, 47, 0.1);
$shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.1);
$shadow-xl: 0 12px 32px rgba(85, 107, 47, 0.15);

// Breakpoints
$breakpoint-sm: 576px;
$breakpoint-md: 768px;
$breakpoint-lg: 1024px;
$breakpoint-xl: 1200px;
$breakpoint-xxl: 1400px;

// Z-index Scale
$z-index-dropdown: 100;
$z-index-sticky: 200;
$z-index-fixed: 300;
$z-index-modal-backdrop: 400;
$z-index-modal: 500;
$z-index-popover: 600;
$z-index-tooltip: 700;
```

### Utility Mixins
```scss
// Responsive breakpoints
@mixin respond-to($breakpoint) {
  @if $breakpoint == sm {
    @media (min-width: #{$breakpoint-sm}) { @content; }
  }
  @if $breakpoint == md {
    @media (min-width: #{$breakpoint-md}) { @content; }
  }
  @if $breakpoint == lg {
    @media (min-width: #{$breakpoint-lg}) { @content; }
  }
  @if $breakpoint == xl {
    @media (min-width: #{$breakpoint-xl}) { @content; }
  }
}

// Button mixin
@mixin button-style($bg-color, $text-color, $hover-bg: darken($bg-color, 10%)) {
  background: $bg-color;
  color: $text-color;
  border: none;
  padding: $spacing-md $spacing-lg;
  border-radius: $border-radius-md;
  font-family: $font-primary;
  font-weight: $font-semibold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  
  &:hover {
    background: $hover-bg;
    transform: translateY(-1px);
  }
  
  &:focus {
    outline: 2px solid $color-primary;
    outline-offset: 2px;
  }
  
  &:active {
    transform: translateY(0);
  }
}

// Card mixin
@mixin card-style($padding: $spacing-xl, $shadow: $shadow-md) {
  background: $color-white;
  border-radius: $border-radius-xl;
  padding: $padding;
  box-shadow: $shadow;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: $shadow-xl;
  }
}

// Flexbox utilities
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin flex-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

// Container mixin
@mixin container {
  max-width: $breakpoint-xl;
  margin: 0 auto;
  padding: 0 $spacing-md;
  
  @include respond-to(md) {
    padding: 0 $spacing-lg;
  }
}
```

---

## GRID SYSTEM IMPLEMENTATION

### CSS Grid Layout
```scss
.grid {
  display: grid;
  gap: $spacing-xl;
  
  &--2-col {
    grid-template-columns: repeat(2, 1fr);
    
    @media (max-width: $breakpoint-md) {
      grid-template-columns: 1fr;
    }
  }
  
  &--3-col {
    grid-template-columns: repeat(3, 1fr);
    
    @media (max-width: $breakpoint-lg) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: $breakpoint-sm) {
      grid-template-columns: 1fr;
    }
  }
  
  &--auto-fit {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}
```

### Container System
```scss
.container {
  @include container;
  
  &--fluid {
    max-width: 100%;
    padding: 0 $spacing-md;
  }
  
  &--narrow {
    max-width: 800px;
  }
}
```

---

## COMPONENT SPECIFICATIONS

### Header Component
```html
<!-- Header Template (EJS) -->
<header class="header" id="main-header">
  <div class="container">
    <div class="header__content">
      <!-- Logo -->
      <a href="/" class="header__logo">
        <img src="/images/logo-jg-bioestetica.svg" alt="JG Bioestética" />
      </a>
      
      <!-- Desktop Navigation -->
      <nav class="header__nav" id="main-nav">
        <a href="/" class="nav__link <%= page === 'home' ? 'nav__link--active' : '' %>">Home</a>
        <a href="/about" class="nav__link <%= page === 'about' ? 'nav__link--active' : '' %>">Sobre</a>
        <a href="/services" class="nav__link <%= page === 'services' ? 'nav__link--active' : '' %>">Serviços</a>
        <a href="/contact" class="nav__link <%= page === 'contact' ? 'nav__link--active' : '' %>">Contato</a>
        <a href="/blog" class="nav__link <%= page === 'blog' ? 'nav__link--active' : '' %>">Blog</a>
      </nav>
      
      <!-- CTA Button -->
      <a href="tel:+5511XXXXXXXX" class="btn btn--primary header__cta">
        (11) XXXX-XXXX
      </a>
      
      <!-- Mobile Menu Toggle -->
      <button class="header__mobile-toggle" id="mobile-toggle" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </div>
  
  <!-- Mobile Navigation -->
  <nav class="mobile-nav" id="mobile-nav">
    <div class="mobile-nav__content">
      <a href="/" class="mobile-nav__link">Home</a>
      <a href="/about" class="mobile-nav__link">Sobre</a>
      <a href="/services" class="mobile-nav__link">Serviços</a>
      <a href="/contact" class="mobile-nav__link">Contato</a>
      <a href="/blog" class="mobile-nav__link">Blog</a>
      <a href="tel:+5511XXXXXXXX" class="mobile-nav__cta">Ligar Agora</a>
    </div>
  </nav>
</header>
```

### Service Card Component
```html
<!-- Service Card Template -->
<div class="service-card">
  <div class="service-card__icon">
    <i class="<%= service.icon %>" aria-hidden="true"></i>
  </div>
  <h3 class="service-card__title"><%= service.title %></h3>
  <p class="service-card__description"><%= service.description %></p>
  <a href="/services/<%= service.slug %>" class="btn btn--secondary">
    Ver Mais
  </a>
</div>
```

### Contact Form Component
```html
<!-- Contact Form Template -->
<form class="contact-form" id="contact-form" method="POST" action="/contact">
  <div class="form-group">
    <label for="name" class="form-label">Nome Completo *</label>
    <input 
      type="text" 
      id="name" 
      name="name" 
      class="form-input" 
      required 
      aria-describedby="name-error"
    />
    <span class="form-error" id="name-error"></span>
  </div>
  
  <div class="form-group">
    <label for="email" class="form-label">E-mail *</label>
    <input 
      type="email" 
      id="email" 
      name="email" 
      class="form-input" 
      required 
      aria-describedby="email-error"
    />
    <span class="form-error" id="email-error"></span>
  </div>
  
  <div class="form-group">
    <label for="phone" class="form-label">Telefone</label>
    <input 
      type="tel" 
      id="phone" 
      name="phone" 
      class="form-input" 
      aria-describedby="phone-error"
    />
    <span class="form-error" id="phone-error"></span>
  </div>
  
  <div class="form-group">
    <label for="subject" class="form-label">Assunto *</label>
    <select id="subject" name="subject" class="form-input" required>
      <option value="">Selecione um assunto</option>
      <option value="consultation">Consulta</option>
      <option value="information">Informações</option>
      <option value="appointment">Agendamento</option>
      <option value="other">Outros</option>
    </select>
  </div>
  
  <div class="form-group">
    <label for="message" class="form-label">Mensagem *</label>
    <textarea 
      id="message" 
      name="message" 
      class="form-input form-textarea" 
      rows="5" 
      required 
      aria-describedby="message-error"
    ></textarea>
    <span class="form-error" id="message-error"></span>
  </div>
  
  <button type="submit" class="btn btn--primary btn--full-width" id="submit-btn">
    Enviar Mensagem
  </button>
</form>
```

---

## JAVASCRIPT FUNCTIONALITY

### Mobile Menu Toggle
```javascript
// Mobile navigation functionality
class MobileNavigation {
  constructor() {
    this.toggle = document.getElementById('mobile-toggle');
    this.nav = document.getElementById('mobile-nav');
    this.isOpen = false;
    
    this.init();
  }
  
  init() {
    this.toggle.addEventListener('click', () => this.toggleMenu());
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.closeMenu();
      }
    });
    
    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (this.isOpen && !this.nav.contains(e.target) && !this.toggle.contains(e.target)) {
        this.closeMenu();
      }
    });
  }
  
  toggleMenu() {
    this.isOpen ? this.closeMenu() : this.openMenu();
  }
  
  openMenu() {
    this.nav.classList.add('mobile-nav--open');
    this.toggle.classList.add('mobile-toggle--open');
    document.body.classList.add('nav-open');
    this.isOpen = true;
  }
  
  closeMenu() {
    this.nav.classList.remove('mobile-nav--open');
    this.toggle.classList.remove('mobile-toggle--open');
    document.body.classList.remove('nav-open');
    this.isOpen = false;
  }
}

// Initialize mobile navigation
document.addEventListener('DOMContentLoaded', () => {
  new MobileNavigation();
});
```

### Form Validation
```javascript
// Contact form validation
class ContactForm {
  constructor(formId) {
    this.form = document.getElementById(formId);
    this.submitBtn = this.form.querySelector('#submit-btn');
    this.init();
  }
  
  init() {
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    
    // Real-time validation
    this.form.querySelectorAll('.form-input').forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => this.clearError(input));
    });
  }
  
  async handleSubmit(e) {
    e.preventDefault();
    
    if (!this.validateForm()) {
      return;
    }
    
    this.setLoading(true);
    
    try {
      const formData = new FormData(this.form);
      const response = await fetch('/contact', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        this.showSuccess();
        this.form.reset();
      } else {
        this.showError('Erro ao enviar mensagem. Tente novamente.');
      }
    } catch (error) {
      this.showError('Erro ao enviar mensagem. Verifique sua conexão.');
    }
    
    this.setLoading(false);
  }
  
  validateForm() {
    let isValid = true;
    const requiredFields = this.form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
      if (!this.validateField(field)) {
        isValid = false;
      }
    });
    
    return isValid;
  }
  
  validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    let isValid = true;
    let errorMessage = '';
    
    // Required validation
    if (field.hasAttribute('required') && !value) {
      isValid = false;
      errorMessage = 'Este campo é obrigatório.';
    }
    
    // Email validation
    if (fieldName === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = 'Digite um e-mail válido.';
      }
    }
    
    // Phone validation
    if (fieldName === 'phone' && value) {
      const phoneRegex = /^[\d\s\(\)\-\+]+$/;
      if (!phoneRegex.test(value)) {
        isValid = false;
        errorMessage = 'Digite um telefone válido.';
      }
    }
    
    this.showFieldError(field, isValid ? '' : errorMessage);
    return isValid;
  }
  
  showFieldError(field, message) {
    const errorElement = document.getElementById(`${field.name}-error`);
    if (errorElement) {
      errorElement.textContent = message;
      field.classList.toggle('form-input--error', !!message);
    }
  }
  
  clearError(field) {
    this.showFieldError(field, '');
  }
  
  setLoading(loading) {
    this.submitBtn.classList.toggle('btn--loading', loading);
    this.submitBtn.disabled = loading;
  }
  
  showSuccess() {
    // Show success message (could be a toast notification)
    console.log('Mensagem enviada com sucesso!');
  }
  
  showError(message) {
    // Show error message
    console.error(message);
  }
}

// Initialize form validation
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('contact-form')) {
    new ContactForm('contact-form');
  }
});
```

---

## PERFORMANCE OPTIMIZATION

### Image Loading
```javascript
// Lazy loading implementation
class LazyImageLoader {
  constructor() {
    this.images = document.querySelectorAll('img[data-src]');
    this.options = {
      threshold: 0.1,
      rootMargin: '50px 0px'
    };
    
    this.init();
  }
  
  init() {
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.loadImage(entry.target);
            this.observer.unobserve(entry.target);
          }
        });
      }, this.options);
      
      this.images.forEach(img => this.observer.observe(img));
    } else {
      // Fallback for older browsers
      this.images.forEach(img => this.loadImage(img));
    }
  }
  
  loadImage(img) {
    img.src = img.dataset.src;
    img.classList.add('loaded');
    img.removeAttribute('data-src');
  }
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', () => {
  new LazyImageLoader();
});
```

### CSS Optimization
```scss
// Critical CSS (inline in head)
// Only include above-the-fold styles

// Non-critical CSS (load asynchronously)
// Use preload and then swap to stylesheet
```

This technical specification document provides developers with all the necessary details to implement the designs accurately and efficiently while maintaining code quality and performance standards.