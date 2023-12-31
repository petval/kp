import { Headline } from '~/components/ui/Headline'
import Features from '~/components/widgets/Features'
import { SITE } from '~/config.mjs'
import { Styles as S } from '~/constants'
import { subpath } from '~/root'
import { qwikSerialized } from '~/utils/qwikSerialized'
import { component$ } from '@builder.io/qwik'
import { Image } from '@unpic/qwik'
import type { DocumentHead } from "@builder.io/qwik-city"

const coverImage = `${subpath}/images/foto/budova.brusperk.jpg`
const IconBulb = qwikSerialized(() => import("../../components/icons/IconBulb"))
const IconMoon = qwikSerialized(() => import("../../components/icons/IconMoon"))
const IconRocket = qwikSerialized(() => import("../../components/icons/IconRocket"))
// const IconStar = qwikSerialized(() => import("../../components/icons/IconStar"));
const IconSun = qwikSerialized(() => import("../../components/icons/IconSun"))

export default component$(() => {
	return (
		<>
			<div class={S.header}>
				<div class={S.pageTitle}>Brušperk</div>
			</div>

			<Features
				highlight='Poskytované služby'
				title=''
				subtitle='Mgr. Michaela Bondy'
				items={[
					{
						title: 'Psychoterapie',
						description: 'léčba ponejvíce reaktivních stavů úzkosti a deprese, psychosomatických problémů dospělých lidí, vývojových a existenciálních problémů adolescentů.',
						icon: IconBulb,
					},
					{
						title: 'Krizová intervence',
						description: 'je možností pro akutní potřebu pomoci klinické psycholožky v momentu náhlé a neúnosné situace jako např. úmrtí nebo ztráty blízké osoby, či prenatálnho dítěte, či při vážném onemocnění nebo v důsledku nečekané tragédie v bezprostředním okolí.',
						icon: IconSun,
					},
					{
						title: 'Online konzultace s Mgr. Michaelou Bondy',
						description: 'nenahrazují individuální psychoterapii. Podpora pro osobní růst, řešení vnitřních i vnějších konfliktů. Jsou hrazeny přímo klientem.',
						icon: IconMoon,
						link: {
							text: 'Objednat termín',
							url: '/online-konzultace/',
						}
					},
					{
						title: 'Profesní vzdělávání',
						description: 'Kurzy a semináře klinické psychologie, psychodiagnostiky, předatestační přípravy.',
						icon: IconRocket,
					},
				]}
			/>

			<Headline
				title={''}
				subtitle={''}
				highlight={'Veselíčko 1064, Brušperk, 739 44'}
			/>

			<div class="flex flex-wrap justify-center text-base md:text-base leading-tighter tracking-tighter mb-2 font-heading dark:text-gray-200 m-8 wrap p-2">

				<div class="w-full sm:w-1/3 md:w-1/3 p-2">
					<Image
						src={coverImage}
						layout="constrained"
						width={300}
						height={300}
						alt="Budova ordinace Brušoerk"
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
									<span>Parkovací místo na mapách&nbsp;<a href="https://mapy.cz/s/mucojonage"><em>Seznam</em></a>&nbsp; nebo&nbsp; <a href="https://maps.app.goo.gl/GWnKb9weAVqMTiRL6"><em>Google</em></a>.</span>
								</div>
							</li>
							<li><div class="ml-0 flex">Pak pokračujte cca 3 minuty pěšky trasou z parkoviště.</div></li>
						</ul>
					</div>
				</div>

				<div class="w-full sm:w-1/3 md:w-1/3 p-2">
					<div class="font-bold">Příjezd MHD</div>
					<div>
						<ul class="py-2">
							<li><div class="ml-0">Cca 8 min chůze ze&nbsp;<a href='https://mapy.cz/s/depucobone'><em>zastávky Brušperk - Staroveská</em></a></div></li>
							<li><div class="ml-0">Cca 12 min chůze ze&nbsp;<a href='https://mapy.cz/s/nocodesega'><em>zastávky Brušperk - Krmelínská</em></a></div></li>
						</ul>
					</div>
				</div>

			</div>

			<div class="text-base md:text-base leading-tighter tracking-tighter mb-2 font-heading dark:text-gray-200 m-8 flex flex-wrap p-5">
				<div class="p-0 m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
					Trasa z parkoviště<br />
					<iframe style="border:none" src="https://frame.mapy.cz/s/dafumojone" width="256" height="256" frameBorder="0" />
				</div>

				<div class="p-0 m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
					Trasa ze zastávky Staroveská<br />
					<iframe style="border:none" src="https://frame.mapy.cz/s/fevoluveda" width="256" height="256" frameBorder="0" />
				</div>

				<div class="p-0 m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
					Trasa ze zastávky Krmelínská<br />
					<iframe style="border:none" src="https://frame.mapy.cz/s/jugohofebo" width="256" height="256" frameBorder="0" />
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
