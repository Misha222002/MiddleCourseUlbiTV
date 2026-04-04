import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import CopyPlugin from "copy-webpack-plugin";
import CircularDependencyPlugin from "circular-dependency-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

export function buildPlugin({
    paths,
    isDev,
    apiUrl,
    project,
}: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins: (webpack.WebpackPluginInstance | false)[] = [
        isDev && new ReactRefreshWebpackPlugin(),
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ template: paths.html }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl) || "http://localhost:8000",
            __PROJECT__: JSON.stringify(project),
        }),

        new CopyPlugin({
            patterns: [{ from: paths.locales, to: paths.buildLocales }],
        }),

        isDev &&
            new BundleAnalyzerPlugin({
                openAnalyzer: false,
            }),
        isDev &&
            new CircularDependencyPlugin({
                exclude: /node_modules/,
                // include: /dir/,
                failOnError: true,
                // allowAsyncCycles: false,
                // cwd: process.cwd(),
            }),

        isDev &&
            new ForkTsCheckerWebpackPlugin({
                typescript: {
                    diagnosticOptions: {
                        semantic: true,
                        syntactic: true,
                    },
                    mode: "write-references",
                },
            }),
    ];

    return plugins.filter((plugin): plugin is webpack.WebpackPluginInstance =>
        Boolean(plugin),
    );
}
