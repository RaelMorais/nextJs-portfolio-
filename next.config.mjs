/** @type {import('next').NextConfig} */
const nextConfig = {
  // Sua configuração padrão do Next.js
};

export default {
  ...nextConfig,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};