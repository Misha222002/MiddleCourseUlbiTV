import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";
import i18next from "eslint-plugin-i18next";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import jest from "eslint-plugin-jest";

export default [
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
    { languageOptions: { globals: { ...globals.browser, __IS_DEV__: true } } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...fixupConfigRules(pluginReactConfig),
    {
        files: ["**/*test.{ts}"],
        ...jest.configs["flat/recommended"],
        rules: {
            ...jest.configs["flat/recommended"].rules,
            "jest/prefer-expect-assertions": "off",
        },
    },
    {
        rules: {
            indent: [2, 4],
            "react/jsx-indent": [2, 4],
            "react/jsx-indent-props": [2, 4],
            "react/jsx-filename-extension": [
                2,
                { extensions: [".js", ".jsx", ".tsx"] },
            ],
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
            "i18next/no-literal-string": ["error", { markupOnly: true }],
            "prettier/prettier": ["error", { tabWidth: 4, useTabs: false }],
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
