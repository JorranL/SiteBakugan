Bakugan: Battle Planet Wiki & DatabasePlataforma web interativa desenvolvida em React e Vite dedicada a centralizar, catalogar e consultar regras, facções, mecânicas de cartas e BakuCores do TCG Bakugan: Battle Planet.📑 ÍndiceSobre o ProjetoFuncionalidadesInterface & DesignInstalação e ExecuçãoEstrutura do ProjetoTecnologias UtilizadasPaleta de Cores (Facções)AutorLicença📖 Sobre o ProjetoEste projeto é uma Single Page Application (SPA) desenvolvida para jogadores e fãs de Bakugan: Battle Planet. A aplicação funciona como um repositório centralizado e interativo contendo:Facções — Análise aprofundada dos 6 elementos com cartas de exemplo em alta definição, estratégias, forças e fraquezas.BakuCores — Consulta interativa dos 5 tipos de núcleos e seus bônus de batalha.Cartas & Efeitos — Guia estruturado de tipos de cartas, mecânicas de disparo, habilidades estáticas e palavras-chave (como Fury, Shadowstrike e Team Attack).Regras & Gameplay — Guias completos sobre como jogar e funcionamento das disputas de batalha.⚡ Funcionalidades✨ ImplementadasSingle Page Application (SPA): Transição instantânea de páginas via gerenciamento de estado global com React Context.Menu Lateral (Drawer/Offcanvas): Menu deslizante com efeito translúcido (glassmorphism) e navegação rápida.Hubs de Seleção Interativos: Telas iniciais com botões/cards em destaque para BakuCores, Facções e Categorias de Cartas.Grid de Facções 2x3: Apresentação visual limpa com cards temáticos por cor elemental e tabela comparativa de estilos.Visualizador Detalhado de Cartas: Exibição ampliada e legível das cartas de exemplo acompanhadas do painel tático da facção.Design Responsivo & Efeitos Visuais: Suporte para resoluções variadas, backdrop filters e paleta de alto contraste em modo escuro.⏳ Em DesenvolvimentoFiltros Avançados & Busca: Busca dinâmica por facção, custo de energia e atributos.Deck Builder: Ferramenta para montagem, contagem e exportação de baralhos customizados.Calculadora de Batalha: Simulador de combate entre Bakugans com aplicação de BakuCores e cartas de ação.🎨 Interface & DesignA interface foi projetada com foco em scannability, contraste e estética moderna inspirada no universo Bakugan:Header Compacto & Fixo (Sticky): Barra superior discreta que acompanha a rolagem sem cobrir as sub-barras de navegação interna.Glassmorphism: Efeito de vidro fosco (backdrop-filter: blur()) com camadas em tons escuros transparentes.Cards Interativos: Efeitos de elevação (hover) e bordas coloridas sincronizadas com o elemento correspondente.🚀 Instalação e ExecuçãoPré-requisitosNode.js (versão 18 ou superior recomendada)Gerenciador de pacotes npm, yarn ou pnpmPasso a PassoClone o repositório:Bashgit clone https://github.com/seu-usuario/SiteBakugan.git
cd SiteBakugan
Instale as dependências:Bashnpm install
Inicie o servidor de desenvolvimento:Bashnpm run dev
Acesse a aplicação:Abra o endereço exibido no terminal (geralmente http://localhost:5173) no navegador.Para gerar a build de produção:Bashnpm run build
📂 Estrutura do ProjetoSiteBakugan/
├── public/
│   └── Img/                    # Imagens, ícones de facções, cartas e logos
├── src/
│   ├── components/             # Componentes reutilizáveis
│   │   ├── sections/           # Seções informativas da Home/Wiki
│   │   │   ├── BakuganSection.jsx
│   │   │   ├── ComoJogarSection.jsx
│   │   │   ├── MultijogadorSection.jsx
│   │   │   └── RegrasSection.jsx
│   │   ├── BakuCoreSection.jsx # Exibição individual de BakuCores
│   │   ├── CardSection.jsx     # Renderizador de blocos de cartas/regras
│   │   ├── FactionCard.jsx     # Card detalhado com imagem e gameplay
│   │   ├── FactionTable.jsx    # Tabela comparativa de atributos
│   │   ├── Header.jsx          # Header fixo com Drawer deslizante
│   │   └── Footer.jsx          # Rodapé da aplicação
│   ├── context/
│   │   └── PageContext.jsx     # Contexto global para troca de páginas
│   ├── data/
│   │   └── bakucores.js        # Estrutura de dados dos BakuCores
│   ├── pages/                  # Páginas principais da SPA
│   │   ├── Home.jsx            # Wiki e regras
│   │   ├── Faccoes.jsx         # Guia e grid de facções
│   │   ├── Cartas.jsx          # Tipos, habilidades e efeitos
│   │   └── BakuCores.jsx       # Catálogo de núcleos
│   ├── App.jsx                 # Componente raiz
│   ├── main.jsx                # Ponto de entrada React
│   └── index.css               # Estilos globais e tema base
├── index.html                  # Arquivo HTML base (Vite root)
├── package.json                # Dependências e scripts do Node
└── vite.config.js              # Configuração do Vite
🛠️ Tecnologias UtilizadasTecnologiaDescriçãoReact 18Biblioteca para construção de interfaces modulares baseadas em componentesViteFerramenta de build rápida e servidor de desenvolvimento otimizadoJavaScript (ES6+)Lógica de estado, manipulação de coleções e renderização condicionalCSS3 ModernoFlexbox, CSS Grid, Transições, Efeitos de Vidro e Design Responsivo🛡️ Paleta de Cores (Facções)FacçãoElementoCor PrimáriaHex CodePyrusFogoVermelho#E41A1AVentusVentoVerde#126E3CHaosLuzTurquesa / Ciano#3D9797AquosÁguaAzul#3E7396DarkusTrevasRoxo / Púrpura#9B59B6AurelusLuz Antiga (Especial)Dourado#D4AF37👤 AutorDesenvolvido para fins de estudo e como projeto pessoal de consulta para a comunidade de fãs de Bakugan: Battle Planet.📄 LicençaEste projeto é desenvolvido para fins educacionais e sem fins lucrativos. Todos os direitos de propriedade intelectual, nomes, imagens e marcas de Bakugan: Battle Planet pertencem à Spin Master e seus respectivos detentores de direitos autorais.
