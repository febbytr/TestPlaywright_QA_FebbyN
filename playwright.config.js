// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
	screenshot: 'on',   
	trace: 'on',
	video: 'retain-on-failure'
  },
reporter: [['html', { open: 'never' }]],
});