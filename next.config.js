/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  reactStrictMode: true
};

if (assetPrefix !== '') {
  nextConfig.assetPrefix = assetPrefix;
}
if (basePath !== '') {
  nextConfig.basePath = basePath;
}

module.exports = nextConfig;
