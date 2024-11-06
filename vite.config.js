import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import envCompatible from 'vite-plugin-env-compatible';

export default defineConfig({
  plugins: [react(), envCompatible({ prefix: 'VITE', mountedPath: 'process.env' })],
});

// import { defineConfig, loadEnv } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig(({ mode }) => {
//   // 環境変数をロード
//   const env = loadEnv(mode, process.cwd(), '')

//   return {
//     plugins: [react()],
//     define: {
//       'process.env': env
//     }
//   }
// })

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],

//   define: {
//         'process.env': import.meta.env
//   }
// })
