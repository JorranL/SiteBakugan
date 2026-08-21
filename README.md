# Bakugan: Battle Planet — Wiki & Tactical Database

> Uma aplicação web interativa desenvolvida em **React**, **Vite** e **SQLite** para catalogar regras, mecânicas de combate, facções, BakuCores e uma base de dados completa de cartas do TCG **Bakugan: Battle Planet**.

![Bakugan](https://img.shields.io/badge/Bakugan-Battle%20Planet-red?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-Build-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![Status](https://img.shields.io/badge/Status-Ativo-brightgreen?style=for-the-badge)

---

## 📖 Visão Geral do Projeto

O projeto é uma **Single Page Application (SPA)** de alta performance, construída para servir como base de conhecimento tática, visual e acessível para a comunidade de jogadores e fãs do card game.

A plataforma organiza todo o ecossistema do jogo em módulos visuais temáticos:
* **Catálogo Geral de Cartas:** Base de dados completa com filtros dinâmicos por facção, categoria (Bakugan / Baralho), tipos (*Ação, Herói, Flip, Evo*), busca textual por nome e ordenação multivariável (alfabética, custo de energia, B-Power e dano).
* **Modal / Lightbox de Cartas:** Visualizador em alta resolução acionado por clique, adaptado com detecção de proporção para cartas horizontais (*Flips*) e verticais (*Ações, Heróis, Bakugans*).
* **Facções Elementais:** Detalhamento tático dos 6 atributos com exibição ampliada de cartas de exemplo, estratégias principais, forças, fraquezas e parceiros notáveis.
* **BakuCores:** Catálogo dos 5 tipos de núcleos hexagonais (*Helix, Fist, Fire Fist, Shield e Magic Shield*) e seus respectivos bônus de B-Power e dano.
* **Mecânicas de Cartas:** Guia completo cobrindo tipos de cartas, regras de habilidades (*Desencadeadas, Ativadas e Estáticas*) e efeitos de combate (*Fury, Shadowstrike, Team Attack, Victor, etc.*).
* **Guia de Jogo (Wiki):** Regras fundamentais, condições de vitória e dinâmicas de combate.

---

## ⚡ Funcionalidades e Destaques da Interface

* **Arquitetura Híbrida (SQLite + JSON Estático):** Armazenamento estruturado via SQLite para gerenciamento de dados e compilação automática para JSON estático otimizado para deploy no GitHub Pages.
* **Pipeline de Imagens WebP & Lazy Loading:** Redução drástica do consumo de banda e tempo de carregamento utilizando compressão WebP em lote com `sharp` e carregamento sob demanda (`loading="lazy"`).
* **Renderização Eficiente com Paginação:** Grid responsivo com renderização em fatias (*Carregar mais cartas*), evitando sobrecarga de memória no navegador ao manipular centenas de cartas.
* **Navegação Lateral Deslizante (Drawer Menu):** Menu offcanvas acessado por botão hambúrguer, mantendo o topo limpo e a navegação acessível em qualquer ponto da rolagem.
* **Header Fixo (Sticky Header):** Barra superior compacta com efeito de vidro fosco (*glassmorphism*) e atalhos rápidos para o Catálogo e Guias.
* **Grid Temático com Cores Oficiais:** Destaque de bordas, badges e sombras coloridas dinamicamente baseadas no elemento/facção de cada carta.

---

## 🛠️ Tecnologias Utilizadas

* **Frontend:**
  * **React 18:** Componentização declarativa, React Hooks (`useState`, `useEffect`, `useMemo`) e renderização condicional.
  * **React Router Dom (v6):** Gerenciamento de rotas e navegação SPA.
  * **CSS3:** Estruturação via Flexbox e CSS Grid, efeitos de iluminação, *backdrop-filter* e transições suaves.
* **Dados & Otimização:**
  * **Node.js & Express:** Ambiente para scripts de automação e API REST local.
  * **Better-SQLite3:** Banco de dados relacional leve para estruturação das cartas e exportação de dados.
  * **Sharp:** Processamento e conversão de imagens em lote para o formato `.webp`.
* **Build & Hospedagem:**
  * **Vite:** Bundler de alto desempenho para compilação.
  * **GitHub Pages & gh-pages:** Hospedagem e automação de deploy contínuo.

---

## 🛡️ Identidade Visual das Facções

| Facção | Elemento | Cor Tema | Hex |
|---|---|---|---|
| **Pyrus** | Fogo | Vermelho | `#E41A1A` |
| **Ventus** | Vento | Verde | `#126E3C` |
| **Haos** | Luz | Turquesa | `#3D9797` |
| **Aquos** | Água | Azul | `#3E7396` |
| **Darkus** | Trevas | Roxo / Púrpura | `#9B59B6` |
| **Aurelus** | Luz Antiga | Dourado | `#D4AF37` |

---

## 👤 Autor & Desenvolvimento

Projeto concebido e desenvolvido por **[jorranl](https://github.com/jorranl)** como uma plataforma tática, visual e de consulta para a comunidade de jogadores e fãs de **Bakugan: Battle Planet**.

* **GitHub:** [@jorranl](https://github.com/jorranl)
* **Aplicação Online:** [Wiki Bakugan (GitHub Pages)](https://jorranl.github.io/SiteBakugan/)

---

## 📄 Informações Legais

Este projeto possui caráter educacional, documental e sem fins lucrativos. Todos os direitos de propriedade intelectual, ilustrações, personagens, artes de cartas e marcas registradas pertencem à **Spin Master Ltd.** e aos respectivos detentores de direitos autorais.
