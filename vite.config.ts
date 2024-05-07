import dotenv from 'dotenv'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
dotenv.config()
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
	},
	define: {
		'process.env': process.env,
		__APP_ENV__: process.env.VITE_VERCEL_ENV,
	},
	css: {
		devSourcemap: true,
	},
})
