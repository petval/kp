import { component$ } from "@builder.io/qwik"
import { Image } from "@unpic/qwik"
import { subpath } from "~/root"

import IconStar from "~/components/icons/IconStar"
import { Headline } from "../ui/Headline"
// const sideImg = "https://images.unsplash.com/photo-1583195648430-18b2681307e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80";
const sideImg = `${subpath}/images/foto/budova.brusperk.jpg`

export default component$(() => {
  const stepsData = {
    title: 'Vzdělávání psychologů a práce u nás.',
    items: [
      {
        title: 'Vzdělávání',
        description: 'Pracoviště je akreditováno k uskutečňování vzdělávacího programu v oboru klinická psychologie u Ministerstva zdravotnictví České republiky',
        icon: IconStar,
      },
      {
        title: 'Práce',
        description: 'klinickou psycholožku / klinického psychologa',
        icon: IconStar,
      },
    ],
    image: {
      src: sideImg,
      alt: 'Budova ordinace Brušperk',
    },
  }
  const { title, items, image } = stepsData

  return (
    <section class="relative max-w-7xl mx-auto px-4 sm:px-40">
      <div class="py-12 lg:py-16 lg:flex lg:items-center lg:gap-8">

        <div class="basis-2/3 sm:text-center md:text-left pb-10 md:pb-16 mx-auto">

          {title &&
            <Headline title={''} subtitle={''} highlight={title} classes={undefined} />
          }

          {items.map(({ title, description, icon: Icon }, index) => (
            <div key={`item-steps-${index}`} class="flex">
              <div class="mr-4 flex flex-col items-center">
                <div>
                  {index !== items.length - 1 ? (
                    <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-900">
                      {Icon
                        ? (<Icon class="h-6 w-6 text-primary-800 dark:text-slate-200" />)
                        : (<IconStar class="h-6 w-6 text-primary-800 dark:text-slate-200" />)}
                    </div>
                  ) : (
                    <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-900 bg-primary-900">
                      {Icon
                        ? (<Icon class="h-6 w-6 text-white dark:text-slate-200" />)
                        : (<IconStar class="h-6 w-6 text-white dark:text-slate-200" />)}
                    </div>
                  )}
                </div>
                {index !== items.length - 1 && <div class="h-full w-px bg-gray-300 dark:bg-slate-500"></div>}
              </div>
              <div class={`pt-1 ${index !== items.length - 1 ? 'pb-8' : ''}`}>
                {title && <p class="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">{title}</p>}
                {description && <p class="text-left text-gray-600 dark:text-slate-400">{description}</p>}
              </div>
            </div>
          ))}
        </div>

        <div class="basis-1/3">
          {image && (

            <Image
              layout="constrained"
              src={image.src}
              width={600}
              height={600}
              alt={image.alt}
              // class="inset-0 w-full rounded-md bg-gray-500 object-cover object-top shadow-lg dark:bg-slate-700 md:absolute md:h-full"
              class="mx-auto lg:mr-0 w-full drop-shadow-2xl rounded-md"
              breakpoints={[320, 480, 640, 1024]}
            />
          )}
        </div>

      </div>
    </section>
  )
})
