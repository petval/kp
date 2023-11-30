import { component$ } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"
import type { JSX } from "@builder.io/qwik/jsx-runtime"
import { SITE } from "~/config.mjs"
import { subpath } from "~/root"
import { HiEnvelopeOpenOutline, HiPhoneOutline } from "@qwikest/icons/heroicons"

// elements.push(<span><a class="dark:text-purple-300" href='https://cs.wikipedia.org/wiki/Michaela_Mrowetz'><em>Wikipedie</em></a></span> as JSX.Element)

const items = [
	{
		name: 'Objednávky',
		pos: null,
		img: null,
		desc: null,
		bu: [],
		elements: new Array<JSX.Element>(
			<div class="flex"><HiPhoneOutline class="mt-1" />&nbsp;&nbsp; +420 608 959 030</div>,
			<div class="flex"><HiEnvelopeOpenOutline class="mt-1" />&nbsp;&nbsp; ordinace@klinickapsycholozka.cz</div>,
		)
	},
	{
		name: 'Platební podmínky',
		pos: `Péče v naší ordinaci je hrazená z konta zdravotního pojištění -  klinicko-diagnostická vyšetření, psychoterapie, krizová intervence.`,
		img: `${subpath}/images/qr.bu.jpg`,
		desc: 'U klientů do následné péče po psychodiagnostickém vyšetření (jednorázové komplexní vyšetření i při více sezeních bez poplatků) - podpůrná péče, psychoterapie jako spoluúčast vyžadujeme jednorázovou platbu 500 Kč - registrační poplatek a 500 Kč vratnou zálohu za možné pozdě omluvené sezení, kdy pozdní omluva je ta, která přijde později, nežli předchozí pracovní den do 8 hodin do rána (je dostačující SMS, např. ve středu v 8 ráno, pokud jste objednáni na čtvrtek). Čili jednorázově zaplatíte 1000 Kč, 500 Kč Vám bude vráceno, pokud vždy přijdete, anebo se omluvíte včas.',
		bu: [`${subpath}/images/qr.bu.jpg`, '86-5201200247/0100', 'IBAN: CZ28 0100 0000 8652 0120 0247'],
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

				<ul class="flex flex-col px-4 mb-4 lg:px-12 md:order-1 -ml-2 md:ml-4 md:mb-0">
					{items.map(({ name, desc, pos, elements, bu }, index) => (
						<li key={index} class='m-'>

							<div class="px-4 max-w-md mx-auto bg-white rounded-xl dark:text-white dark:bg-transparent shadow-md overflow-hidden md:max-w-4xl">

								<div class="uppercase dark:text-indigo-100 tracking-wide text-xl text-indigo-500 font-bold text-primary-600">{name}</div>

								<div class="sm:flex gap-8 lg:gap-12">

									<div class="w-2/3" >
										<div class="mt-2 dark:text-blue-300 text-slate-500 decoration-secondary-600 text-primary-600 font-semibold">{pos}</div>
										<div class="mt-2 dark:text-gray-100 text-slate-500">{desc}</div>
										{elements.map((elem, index) => { return (<div key={index} class="mt-2 dark:text-blue-300 text-slate-500 decoration-secondary-600 text-primary-600 font-semibold">{elem}</div>) })}
									</div>

									{bu.length > 0 &&
										<div class="w-1/3" >
											<div class="mt-2 text-slate-500">
												<img src={bu[0]} alt="číslo účtu QR kód" width='256' height='256' />
											</div>
											<div class="mt-2 dark:text-blue-300 text-slate-500 decoration-secondary-600 text-primary-600 font-semibold">{bu[1]}</div>
											<div class="mt-2 dark:text-blue-300 text-slate-500 decoration-secondary-600 text-primary-600 font-semibold">{bu[2]}</div>
										</div>
									}

								</div>

								<div class="mb-10"></div>

							</div>

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
