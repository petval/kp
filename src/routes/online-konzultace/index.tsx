// import Features from '~/components/widgets/Features'
import { SITE } from '~/config.mjs'
// import { qwikSerialized } from '~/utils/qwikSerialized'
import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from "@builder.io/qwik-city"
import { Headline } from '~/components/ui/Headline'
// import { HiLinkOutline } from '@qwikest/icons/heroicons'

// const IconSun = qwikSerialized(() => import("../../components/icons/IconSun"))
// const IconStar = qwikSerialized(() => import("../../components/icons/IconStar"));
// const IconRocket = qwikSerialized(() => import("../../components/icons/IconRocket"))
// const IconBulb = qwikSerialized(() => import("../../components/icons/IconBulb"))
// const IconMoon = qwikSerialized(() => import("../../components/icons/IconMoon"))

export default component$(() => {
	return (
		<>
			<div class="basis-1/2 text-center lg:text-left pb-2 md:pb-2 mx-auto flex flex-col items-center justify-center">
				<h3 class="text-4xl md:text-4xl font-bold leading-tighter tracking-tighter mb-2 font-heading dark:text-gray-200">
					Online konzultace
				</h3>
			</div>

			<Headline
				title={''}
				subtitle={''}
				highlight={'Objednejte si termín'}
			/>

			<div class="text-base md:text-base leading-tighter tracking-tighter mb-2 font-heading dark:text-gray-200 m-8 flex flex-wrap p-5">
				<div id="zenamu-calendar" calendar-id="5bd7848ed5932f3b6a9f87b363917947"></div>
				<script src="https://zenamu.com/calendar/list.js" ></script>
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
