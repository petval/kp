import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { SITE } from '~/config.mjs'
import { Styles as S } from '~/constants'

export default component$(() => {
	return (
		<>

			<div class={S.header}>
				<div class={S.h1}>Všeobecné obchodní podmínky</div>
			</div>

			<div class={S.start}>

				<div class={S.h2}>I. Základní ustanovení</div>
				<div class={S.para}>Všeobecné obchodní podmínky, dále jen <strong>VOP</strong>, spolu se všemi ostatními smluvními dokumenty, zejména <a class={S.href} href='/obchodni-udaje/dpp'>Dodacími, platebními a storno podmínkami</a> a <a class={S.href} href='/obchodni-udaje/rp'>Reklamačními podmínkami</a>, vymezují obsah smluvního vztahu mezi Objednatelem a Poskytovatelem.</div>

				<div class={S.h3}>1. Vymezení základních pojmů</div>
				<div class={S.para}>1.1 <strong>Objednatel</strong> je fyzická osoba nebo právnická osoba vstupující do smluvního vztahu s Poskytovatelem. Objednatel se zavazuje uvést své informace pravdivě. Provozovatel si vyhrazuje právo odmítnout objednávku, pokud se bude domnívat, že informace v objednávce byly nepravdivě uvedeny.</div>
				<div class={S.para}>1.2 <strong>Poskytovatel</strong> je <em>Mgr. Michaela Bondy, Veselíčko 1064, Brušperk, 739 44, IČ: 11668695, email: ordinace@klinickapsycholozka.cz, telefon: +420 608 959 030</em></div>
				<div class={S.para}>1.3 <strong>Objednávka</strong> je dokument, který buď samostatně, nebo s jinými smluvními dokumenty, vymezuje obsah smluvního vztahu mezi Objednatelem a Poskytovatelem. Poskytovatel potvrzuje souhlas s těmito VOP a přebírá na sebe práva a povinnosti, které mu z nich vyplývají. Objednatel projevuje souhlas s vytvořenou online objednávkou formou úhrady objednávky.</div>
				<div class={S.para}>1.4 <strong>Důvěrnou informací</strong> se rozumí jakákoliv informace o Objednateli, kterou se Poskytovatel dozví v souvislosti s naplněním předmětu uzavřené smlouvy, která není veřejně přístupná a není určena třetím osobám.</div>


				<div class={S.h2}>2. Předmět smluvního vztahu</div>
				<div class={S.para}>2.1 Předmětem smluvního vztahu mezi Objednatelem a Poskytovatelem je poskytování služeb Poskytovatelem vždy specifikovaných v elektronické objednávce na webu Poskytovatele nebo jeho smluvních partnerů a to za platnosti těchto VOP.</div>
				<div class={S.para}>2.2 O spotřebitelskou smlouvu se jedná v případě, že jste spotřebitelem, tj. pokud jste fyzickou osobou a službu objednáváte mimo rámec své podnikatelské činnosti nebo mimo rámec samostatného výkonu svého povolání. V opačném případě se o spotřebitelskou smlouvu nejedná a nevztahuje se na vás ochrana spotřebitele dle právních předpisů a těchto obchodních podmínek.</div>


				<div class={S.h2}>3. Objednávání poskytovaných služeb, resp. produktů Poskytovatele</div>
				<div class={S.para}>3.1 Objednatel má právo objednat si služby, případně produkty nacházející se v aktuální nabídce Poskytovatele, a to za podmínek uvedených v těchto VOP a u dané služby nebo produktu.</div>
				<div class={S.para}>3.2 Služba, poskytovaná Poskytovatelem, se považuje za objednanou vytvořením online objednávky na webu služby Objednatelem.</div>
				<div class={S.para}>3.3 Elektronická objednávka odevzdaná Poskytovateli je závazná a lze ji měnit elektronickou nebo písemnou dohodou smluvních stran.</div>
				<div class={S.para}>3.4 Objednávka a nákup služeb se řídí <a class={S.href} href='/obchodni-udaje/dpp'>Dodacími, platebními a storno podmínkami</a> a <a class={S.href} href='/obchodni-udaje/rp'>Reklamačními podmínkami</a>.</div>
				<div class={S.para}>3.5 Smlouva je uzavřena okamžikem uhrazení ceny služby. Pokud by k uhrazení ceny služby v době splatnosti nedošlo, vyhrazuje si Poskytovatel právo od smlouvy odstoupit a uplatnit ustanovení v <a class={S.href} href='/obchodni-udaje/dpp'>Dodacích, platebních a storno podmínkách</a>.</div>

				<div class={S.h2}>4. Práva a povinnosti smluvních stran</div>
				<div class={S.h3}>4.1 Práva a povinnosti Objednatele:</div>
				<div class={S.para}>4.1.1 Odesláním objednávky se Objednatel zavazuje zaplatit cenu objednaných a poskytnutých služeb a respektovat při tom ustanovaní <a class={S.href} href='/obchodni-udaje/dpp'>Dodacích, platebních a storno podmínek</a>.</div>
				<div class={S.para}>4.1.2 Objednatel je povinen na žádost Poskytovatele poskytnout Poskytovateli potřebnou součinnost při poskytování služeb, o kterou Poskytovatel Objednatele požádá.</div>
				{/* <div class={S.para}>4.1.3 Smluvní strany se dohodly, že skutečnost, že Objednatel zaplatí objednávku vystavenou Poskytovatelem za poskytnuté služby, je zároveň potvrzením, že služby nebo dílo byly poskytnuty, resp. vyhotoveny řádně a včas podle požadavků Objednatele a nemají žádné vady.</div> */}
				<div class={S.para}>4.1.3 Objednatel odevzdáním elektronické objednávky Poskytovateli dává Poskytovateli souhlas na zasíláním informačních a notifikačních e-mailů a SMS souvisejících s poskytovanými službami na kontakty uvedené Objednatelem, a to podle uvážení Poskytovatele.</div>

				<div class={S.h3}>4.2 Práva a povinnosti poskytovatele:</div>
				<div class={S.para}>4.2.1 Poskytovatel je povinen v souladu s objednávkou, případně v souladu s jinými dokumenty vymezujícími obsah smluvního vztahu mezi Poskytovatelem a Objednatelem za platnosti těchto VOP, poskytnout Objednateli služby v dohodnutém rozsahu a v kvalitě, jakou si objednaná služba vyžaduje.</div>
				<div class={S.para}>4.2.2 Poskytovatel se zavazuje, že bude uchovávat v tajnosti a chránit před zveřejněním důvěrné informace charakterizované v bodě 1.4 těchto VOP, které se dozvěděl o Objednateli při naplnění předmětu smluvního vztahu, ledaže mu Objednatel dal na zpřístupnění těchto informací třetím osobám písemný souhlas. V případě udělení písemného souhlasu podle tohoto článku VOP, nezodpovídá Poskytovatel za jejich další zveřejnění. Poskytovatel je zavázán předmětné informace uchovávat v tajnosti jen za předpokladu, že se dozví, že jde o důvěrné informace podle bodu 1.4 VOP. Uvedený zákaz se netýká zpřístupňování důvěrných informací zaměstnancem nebo jiným spolupracovníkem poskytovatele nebo dodavatelem poskytovatele, kterým je v nezbytné míře poskytne za účelem plnění smluvního závazku.</div>
				<div class={S.para}>4.2.3 Poskytovatel nezodpovídá za přerušení resp. omezení dodávky resp. chodu poskytovaných služeb v případě, že přerušení nezavinil.</div>
				<div class={S.para}>4.2.4 Poskytovatel prohlašuje, že jakékoliv datové soubory, které jsou předmětem smlouvy mezi Objednatelem a Poskytovatelem, chrání přiměřeně ve smyslu požadavků zákona 101/2000 Sb. o ochraně osobních údajů a zákona 110/2019 Sb. o zpracování osobních údajů, podrobně uvedených v <a class={S.href} href='/obchodni-udaje/gdpr'>Ochraně osobních údajů</a>.</div>
				<div class={S.para}>4.2.5 V případě, že na straně Poskytovatele došlo ke zcela zjevné technické chybě při uvedení ceny služby na webu nebo v průběhu objednávání, není povinen službu poskytnout za tuto zcela zjevně chybnou cenu pro zdánlivost právního jednání dle § 552 občanského zákoníku, event. pro omyl dle § 571 občanského zákoníku.</div>

				<div class={S.h2}>5. Doba trvání a ukončení smluvního vztahu</div>
				<div class={S.para}>5.1 Smluvní vztah Poskytovatele s Objednatelem trvá po dobu uvedenou v elektronické objednávce.</div>
				<div class={S.para}>5.2 Smluvní vztah je uzavřený na dobu určitou.</div>
				<div class={S.para}>5.2.1 Smluvní vztah uzavřený na dobu určitou se uzavírá na období uvedené v elektronické objednávce.</div>
				{/* <div class={S.para}>5.2.2 Pokud ze smlouvy nebo objednávky nevyplývá něco jiného, nemůže žádná ze smluvních stran vypovídat smluvní vztah uzavřený na dobu určitou.</div> */}

				<div class={S.h2}>6. Platební metody</div>
				<div class={S.para}>Online platby pro nás zajišťuje platební brána společnosti <em>ComGate Payments, a.s.</em>, licencované platební instituce působící pod dohledem České národní banky. Platby probíhající skrze platební bránu jsou plně zabezpečeny a veškeré informace jsou šifrovány.<br /><br />
					Kontakt pro případné dotazy je:<br />
					ComGate Payments, a.s.<br />
					Gočárova třída 1754 / 48b, Hradec Králové<br />
					E-mail: platby-podpora@comgate.cz<br />
					Tel: +420 228 224 267<br />
				</div>
				<div class={S.para}>6.2 Platba bankovním převodem - okamžitá platba prostřednictvím internetového bankovnictví. Platební brána ComGate vás přesměruje do vašeho internetového bankovnictví, kam se přihlásíte jako obvykle a zde potvrdíte už připravený platební příkaz.</div>


				<div class={S.h2}>7. Závěrečná ustanovení</div>
				<div class={S.para}>7.1 Odesláním elektronické objednávky smluvní strany potvrzují, že si tyto VOP zveřejněné na webu služby, které jsou neoddělitelnou součástí objednávky, přečetly a jejich obsahu plně porozuměly.</div>
				<div class={S.para}>7.2 Smluvní strany odesláním objednávky potvrzují, že do smluvního vztahu vstoupily na základě svobodné a vážné vůle, žádná ze stran nejednala v omylu, tísni či za nápadně nevýhodných podmínek, informace uvedené v písemné objednávce jako i tyto VOP a souvisejácí <a class={S.href} href='/obchodni-udaje/dpp'>Dodací, platební a storno podmínky</a> a <a class={S.href} href='/obchodni-udaje/rp'>Reklamační podmínky</a> si řádně přečetly, porozuměly jejich obsahu a jednotlivým pojmům, řádně si vysvětlily význam jednotlivých pojmů a porozuměly jim.</div>
				<div class={S.para}>7.3 Poskytovatel si vyhrazuje měnit tyto VOP kdykoliv.</div>
				<div class={S.para}>7.4 Tyto podmínky vstupují v platnost dne 1.12.2023</div>

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
