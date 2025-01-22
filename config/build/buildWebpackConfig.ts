import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugin } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";
import webpack from 'webpack';

export function buildWebpackConfig(options: BuildOptions):webpack.Configuration{
    const {mode, paths, isDev} = options

    return {
        mode,
        entry: paths.entry,
        devtool: isDev ? 'inline-source-map': undefined,
        output: {
          filename: '[name].[contenthash].bundle.js',
          path: paths.build,
          clean: true,
        },
        module: {
          rules: buildLoaders(options)
        },
        resolve: buildResolvers(),
        plugins: buildPlugin(options),
        devServer: isDev ? buildDevServer(options) : undefined,
        performance: {
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        }
      }
}