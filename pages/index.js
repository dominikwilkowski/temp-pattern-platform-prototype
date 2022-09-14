import { useState } from 'react';
import Link from 'next/link';

import { Button } from '../components/Button';
import { Layout } from '../components/Layout';
import { Input } from '../components/Input';
import { data } from '../db';

export default function Home({ data }) {
	const [filterTag, setFilterTag] = useState('all');
	const basePath = process.env.NEXT_PUBLIC_LIVE_SITE ? '/temp-pattern-platform-prototype' : '';

	return (
		<Layout>
			<form
				action={`${basePath}/new-pattern`}
				method="POST"
				css={{
					display: 'grid',
					gridTemplateColumns: '1fr auto',
					gap: '0.5rem',
					alignItems: 'center',
					maxWidth: '50rem',
					margin: 'auto',
					padding: '0 0 1rem 0',
					borderBottom: '1px dashed var(--border)',
				}}
			>
				<label
					css={{
						display: 'grid',
						gridTemplateColumns: 'auto 1fr',
						gap: '0.5rem',
						alignItems: 'center',
					}}
				>
					Submit a new pattern:
					<Input placeholder="Enter Figma, codesandbox or playroom URL" />
				</label>
				<Button type="submit">Submit</Button>
			</form>

			<div
				css={{
					display: 'grid',
					gridTemplateColumns: '1fr 1fr 1fr 1fr',
					gap: '0.5rem',
					alignItems: 'center',
					maxWidth: '25rem',
					margin: '2rem auto',
				}}
			>
				<Button look={filterTag === 'all' ? 'soft' : 'text'} size="small" onClick={() => setFilterTag('all')}>
					All
				</Button>
				<Button look={filterTag === 'input' ? 'soft' : 'text'} size="small" onClick={() => setFilterTag('input')}>
					Input
				</Button>
				<Button look={filterTag === 'action' ? 'soft' : 'text'} size="small" onClick={() => setFilterTag('action')}>
					Action
				</Button>
				<Button look={filterTag === 'list' ? 'soft' : 'text'} size="small" onClick={() => setFilterTag('list')}>
					List
				</Button>
			</div>

			<ul
				css={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fill, minmax(25rem, 1fr))',
					gap: '0.5rem',
					listStyle: 'none',
					padding: 0,
					margin: '2rem 0',
				}}
			>
				{data.pattern
					.filter(({ tag }) => (filterTag === 'all' ? true : tag.includes(filterTag)))
					.map(({ image, url }) => (
						<li
							key={image}
							css={{
								border: '1px solid var(--border)',
								borderRadius: 10,
								overflow: 'hidden',
								transition: 'all .3s ease',
								':hover': {
									boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 7px 0px, rgb(222, 222, 222) 0px 0px 0px 0.5px',
									cursor: 'pointer',
								},
							}}
						>
							<Link href={`/pattern/${url}`}>
								<a>
									<img
										src={`${basePath}/img/${image}`}
										css={{
											display: 'block',
											maxWidth: '100%',
										}}
									/>
								</a>
							</Link>
						</li>
					))}
			</ul>
		</Layout>
	);
}

export async function getStaticProps() {
	return {
		props: {
			data,
		},
	};
}
