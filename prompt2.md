# K/LOOP — AUDITORIA COMPLETA + REDESIGN + CORREÇÃO DO PORTFÓLIO
# OBRIGATÓRIO: USAR FRONTEND DESIGN SKILL

Você está trabalhando em um projeto EXISTENTE de portfólio da K/LOOP.

O projeto atualmente está visualmente ruim, desorganizado, com placeholders, assets incorretos, informações fictícias, inconsistências de implementação e elementos que não representam a identidade real da K/LOOP.

Sua missão NÃO é apenas “embelezar” o site.

Sua missão é:

1. auditar o projeto inteiro;
2. entender o que já existe;
3. corrigir os problemas estruturais;
4. aplicar a Frontend Design Skill;
5. redesenhar a experiência;
6. reutilizar corretamente os assets existentes;
7. substituir placeholders;
8. melhorar completamente o visual;
9. revisar responsividade;
10. testar e corrigir tudo.

==================================================
REGRA Nº 1 — FRONTEND DESIGN
==================================================

ANTES DE ESCREVER CÓDIGO:

Leia a Frontend Design Skill disponível no ambiente.

Procure primeiro por algo como:

.claude/skills/frontend-design/SKILL.md

Caso a instalação do Open Code utilize outro diretório para skills, localize a skill de Frontend Design disponível.

Aplique a skill de forma REAL.

Não use a skill apenas como referência textual.

O resultado deve demonstrar decisões de:

- direção de arte
- composição
- hierarquia visual
- tipografia
- ritmo
- espaçamento
- contraste
- layout
- identidade
- interação
- motion design.

PROIBIDO criar uma interface genérica de IA.

Não quero:

Hero genérica
+ título centralizado
+ dois botões
+ três cards
+ seção de serviços
+ footer.

Isso é exatamente o tipo de resultado que deve ser evitado.

==================================================
REGRA Nº 2 — ANALISE O ZIP ANTES DE ALTERAR
==================================================

Antes de editar qualquer arquivo:

- leia a estrutura inteira do projeto;
- leia HTML;
- leia CSS;
- leia JavaScript;
- leia TypeScript;
- leia arquivos de configuração;
- leia `design-plan.md`;
- leia `prompt.md`;
- analise os assets;
- analise os SVGs;
- verifique imagens;
- verifique os caminhos;
- verifique imports;
- verifique scripts;
- verifique links.

Não apague o projeto sem entender o que já existe.

==================================================
REGRA Nº 3 — PROCURE A LOGO/IMAGEM REAL NA PASTA
==================================================

Existe uma imagem real da identidade K/LOOP fora do ZIP.

Ela NÃO está necessariamente dentro do arquivo compactado.

Portanto, procure RECURSIVAMENTE no diretório do projeto por:

*.jpg
*.jpeg
*.png
*.webp
*.svg

Use ferramentas do sistema para localizar os arquivos.

NÃO diga que a imagem não existe antes de procurar.

Procure especificamente por arquivos `.jpg`.

A imagem:

`perfil_04_k_loop.jpg`

é a referência visual principal da logo K/LOOP.

Caso ela esteja disponível no diretório de trabalho, copie/referencie corretamente dentro dos assets do projeto.

Ela deve ser usada onde a identidade K/LOOP estiver sendo representada.

==================================================
REGRA Nº 4 — NÃO USE LOGOS SVG IMPROVISADAS
==================================================

Atualmente o projeto possui SVGs desenhados manualmente representando um K genérico.

Eles NÃO devem continuar como representação principal da marca.

Não use:

- quadrado com K
- círculo com K
- símbolo genérico desenhado com paths aleatórios
- avatar fake contendo apenas a letra K.

Use a LOGO REAL fornecida.

A logo real deve aparecer em:

- navbar
- hero quando fizer sentido
- footer
- favicon, se possível criar uma versão adequada
- elementos de identidade onde apropriado.

Não distorcer.

Não recolorir arbitrariamente.

