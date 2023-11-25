import Features from '~/components/widgets/Features'
import { SITE } from '~/config.mjs'
import { qwikSerialized } from '~/utils/qwikSerialized'
import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from "@builder.io/qwik-city"

const IconBulb = qwikSerialized(() => import("../../components/icons/IconBulb"))
const IconRocket = qwikSerialized(() => import("../../components/icons/IconRocket"))
const IconStar = qwikSerialized(() => import("../../components/icons/IconStar"))
const IconSun = qwikSerialized(() => import("../../components/icons/IconSun"))
//  const IconMoon = qwikSerialized(() => import("../../components/icons/IconMoon"));

export default component$(() => {
	return (
		<>
			<div class="basis-1/2 text-center lg:text-left pb-2 md:pb-2 mx-auto flex flex-col items-center justify-center">
				<h3 class="text-4xl md:text-4xl font-bold leading-tighter tracking-tighter mb-2 font-heading dark:text-gray-200">
					Ostrava
				</h3>
			</div>

			<Features
				highlight='Poskytované služby'
				title=''
				subtitle=''
				items={[
					{
						title: 'Psychodiagnostická vyšetření',
						description: '',
						icon: IconSun,
					},
					{
						title: 'Klinickopsychologická vyšetření',
						description: 'při diferenciálních stavech, před somatickýcmi operacemi, při žádosti o invalidizaci.',
						icon: IconRocket,
					},
					{
						title: 'Psychoterapie',
						description: 'léčba ponejvíce reaktivních stavů úzkosti a deprese, psychosomatických problémů dospělých lidí, vývojových a existenciálních problémů adolescentů a dětí od 6 let.',
						icon: IconBulb,
					},
					{
						title: 'Krizová intervence',
						description: '',
						icon: IconStar,
					},
				]}
			/>

			<div class="text-base md:text-base leading-tighter tracking-tighter mb-2 font-heading dark:text-gray-200 m-8 flex flex-wrap p-5">
				<div class="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
					<iframe style="border:none" src="https://frame.mapy.cz/s/modevomuvu" width="256" height="256"></iframe>
				</div>
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
