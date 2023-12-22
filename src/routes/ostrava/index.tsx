import { Headline } from '~/components/ui/Headline'
import Features from '~/components/widgets/Features'
import { SITE } from '~/config.mjs'
import { Styles as S } from '~/constants'
import { subpath } from '~/root'
import { qwikSerialized } from '~/utils/qwikSerialized'
import { component$ } from '@builder.io/qwik'
import { Image } from '@unpic/qwik'
import type { DocumentHead } from "@builder.io/qwik-city"

const coverImage = `${subpath}/images/foto/budova.ostrava.jpg`
const IconBulb = qwikSerialized(() => import("../../components/icons/IconBulb"))
// const IconMoon = qwikSerialized(() => import("../../components/icons/IconMoon"));
const IconRocket = qwikSerialized(() => import("../../components/icons/IconRocket"))
const IconStar = qwikSerialized(() => import("../../components/icons/IconStar"))
const IconSun = qwikSerialized(() => import("../../components/icons/IconSun"))

export default component$(() => {
	return (
		<>
			<div class={S.header}>
				<div class={S.pageTitle}>Ostrava</div>
			</div>

			<Features
				highlight='Poskytované služby'
				subtitle='Mgr. Vyvlečková, Mgr. Vondrášková, Mgr. Paprotová<br/>vše při supervizi Mgr. Michaelou Bondy'
				title=''
				items={[
					{
						title: 'Psychodiagnostická vyšetření',
						description: 'komplexní psychodiagnostika dětí od 6 let, dospívajících a dospělých klientů. Ke komplexnímu psychodiagnostickému vyšetření potřebujete indikaci lékařem tzn. žádanku typu K od praktického lékaře (OL, u dětí PLDD), neurologa, psychiatra, před bariatrickými operacemi internisty. K samotnému vyšetření doneste zdravotnické zprávy, které máte k dispozici (z dřívějšího psychologického vyšetření/u dětí z PPP a SPC/od neurologa/psychiatra či jiné). Po sjednání termínu vyšetření je můžete odeslat na náš email.',
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
						description: 'je možností pro akutní potřebu pomoci psycholožky v momentu náhlé a neúnosné situace jako např. úmrtí nebo ztráty blízké osoby, či při vážném onemocnění nebo v důsledku nečekané tragédie v bezprostředním okolí.',
						icon: IconStar,
					},
				]}
			/>

			<Headline
				title={''}
				subtitle={'Ordinace se nachází v šedomodré budově přímo naproti Cukrárny Ollies, vchod do budovy je ze zadního traktu, ordinaci najdete na konci budovy ve druhých vstupních dveřích.'}
				highlight={'Výstavní 111, Ostrava – Vítkovice, 703 00'}
			/>

			<div class="flex flex-wrap justify-center text-base md:text-base leading-tighter tracking-tighter mb-2 font-heading dark:text-gray-200 m-8 wrap p-2">

				<div class="w-full sm:w-1/3 md:w-1/3 p-2">
					<Image
						src={coverImage}
						layout="constrained"
						width={300}
						height={300}
						alt="Budova ordinace Ostrava"
						class="mx-auto drop-shadow-2xl rounded-md items-left justify-left"
						priority={true}
						breakpoints={[320, 480, 640, 768, 1024]}
					/>
				</div>

				<div class="w-full sm:w-1/3 md:w-1/3 p-2">
					<div class="font-bold">Příjezd autem</div>
					<div>
						<ul class="py-2">
							<li>
								<div class="ml-0 flex justify-left">
									<span>
										Vjezd do dvora je z levé strany budovy, parkování v přední části dvora na označení *Návštěvy*.
									</span>
								</div>
							</li>
						</ul>
					</div>
				</div>

				<div class="w-full sm:w-1/3 md:w-1/3 p-2">
					<div class="font-bold">Příjezd MHD</div>
					<ul class="py-2">
						<div>
							<li><div class="ml-0">BUS č. 50 - cca 1 min ze &nbsp;<a href='https://mapy.cz/s/buhasonafu'><em>zastávky Český dům</em></a></div></li>
							<li><div class="ml-0">TRAM č. 1 a 6 - cca 2 min ze &nbsp;<a href='https://mapy.cz/s/mebozurano'><em>zastávky Český dům</em></a></div></li>
							<li><div class="ml-0">TRAM č. 2, 3, 7, 11, 12, 17 a BUS č. 39&nbsp;<a href='https://mapy.cz/s/hotatuluba'><em>zastávky Mírové náměstí</em></a></div></li>
							<li><div class="ml-4 flex">cca 12 min chůze - ulicí Jeremenkova, na konci zabočit doleva na ulici Halasova, na kruhovém objezdu doprava je ulice Výstavní</div></li>
						</div>
					</ul>
				</div>

			</div>

			<div class="text-base md:text-base leading-tighter tracking-tighter mb-2 font-heading dark:text-gray-200 m-8 flex flex-wrap p-5">

				<div class="p-0 m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
					Vchod a parkoviště
					<iframe style="border:none" src="https://frame.mapy.cz/s/modevomuvu" width="256" height="256" />
				</div>

				<div class="p-0 m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
					Trasa z Mírového náměstí<br />
					<iframe style="border:none" src="https://frame.mapy.cz/s/hefemupeju" width="256" height="256" frameBorder="0" />
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
