import webpack from "webpack";

import { buildBabelLoader } from "./loaders/buildBabelLoader";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };

    const filesLoader = {
        test: /\.png|jpg|gif/,
        type: "asset/resource",
    };

    const cssLoader = buildCssLoader(isDev);
    const codeBabelLoader = buildBabelLoader({ isTsx: false, isDev });
    const tsxCodeBabelLoader = buildBabelLoader({ isTsx: true, isDev });

    return [
        filesLoader,
        svgLoader,
        // babelLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,
        // reactRefreshLoader,
        cssLoader,
    ];
}
