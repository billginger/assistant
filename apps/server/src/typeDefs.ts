import { gql } from 'apollo-server';

const typeDefs = gql`
	type User {
		name: String
		password: String
	}
	type Query {
		users: [User]
	}
`;

export default typeDefs;