Não redesenhar.

==================================================
REGRA Nº 5 — USE OS ASSETS SOCIAIS EXISTENTES
==================================================

O projeto já possui:

`gmail.svg`
`instagram.svg`
`whatsapp.svg`

Esses arquivos devem ser analisados e utilizados.

NÃO substitua esses ícones por emojis.

NÃO desenhe novos ícones improvisados.

NÃO utilize:

📱
📩
📸
💬

Use os SVG existentes corretamente.

Caso os SVGs precisem de ajustes técnicos para funcionar visualmente no novo design, corrija os próprios assets ou envolva-os em componentes apropriados.

==================================================
WHATSAPP
==================================================

O WhatsApp precisa ser funcional.

Criar uma configuração central para:

WHATSAPP_NUMBER

NÃO inventar número.

Usar:

https://wa.me/55XXXXXXXXXXX

O botão deve possuir:

- ícone real do WhatsApp;
- texto;
- hover;
- active;
- focus;
- aria-label;
- target adequado;
- tooltip apenas quando fizer sentido.

Também pode existir um WhatsApp flutuante no canto inferior.

Mas NÃO deve ser um botão gigante e invasivo.

==================================================
INSTAGRAM
==================================================

Usar `instagram.svg`.

Criar configuração:

INSTAGRAM_URL

Não inventar username.

O link deve ser facilmente alterável em um único arquivo.

==================================================
GMAIL / E-MAIL
==================================================

Usar `gmail.svg`.

Criar configuração:

EMAIL

Utilizar:

mailto:EMAIL

Não manter:

`seu.email@kloop.example`

Isso é placeholder e não pode aparecer no site final.

==================================================
REGRA Nº 6 — REMOVER TODOS OS PLACEHOLDERS FALSOS
==================================================

Remova ou substitua todos os dados falsos atuais, incluindo:

- `seu.email@kloop.example`
- `+551199999-9999`
- `@kloop.design`
- `[SEU NOME]`
- informações fictícias de clientes
- resultados inventados
- métricas inventadas
- tecnologias não confirmadas.

Não deixe placeholders falsos visíveis no site.

Quando um dado pessoal real não estiver disponível, crie uma configuração claramente marcada para preenchimento posterior.

Mas não exiba valores falsos.

==================================================
REGRA Nº 7 — NÃO INVENTAR CASES
==================================================

O projeto atual possui informações como:

“Taxa de conversão 3x maior”

“Resultado”

“Experiência de compra fluida”

e outras afirmações que não foram comprovadas.

NÃO inventar resultados.

NÃO inventar métricas.

NÃO inventar clientes.

NÃO inventar depoimentos.

NÃO inventar números.

NÃO inventar tecnologias.

NÃO inventar responsabilidades profissionais.

Apresente apenas o que for conhecido.

==================================================
PROJETO REAL — TAYNA XAVIER BOUTIQUE
==================================================

Adicionar e destacar:

Tayna Xavier Boutique

Categoria:

E-commerce / Nuvemshop

URL:

https://txmodafeminina.lojavirtualnuvem.com.br/

Esse é um projeto REAL fornecido para o portfólio.

Utilize o projeto como case visual.

Descrição base:

“Experiência de loja virtual para uma boutique de moda feminina.”

Caso o projeto atual contenha informações não confirmadas, NÃO trate essas informações como fatos.

Criar campos editáveis para:

challenge
role
process
technologies
result

Manter esses campos vazios ou configuráveis quando não houver informação confirmada.

==================================================
REGRA Nº 8 — IMAGENS DO PROJETO
==================================================

Não use:

- imagens falsas
- screenshots inventadas
- imagens genéricas de e-commerce
- mockups aleatórios.

Procure primeiro por imagens reais dentro do projeto.

Procure recursivamente:

*.jpg
*.jpeg
*.png
*.webp

e identifique quais pertencem ao projeto da Tayna Xavier Boutique.

