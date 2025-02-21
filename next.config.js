module.exports = {
  eslint: {
    // Ignore ESLint warnings during build
    ignoreDuringBuilds: true,
  },
  // Optional: If you need to configure the base path for your static site on GitHub Pages
  // basePath: '/your-repo-name', 
  trailingSlash: true, // Optional: add trailing slashes to URLs for consistency

  // Next.js will generate a static site in the `out` directory when using next export
  // Set the output to standalone only if necessary
  output: 'standalone',
}
