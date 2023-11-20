import { staticAdapter } from "@builder.io/qwik-city/adapters/static/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";

import { SITE } from "../../src/config.mjs";
import { Constants } from "../../src/constants"

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ["@qwik-city-plan"],
      },
    },
    publicDir: "docs",
    plugins: [
      staticAdapter({
        origin: SITE.origin + Constants.RepoPath ,
        // base: '/kp/',

      }),
    ],
  };
});
