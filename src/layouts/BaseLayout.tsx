import Head from 'next/head';

import Nav from '~/components/common/Nav';

type BaseLayoutProps = {
	children: React.ReactNode;
};

export default function BaseLayout({ children }: BaseLayoutProps) {
	return (
		<>
			<Head>
				<meta charSet='UTF-8' key='charset' />
				<meta
					name='viewport'
					content='width=device-width,initial-scale=1'
					key='viewport'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href={`/favicon-32x32.png`}
					key='icon32'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href={`/favicon-16x16.png`}
					key='icon16'
				/>
				<link rel='icon' href={`/favicon.ico`} key='favicon' />
			</Head>

			<main>
				<Nav />
				{children}
			</main>
		</>
	);
}
