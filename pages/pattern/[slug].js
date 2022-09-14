import Link from 'next/link';

import { Layout } from '../../components/Layout';
import { Badge } from '../../components/Badge';
import { data } from '../../db';

export default function PatternPage({ data: { image, name, tag, maturity } }) {
	const basePath = process.env.NEXT_PUBLIC_LIVE_SITE ? '/temp-pattern-platform-prototype' : '';

	return (
		<Layout>
			<div css={{ margin: '0 0 2rem 0' }}>
				<Link href="/">
					<a>back home</a>
				</Link>
			</div>

			<div
				css={{
					maxWidth: '45rem',
					margin: '0 auto',
				}}
			>
				<img
					src={`${basePath}/img/${image}`}
					css={{
						display: 'block',
						maxWidth: '100%',
					}}
				/>
				<h2>
					{name}
					<Badge maturity={maturity} css={{ marginLeft: '0.5rem' }} />
				</h2>
				Tag{tag.length > 1 ? 's' : ''}:
				<ul
					css={{
						display: 'inline-block',
						listStyle: 'none',
						padding: 0,
						margin: 0,
					}}
				>
					{tag.map((thisTag) => (
						<li
							key={thisTag}
							css={{
								display: 'inline-block',
								margin: '0 0.25rem',
							}}
						>
							<span
								css={{
									fontSize: '0.8125rem',
									fontWeight: 400,
									borderRadius: '.25rem',
									overflow: 'hidden',
									padding: '2px 8px',
									lineHeight: 0,
									background: 'rgb(228, 229, 231)',
								}}
							>
								{thisTag}
							</span>
						</li>
					))}
				</ul>
				<h3>Pattern guidance</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua. A pellentesque sit amet porttitor eget dolor morbi. In mollis nunc sed id semper risus in
					hendrerit gravida. Duis ut diam quam nulla porttitor massa id. Neque viverra justo nec ultrices dui sapien
					eget mi proin. Et netus et malesuada fames ac. At varius vel pharetra vel turpis nunc eget lorem dolor. Cras
					adipiscing enim eu turpis egestas. Pulvinar proin gravida hendrerit lectus a. Fermentum et sollicitudin ac
					orci phasellus egestas. A erat nam at lectus urna duis convallis convallis tellus. Pretium fusce id velit ut
					tortor pretium.
				</p>
				<ul
					css={{
						listStyle: 'none',
						display: 'grid',
						margin: 0,
						padding: 0,
						gridTemplateColumns: '1fr 1fr',
						gap: '1rem',
					}}
				>
					<li
						css={{
							borderRadius: 6,
							overflow: 'hidden',
							background: '#f7f7f7',
							padding: '1rem',
							borderTop: '3px solid #13b288',
						}}
					>
						<h3
							css={{
								display: 'flex',
								alignItems: 'center',
								marginTop: 0,
							}}
						>
							<svg
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								css={{
									display: 'inline-block',
									margin: '0 0.5rem 0 0',
									height: '1rem',
								}}
							>
								<path
									fillRule="evenodd"
									d="M0 10a10 10 0 1 0 20 0 10 10 0 0 0-20 0zm15.2-1.8a1 1 0 0 0-1.4-1.4l-4.8 4.8-2.3-2.3a1 1 0 0 0-1.4 1.4l3 3c.4.4 1 .4 1.4 0l5.5-5.5z"
									fill="#13b288"
								/>
							</svg>
							Do
						</h3>
						<p>
							Consectetur libero id faucibus nisl tincidunt eget nullam non nisi. Arcu non sodales neque sodales ut
							etiam sit amet. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Quis varius quam
							quisque id diam vel quam. Metus aliquam eleifend mi in nulla posuere. Et ultrices neque ornare aenean.
							Faucibus scelerisque eleifend donec pretium vulputate sapien nec.
						</p>
					</li>
					<li
						css={{
							borderRadius: 6,
							overflow: 'hidden',
							background: '#f7f7f7',
							padding: '1rem',
							borderTop: '3px solid #ea5945',
						}}
					>
						<h3
							css={{
								display: 'flex',
								alignItems: 'center',
								marginTop: 0,
							}}
						>
							<svg
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								css={{
									display: 'inline-block',
									margin: '0 0.5rem 0 0',
									height: '1rem',
								}}
							>
								<path
									d="M0 10c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10-10-4.486-10-10zm7.707-3.707a1 1 0 0 0-1.414 1.414l2.293 2.293-2.293 2.293a1 1 0 1 0 1.414 1.414l2.293-2.293 2.293 2.293a1 1 0 0 0 1.414-1.414l-2.293-2.293 2.293-2.293a1 1 0 0 0-1.414-1.414l-2.293 2.293-2.293-2.293z"
									fill="#ea5945"
								/>
							</svg>
							Don&apos;t
						</h3>
						<p>
							Consectetur libero id faucibus nisl tincidunt eget nullam non nisi. Arcu non sodales neque sodales ut
							etiam sit amet. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Quis varius quam
							quisque id diam vel quam. Metus aliquam eleifend mi in nulla posuere. Et ultrices neque ornare aenean.
							Faucibus scelerisque eleifend donec pretium vulputate sapien nec.
						</p>
					</li>
				</ul>
				<p>
					Leo vel orci porta non pulvinar neque laoreet suspendisse. Dui accumsan sit amet nulla facilisi morbi. Quis
					auctor elit sed vulputate mi sit amet mauris. In nisl nisi scelerisque eu ultrices vitae. Eget arcu dictum
					varius duis at consectetur. Massa sapien faucibus et molestie ac feugiat sed. Sed vulputate odio ut enim
					blandit volutpat maecenas volutpat. Sem nulla pharetra diam sit amet nisl. Mattis molestie a iaculis at erat
					pellentesque adipiscing commodo. Et malesuada fames ac turpis egestas sed tempus urna. Orci porta non pulvinar
					neque laoreet. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Mauris vitae ultricies leo
					integer malesuada. Ac auctor augue mauris augue neque. Ipsum consequat nisl vel pretium lectus quam id leo.
				</p>
				<p>
					Eget nullam non nisi est sit amet. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Pharetra sit amet
					aliquam id diam. Donec et odio pellentesque diam volutpat commodo sed egestas. Semper viverra nam libero justo
					laoreet sit. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. Enim nunc faucibus a
					pellentesque sit. Varius duis at consectetur lorem donec massa. Lacus vel facilisis volutpat est velit egestas
					dui id. Arcu non sodales neque sodales ut etiam sit amet. Aliquet bibendum enim facilisis gravida. Fermentum
					leo vel orci porta non pulvinar. Quisque sagittis purus sit amet volutpat consequat mauris nunc. Viverra
					accumsan in nisl nisi scelerisque eu ultrices.
				</p>
				<p>
					Consectetur libero id faucibus nisl tincidunt eget nullam non nisi. Arcu non sodales neque sodales ut etiam
					sit amet. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Quis varius quam quisque id diam
					vel quam. Metus aliquam eleifend mi in nulla posuere. Et ultrices neque ornare aenean. Faucibus scelerisque
					eleifend donec pretium vulputate sapien nec. Malesuada fames ac turpis egestas maecenas pharetra convallis. Ut
					lectus arcu bibendum at varius. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et.
					Ipsum a arcu cursus vitae congue mauris rhoncus aenean. In fermentum posuere urna nec tincidunt praesent
					semper feugiat. Semper feugiat nibh sed pulvinar proin gravida hendrerit.
				</p>
				<p>
					Suspendisse in est ante in nibh. Nulla posuere sollicitudin aliquam ultrices sagittis. Hendrerit dolor magna
					eget est. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Ultricies leo integer
					malesuada nunc vel risus. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla. Tristique senectus
					et netus et. Velit egestas dui id ornare arcu odio ut sem. Pellentesque habitant morbi tristique senectus et
					netus et. In dictum non consectetur a erat nam at. Habitasse platea dictumst vestibulum rhoncus est
					pellentesque.
				</p>
			</div>
		</Layout>
	);
}

export function getStaticProps({ params: { slug } }) {
	return {
		props: {
			data: data.pattern.filter(({ url }) => slug === url)[0],
		},
	};
}

export function getStaticPaths() {
	return {
		paths: data.pattern.map(({ url }) => {
			return {
				params: {
					slug: url,
				},
			};
		}),
		fallback: false,
	};
}