Se não houver screenshots reais disponíveis, crie uma estrutura preparada para recebê-las:

public/projects/tayna-xavier/

desktop
mobile
detail-01
detail-02

Mas NÃO invente conteúdo.

==================================================
REGRA Nº 9 — CORRIGIR OS CAMINHOS DE IMAGEM
==================================================

O projeto atual possui referências como:

`/public/projects/tayna-xavier/desktop.webp`

Isso pode estar incorreto dependendo da arquitetura.

Corrija os caminhos de assets conforme a estrutura real do projeto.

Não assumir que `/public` deve aparecer na URL pública.

Verifique o bundler/framework usado.

==================================================
REGRA Nº 10 — CORRIGIR A ARQUITETURA ATUAL
==================================================

Há inconsistências entre os arquivos atuais.

Por exemplo:

`main.js`

está importando:

`./src/data/projects.js`
`./src/data/services.js`
`./src/data/technologies.js`
`./src/config/site.js`

enquanto o projeto contém arquivos `.ts`.

Corrija essa arquitetura.

Não deixe o projeto dependendo de imports inexistentes.

Escolha uma arquitetura coerente com o stack real encontrado no repositório.

Se for necessário simplificar, simplifique corretamente.

O site precisa realmente abrir e funcionar.

==================================================
REGRA Nº 11 — REDESIGN COMPLETO
==================================================

O site atual precisa de um redesign visual completo.

Não faça pequenos ajustes.

Reestruture o layout inteiro onde necessário.

Quero uma experiência visual de portfólio profissional.

==================================================
IDENTIDADE K/LOOP
==================================================

Cores principais:

#120A20
Deep Violet

#5B2EFF
Vibrant Purple

#FF7A18
Orange

#111111
Black

#FFF6FF
Off White

Use as cores como sistema de identidade.

Não jogue roxo e laranja em todos os elementos.

Crie hierarquia.

Use o laranja como destaque.

Use o roxo para profundidade, identidade e interação.

O fundo escuro deve ser sofisticado.

==================================================
DIREÇÃO VISUAL
==================================================

Misturar:

- web design
- digital design
- creative coding
- e-commerce
- editorial design
- formas fluidas
- tecnologia
- composição contemporânea.

A logo possui formas fluidas.

Use essa característica para gerar elementos gráficos derivados da identidade.

Possibilidades:

- ribbons
- curvas
- ondas
- elementos sobrepostos
- máscaras
- formas orgânicas
- grids quebrados
- tipografia gigante
- recortes
- camadas.

Não usar tudo.

Escolha os elementos necessários para construir uma linguagem visual coerente.

==================================================
HERO
==================================================

Não centralizar tudo.

Criar uma composição mais editorial.

Apresentar:

K/LOOP

Do conceito ao clique.

Texto:

“Web design, desenvolvimento e experiências digitais para transformar ideias em projetos reais.”

Mostrar que trabalho com:

Sites
Lojas Nuvemshop
Landing Pages
E-commerce
Design digital

Botões:

Ver projetos

Vamos conversar

A logo real deve estar presente.

Criar uma composição visual forte ao redor dela.

==================================================
PROJETOS
==================================================

Essa é a parte PRINCIPAL.

O projeto da Tayna Xavier Boutique deve ser visualmente destacado.

Não mostrar somente um card pequeno.

Utilizar:

- imagem grande
- mockup
- browser frame
- mobile frame
- detalhes da interface
- metadata
- categoria
- link.

O projeto deve parecer um case real de portfólio.

Criar suporte para futuros projetos, mas NÃO inventar novos projetos.

Se existirem projetos fictícios no código atual:

remover da apresentação pública.

==================================================
CASE TAYNA
==================================================

Criar uma experiência como:

Tayna Xavier Boutique

E-commerce
Nuvemshop

Depois mostrar a interface em grande escala.

Adicionar:

“Visitar projeto ↗”

URL:

https://txmodafeminina.lojavirtualnuvem.com.br/

