import { schema } from './schema';
import { query } from '../queries';
import { mutation } from '../mutations';

const resolvers = {
  ...query,
  ...mutation,
};

const resolver = resolvers;

export { schema, resolver };
