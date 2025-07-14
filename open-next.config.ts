import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // @ts-expect-error - workaround for TypeScript issue
  overrides: {
    server: {
      esbuild: {
        external: ["sharp"],
      },
    },
  },
});
