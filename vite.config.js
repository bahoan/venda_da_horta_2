import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 3000,
    strictPort: true,
    hmr: {
      clientPort: 3000,
      host: 'localhost'
    }
  },
  build: {
    modulePreload: {
      polyfill: false
    },
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
    },
    // Garantir que JSX seja transpilado corretamente
    assetsInlineLimit: 0,
    // Otimizações de minificação
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,  // Remove console.logs
        drop_debugger: true, // Remove debugger statements
        pure_funcs: ['console.log'], // Remove funções específicas
        passes: 2 // Múltiplos passes de otimização
      },
      mangle: {
        toplevel: true, // Mangle nomes no escopo global
      },
      format: {
        comments: false // Remove comentários
      }
    },
    // Otimizações gerais
    target: 'es2018',
    sourcemap: false,
    // Dividir chunks
    chunkSizeWarningLimit: 500,
    cssCodeSplit: true,
    reportCompressedSize: false
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: ['@supabase/supabase-js'], // Exclui bibliotecas grandes que não precisam de otimização
    esbuildOptions: {
      target: 'es2018',
      loader: {
        '.js': 'jsx',
        '.jsx': 'jsx'
      },
      treeShaking: true,
      minify: true,
      minifyIdentifiers: true,
      minifySyntax: true,
      minifyWhitespace: true,
      jsxFactory: 'React.createElement',
      jsxFragment: 'React.Fragment'
    }
  },
  esbuild: {
    loader: 'jsx',
    include: /\.(jsx|js)$/,
    exclude: [],
  },
  // Definição de variáveis de ambiente para o Supabase
  define: {
    'process.env.VITE_SUPABASE_URL': JSON.stringify(process.env.VITE_SUPABASE_URL),
    'process.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(process.env.VITE_SUPABASE_ANON_KEY),
    'process.env.VITE_FAVICON_URL': JSON.stringify(process.env.VITE_FAVICON_URL || '/vite.svg')
  }
})
