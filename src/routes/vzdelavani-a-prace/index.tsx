

import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SITE } from "~/config.mjs";

const items = [
	{ service: 'Pracoviště je akreditováno k uskutečňování vzdělávacího programu v oboru klinická psychologie u Ministerstva zdravotnictví České republiky' },
	{ service: 'Přijmeme '},
	{ service: '* psycholožku / psychologa se specializačním kurzem pro zdravotnictví (anebo v přípravě),'},
	{ service: '* psycholožku / psychologa v atestační přípravě	'},
	{ service: '* , klinickou psycholožku / klinického psychologa.'},
]

export default component$(() => {
	return (
		<>
			<div class="basis-1/2 text-center lg:text-left pb-2 md:pb-2 mx-auto flex flex-col items-center justify-center">
				<h3 class="text-4xl md:text-4xl font-bold leading-tighter tracking-tighter mb-2 font-heading dark:text-gray-200">
					Vzdělávání a práce
				</h3>
			</div>

			<div class="md:flex md:items-center md:justify-between py-4 md:py-4">

				<ul class="flex flex-col mb-4 md:order-1 -ml-2 md:ml-4 md:mb-0">
					{items.map(({service}, index) => (
						<li key={index} class='m-4'>
							<div>{service}</div>
						</li>
					))}
				</ul>
			</div>

				{/* <div class="text-base md:text-base font-bold leading-tighter tracking-tighter mb-2 font-heading dark:text-gray-200 m-8">
						<a href="/kontakty">Objednávka</a>
				</div> */}

		</>
	)
})

export const head: DocumentHead = {
	title: SITE.title,
	meta: [
		{
			name: "description",
			content: SITE.description,
		},
	],
};
