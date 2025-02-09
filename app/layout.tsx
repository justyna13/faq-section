import './globals.css';

import { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import { cn } from '@/utils/lib/tailwind';

export const metadata: Metadata = {
	title: 'Faq',
	description: 'Faq section component',
};

const workSans = Work_Sans({
	variable: '--work-sans',
	weight: ['400', '600', '700'],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					'min-h-screen bg-background font-work-sans text-base text-foreground antialiased',
					workSans.variable,
				)}
			>
				{children}
			</body>
		</html>
	);
}
