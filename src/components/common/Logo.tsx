const Logo: React.FC<React.SVGProps<any>> = props => {
	return (
		<svg
			viewBox='0 0 96 96'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<circle cx='48' cy='48' r='48' fill='#000'></circle>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M70.112 69.642c0 1.04-.841 1.88-1.878 1.88h-9.17c-.012 0-.024-.006-.036-.008l-1.59.008a3.381 3.381 0 0 1-2.877-1.579L44.102 53.36c-.625-.992.088-2.286 1.26-2.286h11.815l.01.015V14.416c0-.694.716-1.181 1.344-.89a25.073 25.073 0 0 1 7.236 5.055l1.595 1.596a9.403 9.403 0 0 1 2.75 6.647v42.818ZM38.846 44.96v36.674c0 .693-.715 1.18-1.345.89a25.036 25.036 0 0 1-7.234-5.056l-1.595-1.596a9.404 9.404 0 0 1-2.752-6.647V26.407a1.88 1.88 0 0 1 1.88-1.881h9.168c.013 0 .024.008.037.008l1.589-.008a3.384 3.384 0 0 1 2.877 1.58L51.93 42.689c.625.993-.087 2.286-1.26 2.286H38.856l-.01-.015Z'
				fill='url(#Logo_svg__a)'
			></path>
			<defs>
				<linearGradient
					id='Logo_svg__a'
					x1='65.976'
					y1='63.861'
					x2='37.176'
					y2='38.261'
					gradientUnits='userSpaceOnUse'
				>
					<stop stop-color='#FDCC00'></stop>
					<stop offset='1' stop-color='#FF9D39'></stop>
				</linearGradient>
			</defs>
		</svg>
	);
};

export default Logo;
