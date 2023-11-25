import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SITE } from "~/config.mjs";

const items = [
	{ service: 'Mgr. Michaela Bondy' },
]

export default component$(() => {
	return (
		<>
			<div class="basis-1/2 text-center lg:text-left pb-2 md:pb-2 mx-auto flex flex-col items-center justify-center">
				<h3 class="text-4xl md:text-4xl font-bold leading-tighter tracking-tighter mb-2 font-heading dark:text-gray-200">
					Služby
				</h3>
			</div>

			<div class="md:flex md:items-center md:justify-between py-12 md:py-12">

				<ul class="flex flex-col mb-4 md:order-1 -ml-2 md:ml-4 md:mb-0">
					{items.map(({service}, index) => (
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
};
