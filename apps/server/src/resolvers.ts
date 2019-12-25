const users = [
	{
		name: 'Bill',
		password: '123456'
	}, {
		name: 'Ruby',
		password: '654321'
	}
];

const resolvers = {
	Query: {
		users: () => users
	}
};

export default resolvers;
