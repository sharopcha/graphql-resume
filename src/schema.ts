import { makeSchema } from '@nexus/schema';
import path from 'path';
import * as types from './allTypes';

export const schema = makeSchema({
  types,
  outputs: {
    schema: path.resolve('./src/generated/schema.graphql'),
    typegen: path.resolve('./src/generated/nexus.ts'),
  },
  typegenAutoConfig: {
    sources: [
      {
        alias: 'faces',
        source: path.resolve('./src/interfaces.ts'),
        typeMatch: type => new RegExp(`(${type}Interface)`),
      },
    ],
    backingTypeMap: {
      Date: 'Date',
      URL: 'URL',
    },
    debug: process.env.NODE_ENV === 'development',
  },
});
