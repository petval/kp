import FAQs from '~/components/widgets/FAQs'
import Features from '~/components/widgets/Features'
import Hero from '~/components/widgets/Hero'
import Steps from '~/components/widgets/Steps'
import { SITE } from '~/config.mjs'
import { subpath } from '~/root'
import { qwikSerialized } from '~/utils/qwikSerialized'
import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
// import { Styles as S } from '~/constants'
// import Stats from '~/components/widgets/Stats';
// import CallToAction from '~/components/widgets/CallToAction';

// const IconBrandGoogle = qwikSerialized(() => import("../components/icons/IconBrandGoogle"));
// const IconBulb = qwikSerialized(() => import("../components/icons/IconBulb"));
const IconBrandTailwind = qwikSerialized(() => import("../components/icons/IconBrandTailwind"))
const IconApps = qwikSerialized(() => import("../components/icons/IconApps"))
const IconRocket = qwikSerialized(() => import("../components/icons/IconRocket"))
export default component$(() => {
	return (
		<>
			<Hero />
			<Features
				highlight='Specializujeme se na podporu zdraví'
				title=''
				subtitle=""
				items={[
					{
						title: 'Poskytujeme služby',
						description: 'z oblasti klinické psychologie, psychodiagnostiky, psychoterapie a krizovou intervenci. Služby jsou hrazeny všemi zdravotními pojišťovnami. Dále i online služby hrazené klienty.',
						icon: IconBrandTailwind,
					},
					{
						title: 've kterých',
						description: 'se zabýváme diagnostikou a léčbou ponejvíce reaktivních stavů úzkosti a deprese, psychosomatických problémů dospělých lidí, vývojových a existenciálních problémů adolescentů a dětí od 6 let.',
						icon: IconApps,
					},
					{
						title: 'Také provádíme',
						description: 'klinickopsychologická vyšetření při diferenciálních stavech, před somatickýcmi operacemi, při žádosti o invalidizaci.',
					},
					{
						title: 'Do ordinace se mohou objednat',
						description: 'klienti od 6 let, nezletilé děti objednávají rodiče či zákonní zástupci, kteří se péče účastní. U dětských i dospělých klientů se můžete objednat na komplexní klinicko-psychologické vyšetření a poté psychoterapii.',
						icon: IconRocket,
					},
				]}
			/>
			<Steps />
			<FAQs
				title=""
				subtitle=""
				highlight="Často kladené otázky"
				items={[
					{
						title: 'Jak dlouhé máte čekací doby?',
						description: 'Buďte vytrvalí, volejte opakovaně, napište email a jednejte podle instrukcí. Naši klienti jsou disciplinovaní a omlouvají se, někdy vznikne termín ze dne na den, někdy to trvá několik měsíců.',
					},

				]}
			/>

			<div class="justify-center w-auto max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 g:m-0 lg:max-w-7xl">
				<div class="flex w-full sm:w-auto">
					<a class="btn btn-primary sm:mb-0 w-full" href={`${subpath}/ostrava`} rel="noopener">
						Ostrava
					</a>
				</div>
				<div class="flex w-full sm:w-auto">
					<a class="btn btn-primary sm:mb-0 w-full" href={`${subpath}/brusperk`} rel="noopener">
						Brušperk
					</a>
				</div>
			</div>
			<div class="py-4" />

			{/* <Stats /> */}
			{/* <CallToAction /> */}
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
