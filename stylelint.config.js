export default {
    extends: [
        "stylelint-config-standard-scss",
        "stylelint-prettier/recommended",
    ],
    plugins: ["stylelint-prettier"],
    rules: {
        "selector-class-pattern": null,
        "prettier/prettier": [
            true,
            {
                endOfLine: "auto",
            },
        ],
    },
};
