import { buildSchema } from 'graphql';

export const schema = buildSchema(`
    type Query {
        order(limit: Int): [Order],
    }

    type Mutation {
        addOrder(line_items: [String]!): OrderResponse
        changeOrderState(id: Int!): OrderResponse
    }

    type Order {
        id: ID!
        current_state: String!
        customer_id: ID
        line_items: [String]!
        creation: String!
        last_update: String!
    }
    type
     OrderResponse {
        data: Order
        error: String
        ok: Boolean
    }
    
    type Customer {
        id: ID!
        name: String!
    }

`);
