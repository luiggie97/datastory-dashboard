
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  documents: "./graphql/**/*.ts",
  generates: {
    "./graphql/generated/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
