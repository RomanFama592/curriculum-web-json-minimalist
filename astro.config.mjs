import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    server: {
        port: 8082
    },
    vite: {
        // use "usePolling: true" in case of using dev container, otherwise set to "false" 
        server: {
            watch: {
                usePolling: true
            }
        }
    },
});