Abrir em nova aba.

==================================================
SERVIÇOS
==================================================

Criar uma seção visualmente interessante.

Serviços:

Lojas Nuvemshop
Landing Pages
Sites
Web Design
Design de Interfaces
Desenvolvimento Web
Identidade Visual Digital
Projetos Personalizados

Não usar oito cards iguais.

Criar composição editorial.

Pode utilizar:

números
tipografia
linhas
formas
hover
grids.

==================================================
PROCESSO
==================================================

Título:

Do conceito ao clique.

Etapas:

01 Descoberta
02 Estratégia
03 Design
04 Desenvolvimento
05 Entrega

Criar uma representação visual inspirada no conceito de LOOP.

Não transformar isso em um fluxograma corporativo.

==================================================
SOBRE
==================================================

Título:

“Quem está por trás da K/LOOP?”

Mostrar espaço para foto pessoal futura.

Utilizar a logo real onde fizer sentido.

Não usar aquele avatar SVG artificial com uma letra K dentro.

Não inventar informações pessoais.

==================================================
CONTATO
==================================================

Criar uma seção de contato forte.

Título:

“Tem uma ideia?”

Texto:

“Vamos transformar ela em algo que as pessoas possam ver, usar e lembrar.”

Mostrar três canais:

WhatsApp
Instagram
Gmail

Utilizar os SVGs existentes.

Cada item deve parecer parte do design da K/LOOP.

Não deixar como três links de texto sem personalidade.

==================================================
FOOTER
==================================================

Utilizar a logo REAL.

Mostrar:

K/LOOP

Do conceito ao clique.

Links:

Projetos
Serviços
Processo
Sobre
Contato

Social:

WhatsApp
Instagram
Gmail

==================================================
MOBILE
==================================================

O mobile não pode ser uma versão quebrada do desktop.

Redesenhe responsivamente.

Testar:

320px
360px
375px
390px
430px
768px
1024px
1280px
1440px
1920px

Corrigir:

- overflow
- textos grandes demais
- grids quebrados
- imagens cortadas
- navbar
- botões
- espaçamento
- elementos decorativos.

==================================================
ÍCONE E COMPONENTES
==================================================

Nenhum emoji como ícone.

Usar SVG.

Manter estilo consistente.

WhatsApp → whatsapp.svg

Instagram → instagram.svg

Gmail → gmail.svg

Para interface geral, utilizar uma biblioteca consistente, como Lucide, somente onde necessário.

==================================================
MOTION
==================================================

Aplicar motion design de maneira refinada.

Usar:

- reveal
- hover
- scroll animation
- text transitions
- image scale
- parallax muito leve
- movimento sutil de elementos da marca.

Nada exagerado.

Nada que atrapalhe a leitura.

Respeitar:

prefers-reduced-motion.

==================================================
TIPOGRAFIA
==================================================

A identidade pode usar:

Syne
Manrope

mas avalie criticamente a implementação atual.

Melhore:

- escala
- peso
- tracking
- line-height
- hierarquia.

Use títulos grandes quando necessário.

==================================================
DESIGN SYSTEM
==================================================

Centralizar:

cores
tipografia
spacing
radii
shadows
motion
breakpoints.

Não espalhar valores aleatórios pelo CSS.

==================================================
CONFIGURAÇÕES
==================================================

Criar ou corrigir:

src/config/site.ts

com:

name
brand
email
whatsapp
instagram
description

Use valores reais somente quando conhecidos.

Exemplo:

whatsapp: ""

email: ""

instagram: ""

Não colocar dados inventados.

==================================================
PROJETOS
==================================================

Criar:

src/data/projects.ts

ou equivalente adequado ao stack real.

Somente manter projetos reais.

Projeto principal:

Tayna Xavier Boutique

Campos:

title
slug
category
description
image
gallery
technologies
url
featured
challenge
role
process
result

Os campos devem ser facilmente editáveis.

==================================================
SERVIÇOS
==================================================

