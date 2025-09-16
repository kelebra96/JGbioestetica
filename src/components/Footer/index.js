import React from 'react';
import {
  FooterWrapper,
  FooterContainer,
  FooterMainContent,
  FooterColumn,
  FooterColumnTitle,
  FooterLogo,
  FooterTagline,
  FooterLinksList,
  FooterLinkItem,
  FooterLink,
  ContactInfo,
  SocialLinks,
  SocialLink,
  FooterCopyright
} from './styles';

const Footer = ({ currentPage = '/' }) => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper className="main-footer">
      <FooterContainer>
        <FooterMainContent>
          {/* Column 1: Logo and About */}
          <FooterColumn className="footer-about">
            <FooterLogo>
              <a href="/">
                <h3>JG Bioestética</h3>
              </a>
            </FooterLogo>
            <FooterTagline>
              Realçando sua beleza natural com tratamentos seguros e eficazes.
            </FooterTagline>
          </FooterColumn>

          {/* Column 2: Quick Links */}
          <FooterColumn className="footer-links">
            <FooterColumnTitle>Links Rápidos</FooterColumnTitle>
            <FooterLinksList>
              <FooterLinkItem>
                <FooterLink
                  href="/"
                  className={currentPage === '/' ? 'active' : ''}
                >
                  Início
                </FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink
                  href="/about"
                  className={currentPage === '/about' ? 'active' : ''}
                >
                  Sobre
                </FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink
                  href="/services"
                  className={currentPage === '/services' ? 'active' : ''}
                >
                  Serviços
                </FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink
                  href="/contact"
                  className={currentPage === '/contact' ? 'active' : ''}
                >
                  Contato
                </FooterLink>
              </FooterLinkItem>
            </FooterLinksList>
          </FooterColumn>

          {/* Column 3: Contact Info */}
          <FooterColumn className="footer-contact">
            <FooterColumnTitle>Contato</FooterColumnTitle>
            <ContactInfo>
              <p>
                <strong>Endereço:</strong><br />
                Rua das Flores, 123<br />
                Centro, São Paulo - SP<br />
                CEP: 01234-567
              </p>
              <p>
                <strong>Telefone:</strong><br />
                (11) 9 9999-9999
              </p>
              <p>
                <strong>Email:</strong><br />
                contato@jgbioestetica.com.br
              </p>
            </ContactInfo>
          </FooterColumn>

          {/* Column 4: Social Media */}
          <FooterColumn className="footer-social">
            <FooterColumnTitle>Redes Sociais</FooterColumnTitle>
            <SocialLinks>
              <SocialLink
                href="https://instagram.com/jgbioestetica"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="social-icon">📷</span>
                Instagram
              </SocialLink>
              <SocialLink
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="social-icon">💬</span>
                WhatsApp
              </SocialLink>
            </SocialLinks>
          </FooterColumn>
        </FooterMainContent>
      </FooterContainer>

      {/* Copyright Section */}
      <FooterCopyright>
        <FooterContainer>
          <p>&copy; {currentYear} JG Bioestética. Todos os direitos reservados.</p>
        </FooterContainer>
      </FooterCopyright>
    </FooterWrapper>
  );
};

export default Footer;