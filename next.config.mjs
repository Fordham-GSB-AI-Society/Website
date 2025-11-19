// next.config.mjs
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(onnx|wasm)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/models/[name][ext]',
      },
    });
    return config;
  },
  // Increased timeout for Python model training during build
  staticPageGenerationTimeout: 300,
};

export default nextConfig;