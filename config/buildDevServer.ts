import { Configuration as DevServerConfiguration} from "webpack-dev-server";
import { BuildOptions } from "./build/types/config";

export function buildDevServer(options: BuildOptions): DevServerConfiguration{
    return {
        port: options.port,
        open: true,
    }
}