import { component$ } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"

import { SITE } from "~/config.mjs"

const items = [
  {
    name: 'Mgr. Michaela Bondy', pos: 'Klinická psycholožka, psychoterapeutka', img: '/kp/images/foto/lide/michaela.jpg',
    desc: 'Ve své ordinaci pracuje od roku 2001, Individuální terapie reprodukčních problémů, jakými jsou problémy s početím, těhotenstvím, rozením, kojením, posilování attachmentu – pevné láskyplné vazby mezi dětmi a rodiči. psychoterapeutická léčba reprodukčních traumat, traumat po ztrátách prenatálních dětí, po ztrátách narozených dětí, psychoterapeutická léčba ztráty kontroly nad porodním procesem, kojením, rodičovstvím, soudně znalecká činnost u dospělých osob v trestním právu.',
    edu: 'Promovala z jednoooborové psychologie na FF UP v Olomouci v roce 1996.'
  },
  {
    name: 'Mgr. Jana Vyvlečková', pos: 'Psycholožka ve zdravotnictví', img: '/kp/images/foto/lide/jana.jpg',
    desc: 'V ordinaci pracuje od roku 2021. Vzdělává se a pracuje v rámci náležitostí předatestační přípravy pro klinickou psychologii pod supervizí klinické psycholožky Mgr. Michaely Bondy. Frekventantka psychoterapeutického výcviku Transformační systemické terapie podle V. Satirové (výcvik je certifikován Českou psychoterapeutickou společností ČLK JEP); provádí individuální diagnostiku kognitivních funkcí dětí od šesti let a dospělých osob, individuální konzultace psychologických obtíží a terapeutickou péči dle vzdělávání v psychoterapeutickém výcviku',
    edu: 'Promovala z jednoooborové psychologie na FF UP v Olomouci v roce 2019.'
  },
  {
    name: 'Mgr. Marie Vondrášková', pos: 'Psycholožka ve zdravotnictví', img: '/kp/images/foto/lide/marie.jpg',
    desc: ' V ordinaci pracuje od roku 2023. Vzdělává se a pracuje pod supervizí klinické psycholožky Mgr. Michaely Bondy.',
    edu: 'Promovala z jednoooborové psychologie na FF UP v Olomouci v roce 2021.'
  },
  {
    name: 'Andrea Panenková', pos: 'asistentka', img: '/kp/images/foto/lide/andrea.jpg',
    desc: 'Pomůže Vám s objednáním, omluvou nebo změnami termínů.',
    edu: null
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
          {items.map(({ name, pos, edu, img, desc }, index) => (
            <li key={index}>
              <div class='text-xl'>{name}</div>
              <div class='text-sm'>{pos}. {edu}</div>
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
