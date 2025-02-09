import { getQuestions } from '@/server/actions';

import CardWithAccordion from '@/components/card-with-accordion';

export default async function Home() {
	const questions = await getQuestions();

	return <CardWithAccordion title="FAQs" questions={questions} />;
}
