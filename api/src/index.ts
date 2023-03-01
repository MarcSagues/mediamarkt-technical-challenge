import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import { schema, resolver } from './schema';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  '/',
  graphqlHTTP((request, response, graphQLParams) => ({
    schema,
    rootValue: resolver,
    graphiql: true,
    context: {
      request,
      response,
    },
  })),
);
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/');
