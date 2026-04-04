import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { buildBabelLoader } from "./loaders/buildBabelLoader";

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
