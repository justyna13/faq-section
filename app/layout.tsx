import './globals.css';

import { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import { cn } from '@/utils/lib/tailwind';

export const metadata: Metadata = {
	title: 'Faq',
	description: 'Faq section component',
};

const workSans = Work_Sans({
	subsets: ['latin'],
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
					'min-h-screen font-work-sans text-base antialiased',
					workSans.variable,
				)}
			>
				<div className="relative min-h-screen bg-pink p-4">
					<div className="absolute left-0 top-0 z-0 h-[200px] w-full bg-[url('/background-pattern-mobile.svg')] bg-cover bg-center md:h-[42vh] md:bg-[url('/background-pattern-desktop.svg')]" />
					<div className="relative z-10 mt-[95px] flex justify-center md:mt-0 md:min-h-screen md:items-center">
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}
