import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";

export default [
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
    { languageOptions: { globals: { ...globals.browser, __IS_DEV__: true } } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...fixupConfigRules(pluginReactConfig),
    {
        rules: {
            "react/jsx-indent": [2, 4],
            "react/jsx-indent-props": [2, 4],
            indent: [2, 4],
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
            "@typescript-eslint/no-unused-vars": ['warn', { argsIgnorePattern: '^_' }]
        },
    },
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
        },
    },
];
