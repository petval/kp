// import "@fontsource-variable/inter";
import globalStyles from '~/assets/styles/global.css?inline'
import { DarkThemeLauncher } from '~/components/common/DarkThemeLauncher'
import { RouterHead } from '~/components/common/RouterHead'

import { component$, useStyles$ } from '@builder.io/qwik'
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city'

import { Constants } from './constants'

export const subpath = Constants.RepoPath;

export default component$(() => {
	/**
	 * The root of a QwikCity site always start with the <QwikCityProvider> component,
	 * immediately followed by the document's <head> and <body>.
	 *
	 * Dont remove the `<head>` and `<body>` elements.
	 */

	useStyles$(globalStyles);

	return (
		<QwikCityProvider>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel='manifest' href={`${subpath}/manifest.json`} />
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
					rel="stylesheet"
				/>
				<RouterHead />
				<DarkThemeLauncher />
				<ServiceWorkerRegister />
			</head>
			<body class="text-gray-900 dark:text-slate-300 tracking-tight bg-white dark:bg-gray-900 antialiased">
				<RouterOutlet />
			</body>
		</QwikCityProvider>
	);
});
