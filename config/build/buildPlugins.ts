import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildPlugin({paths}: BuildOptions):webpack.WebpackPluginInstance[]{
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({template: paths.html}),
    ]
}