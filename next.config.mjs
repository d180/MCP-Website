// ...existing code...
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ...existing code...
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force Next to trace files relative to this repo folder and silence the lockfile warning
  outputFileTracingRoot: resolve(__dirname),
};

export default nextConfig;
// ...existing code...