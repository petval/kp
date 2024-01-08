import { component$ } from "@builder.io/qwik"
import { Image } from "@unpic/qwik"
// import { Constants } from "~/constants"
import { subpath } from "~/root"
const coverImage = `${subpath}/images/foto/budova.ostrava.jpg`

export default component$(() => {
  return (
    <>
      {/* <section class="relative md:-mt-[76px] not-prose"> */}
      <section class="relative not-prose">

        <div class="relative max-w-7xl mx-auto px-2 sm:px-6">

          {/* <div class="py-12 md:py-20 lg:py-0 lg:flex lg:items-center lg:h-screen lg:gap-8"> */}
          {/* <div class="self-center m-4 text-base font-bold text-red-500 dark:text-yellow-500 flex items-center">
            Pozůstalým a ohroženým svědkům černého čtvrtku mohu poskytnout krizovou intervenci v ordinaci v Brušperku. Pište, prosím na email: michaelabondy@klinickapsycholozka.cz, do předmětu "FF UK".
          </div> */}
          <h1 class="text-center md:pt-12 sm:pt-2 sm:pt-2 text-4xl md:text-6xl sm:text-2-xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">
            Ordinace klinické&nbsp;psychologie a&nbsp;psychoterapie
          </h1>
          <div class="pt-0 md:flex sm:items-center lg:gap-8">

            <div class="basis-2/3 sm:text-left pb-10 md:pb-16 mx-auto">
              <div class="max-w-xl mx-auto lg:max-w-none py-4 pt-8">
                <p class="text-base text-muted mb-6 dark:text-slate-300 left m-4">
                  <span class="font-bold decoration-secondary-600 text-primary-600 dark:text-purple-200 uppercase">Naše služby poskytujeme v</span>:
                  <br /><br /><span class="font-semibold decoration-1 decoration-secondary-600">Ostravě</span> - diagnostiku, psychoterapii a&nbsp;krizovou intervenci,
                  <br /><span class="font-semibold decoration-1 decoration-secondary-600">Brušperku</span> - psychoterapii, krizovou intervenci a&nbsp;online konzultace.
                  {/* <br /><br /><span class="text-base text-red-500 dark:text-yellow-500"><strong>Aktuálně</strong> máme velmi krátké termíny na psychodiagnostiku dětí i dospělých.</span> */}
                  <br /><br />Většina péče v naší ordinaci je hrazená z konta zdravotního pojištění, máme smlouvy s těmito pojišťovnami - 111 VZP, 201 VoZP, 205 ČPZP, 207 OZP, 211 ZPMV, 213 RBP.
                  <br /><br />K vyšetření / terapeutickému sezení se dostavte v čas určený psycholožkou nebo asistentkou, NE s velkým předstihem, a zvoňte nejdříve 5 minut před domluveným termínem.
                  <br /><br />Jsme nekuřácké pracoviště – zdravotnické zařízení – a jsme nekuřáci. Žádáme kuřáky, aby před vyšetřením a terapií nekouřili. I pasivní kouření dle výzkumů škodí zdraví a kontakt s kuřáky je pro nás zatěžující.
                </p>

                {/* <div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 lg:justify-start lg:m-0 lg:max-w-7xl">
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
                </div> */}

              </div>
            </div>

            <div class="basis-1/3 mx-2">
              <Image
                src={coverImage}
                layout="constrained"
                width={600}
                height={600}
                alt="Budova ordinace Ostrava"
                class="mx-auto lg:mr-0 drop-shadow-2xl rounded-md px-30"
                priority={true}
                breakpoints={[320, 480, 640, 768, 1024]}
              />
            </div>

          </div>

        </div>
      </section>
    </>
  )
})
