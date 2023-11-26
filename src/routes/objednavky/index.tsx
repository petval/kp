import { component$ } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"
import type { JSX } from "@builder.io/qwik/jsx-runtime"
import { SITE } from "~/config.mjs"
// import { subpath } from "~/root"
import { HiEnvelopeOpenOutline, HiPhoneOutline } from "@qwikest/icons/heroicons"

// elements.push(<span><a class="dark:text-purple-300" href='https://cs.wikipedia.org/wiki/Michaela_Mrowetz'><em>Wikipedie</em></a></span> as JSX.Element)

const items = [
	{
		name: 'Objednávky',
		pos: ``,
		img: ``,
		desc: '',
		elements: new Array<JSX.Element>(
			<div class="flex"><HiPhoneOutline class="mt-1" />&nbsp;&nbsp; +420 608 959 030</div>,
			<div class="flex"><HiEnvelopeOpenOutline class="mt-1"/>&nbsp;&nbsp; ordinace@klinickapsycholozka.cz</div>,
		)
	},
	{
		name: 'Platební podmínky',
		pos: `Péče v naší ordinaci je hrazená z konta zdravotního pojištění -  klinicko-diagnostická vyšetření, psychoterapie, krizová intervence.`,
		img: ``,
		desc: 'U klientů do následné péče po psychodiagnostickém vyšetření (jednorázové komplexní vyšetření i při více sezeních bez poplatků) - podpůrná péče, psychoterapie jako spoluúčast vyžadujeme jednorázovou platbu 500 Kč - registrační poplatek a 500 Kč vratnou zálohu za možné pozdě omluvené sezení, kdy pozdní omluva je ta, která přijde později, nežli předchozí pracovní den do 8 hodin do rána (je dostačující SMS, např. ve středu v 8 ráno, pokud jste objednáni na čtvrtek). Čili jednorázově zaplatíte 1000 Kč, 500 Kč Vám bude vráceno, pokud vždy přijdete, anebo se omluvíte včas.',

		elements: new Array<JSX.Element>(
			<div class="flex">U Mgr. Bondy je to 1500 Kč (750 Kč registrace a 750 Kč vratná záloha).</div>,
			<div class="flex">On-line konzultace s Mgr. Michaelou Bondy si hradí klienti sami.</div>,
			<div class="flex">Opakované omluvy mohou být důvodem k ukončení péče.</div>,
			<div class="flex">Opakované neomluvy mohou být důvodem k tomu, že Vás již neobjednáme.</div>,
		)
	},
]


export default component$(() => {
	return (
		<>
			{/* <div class="basis-1/2 text-center lg:text-left pb-2 md:pb-2 mx-auto flex flex-col items-center justify-center">
				<h3 class="text-4xl md:text-4xl font-bold leading-tighter tracking-tighter mb-2 font-heading dark:text-gray-200">
					Náš tým
				</h3>
			</div> */}

			<div class="md:flex md:items-center md:justify-between py-4 md:py-4">

				<ul class="flex flex-col mb-4 md:order-1 -ml-2 md:ml-4 md:mb-0">
					{items.map(({ name, desc, pos, elements }, index) => (
						<li key={index} class='m-'>
							<div class="max-w-md mx-auto bg-white rounded-xl dark:text-white dark:bg-transparent shadow-md overflow-hidden md:max-w-4xl">
								<div class="md:flex">
									{/* <div class="md:shrink-0"> */}
										{/* <img class="h-full w-full md:h-96 md:w-96 object-cover" src={img} alt={name} width='256' height='256' /> */}
									{/* </div> */}
									<div class="p-4">
										<div class="uppercase tracking-wide text-xl text-indigo-500 font-semibold">{name}</div>
										<p class="mt-2 text-slate-500">{pos}</p>
										<p class="mt-2 text-slate-500">{desc}</p>
										{elements.map((elem, index) => { return (<div key={index} class="mt-2 text-slate-500">{elem}</div>) })}
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
