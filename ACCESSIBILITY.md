# 🌟 Funcionalidades de Acessibilidade - JG Bioestética

Este documento descreve todas as funcionalidades de acessibilidade implementadas no site da JG Bioestética, tornando-o mais inclusivo e acessível para todos os usuários.

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Modo de Alto Contraste](#modo-de-alto-contraste)
3. [Navegação por Teclado](#navegação-por-teclado)
4. [Textos Alternativos e ARIA Labels](#textos-alternativos-e-aria-labels)
5. [Estrutura Semântica](#estrutura-semântica)
6. [Como Usar](#como-usar)
7. [Conformidade com WCAG](#conformidade-com-wcag)
8. [Testes Recomendados](#testes-recomendados)

---

## 🎯 Visão Geral

O site da JG Bioestética foi aprimorado com recursos de acessibilidade seguindo as melhores práticas das **WCAG 2.1 (Web Content Accessibility Guidelines)**. As melhorias incluem:

- ✅ Modo de alto contraste para usuários com baixa visão
- ✅ Navegação completa por teclado
- ✅ Skip links para navegação rápida
- ✅ Textos alternativos descritivos em todas as imagens
- ✅ ARIA labels e roles apropriados
- ✅ Estrutura HTML semântica
- ✅ Persistência de preferências do usuário
- ✅ Suporte a leitores de tela
- ✅ Indicadores visuais de foco aprimorados

---

## 🎨 Modo de Alto Contraste

### O que é?

O modo de alto contraste aumenta significativamente o contraste entre texto e fundo, facilitando a leitura para pessoas com:
- Baixa visão
- Daltonismo
- Sensibilidade à luz
- Fadiga visual

### Características

- **Cores:** Fundo preto (#000000) com texto branco (#FFFFFF) e acentos em amarelo (#FFFF00)
- **Ativação:** Botão fixo no canto superior direito da tela (mobile: canto inferior direito)
- **Persistência:** A preferência é salva no localStorage do navegador
- **Detecção automática:** Respeita a preferência do sistema operacional

### Como funciona

1. Clique no botão "◐ Alto Contraste" no canto da tela
2. O site imediatamente muda para o esquema de alto contraste
3. A preferência é salva e será aplicada nas próximas visitas
4. Clique novamente para desativar

### Atalhos de Teclado

- Use **Tab** para navegar até o botão
- Pressione **Enter** ou **Espaço** para ativar/desativar

---

## ⌨️ Navegação por Teclado

### Skip Links

**Skip links** permitem que usuários de teclado e leitores de tela pulem diretamente para áreas importantes:

1. **Ir para conteúdo principal** - Pula o menu e vai direto ao conteúdo
2. **Ir para navegação** - Leva ao menu principal
3. **Ir para rodapé** - Pula para informações de contato

**Como usar:**
- Pressione **Tab** ao carregar a página
- Os skip links aparecerão no topo
- Pressione **Enter** para usar

### Navegação Completa

Todo o site pode ser navegado usando apenas o teclado:

- **Tab** - Avança para o próximo elemento interativo
- **Shift + Tab** - Volta para o elemento anterior
- **Enter** - Ativa links e botões
- **Espaço** - Ativa botões e checkboxes
- **Escape** - Fecha menus e overlays abertos
- **Setas** - Navega em menus dropdown e listas

### Indicadores Visuais de Foco

Todos os elementos interativos possuem indicadores de foco claros:
- Contorno dourado (#E2B850) de 3px
- Sombra suave para melhor visibilidade
- Offset de 2-3px para separação visual

---

## 🏷️ Textos Alternativos e ARIA Labels

### Imagens

Todas as imagens possuem textos alternativos descritivos:

```html
<!-- Exemplo -->
<img src="clinica.jpg" alt="Interior moderno e acolhedor da clínica JG Bioestética com equipamentos profissionais">
```

### ARIA Labels

Labels apropriados foram adicionados a elementos interativos:

- **Botões:** `aria-label` descritivo
- **Links:** Contexto adicional quando necessário
- **Formulários:** `aria-required`, `aria-labelledby`
- **Seções:** `aria-labelledby` conectando títulos
- **Navegação:** `role="navigation"` com `aria-label`

### Ícones Decorativos

Ícones puramente decorativos são ocultados de leitores de tela:

```html
<span class="icon" aria-hidden="true">💆‍♀️</span>
```

---

## 🏗️ Estrutura Semântica

### Landmarks HTML5

O site utiliza elementos HTML5 semânticos apropriados:

- `<header role="banner">` - Cabeçalho do site
- `<nav role="navigation">` - Menus de navegação
- `<main>` - Conteúdo principal
- `<section>` - Seções de conteúdo
- `<article>` - Conteúdo independente (cards, posts)
- `<footer role="contentinfo">` - Rodapé com informações
- `<address>` - Informações de contato

### Hierarquia de Títulos

A hierarquia de títulos (h1-h6) é mantida logicamente:

```
h1 - Título principal da página (um por página)
  h2 - Títulos de seções principais
    h3 - Subtítulos dentro de seções
      h4 - Títulos de cards e componentes
```

### Roles ARIA

Roles ARIA complementam a semântica HTML:

- `role="banner"` - Cabeçalho principal
- `role="navigation"` - Áreas de navegação
- `role="main"` - Conteúdo principal
- `role="contentinfo"` - Rodapé
- `role="region"` - Seções importantes
- `role="list"` e `role="listitem"` - Listas customizadas

---

## 📱 Como Usar

### Para Usuários com Deficiência Visual

1. **Alto Contraste:** Ative o botão de alto contraste no canto da tela
2. **Zoom:** Use Ctrl/Cmd + "+" para aumentar o texto
3. **Leitor de Tela:**
   - NVDA (Windows): Gratuito
   - JAWS (Windows): Pago
   - VoiceOver (Mac/iOS): Integrado
   - TalkBack (Android): Integrado

### Para Usuários de Teclado

1. Use **Tab** para navegar
2. Use **Enter** ou **Espaço** para ativar elementos
3. Use **Escape** para fechar menus
4. Use os **Skip Links** no início da página

### Para Desenvolvedores

#### Arquivos Principais

```
src/
  public/
    css/
      accessibility.css      # Estilos de acessibilidade
    js/
      accessibility.js       # Funcionalidades JavaScript
  views/
    *.ejs                   # Views com ARIA labels
```

#### Inicialização

Os scripts de acessibilidade são carregados automaticamente:

```html
<link rel="stylesheet" href="/css/accessibility.css">
<script src="/js/accessibility.js"></script>
```

#### API JavaScript

```javascript
// Acessar funcionalidades via JavaScript
window.JGAccessibility.toggleHighContrast();
window.JGAccessibility.enableHighContrast();
window.JGAccessibility.disableHighContrast();
window.JGAccessibility.announceToScreenReader("Mensagem");
```

---

## ✅ Conformidade com WCAG

O site visa conformidade com **WCAG 2.1 Nível AA**, incluindo:

### Princípio 1: Perceptível

- ✅ 1.1.1 Conteúdo Não-textual (Nível A) - Textos alternativos
- ✅ 1.3.1 Informação e Relações (Nível A) - HTML semântico
- ✅ 1.3.2 Sequência Significativa (Nível A) - Ordem lógica
- ✅ 1.4.1 Uso de Cores (Nível A) - Não depende apenas de cores
- ✅ 1.4.3 Contraste Mínimo (Nível AA) - Modo de alto contraste
- ✅ 1.4.11 Contraste Não-textual (Nível AA) - Contraste de UI

### Princípio 2: Operável

- ✅ 2.1.1 Teclado (Nível A) - Navegação completa por teclado
- ✅ 2.1.2 Sem Armadilha de Teclado (Nível A) - Escape sempre disponível
- ✅ 2.4.1 Bypass Blocks (Nível A) - Skip links
- ✅ 2.4.2 Página com Título (Nível A) - Títulos descritivos
- ✅ 2.4.3 Ordem de Foco (Nível A) - Ordem lógica
- ✅ 2.4.6 Cabeçalhos e Rótulos (Nível AA) - Descritivos e claros
- ✅ 2.4.7 Foco Visível (Nível AA) - Indicadores claros

### Princípio 3: Compreensível

- ✅ 3.1.1 Idioma da Página (Nível A) - lang="pt-BR"
- ✅ 3.2.1 Em Foco (Nível A) - Sem mudanças inesperadas
- ✅ 3.2.2 Em Entrada (Nível A) - Sem mudanças inesperadas
- ✅ 3.3.1 Identificação de Erros (Nível A) - Validação de formulários
- ✅ 3.3.2 Rótulos ou Instruções (Nível A) - Labels claros

### Princípio 4: Robusto

- ✅ 4.1.1 Análise (Nível A) - HTML válido
- ✅ 4.1.2 Nome, Função, Valor (Nível A) - ARIA apropriado
- ✅ 4.1.3 Mensagens de Status (Nível AA) - Live regions

---

## 🧪 Testes Recomendados

### Ferramentas Automatizadas

1. **axe DevTools** - Extensão de navegador
2. **WAVE** - Web Accessibility Evaluation Tool
3. **Lighthouse** - No Chrome DevTools
4. **Pa11y** - Teste via linha de comando

### Testes Manuais

1. **Navegação por Teclado**
   - Desconecte o mouse
   - Navegue por todas as páginas usando apenas Tab/Shift+Tab
   - Verifique se todos os elementos interativos são alcançáveis

2. **Leitores de Tela**
   - Teste com NVDA (Windows) ou VoiceOver (Mac)
   - Verifique se todo o conteúdo é anunciado corretamente
   - Confirme que skip links funcionam

3. **Alto Contraste**
   - Ative o modo de alto contraste
   - Verifique se todo o conteúdo permanece legível
   - Teste em diferentes páginas

4. **Zoom**
   - Aumente o zoom para 200%
   - Verifique se não há perda de funcionalidade
   - Confirme que o layout se adapta

### Checklist de Acessibilidade

- [ ] Todas as imagens têm alt text apropriado
- [ ] Formulários têm labels associados
- [ ] Navegação funciona completamente por teclado
- [ ] Foco é sempre visível
- [ ] Contraste de cores adequado (4.5:1 para texto)
- [ ] Títulos seguem hierarquia lógica (h1-h6)
- [ ] Skip links funcionam corretamente
- [ ] Leitor de tela anuncia todo o conteúdo
- [ ] Alto contraste muda todas as cores
- [ ] Preferências são persistidas
- [ ] Nenhuma armadilha de teclado
- [ ] Links têm contexto claro

---

## 🔄 Melhorias Futuras

Possíveis melhorias para acessibilidade:

- [ ] Modo noturno/escuro adicional
- [ ] Ajuste de tamanho de fonte
- [ ] Ajuste de espaçamento de linhas
- [ ] Animações reduzidas (prefers-reduced-motion)
- [ ] Modo de leitura simplificado
- [ ] Tradução em Libras (Língua Brasileira de Sinais)
- [ ] Audio-descrição para vídeos
- [ ] Legendas em vídeos
- [ ] Teclado virtual acessível
- [ ] Navegação por voz

---

## 📞 Feedback

Se você encontrar problemas de acessibilidade ou tiver sugestões, entre em contato:

- **Email:** contato@jgbioestetica.com.br
- **Telefone:** (11) 9 9999-9999
- **GitHub Issues:** [Reportar problema](https://github.com/seu-repositorio/issues)

---

## 📚 Recursos e Referências

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Web Accessibility](https://developer.mozilla.org/pt-BR/docs/Web/Accessibility)
- [WebAIM](https://webaim.org/)
- [a11y Project](https://www.a11yproject.com/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

---

**Última atualização:** Novembro 2025
**Versão:** 1.0.0
**Mantido por:** Equipe JG Bioestética
