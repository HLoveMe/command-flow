import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    cors:true,
    port:3000,
    proxy: {
      '/test':{
        target:"http://apis.juhe.cn",
        changeOrigin: true,
        rewrite:(path)=>{
          return "/simpleWeather/query"
        }
      }
    },
  },
})
