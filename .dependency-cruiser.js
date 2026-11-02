/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  forbidden: [
    // ─── 1. Circular dependency yasağı ───────────────────────────────────────
    {
      name: 'no-circular',
      severity: 'error',
      comment:
        'Döngüsel bağımlılık tespit edildi. Dependency inversion veya modül taşıma ile çözün.',
      from: {},
      to: {
        circular: true,
      },
    },

    // ─── 2. components/ → features/ yasağı ──────────────────────────────────
    {
      name: 'components-must-be-independent',
      severity: 'error',
      comment:
        "Global UI bileşenleri (components/) feature business logic'e bağımlı olamaz.",
      from: {
        path: '^components/',
      },
      to: {
        path: '^features/',
      },
    },

    // ─── 3. lib/ → features/ yasağı ─────────────────────────────────────────
    {
      name: 'lib-must-be-independent',
      severity: 'error',
      comment:
        "Core yardımcılar (lib/) feature business logic'e bağımlı olamaz.",
      from: {
        path: '^lib/',
      },
      to: {
        path: '^features/',
      },
    },

    // ─── 4. config/ → features/ yasağı ──────────────────────────────────────
    {
      name: 'config-must-be-independent',
      severity: 'error',
      comment:
        "Konfigürasyon dosyaları (config/) feature business logic'e bağımlı olamaz.",
      from: {
        path: '^config/',
      },
      to: {
        path: '^features/',
      },
    },

    // ─── 5. Cross-feature deep import yasağı ─────────────────────────────────
    {
      name: 'cross-feature-internal-isolation',
      severity: 'error',
      comment:
        "Bir feature başka bir feature'ın iç dosyalarına doğrudan import yapamaz; sadece index.ts üzerinden erişilebilir.",
      from: {
        path: '^features/([^/]+)/',
      },
      to: {
        path: '^features/([^/]+)/',
        pathNot: [
          '^features/$1/',
          '^features/[^/]+/index\\.ts$',
        ],
      },
    },
  ],

  options: {
    doNotFollow: {
      path: 'node_modules',
    },
    exclude: {
      path: [],
    },
    tsPreCompilationDeps: true,
    tsConfig: {
      fileName: 'tsconfig.json',
    },
    enhancedResolveOptions: {
      exportsFields: ['exports'],
      conditionNames: ['import', 'require', 'node', 'default'],
    },
  },
};
