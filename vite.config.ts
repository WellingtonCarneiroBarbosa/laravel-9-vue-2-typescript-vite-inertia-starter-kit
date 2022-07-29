import {defineConfig} from "laravel-vite";
import {createVuePlugin as vue} from 'vite-plugin-vue2'
// @ts-ignore
const path = require('path');

export default defineConfig(
    {
        resolve: {
            alias: {
                ziggy: path.resolve('vendor/tightenco/ziggy/dist'),
                '@app': path.resolve('resources/views/Vue'),
            },
        },

        optimizeDeps: {
            include: ["ziggy"],
        },
    }
)
    .withPlugin(vue());
