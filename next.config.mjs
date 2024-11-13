/** @type {import('next').NextConfig} */
const assetHosts =
  process?.env?.NEXT_PUBLIC_BASE_API_ASSET_HOSTNAME?.split(",");
const remotePatterns = assetHosts?.map((assetHost) => {
  return { hostname: assetHost };
});

const nextConfig = {
  images: {
    remotePatterns: remotePatterns,
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
