import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash/merge';

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';
import ResolutionsResolvers from '../../api/resolutions/resolvers';

import UserSchema from '../../api/users/User.graphql';
import UserResolvers from '../../api/users/resolvers';

import GoalsSchema from '../../api/goals/Goals.graphql';
import GoalsResolver from '../../api/goals/resolvers';


// dada

const typeDefs = [
  ResolutionsSchema,
  UserSchema,
  GoalsSchema
];

const resolvers = merge(
  ResolutionsResolvers, UserResolvers, GoalsResolver
);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({
  schema
});