import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    // Previous: dev and production both used the default ".next" directory.
    // Keep a production build from replacing a running dev server's files.
    distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
    images: {
        formats: ["image/webp"],
        qualities: [65, 75, 100],
        minimumCacheTTL: 3600,
        remotePatterns: [
            {
                // protocol: "https",
                hostname: "**", // allow all hostnames temporarily
            },
        ],
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        // Previous: ignoreBuildErrors: true,
        ignoreBuildErrors: false,
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        // Previous: ignoreDuringBuilds: true,
        ignoreDuringBuilds: false,
    },
};

export default nextConfig;
