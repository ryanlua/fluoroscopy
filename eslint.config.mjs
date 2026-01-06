import minecraftLinting from "eslint-plugin-minecraft-linting";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["scripts/**/*.ts"],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: "latest",
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "minecraft-linting": minecraftLinting,
    },
    rules: {
      "minecraft-linting/avoid-unnecessary-command": "error",
    },
  },
];
