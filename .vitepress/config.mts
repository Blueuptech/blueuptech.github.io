import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'BlueUP',
  description: 'Infraestructura de confianza para la era de la IA',
  lang: 'es-ES',
  base: '/',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap', rel: 'stylesheet' }],
    ['meta', { name: 'author', content: 'Arturo Navarro' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://www.blueup.es' }],
  ],

  cleanUrls: true,

  locales: {
    es: {
      label: 'Español',
      lang: 'es-ES',
      link: '/es/',
      themeConfig: {
        nav: [
          { text: 'Inicio', link: '/es/' },
          {
            text: 'Proyectos',
            items: [
              { text: 'BC — AML Platform', link: '/es/bc/' },
              { text: 'IDColab — Zero Trust', link: '/es/idcolab/' },
              { text: 'Nexus — Orchestrator', link: '/es/nexus/' },
            ],
          },
          {
            text: 'Herramientas',
            items: [
              { text: 'Gemini CLI', link: '/es/tools/gemini-cli' },
            ],
          },
        ],
        sidebar: {
          '/es/bc/': [
            {
              text: 'BC — AML Platform',
              items: [
                { text: 'Visión General', link: '/es/bc/' },
                { text: 'Arquitectura', link: '/es/bc/architecture' },
                { text: 'Product Guidelines', link: '/es/bc/guidelines' },
                { text: 'Tech Stack', link: '/es/bc/tech-stack' },
              ],
            },
            {
              text: 'Requisitos Funcionales',
              collapsed: false,
              items: [
                { text: 'Global UI & Navegación', link: '/es/bc/requirements/global-ui' },
                { text: 'Risk Dashboards', link: '/es/bc/requirements/risk-dashboards' },
                { text: 'Policy Management', link: '/es/bc/requirements/policy-management' },
                { text: 'Review Checklist', link: '/es/bc/requirements/review-checklist' },
              ],
            },
            {
              text: 'Desarrollo',
              collapsed: false,
              items: [
                { text: 'Workflow', link: '/es/bc/development/workflow' },
                { text: 'Styleguide — General', link: '/es/bc/development/styleguide-general' },
                { text: 'Styleguide — TypeScript', link: '/es/bc/development/styleguide-typescript' },
                { text: 'Styleguide — HTML/CSS', link: '/es/bc/development/styleguide-html-css' },
                { text: 'Styleguide — Python', link: '/es/bc/development/styleguide-python' },
              ],
            },
            {
              text: 'Ingesta & Edge',
              collapsed: false,
              items: [
                { text: 'Arquitectura de Ingesta', link: '/es/bc/development/ingestion-architecture' },
                { text: 'Edge Connector', link: '/es/bc/development/edge-connector' },
                { text: 'Lógica Normativa AML', link: '/es/bc/development/aml-compliance' },
                { text: 'Roadmap', link: '/es/bc/development/roadmap' },
              ],
            },
          ],
          '/es/idcolab/': [
            {
              text: 'IDColab — Zero Trust',
              items: [
                { text: 'Visión General', link: '/es/idcolab/' },
                { text: 'Tech Stack', link: '/es/idcolab/tech-stack' },
                { text: 'Plan de Implementación', link: '/es/idcolab/implementation-plan' },
                { text: 'Reglas de Trabajo', link: '/es/idcolab/work-rules' },
                { text: 'Guía de Arranque', link: '/es/idcolab/restart-guide' },
              ],
            },
            {
              text: 'Entregables Técnicos',
              collapsed: false,
              items: [
                { text: 'Angular Schematic', link: '/es/idcolab/deliverables/angular-schematic' },
                { text: 'API Toolbox Keycloak', link: '/es/idcolab/deliverables/keycloak-api' },
              ],
            },
          ],
          '/es/nexus/': [
            {
              text: 'Nexus — Orchestrator',
              items: [
                { text: 'Visión General', link: '/es/nexus/' },
                { text: 'Tech Stack', link: '/es/nexus/tech-stack' },
                { text: 'Agentes & MCP', link: '/es/nexus/agents-mcp' },
                { text: 'Herramientas CLI', link: '/es/nexus/cli-tools' },
                { text: 'Content-as-Code', link: '/es/nexus/content-as-code' },
                { text: 'Gobernanza de Costes', link: '/es/nexus/cost-governance' },
              ],
            },
          ],
          '/es/tools/': [
            {
              text: 'Herramientas',
              items: [
                { text: 'Gemini CLI', link: '/es/tools/gemini-cli' },
              ],
            },
          ],
        },
        outline: { label: 'En esta página', level: [2, 3] },
        lastUpdated: { text: 'Última actualización' },
        docFooter: { prev: 'Anterior', next: 'Siguiente' },
        returnToTopLabel: 'Volver arriba',
        darkModeSwitchLabel: 'Tema',
        sidebarMenuLabel: 'Menú',
        search: {
          provider: 'local',
          options: {
            translations: {
              button: { buttonText: 'Buscar', buttonAriaLabel: 'Buscar' },
              modal: {
                noResultsText: 'Sin resultados para',
                resetButtonTitle: 'Limpiar búsqueda',
                footer: { selectText: 'seleccionar', navigateText: 'navegar', closeText: 'cerrar' },
              },
            },
          },
        },
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          {
            text: 'Projects',
            items: [
              { text: 'BC — AML Platform', link: '/en/bc/' },
              { text: 'IDColab — Zero Trust', link: '/en/idcolab/' },
              { text: 'Nexus — Orchestrator', link: '/en/nexus/' },
            ],
          },
          {
            text: 'Tools',
            items: [
              { text: 'Gemini CLI', link: '/en/tools/gemini-cli' },
            ],
          },
        ],
        sidebar: {
          '/en/bc/': [
            {
              text: 'BC — AML Platform',
              items: [
                { text: 'Overview', link: '/en/bc/' },
                { text: 'Architecture', link: '/en/bc/architecture' },
                { text: 'Product Guidelines', link: '/en/bc/guidelines' },
                { text: 'Tech Stack', link: '/en/bc/tech-stack' },
              ],
            },
            {
              text: 'Functional Requirements',
              collapsed: false,
              items: [
                { text: 'Global UI & Navigation', link: '/en/bc/requirements/global-ui' },
                { text: 'Risk Dashboards', link: '/en/bc/requirements/risk-dashboards' },
                { text: 'Policy Management', link: '/en/bc/requirements/policy-management' },
                { text: 'Review Checklist', link: '/en/bc/requirements/review-checklist' },
              ],
            },
            {
              text: 'Development',
              collapsed: false,
              items: [
                { text: 'Workflow', link: '/en/bc/development/workflow' },
                { text: 'Styleguide — General', link: '/en/bc/development/styleguide-general' },
                { text: 'Styleguide — TypeScript', link: '/en/bc/development/styleguide-typescript' },
                { text: 'Styleguide — HTML/CSS', link: '/en/bc/development/styleguide-html-css' },
                { text: 'Styleguide — Python', link: '/en/bc/development/styleguide-python' },
              ],
            },
            {
              text: 'Ingestion & Edge',
              collapsed: false,
              items: [
                { text: 'Ingestion Architecture', link: '/en/bc/development/ingestion-architecture' },
                { text: 'Edge Connector', link: '/en/bc/development/edge-connector' },
                { text: 'AML Regulatory Logic', link: '/en/bc/development/aml-compliance' },
                { text: 'Roadmap', link: '/en/bc/development/roadmap' },
              ],
            },
          ],
          '/en/idcolab/': [
            {
              text: 'IDColab — Zero Trust',
              items: [
                { text: 'Overview', link: '/en/idcolab/' },
                { text: 'Tech Stack', link: '/en/idcolab/tech-stack' },
                { text: 'Implementation Plan', link: '/en/idcolab/implementation-plan' },
                { text: 'Work Rules', link: '/en/idcolab/work-rules' },
                { text: 'Restart Guide', link: '/en/idcolab/restart-guide' },
              ],
            },
            {
              text: 'Technical Deliverables',
              collapsed: false,
              items: [
                { text: 'Angular Schematic', link: '/en/idcolab/deliverables/angular-schematic' },
                { text: 'Keycloak API Toolbox', link: '/en/idcolab/deliverables/keycloak-api' },
              ],
            },
          ],
          '/en/nexus/': [
            {
              text: 'Nexus — Orchestrator',
              items: [
                { text: 'Overview', link: '/en/nexus/' },
                { text: 'Tech Stack', link: '/en/nexus/tech-stack' },
                { text: 'Agents & MCP', link: '/en/nexus/agents-mcp' },
                { text: 'CLI Tools', link: '/en/nexus/cli-tools' },
                { text: 'Content-as-Code', link: '/en/nexus/content-as-code' },
                { text: 'Cost Governance', link: '/en/nexus/cost-governance' },
              ],
            },
          ],
          '/en/tools/': [
            {
              text: 'Tools',
              items: [
                { text: 'Gemini CLI', link: '/en/tools/gemini-cli' },
              ],
            },
          ],
        },
        outline: { label: 'On this page', level: [2, 3] },
        lastUpdated: { text: 'Last updated' },
        docFooter: { prev: 'Previous', next: 'Next' },
        returnToTopLabel: 'Back to top',
        darkModeSwitchLabel: 'Theme',
        sidebarMenuLabel: 'Menu',
        search: {
          provider: 'local',
        },
      },
    },
  },

  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: 'BlueUP',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/arnavarr' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/arturonavarro/' },
    ],

    footer: {
      message: 'Trust infrastructure for the AI era',
      copyright: '© 2026 BlueUP. All rights reserved.',
    },

    search: {
      provider: 'local',
    },
  },

  lastUpdated: true,

  markdown: {
    lineNumbers: true,
  },
});
