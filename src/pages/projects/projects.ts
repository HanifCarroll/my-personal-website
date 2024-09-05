export interface Project {
	name: string;
	demoLink?: string;
	tags: string[];
	description?: string;
	sourceLink?: string;
}

export const projects: Project[] = [
	{
		name: 'Gym Management System',
		description: 'Manage your gym members, plans, and payments.',
		demoLink: 'https://links.hanifcarroll.com/gym-management',
		sourceLink: 'https://github.com/hanifcarroll/gym-management-client-react',
		tags: ['React', 'Node', 'Express', 'Supabase']
	},
	{
		name: 'Weekly Digest',
		description: 'Top posts from HackerNews and Reddit straight to your inbox.',
		sourceLink: 'https://github.com/HanifCarroll/weekly-digest',
		tags: ['Bun']
	},
	{
		name: 'Wikipedia Infinite Scroll',
		description: 'A tool to facilitate reading practice in foreign languages.',
		demoLink: 'https://wikipedia-infinite-scroll.netlify.app/',
		sourceLink: 'https://github.com/HanifCarroll/wikipedia-infinite-scroll',
		tags: ['React']
	},
	{
		name: 'Pick My Eats',
		description: 'Decide where to eat without the hassle.',
		sourceLink: 'https://github.com/HanifCarroll/pick-my-eats-mobile',
		tags: ['React Native', 'Expo']
	}
];
