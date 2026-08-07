import type { NextConfig } from "next";
import { site } from "./src/lib/site";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // /apply used to host a form that collected applicant data but had no
      // submission endpoint. Applications are handled by Tix; send people there.
      { source: "/apply", destination: site.applyUrl, permanent: false },
    ];
  },
};

export default nextConfig;
