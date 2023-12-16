import { CodegenConfig } from "@graphql-codegen/cli";
import { Types } from "@graphql-codegen/plugin-helpers";
import { TypeScriptPluginConfig } from "@graphql-codegen/typescript";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:5000/graphql",
  documents: "src/graphql/*.graphql",
  generates: {
    "src/generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHOC: false,
        withComponent: false,
        withHooks: true,
      } as Types.PluginConfig & TypeScriptPluginConfig,
    },
  },
};

export default config;
