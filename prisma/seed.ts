import { PrismaClient, Role, VerificationStatus } from '@prisma/client';
import * as argon2 from 'argon2';
import { dataUri } from './data_url';

const prisma = new PrismaClient();

async function main() {
	console.log('Purging existing data...');

	await prisma.feedback.deleteMany({});
	await prisma.post.deleteMany({});
	await prisma.skillNodeUser.deleteMany({});
	await prisma.skillTreeUser.deleteMany({});
	await prisma.skillNode.deleteMany({});
	await prisma.skillTree.deleteMany({});
	await prisma.tag.deleteMany({});
	await prisma.event.deleteMany({});
	await prisma.user.deleteMany({});

	console.log('Existing data purged.');

	console.log('Creating new seed data...');
	const user1 = await prisma.user.create({
		data: {
			name: 'User',
			email: 'user@example.com',
			dateOfBirth: new Date('1990-01-01'),
			hash: await argon2.hash('string'),
			pfp: '',
		},
	});
	const user2 = await prisma.user.create({
		data: {
			name: 'Bob',
			email: 'bob@example.com',
			dateOfBirth: new Date('1992-02-02'),
			hash: await argon2.hash('password456'),
			pfp: '',
		},
	});

	const user3 = await prisma.user.create({
		data: {
			name: 'Charlie',
			email: 'charlie@example.com',
			dateOfBirth: new Date('1988-05-15'),
			hash: await argon2.hash('password789'),
			pfp: '',
			xpPoint: 250,
		},
	});

	const user4 = await prisma.user.create({
		data: {
			name: 'Diana',
			email: 'diana@example.com',
			dateOfBirth: new Date('1995-11-20'),
			hash: await argon2.hash('passwordabc'),
			pfp: '',
			xpPoint: 180,
		},
	});

	const user5 = await prisma.user.create({
		data: {
			name: 'Eve',
			email: 'eve@example.com',
			dateOfBirth: new Date('1993-03-08'),
			hash: await argon2.hash('passworddef'),
			pfp: '',
			xpPoint: 320,
		},
	});

	const tag1 = await prisma.tag.create({
		data: {
			name: 'Programming',
		},
	});
	const tag2 = await prisma.tag.create({
		data: {
			name: 'Math',
			isRestricted: true,
			restrictionDescription: 'Restricted for some users.',
		},
	});

	const tag3 = await prisma.tag.create({
		data: {
			name: 'Design',
		},
	});

	const tag4 = await prisma.tag.create({
		data: {
			name: 'Data Science',
		},
	});

	const tag5 = await prisma.tag.create({
		data: {
			name: 'Mobile Development',
		},
	});

	const tag6 = await prisma.tag.create({
		data: {
			name: 'DevOps',
		},
	});

	const skillTree1 = await prisma.skillTree.create({
		data: {
			name: 'Web Development',
			description: 'Learn to build websites',
			creator: { connect: { id: user1.id } },
			skillTreeUser: {
				create: {
					user: { connect: { id: user1.id } },
					role: Role.ADMIN,
					verificationStatus: VerificationStatus.VERIFIED,
				},
			},
			tags: { connect: [{ id: tag1.id }] },
		},
	});

	const skillTree2 = await prisma.skillTree.create({
		data: {
			name: 'Data Science Fundamentals',
			description: 'Master the basics of data science and analytics',
			creator: { connect: { id: user3.id } },
			skillTreeUser: {
				create: {
					user: { connect: { id: user3.id } },
					role: Role.ADMIN,
					verificationStatus: VerificationStatus.VERIFIED,
				},
			},
			tags: { connect: [{ id: tag4.id }, { id: tag2.id }] },
		},
	});

	const skillTree3 = await prisma.skillTree.create({
		data: {
			name: 'Mobile App Development',
			description: 'Build mobile applications for iOS and Android',
			creator: { connect: { id: user4.id } },
			skillTreeUser: {
				create: {
					user: { connect: { id: user4.id } },
					role: Role.ADMIN,
					verificationStatus: VerificationStatus.VERIFIED,
				},
			},
			tags: { connect: [{ id: tag5.id }, { id: tag1.id }] },
		},
	});

	const skillTree4 = await prisma.skillTree.create({
		data: {
			name: 'UI/UX Design',
			description: 'Learn user interface and user experience design',
			creator: { connect: { id: user5.id } },
			skillTreeUser: {
				create: {
					user: { connect: { id: user5.id } },
					role: Role.ADMIN,
					verificationStatus: VerificationStatus.VERIFIED,
				},
			},
			tags: { connect: [{ id: tag3.id }] },
		},
	});

	const node1 = await prisma.skillNode.create({
		data: {
			name: 'HTML Basics',
			description: 'Learn HTML',
			skillTree: { connect: { id: skillTree1.id } },
		},
	});
	const node2 = await prisma.skillNode.create({
		data: {
			name: 'CSS Basics',
			description: 'Learn CSS',
			skillTree: { connect: { id: skillTree1.id } },
			parentNode: { connect: { id: node1.id } },
		},
	});

	const node3 = await prisma.skillNode.create({
		data: {
			name: 'JavaScript Fundamentals',
			description: 'Learn JavaScript programming',
			skillTree: { connect: { id: skillTree1.id } },
			parentNode: { connect: { id: node2.id } },
		},
	});

	const node4 = await prisma.skillNode.create({
		data: {
			name: 'Python Basics',
			description: 'Learn Python programming for data science',
			skillTree: { connect: { id: skillTree2.id } },
		},
	});

	const node5 = await prisma.skillNode.create({
		data: {
			name: 'Pandas & NumPy',
			description: 'Data manipulation with Python libraries',
			skillTree: { connect: { id: skillTree2.id } },
			parentNode: { connect: { id: node4.id } },
		},
	});

	const node6 = await prisma.skillNode.create({
		data: {
			name: 'React Native Setup',
			description: 'Set up development environment for React Native',
			skillTree: { connect: { id: skillTree3.id } },
		},
	});

	const node7 = await prisma.skillNode.create({
		data: {
			name: 'Building Your First App',
			description: 'Create a simple mobile application',
			skillTree: { connect: { id: skillTree3.id } },
			parentNode: { connect: { id: node6.id } },
		},
	});

	const node8 = await prisma.skillNode.create({
		data: {
			name: 'Design Principles',
			description: 'Learn fundamental design principles',
			skillTree: { connect: { id: skillTree4.id } },
		},
	});

	const node9 = await prisma.skillNode.create({
		data: {
			name: 'Figma Basics',
			description: 'Learn to use Figma for UI design',
			skillTree: { connect: { id: skillTree4.id } },
			parentNode: { connect: { id: node8.id } },
		},
	});

	await prisma.skillTreeUser.create({
		data: {
			skillTreeId: skillTree1.id,
			userId: user2.id,
			role: Role.MEMBER,
			verificationStatus: VerificationStatus.PENDING,
		},
	});

	await prisma.skillTreeUser.create({
		data: {
			skillTreeId: skillTree2.id,
			userId: user1.id,
			role: Role.MEMBER,
			verificationStatus: VerificationStatus.VERIFIED,
		},
	});

	await prisma.skillTreeUser.create({
		data: {
			skillTreeId: skillTree3.id,
			userId: user2.id,
			role: Role.MEMBER,
			verificationStatus: VerificationStatus.PENDING,
		},
	});

	await prisma.skillNodeUser.create({
		data: {
			skillNodeId: node1.id,
			userId: user1.id,
			xpPoint: 50,
		},
	});
	await prisma.skillNodeUser.create({
		data: {
			skillNodeId: node2.id,
			userId: user2.id,
			xpPoint: 30,
		},
	});

	await prisma.skillNodeUser.create({
		data: {
			skillNodeId: node3.id,
			userId: user1.id,
			xpPoint: 75,
		},
	});

	await prisma.skillNodeUser.create({
		data: {
			skillNodeId: node4.id,
			userId: user3.id,
			xpPoint: 100,
		},
	});

	await prisma.skillNodeUser.create({
		data: {
			skillNodeId: node4.id,
			userId: user1.id,
			xpPoint: 85,
		},
	});

	await prisma.skillNodeUser.create({
		data: {
			skillNodeId: node5.id,
			userId: user3.id,
			xpPoint: 90,
		},
	});

	await prisma.skillNodeUser.create({
		data: {
			skillNodeId: node6.id,
			userId: user4.id,
			xpPoint: 100,
		},
	});

	await prisma.skillNodeUser.create({
		data: {
			skillNodeId: node8.id,
			userId: user5.id,
			xpPoint: 95,
		},
	});

	const post1 = await prisma.post.create({
		data: {
			content: 'Completed HTML basics!',
			proofMedia: dataUri,
			skillNode: { connect: { id: node1.id } },
			likes: { connect: [{ id: user2.id }] },
			creator: { connect: { id: user1.id } },
		},
	});

	const post2 = await prisma.post.create({
		data: {
			content:
				'Just finished learning JavaScript fundamentals! Built my first interactive webpage.',
			proofMedia: dataUri,
			skillNode: { connect: { id: node3.id } },
			likes: { connect: [{ id: user2.id }, { id: user3.id }] },
			creator: { connect: { id: user2.id } },
		},
	});

	const post3 = await prisma.post.create({
		data: {
			content:
				'Successfully completed Python basics course. Ready for data manipulation!',
			proofMedia: dataUri,
			skillNode: { connect: { id: node4.id } },
			likes: { connect: [{ id: user1.id }, { id: user4.id }] },
			creator: { connect: { id: user3.id } },
		},
	});

	const post4 = await prisma.post.create({
		data: {
			content:
				"Built my first React Native app! It's a simple todo list but I'm proud of it.",
			proofMedia: dataUri,
			skillNode: { connect: { id: node7.id } },
			likes: { connect: [{ id: user3.id }, { id: user5.id }] },
			creator: { connect: { id: user4.id } },
		},
	});

	const post5 = await prisma.post.create({
		data: {
			content:
				'Created my first UI design in Figma following design principles.',
			proofMedia: dataUri,
			skillNode: { connect: { id: node9.id } },
			likes: {
				connect: [{ id: user1.id }, { id: user2.id }, { id: user4.id }],
			},
			creator: { connect: { id: user5.id } },
		},
	});

	await prisma.feedback.create({
		data: {
			verifierId: user2.id,
			postId: post1.id,
			feedbackText: 'Great job!',
			multiplier: 2,
		},
	});

	await prisma.feedback.create({
		data: {
			verifierId: user3.id,
			postId: post2.id,
			feedbackText:
				'Excellent work on the JavaScript project! The interactivity is well implemented.',
			multiplier: 3,
		},
	});

	await prisma.feedback.create({
		data: {
			verifierId: user1.id,
			postId: post3.id,
			feedbackText:
				'Solid foundation in Python. Your code structure looks clean.',
			multiplier: 2,
		},
	});

	await prisma.feedback.create({
		data: {
			verifierId: user5.id,
			postId: post4.id,
			feedbackText: 'Amazing first app! The user interface is intuitive.',
			multiplier: 4,
		},
	});

	await prisma.feedback.create({
		data: {
			verifierId: user2.id,
			postId: post5.id,
			feedbackText:
				'Beautiful design! You really understood the design principles.',
			multiplier: 3,
		},
	});

	const event1 = await prisma.event.create({
		data: {
			title: 'Hackathon',
			isRanked: true,
			xpPayout: 500,
			users: { connect: [{ id: user1.id }, { id: user2.id }] },
			startDate: new Date('2025-08-01'),
			endDate: new Date('2025-08-02'),
			winner: { connect: { id: user1.id } },
		},
	});

	const event2 = await prisma.event.create({
		data: {
			title: 'Data Science Challenge',
			isRanked: true,
			xpPayout: 300,
			users: {
				connect: [{ id: user1.id }, { id: user3.id }, { id: user4.id }],
			},
			startDate: new Date('2025-08-15'),
			endDate: new Date('2025-08-16'),
			winner: { connect: { id: user3.id } },
		},
	});

	const event3 = await prisma.event.create({
		data: {
			title: 'Mobile App Showcase',
			isRanked: false,
			xpPayout: 200,
			users: {
				connect: [{ id: user2.id }, { id: user4.id }, { id: user5.id }],
			},
			startDate: new Date('2025-09-01'),
			endDate: new Date('2025-09-01'),
		},
	});

	const event4 = await prisma.event.create({
		data: {
			title: 'Design Competition',
			isRanked: true,
			xpPayout: 400,
			users: {
				connect: [{ id: user1.id }, { id: user3.id }, { id: user5.id }],
			},
			startDate: new Date('2025-09-10'),
			endDate: new Date('2025-09-12'),
			winner: { connect: { id: user5.id } },
		},
	});

	const event5 = await prisma.event.create({
		data: {
			title: 'Weekly Coding Meetup',
			isRanked: false,
			xpPayout: 50,
			users: {
				connect: [
					{ id: user1.id },
					{ id: user2.id },
					{ id: user3.id },
					{ id: user4.id },
					{ id: user5.id },
				],
			},
			startDate: new Date('2025-08-30'),
			endDate: new Date('2025-08-30'),
		},
	});

	console.log('Database seeded successfully.');
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
