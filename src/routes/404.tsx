import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <section class="flex items-center p-16 h-[calc(100vh - 72px)]">
      <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div class="max-w-md text-center">
          <h2 class="mb-8 font-bold text-9xl text-primary">
            <span class="sr-only">Chyba - Error</span>
            <span>404</span>
          </h2>
          <p class="text-3xl font-medium md:text-3xl">Stránka nenalezena.</p>
          <p class="mt-4 mb-8 text-lg text-muted">
            Zkuste najít, co hledáte, na <a rel="noopener noreferrer" href="/kp" >naší domovské stránce</a>.
          </p>
        </div>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: "Error 404",
};
