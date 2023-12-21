import { twMerge } from 'tailwind-merge'
import { Constants } from '~/constants'
import type { ILink } from "~/model/Ilink"
export const subpath = Constants.RepoPath

interface Item {
  title?: string
  description?: string
  icon?: any
  classes?: Record<string, string>
  link?: ILink
}

interface Props {
  items?: Array<Item>
  defaultIcon?: any
  classes?: Record<string, string>
}

export const ItemGrid = (props: Props) => {
  const { items = [], defaultIcon: DefaultIcon = null, classes = {} } = props

  const {
    container: containerClass = "md:grid-cols-2",
    panel: panelClass = "",
    title: titleClass = "",
    description: descriptionClass = "",
    icon: defaultIconClass = "text-secondary-500 dark:text-secondary-700",
  } = classes as Record<string, string>

  return (
    items && (
      <div class={twMerge("grid mx-auto gap-8", containerClass)}>
        {items.map(({ title, description, icon: Icon, link, classes: itemClasses = {} }, index) => (
          <div key={`${title}${index}`}>
            <div class={twMerge("flex flex-row max-w-md", panelClass, itemClasses.panel)}>
              <div class="flex justify-center">
                {(Icon || DefaultIcon) &&
                  (Icon ? (
                    <Icon class={twMerge("w-7 h-7 mr-2", defaultIconClass, itemClasses.icon)} />
                  ) : (
                    <DefaultIcon class={twMerge("w-7 h-7 mr-2", defaultIconClass, itemClasses.icon)} />
                  ))}
              </div>
              <div>
                <h3 class={twMerge("text-xl font-bold", titleClass, itemClasses.title)}>{title}</h3>
                {description && (
                  <p
                    class={twMerge("text-gray-600 dark:text-slate-400 mt-3", descriptionClass, itemClasses.description)}
                    dangerouslySetInnerHTML={description}
                  />
                )}
                {link && (
                  <div class="text-center pt-2 py-2">
                    <a class="btn btn-primary sm:mb-0 w-auto" href={`${subpath}${link.url}`} rel="noopener">
                      {link.text}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  )
}
