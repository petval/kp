import { twMerge } from "tailwind-merge";
import { Styles as S } from "~/constants";

interface Props {
  title?: string;
  subtitle?: string;
  highlight?: string;
  classes?: Record<string, string>;
}

export const Headline = (props: Props) => {
  const { title = "", subtitle = "", highlight = "", classes = {} } = props;

  const {
    container: containerClass = "max-w-3xl",
    title: titleClass = S.pageTitle,
    // title: titleClass = "text-4xl md:text-5xl ",
    subtitle: subtitleClass = S.subTitle,
  } = classes;

  return (title || subtitle || highlight) ? (
      // <div class={twMerge(" text-center", containerClass)}>
      <div class={twMerge("mb-8 md:mx-auto md:mb-8 text-center", containerClass)}>
        {highlight && (
          <p
            class="uppercase dark:text-indigo-100 tracking-wide text-xl text-indigo-500 font-bold text-primary-600"
            dangerouslySetInnerHTML={highlight}
          />
        )}
        {title && (
          <h2
            // class={twMerge("font-bold leading-tighter tracking-tighter font-heading text-heading", titleClass)}
            class={twMerge("", titleClass)}
            dangerouslySetInnerHTML={title}
          />
        )}

        {subtitle && <p class={twMerge("mt-4 text-muted", subtitleClass)} dangerouslySetInnerHTML={subtitle} />}
      </div>
    ) : null;
};