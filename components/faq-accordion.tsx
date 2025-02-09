import { TQuestion } from '@/types/types';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

type TProps = {
	questions: TQuestion[];
};

export default function FaqAccordion({ questions }: TProps) {
	return (
		<Accordion type="single" collapsible>
			{questions.map((question, i) => (
				<AccordionItem key={i} value={question.title}>
					<AccordionTrigger>{question.title}</AccordionTrigger>
					<AccordionContent>{question.answer}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}
