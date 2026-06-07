/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // allow the local SVG placeholder used on the Work page to be served
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },
};

export default nextConfig;
