/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
          test: /\.(mp4|webm|ogg|avi)$/,
          type: 'asset/resource',
        });
        return config;
      },
}

module.exports = nextConfig
