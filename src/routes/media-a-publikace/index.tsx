import { SITE } from '~/config.mjs'
import { component$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import type { DocumentHead } from "@builder.io/qwik-city"
import { subpath } from "~/root"


const items = [
	{
		link: {
			text: 'How can health professionals promote strong and loving bonds in the family (PDF)',
			url: 'http://casopis-zsfju.zsf.jcu.cz/journal-of-nursing-social-studies-public-health-and-rehabilitation/administrace/clankyfile/20150112093118781484.pdf'
		},
		by: null,
		source: 'Journal of nursing, social studies and public health. 2014, roč. 5, č. 3-4, s. 189. ISSN: 1804-1868; 1804-7181.',
	},
	{
		link: {
			text: 'Domperidon – „lék na zvýšení laktace“ – rizika pro kojící matky, jejich kompetence a vztahovou vazbu k dětem (PDF)',
			url: 'http://www.pediatriepropraxi.cz/pdfs/ped/2014/03/17.pdf'
		},
		by: 'MUDr. Marcela Peremská, Mgr. Michaela Mrowetz, Mgr. Markéta Pavlíková',
		source: 'Pediatrie pro praxi. 2014, roč. 15, č. 3, s. 179-181. ISSN: 1213-0494; 1803-5264',
	},
	{
		link: {
			text: 'Co se děje v českém porodnictví – mezi dítětem, matkou a porodníky?',
			url: 'https://www.psychosom.cz/54-archiv/436-z-konferenci-kodysova-mrowetz'
		},
		by: 'Kodyšová E., Mrowetz M.',
		source: 'PsychoSom. 2013, roč. 11, č. 3, s. 196-201. ISSN: 1214-6102',
	},
	{
		link: {
			text: 'Podpora raného kontaktu jako nepodkročitelná norma – chiméra, či realita budoucnosti? (PDF)',
			url: 'http://www.pediatriepropraxi.cz/pdfs/ped/2013/03/17.pdf'

		},
		by: 'Mrowetz, Michaela, Peremská, Marcela',
		source: 'Pediatrie pro praxi. 2013, roč. 14, č. 3, s. 201-204. ISSN: 1213-0494; 1803-5264',
	},
	{
		link: {
			text: 'Kniha Bonding-porodní radost: podpora rodiny jako cesta k ozdravení porodnictví a společnosti?',
			url: 'https://www.databazeknih.cz/knihy/bonding-porodni-radost-podpora-rodiny-jako-cesta-k-ozdraveni-porodnictvi-a-spolecnosti-103506'
		},
		by: 'Mrowetz, Michaela, Chrastilová, Gauri, Antalová, Ivana',
		source: 'Praha: DharmaGaia, 2011, 368 stran, ISBN: 978-80-7436-014-5'
	},
	{
		link: {
			text: 'Porodní bolest – porodní radost',
			url: 'https://nakladatelstvi.portal.cz/casopisy/psychologie-dnes/82713/porodni-bolest-porodni-radost'
		},
		by: 'Mrowetz, Michaela',
		source: 'Psychologie dnes. 2010, roč. 16, č. 4, s. 12-15. ISSN: 1212-9607.',
	},
	{
		link: {
			text: 'Objektivní data o mrtvých dětech',
			url: 'http://zdravi.e15.cz/clanek/mlada-fronta-zdravotnicke-noviny-zdn/objektivni-data-o-mrtvych-detech-456330'
		},
		by: 'Hořejší, Adéla, Mrowetz, Michaela, Pavlíková, Markéta',
		source: 'Zdravotnické noviny. 2010, roč. 59, č. 49, s. 22-23. ISSN: 1805-2355; 1214-7664 (elektronická verze).',
	},
	{
		link: {
			text: 'Bonding neboli děti chtějí být připoutány k matkám!',
			url: 'https://zdravi.euro.cz/clanky/bonding-neboli-deti-chteji-byt-pripoutany-k-matkam/'
		},
		by: 'Mrowetz, Michaela',
		source: 'Sestra. 2009, roč. 19, č. 11, s. 30-31. ISSN: 1210-0404.',
	},
	{
		link: {
			text: 'Psychologie porodu – chiméra, nebo realita?',
			url: 'https://denikreferendum.cz/clanek/423-psychologie-porodu-chimera-nebo-realita',
		},
		by: 'Kodyšová, Eliška, Mrowetz, Michaela',
		source: 'Zdravotnické noviny. 2009, roč. 58, č. 48, s. 22-23. ISSN: 1805-2355; 1214-7664 (elektronická verze).',
	},
	{
		link: {
			text: 'Posttraumatická stresová porucha (PTSD) po porodu – diagnostika a terapie',
			url: 'http://www.psychiatria-casopis.sk/psychiatria/archiv-cisel/archiv/obsah-cisla-1-2013/povodna-praca/posttraumaticka-stresova-porucha-ptsd-po-porodu-diagnostika-terapie.html'
		},
		by: 'Mrowetz, Michaela',
		source: 'Časopis Psychiatria-psychoterapia-psychosomatika',
	},
	{
		link: {
			text: 'Contact between mother and child promotes health',
			url: `${subpath}/files/PRE_25_S1_2013_Mrowetz_p25-32.pdf`
		},
		by: 'Mrowetz, Michaela',
		source: 'Int. J Prenatal and Perinatal Psychology and Medicine, Vol. 25, Suppl. 1 (2013), pp. 25–32, PRE250513A04',
	},
]

export default component$(() => {
	return (
		<>
			<div class="basis-1/2 text-center lg:text-left pb-2 md:pb-2 mx-auto flex flex-col items-center justify-center">
				<h3 class="text-4xl md:text-4xl font-bold leading-tighter tracking-tighter mb-2 font-heading dark:text-gray-200">
					Média a publikace
				</h3>
			</div>

			<div class="text-gray-800 dark:text-gray-300 font-medium p-4">Příjmení 'Mrowetz' a 'Mrowetz - Bartáková' používala Mgr. Michaela Bondy v prvním manželství.</div>
			{items.map(({ link, by, source }, index) => (
				<div key={index} class="col-span-6 md:col-span-3 lg:col-span-2 p-4">
					{Array.isArray(items) && items.length > 0 && (
						<ul class="text-base">
							<li key={index}>
								<Link
									class="text-gray-600 hover:text-gray-700 hover:underline dark:text-gray-400 transition duration-150 ease-in-out"
									href={link.url}>{link.text}</Link>
							</li>
							<li key={index}>{by}</li>
							<li key={index}>{source}</li>
						</ul>
					)}
				</div>
			))}
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
