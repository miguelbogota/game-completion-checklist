// Module generates the schema file from the typescript types
// Run with `pnpm generate:schema`.

import { writeFile } from 'fs';
import { createGenerator } from 'ts-json-schema-generator';

/** @type {import('ts-json-schema-generator/dist/src/Config').Config} */
const config = {
  schemaId: 'https://game-completion-checklist.github.io/game-completion-checklist/schema.json',
  path: 'types/checklist.d.ts',
  tsconfig: './tsconfig.json',
  type: '_AppChecklist',
  minify: true,
  sortProps: true,
  additionalProperties: false,
};

const outputPath = 'public/schema.json';

const schema = createGenerator(config).createSchema(config.type);
const schemaString = JSON.stringify(schema, null, 2);
writeFile(
  outputPath,
  schemaString,
  (err) => err && console.error('Error writing schema file:', err),
);
