const styleMap = [
	{
		background: 'rgb(255, 234, 138)',
	},
	{
		background: 'rgb(255, 215, 157)',
	},
	{
		background: 'rgb(228, 229, 231)',
	},
	{
		background: 'rgb(174, 233, 209)',
	},
];

export function Badge({ maturity, ...props }) {
	return (
		<span
			css={{
				fontSize: '0.8125rem',
				fontWeight: 400,
				borderRadius: '1.25rem',
				overflow: 'hidden',
				padding: '2px 8px',
				lineHeight: '1rem',
				...styleMap[maturity],
			}}
			{...props}
		>
			Maturity {maturity}
		</span>
	);
}
