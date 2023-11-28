import { component$ } from "@builder.io/qwik";
import { Constants } from "~/constants";
// import { subpath } from "~/root";

// @ts-ignore
// import logoSrc from "~/assets/images/logo.png?width=64&height=64&png";
// import logoSrc from "/images/site.logo.png?height=64&png"
// import logoSrc from "/images/logo.jpg"

export default component$(() => (
	<>
		{/* <span class="self-center ml-2 text-2xl md:text-xl text-gray-900 whitespace-nowrap dark:text-white flex items-center">
			<img
				src={logoSrc}
				class="inline-block mr-1"
				width={96}
				height={96}
				alt="Logo"
				loading="lazy"
			/>
		</span> */}
		{/* <span class="self-center ml-1 text-l md:text text-gray-900 whitespace-nowrap dark:text-white flex items-center"> */}
			<span class="self-center m-4 text-base md:text-base text-gray-900 dark:text-white flex items-center">
				{Constants.Names.Owner}<br/>
				{Constants.Names.Company}<br/>
				akreditovaná ke specializačnímu vzdělávání v oboru klinická psychologie u Min. zdravotnictví
			</span>
	</>
));
