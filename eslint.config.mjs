import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";
import i18next from "eslint-plugin-i18next";
import jest from "eslint-plugin-jest";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

export default [
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
    {
        languageOptions: {
            globals: { ...globals.browser, __IS_DEV__: true, dirname: true },
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...fixupConfigRules(pluginReactConfig),
    ...compat.extends("plugin:react-hooks/recommended"),
    {
        files: ["**/*.test.{js,mjs,cjs,ts,jsx,tsx}"],
        ...jest.configs["flat/recommended"],
        rules: {
            ...jest.configs["flat/recommended"].rules,
            "jest/prefer-expect-assertions": "off",
        },
    },
    {
        rules: {
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
        },
    },
    // Переводы не нужны в test
    {
        files: ["**/src/**/*.test.{ts,tsx}"],
        rules: {
            "i18next/no-literal-string": "off",
        },
    },
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
        },
    },
    i18next.configs["flat/recommended"],
    eslintPluginPrettierRecommended,
];
