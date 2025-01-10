import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { resolve } from 'path'
export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			// 将源目录(src)设置为别名‘@’
			'@': resolve(__dirname, 'src')
		},
	},
});
