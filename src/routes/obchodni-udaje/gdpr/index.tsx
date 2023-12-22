import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { SITE } from '~/config.mjs'
import { Styles as S } from '~/constants'

export default component$(() => {
	return (
		<>

			<div class={S.header}>
				<div class={S.h1}>Ochrana osobních údajů</div>
			</div>

			<div class={S.start}>


				<div class={S.h2}>1. Základní ustanovení</div>
				<div class={S.para}>Správcem osobních údajů podle čl. 4 bod 7 nařízení Evropského parlamentu a Rady (EU) 2016/679 o ochraně fyzických osob v souvislosti se zpracováním osobních údajů a o volném pohybu těchto údajů (dále jen: „GDPR”) je <em>Mgr. Michaela Bondy, Veselíčko 1064, Brušperk, 739 44, IČ: 68316992, email: ordinace@klinickapsycholozka.cz, telefon: +420 608 959 030</em> (dále jen: „správce“).</div>
				<div class={S.para}>Osobními údaji se rozumí veškeré informace o identifikované nebo identifikovatelné fyzické osobě; identifikovatelnou fyzickou osobou je fyzická osoba, kterou lze přímo či nepřímo identifikovat, zejména odkazem na určitý identifikátor, například jméno, identifikační číslo, lokační údaje, síťový identifikátor nebo na jeden či více zvláštních prvků fyzické, fyziologické, genetické, psychické, ekonomické, kulturní nebo společenské identity této fyzické osoby.
				</div>


				<div class={S.h2}>2. Zdroje a kategorie zpracovávaných osobních údajů</div>
				<div class={S.para}>Správce zpracovává osobní údaje, které jste mu poskytl/a nebo osobní údaje, které správce získal na základě  Vaší rezervace termínu a zaplacení objednané služby. Správce zpracovává Vaše identifikační a kontaktní údaje a údaje nezbytné pro evidenci rezervace termínu a platby.</div>
				<div class={S.para}>Osobní údaje získané a zpracovávané při poskytování nezdravotnických služeb hrazených ze systému veřejného zdravotního pojištění se řídí samostatnou legislativou a nejsou předmětem tohoto ujednání.</div>
				<div class={S.para}>Správce prohlašuje, že jakékoliv datové soubory, které jsou předmětem smlouvy nebo vzniknou při dodávání objednaných služeb, chrání přiměřeně ve smyslu požadavků zákona 101/2000 Sb. o ochraně osobních údajů a zákona 110/2019 Sb. o zpracování osobních údajů.</div>


				<div class={S.h2}>3. Zákonný důvod a účel zpracování osobních údajů</div>
				<div class={S.para}>Zákonným důvodem zpracování osobních údajů je plnění smlouvy mezi Vámi a správcem podle čl. 6 odst. 1 písm. b) GDPR Účelem zpracování osobních údajů je vyřízení Vaší rezervace termínu a výkon práv a povinností vyplývajících ze smluvního vztahu mezi Vámi a správcem; při objednávce jsou vyžadovány osobní údaje, které jsou nutné pro úspěšné vyřízení rezervace termínu (jméno a adresa, kontakt), poskytnutí osobních údajů je nutným požadavkem pro evidenci objednávky termínu, bez poskytnutí osobních údajů není možné objednat termín. Ze strany správce nedochází k automatickému individuálnímu rozhodování ve smyslu čl. 22 GDPR. S takovým zpracováním jste poskytl/a svůj výslovný souhlas. Správce může Vaše osobní údaje sdílet s provozovatelem rezervačního systému, společností <em>sdiary s.r.o., Jaurisova 515/4, Michle, 140 00 Praha 4 , email: info@sdiary.cz, telefon: +420 731 784 362</em> a provozovatelem platební brány, společností <em>ComGate Payments, a.s</em>, se kterými má správce obchodní vztah. Osobní údaje jsou sdíleny pouze v míře nezbytně nutné pro zajištění technické funkčnosti rezervačního a platebního systému a nejsou poskytovány dalším subjektům.</div>


				<div class={S.h2}>4. Doba uchovávání údajů</div>
				<div class={S.para}>Správce uchovává osobní údaje po dobu nezbytnou k výkonu práv a povinností vyplývajících ze smluvního vztahu mezi Vámi a správcem a uplatňování nároků z těchto smluvních vztahů (po dobu dvou let od data rezervace termínu). Po uplynutí doby uchovávání osobních údajů správce osobní údaje vymaže.</div>


				<div class={S.h2}>5. Vaše práva</div>
				<div class={S.para}>Za podmínek stanovených v GDPR máte právo na opravu osobních údajů dle čl. 16 GDPR, popřípadě omezení zpracování dle čl. 18 GDPR. právo na výmaz osobních údajů dle čl. 17 GDPR, právo vznést námitku proti zpracování dle čl. 21 GDPR, právo odvolat souhlas se zpracováním písemně nebo elektronicky na adresu nebo email správce uvedený v čl. 1 těchto podmínek. Dále máte právo podat stížnost u Úřadu pro ochranu osobních údajů v případě, že se domníváte, že bylo porušeno Vaší právo na ochranu osobních údajů.</div>


				<div class={S.h2}>6. Podmínky zabezpečení osobních údajů</div>
				<div class={S.para}>Správce prohlašuje, že přijal veškerá vhodná technická a organizační opatření k zabezpečení osobních údajů. Správce přijal technická opatření k zabezpečení datových úložišť. Správce prohlašuje, že k osobním údajům mají přístup pouze jím pověřené osoby, typicky zaměstnanci, kteří zpracovávají objednávky a platby.</div>


				<div class={S.h2}>7. Použití cookies</div>
				<div class={S.para}>Webová stránka www.klinickapsycholozka.cz nepoužívá cookies. Na webu nejsou použity cookies pro technické, analytické ani marketingové účely. Tento web si prohlížíte zcela anonymně bez jakéhokoli sledování a zaznamenávání údajů.</div>
				<div class={S.para}>Webová stránka michaelabondy.sdiary.cz používá pouze technické cookies nutné pro zajištění funkčnosti rezervačního a platebního systému spravovaných jejich dodavateli uvedených v bodě 3.</div>


				<div class={S.h2}>8. Závěrečná ustanovení</div>
				<div class={S.para}>Odesláním objednávky potvrzujete, že jste seznámen/a s podmínkami ochrany osobních údajů a že je v celém rozsahu přijímáte. Správce je oprávněn tyto podmínky změnit. Novou verzi podmínek ochrany osobních údajů zveřejní na svých webových stránkách, případně Vám zašle novou verzi těchto podmínek na e-mailovou adresu, kterou jste správci poskytl/a.

					<div class={S.para}></div>Tyto podmínky nabývají účinnosti dnem 1.12.2023.</div>

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
