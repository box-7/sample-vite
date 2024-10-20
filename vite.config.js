import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // defineオプションは不要
})



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
