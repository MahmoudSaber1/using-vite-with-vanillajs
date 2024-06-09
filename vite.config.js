import Inspect from "vite-plugin-inspect";
import { resolve } from "path";

export default {
    plugins: [Inspect()],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                login: resolve(__dirname, "pages/login/index.html"),
                dashboard: resolve(__dirname, "pages/dashboard/index.html"),
            },
        },
    },
};
