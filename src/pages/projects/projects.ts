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
		description: 'A gym management system that allows you to manage your gym members, plans, and payments.',
		demoLink: 'https://links.hanifcarroll.com/gym-management',
		sourceLink: 'https://github.com/hanifcarroll/gym-management-client-react',
		tags: ['React', 'Node', 'Express', 'Supabase']
	},
	{
		name: 'Weekly Digest',
		description: 'A weekly digest that sends you an email with the top posts from HackerNews and selected subreddits.',
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
		description: 'Mobile app to help you decide where to eat.',
		sourceLink: 'https://github.com/HanifCarroll/pick-my-eats-mobile',
		tags: ['React Native', 'Expo']
	}
];
