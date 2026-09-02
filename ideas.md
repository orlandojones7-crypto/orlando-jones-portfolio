# Orlando Jones — Ground-truth visual specification

Este projeto é uma reprodução da homepage definida no screenshot `Home_desktop.png`, que representa o design do Figma fornecido pelo utilizador. Não se aplica a seleção de três abordagens: a referência visual fornecida é a fonte de verdade e deve prevalecer sobre convenções genéricas de UI.

## Design de referência

O movimento visual é **editorial Swiss grid / brutalismo tipográfico suave**, combinando composição de portfólio editorial, linhas de construção visíveis e tipografia de apresentação com fotografia em preto e branco. O resultado deve parecer intencional, silencioso e técnico, nunca decorativo ou genérico.

### Princípios centrais

1. O grid vertical e horizontal é uma estrutura contínua de identidade e deve atravessar todas as secções.
2. A composição é assimétrica: títulos e textos ocupam colunas à esquerda, enquanto imagens e tabelas se estendem para a direita.
3. A hierarquia tipográfica é o principal recurso expressivo: outline versus preenchimento, caixa alta, escalas grandes e alinhamentos rigorosos.
4. Os espaços vazios são ativos; não devem ser preenchidos por conteúdo ou elementos inventados.

### Filosofia de cor

A página clara utiliza branco, quase branco e cinza suave para colocar a atenção na tipografia e no grid. O preto é reservado a ações, wordmarks e ao Footer; o navy é um apoio de texto quando necessário. A imagem trabalha em monocromático por defeito, revelando cor apenas como estado de interação.

| Token | Valor | Uso |
|---|---|---|
| Texto primário | #000000 | Títulos, CTAs, wordmark |
| Texto navy | #16233F | Texto escuro alternativo |
| Texto muted | #888888 | Metadados e estados inativos |
| Ícone escuro | rgba(0,0,0,0.32) | Indicadores e símbolos |
| Fundo Hero | #FAFAF8 | Área inicial |
| Fundo branco | #FFFFFF | Secções de conteúdo |
| Border/divider | #D9D9D9 | Grid e separadores |
| Footer | #000000 | Área final |

### Layout e camadas

O Header é uma faixa branca estreita. A Hero ocupa o primeiro viewport abaixo do Header, com título outline/solid à esquerda, portrait central preparado para asset real e copy/CTA à direita. A Hero fica numa camada inferior durante o scroll; as secções seguintes deslizam sobre ela. Após ultrapassar a Hero, ela não reaparece até o utilizador regressar ao topo.

Projetos usa lista à esquerda e preview à direita, com sincronização por hover, focus e scroll. Experience e Qualificações usam tabelas alinhadas ao grid. Perícias usa fotografia quadrada à esquerda e seis grupos de competências à direita. A Coletânea usa mosaico assimétrico e wordmark central. O Footer é preto, com grande monograma OJ em cinza escuro, wordmark oversized, navegação e social à direita.

### Tipografia

Usar Plus Jakarta Sans, Manrope e Open Sans, nesta ordem de prioridade conforme o papel visual do screenshot. Evitar Arial, Inter, Roboto ou substituições genéricas. Títulos utilizam peso forte ou outline por CSS; labels são pequenos, em caixa alta e com tracking discreto; corpo tem line-height generoso.

### Elementos de assinatura

O grid contínuo; o contraste entre lettering preenchido e outline; mosaicos de imagens monocromáticas com revelação de cor; e o símbolo circular/monograma OJ no branding e no Footer.

### Interação e animação

Interações são discretas e funcionais. Hover/focus em experiências revela o logo/asset sem deslocar a lista. Hover em momentos revela cor. Até três imagens podem alternar frente/verso, com intervalos de 1–2 segundos e sem layout shift. Mudanças de projeto alteram o preview com fade curto. Todas as animações devem respeitar `prefers-reduced-motion`.

### Voz e conteúdo

Manter exatamente o conteúdo visível na referência e no briefing. Não inventar case studies, depoimentos, URLs, imagens ou informações. Onde o asset ainda não foi fornecido, usar um slot estrutural que preserve proporção, alinhamento e espaço para substituição.

### Brand essence

**Orlando Jones é um Product Designer que transforma problemas complexos em produtos digitais claros, úteis e escaláveis para equipas que precisam de rigor entre UX, produto, tecnologia e negócio.** Personalidade: claro, rigoroso, humano.

### Wordmark e símbolo

O wordmark usa ORLANDO preenchido e JONES em outline, com um símbolo circular OJ compacto no header e no footer. O símbolo deve ser desenhado em CSS/SVG simples, sem texto convertido em imagem e sem inventar uma marca diferente.

## Regra de decisão

Quando houver dúvida, perguntar: **“Esta escolha reforça ou dilui o grid editorial e a fidelidade à referência?”**
