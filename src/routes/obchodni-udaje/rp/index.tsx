import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { SITE } from '~/config.mjs'
import { Styles as S } from '~/constants'

export default component$(() => {
	return (
		<>

			<div class={S.header}>
				<div class={S.h1}>Reklamační podmínky</div>
			</div>

			<div class={S.start}>

				<div class={S.para}>Poskytování služeb se řídí <a class={S.href} href='/obchodni-udaje/vop'>Všeobecnými obchodními podmínkami</a> a <a class={S.href} href='/obchodni-udaje/dpp'>Dodacími, platebními a storno podmínkami</a>.</div>

				<div class={S.para}>Z povahy poskytované služby online konzultace,  byla-li tato služba poskytnuta, není možné dodanou službu reklamovat a žádat vrácení platby.</div>

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
