import { Global } from '@emotion/react';

export function Layout({ children }) {
	return (
		<>
			<Global
				styles={{
					':root': {
						'--bg': '#062959',
						'--text': '#0e0e0e',
						'--action': '#ec4899',
						'--headline': '#fff',
						'--focus': '#e11d48',
						'--border': '#d1d5db',

						'--brand-bg': '#166bff',
						'--brand-bg-90': '#2d7aff',
						'--brand-bg--40': 'rgba(22, 107, 255, 0.6)',

						'--brand-text': '#fff',
						'--link': '#166bff',
						'--link-active': '#0b55d5',
						'--border-muted': '#edf2f7',
						'--muted': '#5f718c',
						'--text': '#47546b',
						'--text-heading': '#2d3748',
						'--text-disabled': '#a0aec0',
						'--code': '#47546b',
						'--code-bg': '#f6f7f9',
						'--shadow': 'rgba(22, 107, 255, 0.1)',

						'--info': '#0299e7',
						'--info-bg': 'rgba(2, 153, 231, 0.1)',
						'--warning': '#d97706',
						'--warning-bg': 'rgba(217, 119, 6, 0.1)',
						'--success': '#22c55e',
						'--success-bg': 'rgba(34, 197, 94, 0.1)',
						'--danger': '#dc2626',
						'--danger-bg': 'rgba(220, 38, 38, 0.1)',
						'--danger-90': '#e03c3c',
						'--danger--40': 'rgba(220, 38, 38, 0.6)',
						'--alert-text': '#47546b',

						'--space-xxsmall': '0.125rem',
						'--space-xsmall': '0.25rem',
						'--space-small': '0.375rem',
						'--space-medium': '0.5rem',
						'--space-large': '1rem',
						'--space-xlarge': '1.5rem',
						'--space-xxlarge': '6rem',
					},
					html: {
						height: '100%',
						margin: 0,
					},
					body: {
						height: '100%',
						lineHeight: 1.2,
						margin: 0,
						padding: 0,
						color: 'var(--text)',
						fontFamily:
							'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
					},
					'#__next': {
						display: 'grid',
						minHeight: '100%',
						gridTemplateRows: 'auto 1fr',
						gridTemplateColumns: 'minmax(0, 1fr)', // https://css-tricks.com/preventing-a-grid-blowout/
					},
					a: {
						color: 'var(--focus)',
						textDecoration: 'none',
						transition: 'color 0.3s ease',
						textUnderlineOffset: '3px',
					},
					'a:hover': {
						color: 'var(--text)',
						textDecoration: 'underline',
					},
					'*:focus-visible, input:focus-visible, button:focus-visible, [type="submit"]:focus-visible': {
						outline: '1px dashed var(--focus)',
						outlineOffset: '3px',
					},
					'input:focus-visible': {
						outlineStyle: 'solid',
						outlineWidth: '1px',
						outlineOffset: '0',
					},
					strong: {
						fontWeight: 600,
					},
					'*, *:before, *:after': {
						boxSizing: 'border-box',
					},
				}}
			/>
			<header
				css={{
					padding: '0.5rem 2rem',
					textAlign: 'center',
					background: '#008060',
				}}
			>
				<h1
					css={{
						color: 'var(--headline)',
					}}
				>
					Pattern Platform Prototype
				</h1>
			</header>
			<main
				css={{
					padding: '2rem',
				}}
			>
				{children}
			</main>
		</>
	);
}
