import Features from '~/components/widgets/Features'
import { SITE } from '~/config.mjs'
import { qwikSerialized } from '~/utils/qwikSerialized'
import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from "@builder.io/qwik-city"

const IconSun = qwikSerialized(() => import("../../components/icons/IconSun"))
// const IconStar = qwikSerialized(() => import("../../components/icons/IconStar"));
const IconRocket = qwikSerialized(() => import("../../components/icons/IconRocket"))
const IconBulb = qwikSerialized(() => import("../../components/icons/IconBulb"))
const IconMoon = qwikSerialized(() => import("../../components/icons/IconMoon"))


// const items = [
// 	{ service: 'psychoterapie' },
// 	{ service: 'krizová intervence' },
// 	{ service: 'profesní vzdělávání' },
// ]

export default component$(() => {
	return (
		<>
			<div class="basis-1/2 text-center lg:text-left pb-2 md:pb-2 mx-auto flex flex-col items-center justify-center">
				<h3 class="text-4xl md:text-4xl font-bold leading-tighter tracking-tighter mb-2 font-heading dark:text-gray-200">
					Brušperk
				</h3>
			</div>

			<Features
				highlight='Poskytované služby'
				title=''
				subtitle=''
				items={[
					{
						title: 'Psychoterapie',
						description: 'léčba ponejvíce reaktivních stavů úzkosti a deprese, psychosomatických problémů dospělých lidí, vývojových a existenciálních problémů adolescentů a dětí od 6 let.',
						icon: IconBulb,
					},
					{
						title: 'Krizová intervence',
						description: '',
						icon: IconSun,
					},
					{
						title: 'On-line konzultace s Mgr. Michaelou Bondy',
						description: 'nenahrazují individuální psychoterapii. Jsou hrazeny přímo klientem, cena 60 minutové konzultace je 2000 Kč ve večerních hodinách. Podpora pro osobní růst, řešení vnitřních i vnějších konfliktů. Objednávejte emailem, do předmětu napište \'on-line konzultace\'. Přijetím platby na účet rezervujete Vás termín. Další informace emailem.',
						icon: IconMoon,
					},
					{
						title: 'Profesní vzdělávání',
						description: 'Kurzy a semináře klinické psychologie, psychodiagnostiky, předatestační přípravy.',
						icon: IconRocket,
					},
				]}
			/>

			<div class="text-base md:text-base leading-tighter tracking-tighter mb-2 font-heading dark:text-gray-200 m-8 flex flex-wrap p-5">
				<div class="p-0 m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
					Trasa z parkoviště<br />
					<iframe style="border:none" src="https://frame.mapy.cz/s/dafumojone" width="256" height="256" frameBorder="0"></iframe>
				</div>

				<div class="p-0 m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
					Trasa ze zastávky Staroveská<br />
					<iframe style="border:none" src="https://frame.mapy.cz/s/motukojevo" width="256" height="256" frameBorder="0"></iframe>
				</div>

				<div class="p-0 m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
					Trasa ze zastávky Krmelínská<br />
					<iframe style="border:none" src="https://frame.mapy.cz/s/motukojevo" width="256" height="256" frameBorder="0"></iframe>
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
