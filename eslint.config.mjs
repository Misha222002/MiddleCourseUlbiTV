import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";
import i18next from "eslint-plugin-i18next";
import jest from "eslint-plugin-jest";
import myCustomPlugin from "eslint-plugin-import-path-correct";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import { FlatCompat } from "@eslint/eslintrc";
import unusedImports from "eslint-plugin-unused-imports";
import importPlugin from "eslint-plugin-import";
import js from "@eslint/js";

const compat = new FlatCompat();

export default [
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    { ignores: [".fttemplates/**/*"] },
    { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
    {
        languageOptions: {
            globals: {
                ...globals.browser,

                __IS_DEV__: true,
                __API__: true,
                __PROJECT__: true,
                dirname: true,
            },
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...fixupConfigRules(pluginReactConfig),
    ...compat.extends("plugin:react-hooks/recommended"),
    js.configs.recommended,
    importPlugin.flatConfigs.recommended,
    {
        files: ["**/*.test.{js,mjs,cjs,ts,jsx,tsx}"],
        ...jest.configs["flat/recommended"],
        rules: {
            ...jest.configs["flat/recommended"].rules,
            "jest/prefer-expect-assertions": "off",
        },
    },
    {
        plugins: {
            "custom-plugin": myCustomPlugin,
            "unused-imports": unusedImports,
        },
        rules: {
            "unused-imports/no-unused-imports": "error",
            "react/jsx-indent": [2, 4],
            "react/jsx-indent-props": [2, 4],
            indent: [2, 4],
            "react/jsx-filename-extension": [
                2,
                { extensions: [".js", ".jsx", ".tsx"] },
            ],
            "react/display-name": "off",
            "import/no-unresolved": "off",
            "import/prefer-default-export": "off",
            "no-unused-vars": "warn",
            "react/require-default-props": "off",
            "react/react-in-jsx-scope": "off",
            "react/jsx-props-no-spreading": "warn",
            "react/function-component-definition": "off",
            "no-shadow": "off",
            "import/extensions": "off",
            "import/no-extraneous-dependencies": "off",
            "no-underscore-dangle": "off",
            "@typescript-eslint/no-unused-vars": [
                "warn",
                { argsIgnorePattern: "^_" },
            ],
            "@typescript-eslint/no-explicit-any": "warn",
            "i18next/no-literal-string": ["error", { markupOnly: true }],
            "prettier/prettier": [
                "error",
                { tabWidth: 4, useTabs: false, endOfLine: "auto" },
            ],
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "error",
            "@typescript-eslint/no-empty-object-type": "off",
            "custom-plugin/path-checker": ["error", { alias: "@" }],
            "custom-plugin/publick-api-imports": [
                "error",
                {
                    alias: "@",
                    testFilesPatterns: [
                        "**/*.test.*",
                        "**/*.story.*",
                        "**/StoreDecorator.tsx",
                    ],
                },
            ],
            "custom-plugin/layer-imports": [
                "error",
                {
                    alias: "@",
                    ignoreImportPatterns: ["**/StoreProvider", "**/testing"],
                },
            ],
        },
        ignores: [".fttemplates/**"],
    },
    // Переводы не нужны в test
    {
        files: ["**/src/**/*.test.{ts,tsx}"],
        rules: {
            "i18next/no-literal-string": "off",
        },
    },
    {
        files: ["**/*.{js,mjs,cjs,ts,tsx}"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
        },
        rules: {
            "no-unused-vars": "off",
            "import/no-dynamic-require": "warn",
            "import/no-nodejs-modules": "warn",
            "import/order": [
                "error",
                {
                    groups: ["builtin", "external", "internal"],
                    pathGroups: [
                        {
                            pattern: "react",
                            group: "external",
                            position: "before",
                        },
                        {
                            pattern: "@/**",
                            group: "external",
                            position: "after",
                        },
                    ],
                    pathGroupsExcludedImportTypes: ["react"],
                    "newlines-between": "always",
                    alphabetize: {
                        order: "asc",
                        caseInsensitive: true,
                    },
                },
            ],
        },
    },
    {
        files: ["*.json"],
        rules: {
            "array-element-newline": ["error", "always"],
        },
        ignores: [
            "package.json",
            ".fttemplates/**",
            "tsconfig.json",
            "babel.config.json",
        ],
    },
    {
        files: ["scripts/**/*.js", "*.config.js", "clear-cache.js"],
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
        rules: {
            "import/no-nodejs-modules": "off", // Разрешаем Node.js модули
            "@typescript-eslint/no-require-imports": "off", // Разрешаем require
        },
    },
    i18next.configs["flat/recommended"],
    eslintPluginPrettierRecommended,
];
