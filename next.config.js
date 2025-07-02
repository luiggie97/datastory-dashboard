/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    'antd',
    '@ant-design/icons',
    'rc-util',
    'rc-pagination'
  ],
  experimental: {
    esmExternals: false
  },
};

module.exports = nextConfig;
