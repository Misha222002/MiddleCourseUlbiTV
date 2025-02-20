import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";
import { BuildPaths } from "../build/types/config";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { DefinePlugin, RuleSetRule } from "webpack";

const config: StorybookConfig = {
    stories: ["../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-webpack5-compiler-swc",
        "@storybook/addon-onboarding",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    swc: () => ({
        jsc: {
            transform: {
                react: {
                    runtime: "automatic",
                },
            },
        },
    }),
    webpackFinal: async (config, { configType }) => {
        const paths: BuildPaths = {
            build: "",
            entry: "",
            html: "",
            src: path.resolve(__dirname, "..", "..", "src"),
        };

        config.resolve?.modules?.push(paths.src);
        config.resolve?.extensions?.push(".ts", ".tsx");

        if (config.module?.rules) {
            config.module.rules = config.module?.rules?.map(
                (
                    rule:
                        | RuleSetRule
                        | null
                        | undefined
                        | false
                        | 0
                        | ""
                        | "...",
                ) => {
                    if (
                        rule &&
                        rule !== "..." &&
                        /svg/.test(rule.test as string)
                    ) {
                        return { ...rule, exclude: /\.svg$/i };
                    }

                    return rule;
                },
            );
        }

        config.module?.rules?.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        config.plugins?.push(
            new DefinePlugin({
                __IS_DEV__: true,
            }),
        );

        config.module?.rules?.push(buildCssLoader(true));
        return config;
    },
};
export default config;
