import type { IconType } from 'react-icons';
import { BiLogoTypescript } from 'react-icons/bi';
import { DiMongodb, DiMsqlServer } from 'react-icons/di';
import {
	FaBootstrap,
	FaGithub,
	FaLinkedinIn,
	FaNodeJs,
	FaReact,
} from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';
import {
	SiExpress,
	SiFastify,
	SiMui,
	SiMysql,
	SiShadcnui,
	SiTailwindcss,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

export type SocialLink = {
	label: string;
	href: string;
	icon: IconType;
	iconColor: string;
	glowColor: string;
};

export type NavButton = {
	label: string;
	href: string;
	className: string;
};

export type TimelineItem = {
	role: string;
	org: string;
	period: string;
	bullets: string[];
};

export type TimelineSection = {
	heading: string;
	items: TimelineItem[];
};

export type TechItem = {
	label: string;
	icon: IconType;
	iconColor: string;
	glowColor: string;
};

export type TechGroup = {
	heading: string;
	items: TechItem[];
};

export type Project = {
	title: string;
	description: string;
	techStack: TechItem[];
	link: string;
};

export const personal = {
	name: 'NABEEL',
	fullName: 'Nabeel Ahmed',
	title: 'Full Stack Developer',
	greeting: 'Hi, I am',
	repoUrl: 'https://github.com/nabeelpy',
	repoStarLabel: '⭐ Star this repo',
	showRepoStar: true,
};

export const socialLinks: SocialLink[] = [
	{
		label: 'GitHub',
		href: 'https://github.com/nabeelpy',
		icon: FaGithub,
		iconColor: 'rgba(255, 255, 255, 0.9)',
		glowColor: 'rgba(255, 255, 255, 0.4)',
	},
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/nabeel-ahmed-4746411b9/',
		icon: FaLinkedinIn,
		iconColor: 'rgb(0, 160, 220)',
		glowColor: 'rgba(0, 160, 220, 0.6)',
	},
	{
		label: 'Email',
		href: 'mailto:nabeel.py@gmail.com',
		icon: IoMailOutline,
		iconColor: 'rgb(18, 122, 209)',
		glowColor: 'rgba(18, 122, 209, 0.7)',
	},
];

export const navButtons: NavButton[] = [
	{ label: 'About Me', href: '/#about-me', className: 'first' },
	{ label: 'Projects', href: '/#projects', className: 'sec' },
	{ label: 'Tech', href: '/#tech-stack', className: 'third' },
];

export const about = {
	section: { title: 'About', subtitle: 'ME' },
	intro: [
		"👋 Hey, I'm Nabeel Ahmed, a Full Stack Developer.",
		"I've been working with Laravel, SQL and React for the past six years, building web applications that are fast, scalable and user-friendly.",
		"I like solving problems, learning new things, and experimenting with different technologies. When I'm not coding, I'm probably working on a side project or exploring something new.",
	],
	timeline: [
		{
			heading: 'Experience',
			items: [
				{
					role: 'Full Stack Developer',
					org: '@Wimetrix',
					period: '2022 - Present',
					bullets: [
						'Contributed significantly to the development of main project Sooperwizer, a pivotal project for automating and optimizing textile processes.',
						'Designed and developed multiple interactive data visualization dashboards.',
						'Built several Android applications using React Native.',
					],
				},
			],
		},
		{
			heading: 'Certification',
			items: [
				{
					role: 'Full Stack Developer',
					org: 'House of Professionals (HOP)',
					period: '2021 - 2022',
					bullets: [
						'Earned a Full Stack Development certification from the House of Professional Developers.',
						'Awarded for securing the top position in class, demonstrating strong skills and commitment.',
					],
				},
			],
		},
		{
			heading: 'Education',
			items: [
				{
					role: 'Bachelor of Science in Computer Science (BSCS)',
					org: 'Virtual University of Pakistan',
					period: '2022 - Present',
					bullets: [],
				},
			],
		},
	] satisfies TimelineSection[],
};

