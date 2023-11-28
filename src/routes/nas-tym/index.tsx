import { component$ } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"
import type { JSX } from "@builder.io/qwik/jsx-runtime"
import { SITE } from "~/config.mjs"
import { subpath } from "~/root";

const elements: JSX.Element[] = []
elements.push(<span>Spoluautorka knihy <a href='https://www.databazeknih.cz/knihy/bonding-porodni-radost-podpora-rodiny-jako-cesta-k-ozdraveni-porodnictvi-a-spolecnosti-103506'><em>Bonding - porodní radost</em></a></span> as JSX.Element)
elements.push(<span>Autorka knihy <a href='https://www.databazeknih.cz/knihy/pohadka-o-zrozeni-rodiny-315910'><em>Pohádka o zrození rodiny</em></a></span> as JSX.Element)
elements.push(<span><a class="dark:text-purple-300" href='https://cs.wikipedia.org/wiki/Michaela_Mrowetz'><em>Wikipedie</em></a></span> as JSX.Element)

const items = [
	{
		name: 'Mgr. Michaela Bondy', pos: 'Klinická psycholožka, psychoterapeutka, soudní znalkyně', img: `${subpath}/images/foto/lide/michaela.jpg`,
		desc: 'Ve své ordinaci pracuje od roku 2001, specilizuje se na individuální terapie reprodukčních problémů, jakými jsou problémy s početím, těhotenstvím, rozením, kojením, posilování attachmentu – pevné láskyplné vazby mezi dětmi a rodiči. Psychoterapeutická léčba reprodukčních traumat, traumat po ztrátách prenatálních dětí, po ztrátách narozených dětí, psychoterapeutická léčba ztráty kontroly nad porodním procesem, kojením, rodičovstvím, soudně znalecká činnost u dospělých osob v trestním právu.',
		edu: 'Promovala z jednoooborové psychologie na FF UP v Olomouci v roce 1996.',
		elements: elements
	},
	{
		name: 'Mgr. Jana Vyvlečková', pos: 'Psycholožka ve zdravotnictví', img: `${subpath}/images/foto/lide/jana.jpg`,
		desc: 'V ordinaci pracuje od roku 2020. Vzdělává se a pracuje v rámci náležitostí předatestační přípravy pro klinickou psychologii pod supervizí klinické psycholožky Mgr. Michaely Bondy. Frekventantka psychoterapeutického výcviku Transformační systemické terapie podle V. Satirové (výcvik je certifikován Českou psychoterapeutickou společností ČLK JEP); provádí individuální diagnostiku kognitivních funkcí dětí od šesti let a dospělých osob, individuální konzultace psychologických obtíží a terapeutickou péči dle vzdělávání v psychoterapeutickém výcviku',
		edu: 'Promovala z jednoooborové psychologie na FF UP v Olomouci v roce 2019.',
		elements: []

	},
	{
		name: 'Mgr. Marie Vondrášková', pos: 'Psycholožka ve zdravotnictví', img: `${subpath}/images/foto/lide/marie.jpg`,
		desc: 'V ordinaci pracuje od roku 2023. Vzdělává se a pracuje pod supervizí klinické psycholožky Mgr. Michaely Bondy.',
		edu: 'Promovala z jednoooborové psychologie na FF UP v Olomouci v roce 2021.',
		elements: []
	},
	{
		name: 'Mgr. Markéta Paprotová', pos: 'Psycholožka ve zdravotnictví', img: `${subpath}/images/foto/lide/marketa.jpg`,
		desc: 'V ordinaci pracuje od roku 2024. Vzdělává se a pracuje pod supervizí klinické psycholožky Mgr. Michaely Bondy.',
		edu: 'Promovala z jednoooborové psychologie na FF UP v Olomouci v roce 2020.',
		elements: []
	},
	{
		name: 'Andrea Panenková', pos: 'asistentka', img: `${subpath}/images/foto/lide/andrea.jpg`,
		desc: 'Pomůže Vám s objednáním, omluvou nebo změnami termínů.',
		edu: null,
		elements: []
	},
]

export default component$(() => {
	return (
		<>
			<div class="basis-1/2 text-center lg:text-left pb-2 md:pb-2 mx-auto flex flex-col items-center justify-center">
				<h3 class="text-4xl md:text-4xl font-bold leading-tighter tracking-tighter mb-2 font-heading dark:text-gray-200">
					Náš tým
				</h3>
			</div>

			<div class="md:flex md:items-center md:justify-between py-12 md:py-12">

				<ul class="flex flex-col mb-4 md:order-1 -ml-2 md:ml-4 md:mb-0">
					{items.map(({ name, pos, edu, img, desc, elements}, index) => (
						<li key={index} class='m-4'>
							<div class="max-w-md mx-auto bg-white rounded-xl dark:text-white dark:bg-transparent shadow-md overflow-hidden md:max-w-4xl">
								<div class="md:flex">
									<div class="md:shrink-0">
										<img class="h-full w-full md:h-96 md:w-96 object-cover" src={img} alt={name} width='256' height='256' />
									</div>
									<div class="p-4">
										<div class="uppercase tracking-wide text-xl text-indigo-500 font-semibold">{name}</div>
										<p class="mt-2 text-slate-500">{pos}<br />{edu}</p>
										<p class="mt-2 text-slate-500">{desc}</p>
										{elements.map((elem, index) => { return ( <p key={index} class="mt-2 text-slate-500">{elem}</p> ) })}
									</div>
								</div>
							</div>
							<div class="mb-10"></div>
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
