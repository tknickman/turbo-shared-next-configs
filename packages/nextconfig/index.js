const commonNextConfig = {
  reactStrictMode: true,
  experimental: {
    transpilePackages: ["ui"],
  },
};

const withCommonConfig = (nextConfig) => {
return {
  ...commonNextConfig,
  ...nextConfig
}
}

module.exports = {
  config: commonNextConfig,
  withCommonConfig
}