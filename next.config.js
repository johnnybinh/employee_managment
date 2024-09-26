/** @type {import('next').NextConfig} */
var nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@node-rs/argon2"],
  },
};

module.exports = nextConfig;