export const techStack = {
	section: { title: 'Tech', subtitle: 'SET' },
	groups: [
		{
			heading: 'Core Stack I Work With',
			items: [
				{
					label: 'Next JS',
					icon: TbBrandNextjs,
					iconColor: 'rgb(255, 255, 255)',
					glowColor: 'rgba(255, 255, 255, 0.4)',
				},
				{
					label: 'React JS',
					icon: FaReact,
					iconColor: 'rgb(97, 219, 251)',
					glowColor: 'rgba(97, 219, 251, 0.6)',
				},
				{
					label: 'Node JS',
					icon: FaNodeJs,
					iconColor: 'rgb(104, 160, 99)',
					glowColor: 'rgb(104, 160, 99)',
				},
				{
					label: 'TypeScript',
					icon: BiLogoTypescript,
					iconColor: 'rgb(0, 122, 204)',
					glowColor: 'rgba(0, 122, 204, 0.6)',
				},
				{
					label: 'Fastify',
					icon: SiFastify,
					iconColor: 'rgb(255, 255, 255)',
					glowColor: 'rgba(255, 255, 255, 0.4)',
				},
				{
					label: 'Express JS',
					icon: SiExpress,
					iconColor: 'rgb(255, 255, 255)',
					glowColor: 'rgba(255, 255, 255, 0.4)',
				},
			],
		},
		{
			heading: 'UI & Styling',
			items: [
				{
					label: 'Material UI',
					icon: SiMui,
					iconColor: 'rgb(0, 127, 255)',
					glowColor: 'rgba(0, 127, 255, 0.6)',
				},
				{
					label: 'ShadCn UI',
					icon: SiShadcnui,
					iconColor: 'rgb(255, 255, 255)',
					glowColor: 'rgba(255, 255, 255, 0.4)',
				},
				{
					label: 'Tailwind CSS',
					icon: SiTailwindcss,
					iconColor: 'rgb(6, 182, 212)',
					glowColor: 'rgba(6, 182, 212, 0.7)',
				},
				{
					label: 'Bootstrap',
					icon: FaBootstrap,
					iconColor: 'rgb(125, 17, 248)',
					glowColor: 'rgba(125, 17, 248, 0.75)',
				},
			],
		},
		{
			heading: 'Databases I Use',
			items: [
				{
					label: 'MsSQL',
					icon: DiMsqlServer,
					iconColor: 'rgb(230, 50, 42)',
					glowColor: 'rgba(241, 83, 75, 0.5)',
				},
				{
					label: 'MongoDB',
					icon: DiMongodb,
					iconColor: 'rgb(0, 237, 100)',
					glowColor: 'rgba(0, 237, 100, 0.7)',
				},
				{
					label: 'MySQL',
					icon: SiMysql,
					iconColor: 'rgb(0, 122, 158)',
					glowColor: 'rgba(0, 122, 158, 0.75)',
				},
			],
		},
	] satisfies TechGroup[],
};

export const projects = {
	section: { title: 'Projects', subtitle: 'WORK' },
	items: [
		{
			title: 'EcoTrack',
			description:
				'A sustainability tracking dashboard that helps users monitor their carbon footprint and discover eco-friendly alternatives.',
			link: 'https://github.com/Abdullahiqbal2021/eco-track',
			techStack: [
				{
					label: 'React',
					icon: FaReact,
					iconColor: 'rgb(97, 219, 251)',
					glowColor: 'rgba(97, 219, 251, 0.6)',
				},
				{
					label: 'Tailwind',
					icon: SiTailwindcss,
					iconColor: 'rgb(6, 182, 212)',
					glowColor: 'rgba(6, 182, 212, 0.7)',
				},
				{
					label: 'Node JS',
					icon: FaNodeJs,
					iconColor: 'rgb(104, 160, 99)',
					glowColor: 'rgb(104, 160, 99)',
				},
			],
		},
		{
			title: 'DevConnect',
			description:
				'A social platform for developers to share projects, collaborate on open-source, and find mentorship opportunities.',
			link: 'https://github.com/Abdullahiqbal2021/dev-connect',
			techStack: [
				{
					label: 'Next JS',
					icon: TbBrandNextjs,
					iconColor: 'rgb(255, 255, 255)',
					glowColor: 'rgba(255, 255, 255, 0.4)',
				},
				{
					label: 'TypeScript',
					icon: BiLogoTypescript,
					iconColor: 'rgb(0, 122, 204)',
					glowColor: 'rgba(0, 122, 204, 0.6)',
				},
				{
					label: 'MongoDB',
					icon: DiMongodb,
					iconColor: 'rgb(0, 237, 100)',
					glowColor: 'rgba(0, 237, 100, 0.7)',
				},
			],
		},
		{
			title: 'QuickCart',
			description:
				'A modern e-commerce solution with real-time inventory management, secure payments, and a seamless user experience.',
			link: 'https://github.com/Abdullahiqbal2021/quick-cart',
			techStack: [
				{
					label: 'React',
					icon: FaReact,
					iconColor: 'rgb(97, 219, 251)',
					glowColor: 'rgba(97, 219, 251, 0.6)',
				},
				{
					label: 'Express',
					icon: SiExpress,
					iconColor: 'rgb(255, 255, 255)',
					glowColor: 'rgba(255, 255, 255, 0.4)',
				},
				{
					label: 'MySQL',
					icon: SiMysql,
					iconColor: 'rgb(0, 122, 158)',
					glowColor: 'rgba(0, 122, 158, 0.75)',
				},
			],
		},
	] satisfies Project[],
};
