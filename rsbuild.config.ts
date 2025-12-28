import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: "Positivus | Home",
    meta: {
      description: "A Landing page for a company called positivus",
    }
  }
});
