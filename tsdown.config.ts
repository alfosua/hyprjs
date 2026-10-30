import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  platform: 'node', // Optimizes for Node.js (externalizes node:* built-ins)
  format: ['esm', 'cjs'], // Dual ESM (.mjs) + CommonJS (.cjs)
  dts: true, // Generates .d.mts and .d.cts via Oxc
  sourcemap: true,
  clean: true,
  exports: true, // Auto-writes main, module, types, and exports to package.json
  publint: true, // Validates package.json exports on build
  attw: true, // Validates TypeScript module resolution on build
})
