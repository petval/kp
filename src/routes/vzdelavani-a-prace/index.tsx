import Features from '~/components/widgets/Features'
import { SITE } from '~/config.mjs'
import { qwikSerialized } from '~/utils/qwikSerialized'
import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from "@builder.io/qwik-city"
import { Styles as S } from '~/constants'

// const IconBulb = qwikSerialized(() => import("../../components/icons/IconBulb"))
// const IconRocket = qwikSerialized(() => import("../../components/icons/IconRocket"))
const IconStar = qwikSerialized(() => import("../../components/icons/IconStar"))
const IconSun = qwikSerialized(() => import("../../components/icons/IconSun"))
// const IconMoon = qwikSerialized(() => import("../../components/icons/IconMoon"))

export default component$(() => {
	return (
		<>

			<div class={S.header}>
				<div class={S.pageTitle}>Vzdělávání</div>
			</div>

			<Features
				highlight=''
				title=''
				subtitle='Pracoviště je akreditováno k uskutečňování vzdělávacího programu v oboru klinická psychologie u Ministerstva zdravotnictví České republiky'
				items={[
					{
						title: '',
						description: 'Plánujeme kurz s PhDr. Martinou Pastuchovou pro psychology ve zdravotnictví a klinické psychology',
						icon: IconStar,
					},
				]}
			/>

			<Features
				highlight=''
				title='Práce'
				subtitle='Přijmeme'
				items={[
					{
						title: '',
						description: 'klinickou psycholožku / klinického psychologa',
						icon: IconSun,
					},
				]}
			/>

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
