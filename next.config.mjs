import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    contentFolderPath: path.resolve("./content"),
  },
};

export default nextConfig;
