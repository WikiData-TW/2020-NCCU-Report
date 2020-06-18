declare module "markdown-yaml-metadata-parser" {
  const parser: (
    yaml: string
  ) => {
    metadata: any;
    content: string;
  };
  export default parser;
}
