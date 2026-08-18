# Bakugan: Battle Planet Wiki & Database

> Uma plataforma web completa e interativa dedicada a centralizar, catalogar e consultar informações sobre **Bakugan: Battle Planet** — o popular jogo de cartas colecionáveis estratégico.

![Bakugan](https://img.shields.io/badge/Bakugan-Battle%20Planet-red?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Ativo-brightgreen?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34C26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Instalação e Uso](#-instalação-e-uso)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Tecnologias](#-tecnologias-utilizadas)
- [Como Contribuir](#-como-contribuir)

---

## Sobre o Projeto

Este projeto é uma **wiki dinâmica e interativa** desenvolvida para jogadores e fãs de **Bakugan: Battle Planet**. Ele serve como um repositório centralizado de informações sobre:

- **Bakugans** — Os personagens/criaturas do jogo, organizados por facções
- **Cartas** — Tipos de cartas, habilidades, efeitos e mecânicas
- **BakuCores** — Os núcleos especiais e seus efeitos
- **Facções** — As sete facções principais (Pyrus, Aquos, Ventus, Haos, Darkus, Aurelus)
- **Regras e Gameplay** — Guias completos sobre como jogar

O projeto oferece uma interface intuitiva e responsiva para consultar dados, comparar atributos e planejar estratégias de jogo.

---

## Funcionalidades

### Implementadas

- **Página Principal (Wiki)** — Introdução ao jogo com regras básicas e modo de jogo
- **Seção de Facções** — Visualização detalhada de todas as facções com identidade visual própria
- **Catálogo de Cartas** — Listagem de tipos de cartas, habilidades e efeitos
- **Seção de BakuCores** — Informações sobre os núcleos especiais
- **Design Responsivo** — Otimizado para desktop e dispositivos móveis
- **Navegação Intuitiva** — Menus bem estruturados e navegação suave

### Em Desenvolvimento

- **Filtros Avançados** — Busca dinâmica por facção, atributos e tipo de carta
- **Comparador de Cartas** — Ferramenta para comparar estatísticas entre Bakugans
- **Deck Builder** — Interface para montar e salvar decks personalizados
- **Calculadora de Batalla** — Simulador de combate entre personagens
- **Galeria de Imagens** — Banco de imagens dos Bakugans e cartas

---

## Instalação e Uso

### Pré-requisitos

- Um navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexão com a internet (para recursos externos, se houver)

### Instruções

1. **Clone ou baixe o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/SiteBakugan.git
   cd SiteBakugan
   ```

2. **Abra o arquivo principal:**
   - Duplo clique em `index.html` **OU**
   - Arraste `index.html` para seu navegador **OU**
   - Use um servidor local (recomendado):
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js (com http-server instalado)
     npx http-server
     ```

3. **Acesse a aplicação:**
   - Se usar um servidor local, abra `http://localhost:8000` no navegador
   - Navegue pelos menus para explorar Facções, Cartas e BakuCores

---

## Estrutura do Projeto

```
SiteBakugan/
├── index.html              # Página principal (Wiki)
├── faccoes.html            # Página das facções
├── cartas.html             # Página de tipos de cartas
├── bakucores.html          # Página de BakuCores
├── style.css               # Estilos globais (CSS)
├── README.md               # Este arquivo
├── data/
│   └── data.json           # Dados e configurações em JSON
├── Img/                    # Pasta com imagens e recursos
│   ├── logo.png            # Logo do site
│   ├── 5293470.jpg         # Imagem de fundo
│   ├── Bakucores/          # Imagens dos BakuCores
│   └── [ícones de facções] # Ícones das sete facções
└── .git/                   # Histórico de versões (Git)
```

### Descrição dos Arquivos Principais

| Arquivo | Descrição |
|---------|-----------|
| `index.html` | Hub central com informações sobre as regras, como jogar e modo multijogador |
| `faccoes.html` | Apresenta as sete facções com suas características e identidades visuais |
| `cartas.html` | Detalha os tipos de cartas, habilidades e efeitos do jogo |
| `bakucores.html` | Informações sobre os BakuCores e seus efeitos especiais |
| `style.css` | Folha de estilos centralizada com tema temático do Bakugan |
| `data/data.json` | Arquivo de dados estruturado (para futuras integrações dinâmicas) |

---

## Tecnologias Utilizadas

| Tecnologia | Descrição |
|-----------|-----------|
| **HTML5** | Estruturação semântica e acessibilidade |
| **CSS3** | Estilização, Flexbox, Grid e animações |
| **JavaScript (ES6+)** | Manipulação do DOM, filtragem dinâmica e interatividade |
| **JSON** | Armazenamento e estruturação de dados |

### Recursos CSS Utilizados

- **Flexbox e Grid** — Layouts responsivos e bem distribuídos
- **Gradientes e Sombras** — Efeitos visuais temáticos
- **Transições e Animações** — Interatividade suave
- **Media Queries** — Design responsivo mobile-first

---

## Paleta de Cores (Facções)

O projeto utiliza cores únicas para cada facção, refletindo a identidade visual original:

- **Pyrus** — Vermelho (#FF6B6B)
- **Aquos** — Azul (#4ECDC4)
- **Ventus** — Verde (#95E1D3)
- **Haos** — Amarelo (#FFE66D)
- **Darkus** — Roxo/Preto (#9B59B6)
- **Aurelus** — Dourado (#F1C40F)

---

## Como Contribuir

Contribuições são bem-vindas! Se deseja melhorar este projeto, siga estas etapas:

1. **Faça um Fork** do repositório
2. **Crie uma Branch** para sua funcionalidade:
   ```bash
   git checkout -b feature/minha-funcionalidade
   ```
3. **Commite suas mudanças:**
   ```bash
   git commit -m "Adiciona minha funcionalidade"
   ```
4. **Faça um Push** para a Branch:
   ```bash
   git push origin feature/minha-funcionalidade
   ```
5. **Abra um Pull Request** descrevendo suas mudanças

### Diretrizes de Contribuição

- Mantenha o código limpo e bem comentado
- Teste as mudanças em múltiplos navegadores
- Respeite a estrutura existente e padrões de código
- Atualize a documentação se necessário

---

## Reportar Problemas

Encontrou um bug ou tem uma sugestão? Abra uma **Issue** descrevendo:

- O problema/sugestão
- Passos para reproduzir (se aplicável)
- Comportamento esperado vs. atual
- Navegador e SO utilizado

---

## Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## Autor

Desenvolvido para a comunidade de fãs de **Bakugan: Battle Planet**.

### Créditos

- **Conceito e Design:** Baseado no universo de Bakugan Battle Planet
- **Imagens e Recursos:** Referências do jogo oficial

---

## Contato e Redes

- **GitHub:** [seu-repositorio]
- **Discussões:** Abra uma issue para dúvidas
- **Comunidade:** Junte-se a outros fãs!

---

## Recursos Adicionais

- [Oficial Bakugan](https://www.bakugan.com/)
- [Documentação HTML5](https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/HTML5)
- [Guia CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [Referência JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

---

**Última atualização:** 2026  
**Status do Projeto:** Ativo e em desenvolvimento

---
