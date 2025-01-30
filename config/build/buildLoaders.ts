import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import ReactRefreshTypeScript from "react-refresh-typescript";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
                plugins: [
                    [
                        "i18next-extract",
                        {
                            locales: ["ru", "en"],
                            keyAsDefaultValue: ["en_US", "en_GB"],
                        },
                        isDev && require.resolve("react-refresh/babel"),
                    ].filter(Boolean),
                ],
            },
        },
    };

    const filesLoader = {
        test: /\.png|jpg|gif/,
        type: "asset/resource",
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: true,
                        localIdentName: isDev
                            ? "[path][name]__[local]--[hash:base64:8]"
                            : "[hash:base64:8]",
                    },
                },
            },
            "sass-loader",
        ],
    };

    const reactRefreshLoader = {
        test: /\.tsx?$/,
        use: [
            {
                loader: require.resolve("ts-loader"),
                options: {
                    getCustomTransformers: () => ({
                        before: [isDev && ReactRefreshTypeScript()].filter(
                            Boolean,
                        ),
                    }),
                    transpileOnly: isDev,
                },
            },
        ],
        exclude: /node_modules/,
    };

    return [filesLoader, svgLoader, babelLoader, reactRefreshLoader, cssLoader];
}
