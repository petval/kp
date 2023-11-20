import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

const coverImage =
  "https://images.unsplash.com/photo-1590767950092-42b8362368da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80";

export default component$(() => {
  return (
    <>
      {/* <div class="relative "> <p style="color:red">Aktuálně máme velmi krátké termíny na psychodiagnostiku dětí i dospělých.</p> </div> */}
    <section class="relative md:-mt-[76px] not-prose">

      {/* <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div> */}
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* <div class="pt-0 md:pt-[76px] pointer-events-none"></div> */}
        <div class="py-12 md:py-20 lg:py-0 lg:flex lg:items-center lg:h-screen lg:gap-8">
          {/* <div class="basis-1/8 text-center lg:text-left pb-10 md:pb-16 mx-auto">
            <p style="color:red">Aktuálně máme velmi krátké termíny na psychodiagnostiku dětí i dospělých.</p>
          </div> */}
          <div class="basis-1/2 text-center lg:text-left pb-10 md:pb-16 mx-auto">
            <h3 style="color:red"><strong>Aktuálně</strong> máme velmi krátké termíny na psychodiagnostiku dětí i dospělých</h3>
            <br/>
            <h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">
              Ordinace klinické psychologie a psychoterapie <br class="hidden lg:block" />{" "}
              {/* <span class="hidden lg:inline">create a website using </span> <span class="text-[#039de1]">Qwik</span> +{" "}
              <span class="sm:whitespace-nowrap text-[#039de1]">Tailwind CSS</span> */}
            </h1>
            {/* <h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">
              Free template for <br class="hidden lg:block" />{" "}
              <span class="hidden lg:inline">create a website using </span> <span class="text-[#039de1]">Qwik</span> +{" "}
              <span class="sm:whitespace-nowrap text-[#039de1]">Tailwind CSS</span>
            </h1> */}
            <div class="max-w-xl mx-auto lg:max-w-none">
              <p class="text-xm text-muted mb-6 dark:text-slate-300">
                {/* <span class="font-semibold underline decoration-wavy decoration-1 decoration-secondary-600 underline-offset-2">
                  Qwind
                </span>{" "} */}
                Naše služby posktyjeme<br/>v <em>Ostravě</em> - diagnostiku, psychoterapii a krizovou intervenci<br/>a v <em>Brušperku</em> - psychoterapii a krizovou intervenci.
                {/* has been designed following Best Practices, SEO, Accessibility,{" "} */}
                {/* <span class="inline md:hidden">...</span>
                <span class="hidden md:inline">
                  Dark Mode, Great Page Speed, image optimization, sitemap generation and more.
                </span> */}
                <br/><br/>
                Jsme nekuřácké pracoviště – zdravotnické zařízení – a jsme nekuřáci. Žádáme kuřáky, aby před vyšetřením a terapií nekouřili. I pasivní kouření dle výzkumů škodí zdraví a kontakt s kuřáky je pro nás zatěžující.
              </p>

              <div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 lg:justify-start lg:m-0 lg:max-w-7xl">
                <div class="flex w-full sm:w-auto">
                  <a
                    class="btn btn-primary sm:mb-0 w-full"
                    href="/kp/ostrava"
                    // target="_blank"
                    rel="noopener"
                  >
                    Ostrava
                  </a>
                </div>
                <div class="flex w-full sm:w-auto">
                  {/* <button class="btn w-full bg-gray-50 dark:bg-transparent">Learn more</button> */}
                  <a
                    class="btn btn-primary sm:mb-0 w-full"
                    href="/kp/brusperk"
                    // target="_blank"
                    rel="noopener"
                  >
                    Brušperk
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="basis-1/2">
            <Image
              src={coverImage}
              layout="constrained"
              width={493}
              height={616}
              alt="Qwind Hero Image (Cool dog)"
              class="mx-auto lg:mr-0 w-full drop-shadow-2xl rounded-md"
              priority={true}
              breakpoints={[320, 480, 640, 768, 1024]}
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
});
