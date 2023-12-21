import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { SITE } from '~/config.mjs'
import { Constants as C, Styles as S } from '~/constants'

const items = [
	{ key: 'Název společnosti', service: `${C.Names.Owner} - ${C.Names.Company}` },
	{ key: 'Sídlo společnosti', service: 'Veselíčko 1064, Brušperk, 739 44, Česko' },
	{ key: 'IČ', service: '68316992' },
	{ key: 'Telefon', service: '+420 608 959 030' },
	{ key: 'Email', service: 'ordinace@klinickapsycholozka.cz' },
	{ key: 'GDPR', service: 'Ochrana osobních údajů', link: '/obchodni-udaje/gdpr' },
]

const linkMedical = [
	{ key: 'Objednávky a platební podmínky', link: '/objednavky' },
]

const linkCommerce = [
	{ key: 'Všeobecné obchodní podmínky', link: '/obchodni-udaje/vop' },
	{ key: 'Dodací a platební podmínky', link: '/obchodni-udaje/dpp' },
	{ key: 'Reklamační podmínky', link: '/obchodni-udaje/rp' },
]

export default component$(() => {
	return (
		<>

			<div class={S.header}>
				<div class={S.h1}>Obchodní údaje</div>
			</div>

			{/* <div class={S.start}> */}

				<div class='py-12 md:py-12 m4'>

				<ul class='flex flex-col w-full mb-4 md:order-1 -ml-2 md:ml-4 md:mb-0 '>
					{items.map(({ key, service, link }, index) => (
						<li key={index} class=''>
							<div class='md:flex px-2 mx-2 my-1 py-1'>
								<div class='md:w-1/4 px-4' ><span class='font-bold'>{key}</span>:</div>
								<div class='md:w-3/4 px-4' >
									{link
										? <span class='' ><a class={S.href} href={link}>{service}</a></span>
										: <span class='' >{service}</span>
									}
								</div>
							</div>
						</li>
					))}
				</ul>
				<br />

				<div class='md:flex md:w-full px-2 mx-2 my-1 py-1 my-4'>
					<div class='md:w-1/2 px-2 font-bold text-2xl my-3' >Služby zdravotního pojištění
						<ul class='flex flex-col w-full md:order-1 md:mb-0 mt-2'>
							{linkMedical.map(({ key, link }, index) => (
								<li key={index} class=''>
									<div class='md:flex'>
										<span class='text-base'><a class={S.href} href={link}> {key}</a></span>
									</div>
								</li>
							))}
						</ul>
					</div>

					<div class='md:w-1/2 px-2 font-bold text-2xl my-4' >Komerční služby
						<ul class='flex flex-col w-full md:order-1 md:mb-0 '>
							{linkCommerce.map(({ key, link }, index) => (
								<li key={index} class=''>
									<div class='md:flex py-2'>
										<span class='text-base'><a class={S.href} href={link}> {key}</a></span>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>

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
