import { component$ } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"
import { SITE } from "~/config.mjs"
import { Styles as S } from "~/constants"

const items = [
	{ service: 'Mgr. Michaela Bondy' },
]

export default component$(() => {
	return (
		<>
			<div class={S.header}>
				<div class={S.pageTitle}>Služby</div>
			</div>

			<div class="md:flex md:items-center md:justify-between py-12 md:py-12">

				<ul class="flex flex-col mb-4 md:order-1 -ml-2 md:ml-4 md:mb-0">
					{items.map(({ service }, index) => (
						<li key={index} class='m-4'>
							<div>{service}</div>
						</li>
					))}
				</ul>

			</div>
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
}
