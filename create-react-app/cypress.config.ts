import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
      webpackConfig: {
        devServer: {
          port: 3000
        }
      }
    },
  },
});
