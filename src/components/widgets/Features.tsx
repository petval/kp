import { component$ } from "@builder.io/qwik"
import { twMerge } from "tailwind-merge"
import { Headline } from "~/components/ui/Headline"
import { ItemGrid } from "~/components/ui/ItemGrid"
// import { Styles as S } from "~/constants"

import IconStar from "~/components/icons/IconStar"
import type { ILink } from "~/model/Ilink"
interface Item {
  title?: string
  description?: string
  icon?: any
  classes?: Record<string, string>
  link?: ILink
}

interface Props {
  id?: string
  title?: any
  subtitle?: any
  highlight?: any
  items: Array<Item>
  isDark?: boolean
  classes?: any
}

export default component$((props: Props) => {
  const { id, title = "", subtitle = "", highlight = "", items = [], classes = {}, isDark = false } = props

  return (
    <section class="relative scroll-mt-16" {...(id ? { id } : {})}>
      <div class="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true">
        <slot name="bg">
          <div class={twMerge("absolute inset-0", isDark ? "bg-dark dark:bg-transparent" : "")}></div>
        </slot>
      </div>
      <div
        class={twMerge(
          // "relative mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default",
          // "py-12 md:py-16 lg:py-20 text-default",
          "m-4 pt-4 text-default",
          classes?.container,
          isDark ? "dark" : ""
        )}
      >
        <Headline
          title={title}
          subtitle={subtitle}
          highlight={highlight}
          classes={classes?.headline}

        />
        <ItemGrid
          items={items}
          defaultIcon={IconStar}
          classes={{
            container: "md:grid-cols-2",
            title: "md:text-[1.3rem]",
            icon: "text-white bg-secondary-500 dark:bg-secondary-700 rounded-full w-10 h-10 p-2 md:w-12 md:h-12 md:p-3 mr-4",
            ...(classes?.items ?? {}),
          }}
        />
      </div>
    </section>
  )
})