Manter em arquivo próprio e editável.

==================================================
TECNOLOGIAS
==================================================

Manter apenas tecnologias realmente utilizadas/configuradas.

Não afirmar habilidades não confirmadas.

==================================================
BUGS ATUAIS A INVESTIGAR
==================================================

Faça uma auditoria específica dos seguintes problemas:

1. imports `.js` para arquivos `.ts`;
2. imagens apontando para `/public/...`;
3. placeholders;
4. logo SVG improvisada;
5. avatar K genérico;
6. social links falsos;
7. e-mail falso;
8. WhatsApp falso;
9. Instagram falso;
10. projetos fictícios;
11. métricas inventadas;
12. tecnologias não confirmadas;
13. SVG do WhatsApp improvisado;
14. favicon improvisado;
15. copyright desatualizado;
16. layout visualmente desalinhado;
17. excesso de estruturas repetidas;
18. espaçamento inconsistente;
19. possível ausência de imagem real da K/LOOP;
20. responsividade.

Corrija tudo.

==================================================
IMPORTANTE SOBRE A IMAGEM JPG
==================================================

NÃO IGNORE ISSO.

Existe uma imagem JPG da logo K/LOOP já disponível na pasta de trabalho.

Procure por ela.

Comando conceitual:

find . -type f \( -iname "*.jpg" -o -iname "*.jpeg" \)

Depois identifique o arquivo correto.

Use essa imagem no site.

NÃO substitua por uma logo criada por código.

==================================================
REVISÃO VISUAL
==================================================

Depois do redesign, faça uma revisão crítica.

Procure:

- áreas feias
- espaços vazios
- desalinhamentos
- elementos sem função
- componentes repetitivos
- tipografia ruim
- cores excessivas
- contraste ruim
- mockups desproporcionais
- elementos decorativos sem sentido
- ícones inconsistentes
- mobile quebrado.

Corrija.

Não pare na primeira versão.

==================================================
TESTES
==================================================

Execute:

lint

typecheck

build

E qualquer comando de validação existente no projeto.

Verifique:

- console
- links
- imagens
- imports
- assets
- navegação
- responsividade.

Não entregar projeto quebrado.

==================================================
RESULTADO FINAL
==================================================

Quero que o site pareça um PORTFÓLIO REAL DE UM WEB DESIGNER/DESENVOLVEDOR.

Não quero aparência de:

template de agência
template de programador
startup SaaS
dashboard
site gerado automaticamente.

A K/LOOP precisa parecer uma identidade própria.

A logo real é o centro da identidade.

O projeto da Tayna Xavier Boutique deve ser o principal case visível.

WhatsApp, Instagram e Gmail precisam estar visualmente integrados e preparados para uso real.

O site deve ser:

autoral
profissional
moderno
bem organizado
rápido
responsivo
acessível
visualmente forte.

==================================================
ORDEM OBRIGATÓRIA DE EXECUÇÃO
==================================================

FASE 1
Auditar o repositório.

FASE 2
Ler e aplicar Frontend Design Skill.

FASE 3
Localizar a imagem JPG real da K/LOOP.

FASE 4
Localizar e analisar gmail.svg, instagram.svg e whatsapp.svg.

FASE 5
Identificar todos os bugs.

FASE 6
Definir nova direção visual.

FASE 7
Corrigir arquitetura.

FASE 8
Implementar novo design.

FASE 9
Implementar projeto Tayna Xavier Boutique.

FASE 10
Implementar WhatsApp, Instagram e Gmail.

FASE 11
Corrigir mobile.

FASE 12
Aplicar motion e microinterações.

FASE 13
SEO + acessibilidade + performance.

FASE 14
Lint + typecheck + build.

FASE 15
Revisão visual final.

NÃO pule etapas.

NÃO apenas faça pequenas mudanças no CSS atual.

O objetivo é TRANSFORMAR o projeto atual em um portfólio profissional realmente utilizável.