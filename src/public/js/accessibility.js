/**
 * FUNCIONALIDADES DE ACESSIBILIDADE - JG BIOESTÉTICA
 *
 * Este script gerencia:
 * - Modo de alto contraste
 * - Navegação por teclado
 * - Skip links
 * - Persistência de preferências
 */

(function() {
    'use strict';

    // ===================================
    // CONSTANTES E VARIÁVEIS
    // ===================================
    const STORAGE_KEY = 'jg-bioestetica-accessibility';
    const HIGH_CONTRAST_CLASS = 'high-contrast';

    let preferences = {
        highContrast: false
    };

    // ===================================
    // INICIALIZAÇÃO
    // ===================================
    document.addEventListener('DOMContentLoaded', function() {
        loadPreferences();
        createAccessibilityControls();
        setupSkipLinks();
        enhanceKeyboardNavigation();
        applyPreferences();
        setupEventListeners();
        announcePageLoad();
    });

    // ===================================
    // GERENCIAMENTO DE PREFERÊNCIAS
    // ===================================

    /**
     * Carrega preferências do localStorage
     */
    function loadPreferences() {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                preferences = JSON.parse(stored);
            }
        } catch (error) {
            console.warn('Não foi possível carregar preferências de acessibilidade:', error);
        }
    }

    /**
     * Salva preferências no localStorage
     */
    function savePreferences() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
        } catch (error) {
            console.warn('Não foi possível salvar preferências de acessibilidade:', error);
        }
    }

    /**
     * Aplica preferências carregadas
     */
    function applyPreferences() {
        if (preferences.highContrast) {
            enableHighContrast(false);
        }
    }

    // ===================================
    // CONTROLES DE ACESSIBILIDADE
    // ===================================

    /**
     * Cria os botões de controle de acessibilidade
     */
    function createAccessibilityControls() {
        const controlsContainer = document.createElement('div');
        controlsContainer.className = 'accessibility-controls';
        controlsContainer.setAttribute('role', 'region');
        controlsContainer.setAttribute('aria-label', 'Controles de Acessibilidade');

        // Botão de Alto Contraste
        const contrastButton = document.createElement('button');
        contrastButton.id = 'toggle-high-contrast';
        contrastButton.className = 'accessibility-btn';
        contrastButton.setAttribute('aria-label', 'Alternar modo de alto contraste');
        contrastButton.setAttribute('aria-pressed', preferences.highContrast ? 'true' : 'false');
        contrastButton.innerHTML = `
            <span class="accessibility-icon" aria-hidden="true">◐</span>
            <span>Alto Contraste</span>
        `;

        controlsContainer.appendChild(contrastButton);
        document.body.appendChild(controlsContainer);
    }

    /**
     * Configura os skip links
     */
    function setupSkipLinks() {
        const skipLinksContainer = document.createElement('div');
        skipLinksContainer.className = 'skip-links';
        skipLinksContainer.setAttribute('role', 'navigation');
        skipLinksContainer.setAttribute('aria-label', 'Links de navegação rápida');

        const skipLinks = [
            { href: '#main-content', text: 'Ir para conteúdo principal' },
            { href: '#navigation', text: 'Ir para navegação' },
            { href: '#footer', text: 'Ir para rodapé' }
        ];

        skipLinks.forEach(link => {
            const a = document.createElement('a');
            a.href = link.href;
            a.className = 'skip-link';
            a.textContent = link.text;

            // Ao clicar, foca no elemento de destino
            a.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(link.href);
                if (target) {
                    target.setAttribute('tabindex', '-1');
                    target.focus();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });

            skipLinksContainer.appendChild(a);
        });

        document.body.insertBefore(skipLinksContainer, document.body.firstChild);
    }

    // ===================================
    // MODO DE ALTO CONTRASTE
    // ===================================

    /**
     * Ativa o modo de alto contraste
     * @param {boolean} save - Se deve salvar a preferência
     */
    function enableHighContrast(save = true) {
        document.body.classList.add(HIGH_CONTRAST_CLASS);
        preferences.highContrast = true;

        const button = document.getElementById('toggle-high-contrast');
        if (button) {
            button.setAttribute('aria-pressed', 'true');
        }

        if (save) {
            savePreferences();
            announceToScreenReader('Modo de alto contraste ativado');
        }
    }

    /**
     * Desativa o modo de alto contraste
     * @param {boolean} save - Se deve salvar a preferência
     */
    function disableHighContrast(save = true) {
        document.body.classList.remove(HIGH_CONTRAST_CLASS);
        preferences.highContrast = false;

        const button = document.getElementById('toggle-high-contrast');
        if (button) {
            button.setAttribute('aria-pressed', 'false');
        }

        if (save) {
            savePreferences();
            announceToScreenReader('Modo de alto contraste desativado');
        }
    }

    /**
     * Alterna o modo de alto contraste
     */
    function toggleHighContrast() {
        if (preferences.highContrast) {
            disableHighContrast();
        } else {
            enableHighContrast();
        }
    }

    // ===================================
    // NAVEGAÇÃO POR TECLADO
    // ===================================

    /**
     * Aprimora a navegação por teclado
     */
    function enhanceKeyboardNavigation() {
        // Adiciona indicadores visuais de foco
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });

        document.addEventListener('mousedown', function() {
            document.body.classList.remove('keyboard-navigation');
        });

        // Melhora a navegação em cards
        const cards = document.querySelectorAll('.service-card, .testimonial-card');
        cards.forEach(card => {
            card.setAttribute('tabindex', '0');

            card.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    const link = card.querySelector('a');
                    if (link) {
                        e.preventDefault();
                        link.click();
                    }
                }
            });
        });

        // Adiciona suporte para Escape fechar modais/overlays
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                // Fecha menu mobile se estiver aberto
                const mobileOverlay = document.querySelector('.mobile-nav-overlay.active');
                if (mobileOverlay) {
                    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
                    if (mobileMenuBtn) {
                        mobileMenuBtn.click();
                    }
                }
            }
        });
    }

    // ===================================
    // LANDMARKS E ÁREAS
    // ===================================

    /**
     * Adiciona IDs para landmarks de acessibilidade
     */
    function setupLandmarks() {
        // Marca o conteúdo principal
        const mainContent = document.querySelector('main') ||
                           document.querySelector('.hero-section') ||
                           document.querySelector('section');

        if (mainContent && !mainContent.id) {
            mainContent.id = 'main-content';
            mainContent.setAttribute('role', 'main');
        }

        // Marca a navegação
        const navigation = document.querySelector('nav') ||
                          document.querySelector('.navigation');

        if (navigation && !navigation.id) {
            navigation.id = 'navigation';
            navigation.setAttribute('role', 'navigation');
            navigation.setAttribute('aria-label', 'Navegação principal');
        }

        // Marca o footer
        const footer = document.querySelector('footer');
        if (footer && !footer.id) {
            footer.id = 'footer';
            footer.setAttribute('role', 'contentinfo');
        }
    }

    // ===================================
    // ANÚNCIOS PARA LEITORES DE TELA
    // ===================================

    /**
     * Cria uma região de anúncios ao vivo para leitores de tela
     */
    function createScreenReaderAnnouncer() {
        const announcer = document.createElement('div');
        announcer.id = 'screen-reader-announcer';
        announcer.className = 'sr-only';
        announcer.setAttribute('role', 'status');
        announcer.setAttribute('aria-live', 'polite');
        announcer.setAttribute('aria-atomic', 'true');
        announcer.style.cssText = `
            position: absolute;
            left: -10000px;
            width: 1px;
            height: 1px;
            overflow: hidden;
        `;
        document.body.appendChild(announcer);
        return announcer;
    }

    /**
     * Anuncia uma mensagem para leitores de tela
     * @param {string} message - Mensagem a ser anunciada
     */
    function announceToScreenReader(message) {
        let announcer = document.getElementById('screen-reader-announcer');
        if (!announcer) {
            announcer = createScreenReaderAnnouncer();
        }

        // Limpa e define nova mensagem
        announcer.textContent = '';
        setTimeout(() => {
            announcer.textContent = message;
        }, 100);
    }

    /**
     * Anuncia o carregamento da página
     */
    function announcePageLoad() {
        setupLandmarks();

        const pageTitle = document.title || 'Página carregada';
        setTimeout(() => {
            announceToScreenReader(`${pageTitle}. Use Tab para navegar ou os atalhos de navegação rápida.`);
        }, 1000);
    }

    // ===================================
    // EVENT LISTENERS
    // ===================================

    /**
     * Configura todos os event listeners
     */
    function setupEventListeners() {
        // Botão de alto contraste
        const contrastButton = document.getElementById('toggle-high-contrast');
        if (contrastButton) {
            contrastButton.addEventListener('click', toggleHighContrast);

            // Suporte para teclado
            contrastButton.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleHighContrast();
                }
            });
        }

        // Detecta preferência do sistema para alto contraste
        if (window.matchMedia) {
            const contrastMediaQuery = window.matchMedia('(prefers-contrast: high)');

            // Aplica preferência inicial do sistema se usuário não tiver preferência salva
            if (contrastMediaQuery.matches && !localStorage.getItem(STORAGE_KEY)) {
                enableHighContrast(false);
            }

            // Escuta mudanças na preferência do sistema
            contrastMediaQuery.addEventListener('change', function(e) {
                if (e.matches && !preferences.highContrast) {
                    enableHighContrast(false);
                }
            });
        }
    }

    // ===================================
    // UTILITÁRIOS
    // ===================================

    /**
     * Adiciona atributos de acessibilidade dinamicamente
     */
    function enhanceAccessibilityAttributes() {
        // Garante que todas as imagens tenham alt text
        const images = document.querySelectorAll('img:not([alt])');
        images.forEach(img => {
            img.setAttribute('alt', 'Imagem decorativa');
            console.warn('Imagem sem alt text encontrada:', img.src);
        });

        // Adiciona role e aria-label para botões sem texto
        const buttons = document.querySelectorAll('button:not([aria-label])');
        buttons.forEach(button => {
            if (!button.textContent.trim()) {
                button.setAttribute('aria-label', 'Botão');
                console.warn('Botão sem label encontrado:', button);
            }
        });
    }

    // Executa melhorias adicionais após o DOM estar completamente carregado
    window.addEventListener('load', function() {
        enhanceAccessibilityAttributes();
    });

    // ===================================
    // EXPORTA FUNÇÕES PÚBLICAS
    // ===================================

    window.JGAccessibility = {
        toggleHighContrast: toggleHighContrast,
        enableHighContrast: enableHighContrast,
        disableHighContrast: disableHighContrast,
        announceToScreenReader: announceToScreenReader,
        getPreferences: function() { return { ...preferences }; }
    };

})();
