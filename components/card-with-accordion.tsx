import Image from 'next/image';

import { TQuestion } from '@/types/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import FaqAccordion from '@/components/faq-accordion';

type TProps = {
	title: string;
	questions: TQuestion[];
};

export default async function CardWithAccordion({ title, questions }: TProps) {
	return (
		<Card className="max-w-[500px]">
			<CardHeader>
				<CardTitle className="flex items-center gap-2 text-2xl font-bold lg:gap-4 lg:text-4xl">
					<Image
						src="/icon-star.svg"
						alt="star"
						width={28}
						height={28}
					/>
					{title}
				</CardTitle>
			</CardHeader>
			<CardContent>
				<FaqAccordion questions={questions} />
			</CardContent>
		</Card>
	);
}
