import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Preserve search rankings from the previous WordPress site.
  async redirects() {
    return [
      { source: "/retrofitting-of-nyulakahang-gumpa", destination: "/projects#nyulakahang-gumpa-retrofitting", permanent: true },
      { source: "/structural-design-and-construction-consultant", destination: "/projects#structural-design-construction-consultancy", permanent: true },
      { source: "/seepage-waterproofing", destination: "/services/waterproofing-seepage", permanent: true },
      { source: "/gallery", destination: "/projects", permanent: true },
      { source: "/feed", destination: "/insights", permanent: true },
      { source: "/comments/feed", destination: "/insights", permanent: true },
      { source: "/category/:path*", destination: "/projects", permanent: true },
    ];
  },
};

export default nextConfig;
