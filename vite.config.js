import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const cssFileName = 'index.min.css' 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir:'./public',
  server:{
    origin:'http://127.0.0.1:8000',
  },
  build:{
    outDir:'./Public',
    manifest:true,
    rollupOptions:{
      input: './src/main.jsx',
      output:{
        assetFileNames:(file)=>{
          return `assets/css/${cssFileName}`
        },
        entryFileNames : (file) =>{
          return `assets/js/[name].min.js`
        }
      }
    }
  }
})
