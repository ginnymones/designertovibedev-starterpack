// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Vibe Coding Starter Pack',
			description: 'A guided, project-based path for designers who want to build real things with the help of AI.',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/ginnymones/designer-to-vibedeveloper-starter-pack' }],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Welcome', slug: 'welcome' },
						{ label: 'Day 0 — Setup & First AI Interaction', slug: 'phase-0/day-0' },
					],
				},
				{
					label: 'Phase 1: Color Palette Generator',
					items: [
						{ label: 'Day 1 — Your First Colors on Screen', slug: 'phase-1/day-1' },
						{ label: 'Day 2 — Making It Interactive', slug: 'phase-1/day-2' },
						{ label: 'Day 3 — Copy That Color', slug: 'phase-1/day-3' },
						{ label: 'Day 4 — Lock Your Favorites', slug: 'phase-1/day-4' },
						{ label: 'Day 5 — Save Your Palettes', slug: 'phase-1/day-5' },
						{ label: 'Day 6 — Polish & Personality', slug: 'phase-1/day-6' },
						{ label: 'Day 7 — Ship It', slug: 'phase-1/day-7' },
					],
				},
				{
					label: 'Phase 2: Product Landing Page',
					items: [
						{ label: 'Day 1 — Setting the Stage', slug: 'phase-2/day-1' },
						{ label: 'Day 2 — Features That Sell', slug: 'phase-2/day-2' },
						{ label: 'Day 3 — How It Works', slug: 'phase-2/day-3' },
						{ label: 'Day 4 — Social Proof', slug: 'phase-2/day-4' },
						{ label: 'Day 5 — Live Demo', slug: 'phase-2/day-5' },
						{ label: 'Day 6 — Navigation & Footer', slug: 'phase-2/day-6' },
						{ label: 'Day 7 — Responsive Deep-Dive', slug: 'phase-2/day-7' },
						{ label: 'Day 8 — Scroll Animations', slug: 'phase-2/day-8' },
						{ label: 'Day 9 — Contact Form', slug: 'phase-2/day-9' },
						{ label: 'Day 10 — Performance & Accessibility', slug: 'phase-2/day-10' },
						{ label: 'Day 11 — SEO & Social Sharing', slug: 'phase-2/day-11' },
						{ label: 'Day 12 — Final Polish', slug: 'phase-2/day-12' },
						{ label: 'Day 13 — Deploy & Custom Domain', slug: 'phase-2/day-13' },
						{ label: 'Day 14 — Share & Reflect', slug: 'phase-2/day-14' },
					],
				},
				{
					label: 'Phase 3: Design Portfolio',
					items: [
						{ label: 'Day 1 — Planning Your Portfolio', slug: 'phase-3/day-1' },
						{ label: 'Day 2 — About Page', slug: 'phase-3/day-2' },
						{ label: 'Day 3 — Project Grid', slug: 'phase-3/day-3' },
						{ label: 'Day 4 — Case Study: Palette Generator', slug: 'phase-3/day-4' },
						{ label: 'Day 5 — Case Study: Landing Page', slug: 'phase-3/day-5' },
						{ label: 'Day 6 — Project Page Interactions', slug: 'phase-3/day-6' },
						{ label: 'Day 7 — Contact Page', slug: 'phase-3/day-7' },
						{ label: 'Day 8 — Shared Navigation & Footer', slug: 'phase-3/day-8' },
						{ label: 'Day 9 — Responsive Across All Pages', slug: 'phase-3/day-9' },
						{ label: 'Day 10 — Performance & Loading', slug: 'phase-3/day-10' },
						{ label: 'Day 11 — SEO & Social Sharing', slug: 'phase-3/day-11' },
						{ label: 'Day 12 — Accessibility Pass', slug: 'phase-3/day-12' },
						{ label: 'Day 13 — Final Polish & Deploy', slug: 'phase-3/day-13' },
						{ label: 'Day 14 — Launch & What\'s Next', slug: 'phase-3/day-14' },
					],
				},
				{
					label: 'Bonus',
					items: [
						{ label: 'Resources & Next Steps', slug: 'resources' },
					],
				},
			],
		}),
	],
});
