import Link from 'next/link';

import { Layout } from '../components/Layout';
import { Badge } from '../components/Badge';

export default function NewPatternPage() {
	return (
		<Layout>
			<div css={{ margin: '0 0 2rem 0' }}>
				<Link href="/">
					<a>back home</a>
				</Link>
			</div>

			<ul>
				<li>
					Figma link = <Badge maturity="0" /> because this is the very start of a pattern
				</li>
				<li>
					Codesandbox link = <Badge maturity="1" /> because we have code now we can reason about
				</li>
				<li>
					Playroom link = <Badge maturity="2" /> because with Playroom we can guarantee that the submitted pattern is
					built with the Polaris components
				</li>
				<li>
					Once it has been reviews = <Badge maturity="3" />
				</li>
			</ul>
		</Layout>
	);
}
