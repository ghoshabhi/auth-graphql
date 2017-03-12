const graphql = require('graphql');
const {
  GraphQLObjectType,
  GrpahQLString
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    email: { type: GrpahQLString }
  }
});

export default UserType;
