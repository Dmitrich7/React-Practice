import {BuildOptions} from './build/types/config'
import webpack from "webpack";
import {buildPlugins} from "./build/buildPlugins";
import buildLoaders from "./build/buldLoaders";
import { buildResolvers } from "./build/buildResolvers";
import {buildDevServer} from "./build/buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration{
    const {paths, mode, isDev} = options;
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders()
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map':undefined,
        devServer: isDev ? buildDevServer(options):undefined,

    }
}