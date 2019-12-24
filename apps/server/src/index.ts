import { ApolloServer, gql } from 'apollo-server';

const users = [
	{
		name: 'Bill',
		password: '123456'
	}, {
		name: 'Ruby',
		password: '654321'
	}
];

const typeDefs = gql`
	type User {
		name: String
		password: String
	}
	type Query {
		users: [User]
	}
`;

const resolvers = {
	Query: {
		users: () => users
	}
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
	console.log(`Server ready at ${url}`);
});
