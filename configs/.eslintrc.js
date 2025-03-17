module.exports = {
  root: true, // Indica que esta es la configuración raíz y no heredará de otros archivos
  parser: "@typescript-eslint/parser", // Usa el parser de TypeScript para analizar el código
  parserOptions: {
    ecmaVersion: "latest", // Soporta las últimas versiones de ECMAScript
    sourceType: "module", // Permite el uso de `import` y `export`
    project: "./tsconfig.json", // Vincula ESLint con la configuración de TypeScript
  },
  env: {
    browser: true, // Habilita variables globales del navegador (ej. `window`, `document`)
    es2021: true, // Usa características de ECMAScript 2021
    node: true, // Habilita variables globales de Node.js
  },
  extends: [
    "eslint:recommended", // Reglas básicas de ESLint
    "plugin:@typescript-eslint/recommended", // Mejores prácticas para TypeScript
    "plugin:@typescript-eslint/recommended-requiring-type-checking", // Habilita reglas más estrictas con chequeo de tipos
    "plugin:prettier/recommended", // Integra ESLint con Prettier para evitar conflictos de formato
    "plugin:react/recommended", // Añade reglas específicas para React
    "plugin:react-hooks/recommended", // Reglas recomendadas para hooks de React
  ],
  plugins: ["@typescript-eslint", "react", "react-hooks"], // Usa los plugins de TypeScript, React y React Hooks
  rules: {
    "@typescript-eslint/explicit-function-return-type": "warn", // Recomienda definir los tipos de retorno en funciones
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }], // Marca variables no usadas como error, excepto si comienzan con "_"
    "@typescript-eslint/no-explicit-any": "warn", // Advierte si se usa `any`
    "@typescript-eslint/consistent-type-imports": "warn", // Prefiere `import type` para tipos en TS
    "prettier/prettier": ["error", { endOfLine: "auto" }], // Asegura que Prettier aplique el formato correctamente
    "react/prop-types": "off", // Desactiva la regla de PropTypes (ya que estás usando TypeScript para la tipificación)
    "react/react-in-jsx-scope": "off", // Desactiva la regla que requiere que React esté en el alcance en JSX (no necesario en React 17+)
    "react/jsx-uses-react": "off", // Desactiva la regla que verifica el uso de React en JSX (para React 17+)
    "react/jsx-uses-vars": "warn", // Previene el uso de variables sin usarse en JSX
    "react-hooks/rules-of-hooks": "error", // Asegura que los hooks se usen correctamente
    "react-hooks/exhaustive-deps": "warn", // Asegura que todos los efectos tengan las dependencias correctas
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"], // Aplica reglas solo a archivos TypeScript
      rules: {
        "@typescript-eslint/no-floating-promises": "error", // Evita promesas sin manejar (sin `await` o `.then()`)
      },
    },
  ],
};
