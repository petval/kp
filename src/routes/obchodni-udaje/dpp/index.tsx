import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { SITE } from '~/config.mjs'
import { Styles as S } from '~/constants'

export default component$(() => {
	return (
		<>
			<div class={S.header}>
				<div class={S.h1}>Dodací, platební a storno podmínky</div>
			</div>

			<div class={S.start}>

				<div class={S.h2}>1. Základní ustanovení</div>

				<div class={S.para}>1.1 Péče hrazená z konta zdravotního pojištění (klinicko-diagnostická vyšetření, psychoterapie, krizová intervence) se řídí <a class={S.href} href='/objednavky'>podmínkami uvedenými zde</a>.</div>

				<div class={S.para}>1.2 Tento dokument zpřesňuje <a class={S.href} href='/obchodni-udaje/vop'>Všeobecné obchodní podmínky</a> pro komerčně poskytované služby jako jsou online služby, profesní vzdělávání,  školení a podobně.</div>


				<div class={S.h2}>2. Dodací podmínky</div>
				<div class={S.para}>2.1 Na dodání služby poskytované online vzniká Objednateli nárok po dokončení objednávky plnou úhradou za službu.</div>


				<div class={S.h2}>3. Platební podmínky</div>
				<div class={S.para}>3.1 Platba probíhá prostřednictvím platební brány Comgate a Poskytovatel si vyhrazuje právo zrušit Objednateli rezervaci služby, nebude-li platba připsána včas dle podmínek uvedených u dané služby. Tento proces probíhá automaticky.</div>
				<div class={S.para}>3.2 Nastane-li situace, kdy Poskytovatel nemůže v dohodnutém a zaplaceném termínu online službu dodat, např. z důvodu nemoci a podobně, nabídne Objednateli náhradní termin. Objednatel má současně právo od smlouvy odstoupit a obdržet zpět svou platbu.</div>


				<div class={S.h2}>4. Storno podmínky</div>
				<div class={S.para}>4.1 Objednatel může svou rezervaci zrušit před začátkem objednaného termínu online služby a má nárok na vrácení ceny ve výši závislé na době před začátkem tohoto termínu a to takto. Do 48 hodin - 100% ceny, 48 - 24 hodin - 75 % ceny, později - 0 % ceny.</div>
				<div class={S.para}>4.2 Nedostaví-li se Objednatel na online službu do 10 minut od jejího začátku, je služba považována za zcela poskytnutou a Objednatel nemá nárok na náhradní termín.</div>

			</div>
		</>
	)
})

export const head: DocumentHead = {
	title: SITE.title,
	meta: [
		{
			name: 'description',
			content: SITE.description,
		},
	],
}
