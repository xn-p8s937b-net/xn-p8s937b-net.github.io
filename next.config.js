/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  distDir: 'docs',
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
}
