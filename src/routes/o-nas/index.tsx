import { component$ } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"

import { SITE } from "~/config.mjs"

const items = [
  {
    name: 'Mgr. Michaela Bondy', pos: 'klinická psycholožka, psychoterapeutka', img: '/kp/images/foto/lide/michaela.jpg',
    desc: null
  },
  {
    name: 'Mgr. Jana Vyvlečková', pos: 'psycholožka ve zdravotnictví', img: '/kp/images/foto/lide/jana.jpg',
    desc: null
  },
  {
    name: 'Mgr. Marie Vondrášková', pos: 'psycholožka ve zdravotnictví', img: '/kp/images/foto/lide/marie.jpg',
    desc: null
  },
  {
    name: 'Andrea Panenková', pos: 'asistentka', img: '/kp/images/foto/lide/andrea.jpg',
    desc: null
  },
]

export default component$(() => {
  return (
    <>
      <div class="md:flex md:items-center md:justify-between py-6 md:py-8">
        <div class="md:order-1">
          <h1>
            Náš tým
          </h1>
        </div>
      </div>

      <div class="md:flex md:items-center md:justify-between py-6 md:py-8">
        <ul class="flex flex-col mb-4 md:order-1 -ml-2 md:ml-4 md:mb-0">
          {items.map(({ name, pos, img, desc }, index) => (
            <li key={index}>
              <div class='text-xl'>{name}</div>
              <div class='text-sm'>{pos}</div>
              <img src={img} alt={name} width='256' height='256' />
              <div>{desc}</div>
              <br/><br/>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
});

      export const head: DocumentHead = {
        title: SITE.title,
      meta: [
      {
        name: "description",
      content: SITE.description,
    },
      ],
};
