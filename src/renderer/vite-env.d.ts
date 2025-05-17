/// <reference types="vite/client" />
// Extend ImportMeta interface to include 'env'
interface ImportMetaEnv {
  readonly DEV: boolean;
  // add other env variables if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
