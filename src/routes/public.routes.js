const express = require('express');
const router = express.Router();

// Homepage route
router.get('/', (req, res) => {
  res.render('index', {
    title: 'JG Bioestética - Realce sua Beleza Natural',
    currentPage: '/'
  });
});

// About Us route
router.get('/about', (req, res) => {
  res.render('about', {
    title: 'Sobre Nós - JG Bioestética',
    currentPage: '/about'
  });
});

// Services route
router.get('/services', (req, res) => {
  res.render('services', {
    title: 'Serviços - JG Bioestética',
    currentPage: '/services'
  });
});

// Contact route
router.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contato - JG Bioestética',
    currentPage: '/contact'
  });
});

module.exports = router;