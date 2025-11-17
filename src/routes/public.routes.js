const express = require('express');
const router = express.Router();

// Homepage route
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Gratieri Clínica Bioestética - Taquatiringa - SP',
    currentPage: '/'
  });
});

// About Us route
router.get('/about', (req, res) => {
  res.render('about', {
    title: 'Sobre Nós - Gratieri Clínica Bioestética',
    currentPage: '/about'
  });
});

// Services route
router.get('/services', (req, res) => {
  res.render('services', {
    title: 'Serviços - Gratieri Clínica Bioestética',
    currentPage: '/services'
  });
});

// Contact route
router.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contato - Gratieri Clínica Bioestética',
    currentPage: '/contact'
  });
});

module.exports = router;