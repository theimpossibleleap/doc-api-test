const nextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  plugins: (
    require.resolve('./plugins/webpackPolyfillPlugin')
  )
}

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra(nextConfig)
