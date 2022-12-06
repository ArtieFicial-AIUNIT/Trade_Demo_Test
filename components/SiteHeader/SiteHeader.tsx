import { useRouter } from 'next/router';
import { Logo } from '@ag.ds-next/ag-branding';
import { Stack } from '@ag.ds-next/box';
import { Header } from '@ag.ds-next/header';
import { MainNav } from '@ag.ds-next/main-nav';

const NAV_LINKS = [{ label: 'Home', href: '/' }];

export const SiteHeader = () => {
	const router = useRouter();
	return (
		<Stack palette="dark">
			<Header
				background="bodyAlt"
				logo={<Logo />}
				heading="Agriculture Design System"
				subline="Design System for the Export Service"
				badgeLabel="Alpha"
			/>
			<MainNav
				id="main-nav"
				items={NAV_LINKS}
				activePath={router.asPath}
				secondaryItems={[
					{
						label: 'Github',
						href: 'https://github.com/steelthreads/agds-next-starter-kit',
					},
				]}
			/>
		</Stack>
	);
};