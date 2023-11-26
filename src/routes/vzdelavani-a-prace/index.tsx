import Features from '~/components/widgets/Features'
import { SITE } from '~/config.mjs'
import { qwikSerialized } from '~/utils/qwikSerialized'
import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from "@builder.io/qwik-city"

const IconBulb = qwikSerialized(() => import("../../components/icons/IconBulb"))
const IconRocket = qwikSerialized(() => import("../../components/icons/IconRocket"))
const IconStar = qwikSerialized(() => import("../../components/icons/IconStar"))
const IconSun = qwikSerialized(() => import("../../components/icons/IconSun"))
// const IconMoon = qwikSerialized(() => import("../../components/icons/IconMoon"))

export default component$(() => {
	return (
		<>
			<Features
				highlight=''
				title='Vzdělávání'
				subtitle='Pracoviště je akreditováno k uskutečňování vzdělávacího programu v oboru klinická psychologie u Ministerstva zdravotnictví České republiky'
				items={[
					{
						title: '',
						description: 'Plánujeme kurz s PhDr. Martinou Pastuchovou pro psychology ve zdravotnictví a klinické psychology',
						icon: IconStar,
					},
				]}
			/>

			<Features
				highlight=''
				title='Práce'
				subtitle='Přijmeme'
				items={[
					{
						title: '',
						description: 'psycholožku / psychologa se specializačním kurzem pro zdravotnictví (anebo v přípravě)',
						icon: IconBulb,
					},
					{
						title: '',
						description: 'psycholožku / psychologa v atestační přípravě',
						icon: IconSun,
					},
					{
						title: '',
						description: 'klinickou psycholožku / klinického psychologa',
						icon: IconRocket,
					},
				]}
			/>

			{/* <div class="text-base md:text-base font-bold leading-tighter tracking-tighter mb-2 font-heading dark:text-gray-200 m-8">
			</div>

			<div class="basis-1/2 text-center lg:text-left pb-2 md:pb-2 mx-auto flex flex-col items-center justify-center">
				<h3 class="text-4xl md:text-4xl font-bold leading-tighter tracking-tighter mb-2 font-heading dark:text-gray-200">
					Vzdělávání
				</h3>
			</div>

			<div class="md:flex md:items-center md:justify-between py-4 md:py-4">

				<ul class="flex flex-col mb-4 md:order-1 -ml-2 md:ml-4 md:mb-0">
					{items.map(({ service }, index) => (
						<li key={index} class='m-4'>
							<div>{service}</div>
						</li>
					))}
				</ul>
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
}
