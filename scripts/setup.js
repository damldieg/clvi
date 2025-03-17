const fs = require("fs");
const path = require("path");

const filesToCopy = [
  "eslint-config.js",
  "prettier-config.js",
  "tsconfig.json",
  "vite.config.ts",
  "jest.config.ts",
  "commitlint.config.js",
  ".gitignore",
];

filesToCopy.forEach((file) => {
  fs.copyFileSync(
    path.join(__dirname, "configs", file),
    path.join(process.cwd(), file)
  );
});

console.log("✅ Configuraciones aplicadas exitosamente.");
