/** @type {import('next').NextConfig} */
// next.config.js
const nextConfig = {
  webpack: (config, { isServer }) => {
    // .md ファイル用のローダーを追加
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });

    return config;
  },
};

export default nextConfig;
