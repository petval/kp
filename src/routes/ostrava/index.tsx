import Features from '~/components/widgets/Features'
import { SITE } from '~/config.mjs'
import { qwikSerialized } from '~/utils/qwikSerialized'
import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from "@builder.io/qwik-city"
import { Headline } from '~/components/ui/Headline'
import { HiLinkOutline } from '@qwikest/icons/heroicons'

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
				subtitle='Mgr. Vyvlečková, Mgr. Vonášková, Mgr. Paprotová<br/>vše při supervizi Mgr. Michaelou Bondy'
				title=''
				items={[
					{
						title: 'Psychodiagnostická vyšetření',
						description: 'komplexní psychodiagnostika dětí od 6 let, dospívajících a dospělých klientů.',
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

			<Headline
				title={''}
				subtitle={'Ordinace se nachází v šedomodré budově přímo naproti Cukrárny Ollies. Vchod do budovy je ze zadního traktu, ordinaci najdete na konci budovy ve druhých vstupních dveřích.'}
				highlight={'Výstavní 111, Ostrava – Vítkovice, 703 00'}
			/>

			<div class="text-base md:text-base leading-tighter tracking-tighter mb-2 font-heading dark:text-gray-200 m-8 wrap p-4">
				<div class="py-2"><strong>Příjezd autem</strong>: parkování v přední části dvora za vchodem u označení *Návštěvy*.</div>
				<div  class="py-2"><strong>Příjezd MHD</strong>:
					<ul class="py-2">
						<li><div class="ml-4 flex">BUS: č. 50 -&nbsp;<a href='https://mapy.cz/s/buhasonafu'>zastávka Český dům</a> <HiLinkOutline/></div></li>
						<li><div class="ml-4 flex">TRAM: č. 1 a 6 -&nbsp;<a href='https://mapy.cz/s/mebozurano'>zastávka Český dům</a> <HiLinkOutline/></div></li>
						<li><div class="ml-4 flex">TRAM č. 2, 3, 7, 11, 12, 17 a BUS č. 39 -&nbsp;<a href='https://mapy.cz/s/ratogapena'>zastávky Český dům</a> <HiLinkOutline/></div></li>
						<li><div class="ml-8 flex">pěšky asi 10 min. chůze, jít ulicí Jeremenkova, na konci zabočit doleva na ulici Halasova, na kruhovém objezdu doprava je ulice Výstavní</div></li>
					</ul>
				</div>

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
