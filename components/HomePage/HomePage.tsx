import { PageContent } from '@ag.ds-next/react/content';
import { Prose } from '@ag.ds-next/react/prose';
import { AppLayout } from '../AppLayout';
import { Callout } from '@ag.ds-next/react/callout';

export const HomePage = () => {
	return (
		<AppLayout>
			<PageContent>
				<Prose>
					<h1>Trade Analysis and Market Planning</h1>
					<Callout title="Disclaimer" type="warning">
						This is a scenario simulation tool only. The data and analysis provided
						are for demonstration purposes and should not be used as the sole basis
						for making business or export decisions. Please consult with appropriate
						trade advisors and conduct thorough market research before making any
						business decisions.
					</Callout>
					<p>
						Welcome to the Trade Analysis and Market Planning tool, designed specifically 
						for Australian lobster exporters. This platform helps you analyze international 
						markets and plan your export strategy by providing comprehensive cost analysis 
						and market insights for successful international trade operations.
					</p>
					<p>
						For guidance on using this tool, please refer to the{' '}
						<a href="https://design-system.agriculture.gov.au/templates">
							user documentation
						</a>
						.
					</p>
				</Prose>
			</PageContent>
		</AppLayout>
	);
};
