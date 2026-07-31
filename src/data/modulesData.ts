import { ModuleItem } from '../types';

export const modulesData: ModuleItem[] = [
  {
    id: 'modulo-0',
    number: 0,
    badge: 'GUIA 01 DE 11 · MÓDULO 0 DE 10',
    title: 'Mentalidade & Panorama de Mercado',
    subtitle: 'Por que o Vibe Coding é a porta de entrada mais acessível e lucrativa do mercado digital atual.',
    readTime: '3 min de leitura',
    accentColor: 'blue',
    summary: 'Entenda por que a inteligência artificial eliminou a barreira de anos de estudo técnico tradicional e como o mercado de micro SaaS e desenvolvimento de sites está recheado de oportunidades para solopreneurs.',
    sections: [
      {
        heading: 'A Grande Virada: De Codificador a Diretor de Produto',
        content: [
          'No modelo tradicional de software, você precisava passar de 2 a 4 anos estudando algoritmos, estruturas de dados, sintaxe de linguagens e ecossistemas complexos antes de conseguir colocar um produto real no ar.',
          'No Vibe Coding, você muda de papel: deixa de ser um pedreiro que assenta cada linha de código manualmente e passa a ser o arquiteto/diretor. Você comanda modelos avançados de IA (como Claude 3.7 Sonnet, Gemini e DeepSeek) para gerar a arquitetura, implementar as regras de negócio e refatorar em segundos.',
          'Esta é a porta de entrada mais barata para o mercado digital porque você só precisa de um computador simples, conexão com a internet e a habilidade de estruturar problemas com clareza (engenharia de prompt contextual).'
        ],
        bulletPoints: [
          'Custo zero ou ultra reduzido para validar produtos antes de gastar com servidores.',
          'Velocidade de execução 10x maior do que agências de desenvolvimento tradicionais.',
          'Foco total na solução do cliente e na proposta de valor, não na sintaxe do ponto e vírgula.'
        ]
      },
      {
        heading: 'Expectativa vs. Realidade do Mercado de Micro SaaS & Sites',
        content: [
          'É fundamental alinhar as expectativas com a realidade prática do mercado para construir um negócio sustentável:'
        ],
        bulletPoints: [
          'FANTASIA: "Vou criar um app no fim de semana e ficar milionário dormindo no primeiro mês."',
          'REALIDADE: Micro SaaS é um negócio de escala constante. Um software focado em um nicho específico (ex: agendador de horários para barbeiros com WhatsApp) pode gerar de R$ 1.500 a R$ 15.000 de MRR (receita recorrente mensal) com pouquíssima manutenção.',
          'SITES & LANDING PAGES: Fechar 3 a 5 landing pages por mês cobrando de R$ 800 a R$ 2.500 cada gera um caixa rápido e imediato de R$ 3.000 a R$ 10.000/mês enquanto você desenvolve seu micro SaaS.'
        ]
      }
    ],
    exampleHighlight: {
      badgeText: 'EXEMPLO PRÁTICO DE NICHOS LUCRATIVOS',
      title: 'Micro SaaS de Nicho vs. Software Genérico',
      description: 'Tentaremos não disputar com gigantes (como Trello ou Notion). Em vez disso, focamos em micro dores de mercados específicos:',
      tips: [
        'Exemplo 1: Calculadora de orçamento de marcenaria automatizada com exportação em PDF via WhatsApp.',
        'Exemplo 2: Gerador de contratos dinâmicos para fotógrafos de casamento.',
        'Exemplo 3: Menu digital com pedido direto na cozinha para hamburguerias artesanais.'
      ]
    },
    interactiveChecklist: [
      'Entendi que meu papel principal é direcionar a IA e resolver problemas reais',
      'Aceitei que landing pages fornecem caixa rápido e Micro SaaS gera receita recorrente',
      'Defini compromisso de dedicar ao menos 1 hora diária para dominar o método'
    ]
  },
  {
    id: 'modulo-1',
    number: 1,
    badge: 'GUIA 02 DE 11 · MÓDULO 1 DE 10',
    title: 'Fundamentos Essenciais de Programação',
    subtitle: 'O mapa mental mínimo que você precisa dominar para conversar com a IA sem ficar perdido.',
    readTime: '4 min de leitura',
    accentColor: 'cyan',
    summary: 'Você não precisa decorador códigos, mas precisa entender os 5 pilares do desenvolvimento web para orientar a IA quando algo não sair como esperado.',
    sections: [
      {
        heading: 'Os 5 Pilares de uma Aplicação Web',
        content: [
          'Para guiar a inteligência artificial com autoridade, você precisa mentalizar como uma aplicação web funciona na prática:'
        ],
        bulletPoints: [
          '1. HTML (Estrutura): É o esqueleto da página. Botões, títulos, formulários, imagens e textos.',
          '2. CSS / Tailwind (Estilo): É a pintura e o acabamento. Cores, espaçamentos, fontes, responsividade e layout.',
          '3. JavaScript / TypeScript (Comportamento): É o sistema nervoso. O que acontece quando o usuário clica num botão, envia um formulário ou alterna uma aba.',
          '4. Banco de Dados / Storage (Memória): Onde ficam salvas as informações do usuário, como cadastros, histórico de pedidos e preferências.',
          '5. API & Hospedagem (Pontes e Casa): API é a ponte de comunicação entre sistemas (ex: enviar mensagem no WhatsApp, processar pagamento no Mercado Pago). Hospedagem é o servidor na nuvem onde seu site roda 24/7.'
        ]
      },
      {
        heading: 'O Conceito de Full-Stack Server/Client',
        content: [
          'No navegador do usuário (Client/Frontend), roda a interface visual. No servidor seguro (Server/Backend), rodam as regras confidenciais e chaves secretas de API.',
          'A IA gera o código dividindo a aplicação nessas duas camadas para garantir que suas chaves secretas nunca fiquem expostas publicamente no navegador.'
        ]
      }
    ],
    exampleHighlight: {
      badgeText: 'ESTRUTURA MÍNIMA ILUSTRADA',
      title: 'A Anatomia de um Componente Interativo',
      description: 'Veja como HTML, CSS e JS se fundem no desenvolvimento moderno:',
      codeSnippet: `// Exemplo React + Tailwind CSS (Gerado por IA)
export function BotaoAcao({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button 
      onClick={onClick}
      className="bg-[#3B6FFF] hover:bg-[#3B6FFF]/80 text-white font-medium py-3 px-6 rounded-xl shadow-lg transition-all"
    >
      {label}
    </button>
  );
}`,
      language: 'tsx'
    },
    interactiveChecklist: [
      'Compreendi a diferença entre Frontend (Visual) e Backend (Servidor/Dados)',
      'Sei o papel do HTML, CSS, JavaScript e APIs',
      'Entendi porque chaves secretas devem ficar salvas no servidor (.env)'
    ]
  },
  {
    id: 'modulo-2',
    number: 2,
    badge: 'GUIA 03 DE 11 · MÓDULO 2 DE 10',
    title: 'Vibe Coding na Prática',
    subtitle: 'Ferramentas do ecossistema e a Fórmula do Prompt Perfeito para código funcional de primeira.',
    readTime: '5 min de leitura',
    accentColor: 'blue',
    summary: 'Aprenda a escolher a ferramenta certa para cada etapa do seu projeto e como estruturar instruções que eliminam bugs e geram componentes prontos para produção.',
    sections: [
      {
        heading: 'Panorama de Ferramentas de IA para Vibe Coding',
        content: [
          'Atualmente, o ecossistema é liderado por três principais pilares:'
        ],
        bulletPoints: [
          'Google AI Studio: Excelente para prototipagem rápida, testes de modelos Gemini 2.5/3, geração e visualização de código completo em tempo real sem atrito.',
          'Claude (Anthropic Web / Claude 3.7 Sonnet): O modelo de linguagem mais avançado para raciocínio de código, arquitetura de sistemas e solução de bugs complexos.',
          'Claude Code (CLI): A ferramenta de linha de comando da Anthropic que lê todo seu repositório local, edita arquivos automaticamente e executa testes.'
        ]
      },
      {
        heading: 'A Fórmula do Prompt Perfeito para Código',
        content: [
          'Para a IA não inventar componentes genéricos ou incompletos (o chamado "AI Slop"), você deve utilizar a seguinte estrutura de prompt:'
        ],
        bulletPoints: [
          'CONTEXTO: Quem é a marca, público e objetivo da tela.',
          'ARQUITETURA & VISUAL: Cores exatas (HEX), tipografia, estilo de card, comportamento mobile.',
          'REGRAS DE NEGÓCIO: O que acontece em cada ação, fluxos de erro e estados de carregamento.',
          'RESTRITIVOS: O que a IA É PROIBIDA de fazer (ex: não usar bibliotecas legadas, não usar estilos genéricos).'
        ]
      }
    ],
    exampleHighlight: {
      badgeText: 'PROMPT TEMPLATE PARA COPIAR',
      title: 'Template de Engenharia de Prompt para AI Studio / Claude',
      description: 'Copie e ajuste este template quando for solicitar uma nova funcionalidade:',
      promptTemplate: `Atue como Desenvolvedor Full-Stack Senior especializado em React, Tailwind CSS e TypeScript.

OBJETIVO: Criar uma tela única responsiva para um [INSERIR TIPO DE APLICAÇÃO].

IDENTIDADE VISUAL:
- Fundo base: #0A1128 (navy escuro)
- Primária: #3B6FFF | Ciano acento: #00F0FF
- Tipografia: Poppins para títulos, JetBrains Mono para códigos/badges.
- Estilo: Cards em efeito glass translúcido com borda sutil branca 10% opacidade.

REGRAS OBRIGATÓRIAS:
1. Mobile-first com layout adaptável para desktop.
2. Não adicione bibliotecas externas não declaradas.
3. Garanta que todos os botões tenham feedback visual e tratamento de estados.
4. Crie código completo sem espaços reservados do tipo "// insira seu código aqui".`,
      tips: [
        'Sempre especifique o stack exato (ex: React 19 + Tailwind v4 + TypeScript).',
        'Defina restrições claras para evitar placeholders ou stubs sem funcionalidade.'
      ]
    },
    interactiveChecklist: [
      'Conheço os papéis do Google AI Studio, Claude e Claude Code',
      'Aprendi os 4 pilares do Prompt Perfeito (Contexto, Visual, Regras e Restrições)',
      'Testei copiar e adaptar o template de prompt no meu projeto'
    ]
  },
  {
    id: 'modulo-3',
    number: 3,
    badge: 'GUIA 04 DE 11 · MÓDULO 3 DE 10',
    title: 'Claude Code & MCP (Model Context Protocol)',
    subtitle: 'Como multiplicar sua produtividade conectando o Claude ao seu terminal e dados externos.',
    readTime: '4 min de leitura',
    accentColor: 'cyan',
    summary: 'Instalação rápida do Claude Code no seu ambiente local e o conceito revolucionário de MCP para conectar a IA aos seus bancos de dados e APIs em tempo real.',
    sections: [
      {
        heading: 'O que é o Claude Code CLI?',
        content: [
          'O Claude Code é um agente de IA residente no seu terminal. Diferente de um chat web comum onde você precisa copiar e colar arquivos, ele tem permissão para ler sua pasta de projeto, modificar múltiplos arquivos em paralelo, rodar comandos e resolver erros de compilação sozinho.'
        ],
        bulletPoints: [
          'Instalação no terminal: npm install -g @anthropic-ai/claude-code',
          'Comando inicial na pasta do projeto: claude',
          'A IA analisa a estrutura, entende o package.json e começa a programar direto nos seus arquivos.'
        ]
      },
      {
        heading: 'O que é MCP (Model Context Protocol)?',
        content: [
          'O MCP é um padrão aberto criado pela Anthropic que permite que a IA se conecte de forma segura a sistemas externos do seu computador ou da nuvem.',
          'Com o MCP ativo, o Claude não é apenas um modelo estático de texto. Ele consegue consultar dados no seu banco de dados Postgres, buscar documentações atualizadas na web via Brave Search, ler issues do GitHub e executar ações no Stripe.'
        ]
      },
      {
        heading: 'Comandos Essenciais do Claude Code',
        content: [
          'Alguns comandos chave para o dia a dia de produção:'
        ],
        bulletPoints: [
          '/bug - Reportar um erro para o Claude analisar os logs e aplicar a correção.',
          '/compact - Reduzir o histórico da conversa para economizar tokens mantendo o contexto principal.',
          '/cost - Ver o gasto atual de tokens e chamadas de API do projeto.',
          '/clear - Limpar o terminal e resetar a conversa.'
        ]
      }
    ],
    exampleHighlight: {
      badgeText: 'EXEMPLO PRÁTICO DE SERVIDORES MCP',
      title: 'Integrações MCP mais comuns no dia a dia',
      description: 'Veja como o MCP expande as habilidades do seu assistente:',
      tips: [
        'Servidor Github MCP: Cria Pull Requests, lê branches e gerencia tarefas sem sair do código.',
        'Servidor Postgres MCP: O Claude lê suas tabelas, executa queries de teste e cria migrações sem erros.',
        'Servidor Context/Puppeteer MCP: Navega no site gerado para tirar prints e validar a responsividade visual.'
      ]
    },
    interactiveChecklist: [
      'Entendi como o Claude Code roda direto na minha máquina',
      'Compreendi que MCP conecta a IA a bancos de dados, APIs e ferramentas externas',
      'Decorei os comandos /bug e /compact para otimizar meu fluxo'
    ]
  },
  {
    id: 'modulo-4',
    number: 4,
    badge: 'GUIA 05 DE 11 · MÓDULO 4 DE 10',
    title: 'Skills: Padronizando a Inteligência do seu Projeto',
    subtitle: 'Como ensinar padrões reutilizáveis à IA para nunca mais repetir instruções.',
    readTime: '3 min de leitura',
    accentColor: 'blue',
    summary: 'Entenda o conceito de Skills (arquivos de instrução padronizados) e como criar os seus próprios para garantir que a IA sempre siga suas diretrizes visuais e de código.',
    sections: [
      {
        heading: 'O Conceito de Skill no Vibe Coding',
        content: [
          'Uma "Skill" é um pacote de instruções, diretrizes e exemplos de código armazenado em um arquivo (como SKILL.md) que a IA consulta antes de executar uma tarefa.',
          'Em vez de você digitar toda vez "use Tailwind v4, faça botões azuis e use React 19", você grava isso na Skill do projeto e a IA lê automaticamente antes de agir.'
        ]
      },
      {
        heading: 'Anatomia de um Arquivo SKILL.md',
        content: [
          'Um arquivo de Skill eficiente possui 3 partes principais:'
        ],
        bulletPoints: [
          '1. Cabeçalho YAML: Nome e descrição clara de quando a skill deve ser acionada.',
          '2. Diretrizes Restritivas (O que fazer e o que NUNCA fazer).',
          '3. Snippets e Exemplos de Código de Referência.'
        ]
      }
    ],
    exampleHighlight: {
      badgeText: 'EXEMPLO PRÁTICO DE SKILL.MD',
      title: 'Estrutura de uma Skill de Design System DS Company',
      description: 'Veja como definimos uma Skill reutilizável no repositório:',
      codeSnippet: `---
name: ds-company-ui
description: Padroes visuais e de componentes para projetos da DS Company
---

# Diretrizes Visuais DS Company
- Fundo base: #0A1128
- Card glass: rgba(15, 27, 56, 0.65) com backdrop-blur-md
- Borda: 1px solid rgba(255, 255, 255, 0.08)
- Badge Mono: font-mono uppercase tracking-widest text-[#00F0FF]

# Regra de Botao Primary
Sempre usar bg-[#3B6FFF] hover:bg-[#3B6FFF]/80 text-white com transition-all.`,
      language: 'markdown'
    },
    interactiveChecklist: [
      'Entendi que uma Skill previne repetição de prompts longos',
      'Aprendi a estrutura de um SKILL.md (metadados + regras + exemplos)',
      'Criei meu primeiro rascunho de diretrizes de marca'
    ]
  },
  {
    id: 'modulo-5',
    number: 5,
    badge: 'GUIA 06 DE 11 · MÓDULO 5 DE 10',
    title: 'Construindo Seu Primeiro Site com IA',
    subtitle: 'Passo a passo prático, da ideia inicial ao site publicado no ar.',
    readTime: '5 min de leitura',
    accentColor: 'cyan',
    summary: 'O roteiro definitivo de 6 etapas para criar e publicar landing pages profissionais para clientes ou para seus próprios produtos.',
    sections: [
      {
        heading: 'O Passo a Passo de 6 Etapas',
        content: [
          'Siga este mapa de execução sequencial:'
        ],
        bulletPoints: [
          '1. Briefing & Copywriting: Defina a promessa principal, dor do cliente, benefícios e oferta antes de abrir a IA.',
          '2. Estruturação no Google AI Studio: Cole seu prompt com a estrutura e peça a primeira versão da página.',
          '3. Refinamento Visual & Responsividade: Ajuste tamanhos de fonte, espaçamentos mobile e cores de acento.',
          '4. Validação de Formulários & CTAs: Verifique se os botões redirecionam pro WhatsApp ou salvam o lead.',
          '5. Hospedagem Gratuita/Acessível (Vercel ou Cloud Run): Suba seu projeto com 1 clique conectado ao GitHub.',
          '6. Apontamento de Domínio: Conecte o domínio do cliente (ex: www.empresa.com.br) nas configurações do DNS.'
        ]
      }
    ],
    exampleHighlight: {
      badgeText: 'CHECKLIST PRÁTICO DE LANÇAMENTO',
      title: 'Checklist Anti-Falhas para Entregar Sites a Clientes',
      description: 'Antes de enviar o link para o cliente aprovar, confira estes itens:',
      tips: [
        'Visualização testada no iPhone e Android em modo retrato e paisagem.',
        'Todos os botões de CTA testados e abrindo a conversa do WhatsApp com mensagem pré-definida.',
        'Metatags de título, descrição e favicon da marca configurados no index.html.',
        'Tempo de carregamento abaixo de 1.5 segundos.'
      ]
    },
    interactiveChecklist: [
      'Montei o briefing do projeto antes de gerar o código',
      'Validei os botões e links no mobile',
      'Hospedei e conectei o domínio com sucesso'
    ]
  },
  {
    id: 'modulo-6',
    number: 6,
    badge: 'GUIA 07 DE 11 · MÓDULO 6 DE 10',
    title: 'Construindo Seu Primeiro Micro SaaS',
    subtitle: 'Definição de escopo, escolha de nicho, MVP e automações de pagamento.',
    readTime: '6 min de leitura',
    accentColor: 'blue',
    summary: 'Aprenda a transformar uma dor pontual em um software que gera receita diária sem virar escravo do suporte técnico.',
    sections: [
      {
        heading: 'O que caracteriza um Micro SaaS de Sucesso?',
        content: [
          'Um Micro SaaS é um software focado em resolver UMA única dor muito bem resolvida para um público específico. O fundador costuma ser uma pessoa só (solopreneur) ou uma dupla.',
          'O segredo do Micro SaaS não é ter dezenas de abas e menus complexos, mas sim a utilidade e a velocidade de entregar o resultado esperado.'
        ]
      },
      {
        heading: 'Regra de Ouro do MVP (Produto Mínimo Viável)',
        content: [
          'Não gaste mais do que 7 a 14 dias para lançar a versão 1.0 do seu Micro SaaS. Seu MVP precisa conter apenas:'
        ],
        bulletPoints: [
          '1 Funcionalidade Core (a ferramenta principal funcionando sem falhas).',
          '1 Checkout Simples (integração de Pix/Cartão via Asaas, Mercado Pago ou Stripe).',
          '1 Sistema de Login/Autenticação simplificado ou acesso direto via token/e-mail.'
        ]
      }
    ],
    exampleHighlight: {
      badgeText: 'FLUXO DE INTEGRAÇÃO DE PAGAMENTO',
      title: 'Fluxo Automático de Liberação via Webhook',
      description: 'Como funciona a cobrança recorrente no seu Micro SaaS:',
      codeSnippet: `// Exemplo simplificado de Webhook de Pagamento (Server-side)
app.post('/api/webhook/pagamento', async (req, res) => {
  const { event, customerEmail } = req.body;
  
  if (event === 'PAYMENT_RECEIVED') {
    // Libera o acesso no banco de dados e envia senha temporaria
    await liberarAcessoUsuario(customerEmail);
    await enviarEmailBoasVindas(customerEmail);
  }
  
  return res.json({ received: true });
});`,
      language: 'typescript'
    },
    interactiveChecklist: [
      'Escolhi um nicho com dor real disposta a pagar assinatura mensal',
      'Reduzi meu MVP para a funcionalidade core indispensável',
      'Configurei o checkout transparente com confirmação automática por webhook'
    ]
  },
  {
    id: 'modulo-7',
    number: 7,
    badge: 'GUIA 08 DE 11 · MÓDULO 7 DE 10',
    title: 'Precificação & Posicionamento',
    subtitle: 'Como cobrar o valor justo e fugir da guerra de preços com freelancers amadores.',
    readTime: '4 min de leitura',
    accentColor: 'cyan',
    summary: 'Aprenda a se posicionar como um solucionador de problemas de faturamento e não como um mero "criador de sites por hora".',
    sections: [
      {
        heading: 'Preço Baseado em Valor vs. Preço por Hora',
        content: [
          'Quando você cobra por hora, o cliente quer que você faça rápido para pagar menos. Quando você cobra por VALOR GERADO, quanto mais rápido e eficiente você for com Vibe Coding, maior é a sua margem de lucro.',
          'Exemplo: Se um site otimizado faz uma clínica médica captar 15 novos pacientes de R$ 300 por mês (R$ 4.500/mês a mais para a clínica), cobrar R$ 2.500 pela criação do site torna-se um investimento baratíssimo para o cliente.'
        ]
      },
      {
        heading: 'Modelos de Precificação Sugeridos',
        content: [
          'Estruture sua esteira de serviços com estes valores de referência:'
        ],
        bulletPoints: [
          'Landing Page Express: R$ 800 a R$ 1.500 (Prazo de entrega: 1 a 2 dias com Vibe Coding).',
          'Site Institucional Completo: R$ 2.000 a R$ 4.500 (Prazo: 3 a 5 dias).',
          'Micro SaaS Customizado/White Label: R$ 3.500 a R$ 10.000 setup inicial + R$ 150 a R$ 500/mês de manutenção recorrente.'
        ]
      }
    ],
    exampleHighlight: {
      badgeText: 'SIMULADOR DE META FINANCEIRA',
      title: 'A Matemática dos R$ 10.000/Mês com Vibe Coding',
      description: 'Veja como a meta se torna extremamente palpável dividida em metas semanais:',
      tips: [
        'Cenário A: 4 Landing Pages de R$ 2.500/mês = R$ 10.000/mês (1 por semana).',
        'Cenário B: 2 Sites Institucionais de R$ 3.500 (R$ 7.000) + 15 assinantes de Micro SaaS a R$ 200/mês (R$ 3.000) = R$ 10.000/mês.',
        'Cenário C: 50 assinantes recorrentes do seu próprio Micro SaaS a R$ 197/mês = R$ 9.850/mês de receita previsível.'
      ]
    },
    interactiveChecklist: [
      'Parei de calcular meu preço baseado em horas trabalhadas',
      'Defini minha tabela de preços de entrada para landing pages e sites',
      'Entendi que a manutenção recorrente constrói patrimônio financeiro'
    ]
  },
  {
    id: 'modulo-8',
    number: 8,
    badge: 'GUIA 09 DE 11 · MÓDULO 8 DE 10',
    title: 'Distribuição & Aquisição de Leads',
    subtitle: 'Como transformar o Instagram @davi._link e funis de DM em máquinas de vendas.',
    readTime: '5 min de leitura',
    accentColor: 'blue',
    summary: 'Construa um funil simples de aquisição onde o seu perfil do Instagram atrai potenciais clientes qualificados para a conversa direta.',
    sections: [
      {
        heading: 'A Anatomia do Perfil Campeão de Conversão',
        content: [
          'Seu perfil do Instagram (como o @davi._link) é sua página de destino no tráfego orgânico. Ele deve ter:'
        ],
        bulletPoints: [
          'Foto de Perfil Profissional e Clara.',
          'Bio Direta: Quem você ajuda + Resultado que entrega + Link para o Guia/WhatsApp.',
          'Destaques Estratégicos: Quem sou eu, Bastidores de Projetos, Resultados/Depoimentos, Como Funciona.'
        ]
      },
      {
        heading: 'O Funil de Conteúdo -> DM -> Fechamento',
        content: [
          'Em vez de criar posts genéricos motivacionais, crie conteúdos demonstrando SOLUÇÕES visuais:',
          'Grave um vídeo curto de 30 segundos mostrando o problema do cliente ("Seu site demorar para carregar no celular está te fazendo perder clientes") e em seguida mostre a solução que você construiu em Vibe Coding. Peça para ele comentar "GUIA" ou chamar na DM.'
        ]
      }
    ],
    exampleHighlight: {
      badgeText: 'ESTRATÉGIA DE VALIDAÇÃO RÁPIDA',
      title: 'Validação de Oferta com R$ 5/dia em Tráfego Pago',
      description: 'Como testar a demanda de um Micro SaaS antes de programar durante semanas:',
      tips: [
        'Crie uma Landing Page simples no AI Studio apresentando o conceito do Micro SaaS.',
        'Coloque um botão de "Garantir Acesso Antecipado com 50% de Desconto".',
        'Rode um anúncio direcionado para o público alvo investindo R$ 10 por dia durante 3 dias.',
        'Se 10 pessoas clicarem e preencherem o cadastro de interesse, a demanda está validada!'
      ]
    },
    interactiveChecklist: [
      'Otimizei a bio do meu Instagram com proposta clara e link funcional',
      'Defini minha rotina de publicação mostrando telas e demonstrações reais',
      'Entendi como usar mensagens diretas para qualificar interessados'
    ]
  },
  {
    id: 'modulo-9',
    number: 9,
    badge: 'GUIA 10 DE 11 · MÓDULO 9 DE 10',
    title: 'Primeiras Vendas & Prospecção Ativa',
    subtitle: 'Scripts de abordagem, funil direto e como fechar os seus 3 primeiros clientes.',
    readTime: '5 min de leitura',
    accentColor: 'cyan',
    summary: 'O roteiro sem spam para abordar empresas locais e potenciais parceiros com abordagens de auditoria de alto valor.',
    sections: [
      {
        heading: 'A Estratégia da Auditoria Gratuita de Alto Impacto',
        content: [
          'Em vez de mandar mensagens chaves de "Compre meu site por R$ 1.000", faça uma abordagem consultiva:',
          '1. Pesquise uma empresa local que tenha um site antigo, lento ou sem versão mobile.',
          '2. Grave um vídeo de 1 minuto no Loom mostrando 2 pontos que estão fazendo aquela empresa perder clientes no Google.',
          '3. Mande a mensagem junto com o vídeo de presente. A taxa de resposta é superior a 40% porque você entregou valor antes de pedir qualquer coisa.'
        ]
      }
    ],
    exampleHighlight: {
      badgeText: 'SCRIPT PRONTO PARA COPIAR',
      title: 'Script de Abordagem para WhatsApp/DM (Método Auditoria)',
      description: 'Copie e adapte para o nicho de sua preferência:',
      promptTemplate: `Olá [Nome do Dono/Empresa], tudo bem?

Estava navegando procurando por [Serviço da Empresa na Cidade] e encontrei o perfil de vocês. Notei que o site atual de vocês demora um pouco para abrir no celular e não tem o botão direto do WhatsApp na tela inicial.

Fiz um vídeo rápido de 45 segundos mostrando exatamente como ajustar isso para vocês não perderem pessoas que tentam entrar em contato pelo Google hoje.

Posso te enviar o link do vídeo por aqui sem compromisso nenhum?`,
      tips: [
        'Sempre peça autorização antes de enviar o link para não parecer mensagem automática.',
        'Ao responderem "Pode mandar", envie o vídeo demonstrando o protótipo rápido feito no AI Studio.'
      ]
    },
    interactiveChecklist: [
      'Mapeei 5 potenciais clientes com sites antigos ou inexistentes',
      'Gravei meu primeiro vídeo consultivo rápido no Loom',
      'Enviei os scripts de prospecção respeitosa'
    ]
  },
  {
    id: 'modulo-10',
    number: 10,
    badge: 'GUIA 11 DE 11 · MÓDULO 10 DE 10 · PRÓXIMOS PASSOS',
    title: 'Aceleração & O Próximo Nível',
    subtitle: 'O caminho direto para quem já entendeu o fundamento e quer o ecossistema pronto.',
    readTime: '2 min de leitura',
    isOfferStyle: true,
    accentColor: 'purple',
    summary: 'Você concluiu o Guia Gratuito Oficial da DS Company. Agora que possui toda a visão teórica e o mapa mental de execução, existe um atalho de velocidade para quem quer resultados ainda mais rápidos.',
    sections: [
      {
        heading: 'Dois Caminhos a Partir de Agora',
        content: [
          'Neste ponto do guia, você já absorveu o conhecimento fundamental necessário para começar a criar suas soluções com Vibe Coding.',
          'A partir daqui, abrem-se dois caminhos claros à sua frente:'
        ],
        bulletPoints: [
          'CAMINHO SOLO: Você pode aplicar tudo o que aprendeu neste guia de forma independente, testando cada biblioteca, configurando servidores e construindo sua estrutura do zero por tentativa e erro.',
          'CAMINHO ACELERADO: Você pode utilizar componentes pré-construídos, pipelines de código testados, rotinas otimizadas e o ecossistema completo da DS Company® pronto para implantação imediata.'
        ]
      },
      {
        heading: 'O Que Espera por Você no Próximo Nível',
        content: [
          'Sem enrolação nem falsas promessas: quem busca escalar resultados no digital precisa de velocidade e padronização profissional.',
          'A estrutura avançada foi desenvolvida para cortar meses de aprendizado, entregando a você o exato método e ferramentas utilizadas para construir projetos validados em tempo recorde.'
        ],
        bulletPoints: [
          'Arquiteturas e templates de código pré-aprovados e otimizados para alta conversão.',
          'Suporte a integrações complexas de pagamentos, webhooks e bancos de dados em nuvem.',
          'Método passo a passo de escala comercial para garantir fluxo contínuo de clientes.',
          'Conexão direta com quem já está no campo de batalha executando todos os dias.'
        ]
      }
    ],
    exampleHighlight: {
      badgeText: 'ESTRUTURA DS COMPANY®',
      title: 'Pronto para encurtar a jornada?',
      description: 'Quando você decide parar de reaprender a roda e passa a usar métodos testados, seu tempo de execução cai drasticamente. Se você sente que está pronto para dar o próximo passo rumo ao mercado profissional:',
      tips: [
        'Acompanhe o conteúdo diário e os bastidores das ferramentas no Instagram oficial @davi._link.',
        'Fique atento aos avisos de aberturas de turmas e soluções avançadas compartilhadas no perfil.',
        'Mande uma mensagem direta no Instagram se tiver dúvidas sobre como aplicar este guia no seu momento atual.'
      ]
    },
    interactiveChecklist: [
      'Concluí os 11 Módulos do Guia Gratuito Oficial DS Company®',
      'Compreendi a diferença entre o caminho solo e o caminho acelerado',
      'Salvei o contato do perfil @davi._link para continuar aprendendo'
    ]
  }
];
