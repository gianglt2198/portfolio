/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // allow the local SVG placeholder used on the Work page to be served
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
  },
};

export default nextConfig;
