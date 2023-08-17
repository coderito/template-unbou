import { Slide } from "react-awesome-reveal";

export default function Footer() {
  return (

    <Slide direction="up" triggerOnce className="bg-[#0033ff] grid gap-6 md:grid-cols-3 md:justify-items-center py-8 md:py-12 mt-10">
      <div className="z-10 flex flex-wrap items-center justify-center gap-x-1 gap-y-3 sm:gap-x-2 md:col-span-3 lg:justify-start">
        <div className="flex items-center gap-x-1 text-md">
          <span className="text-white">Made with</span>
          <svg
            data-testid="Icon"
            className="h-6 w-6 text-red-500 fill-current stroke-none "
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth="0"
            focusable="false"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
            ></path>
          </svg>
          <span className="text-white">by</span>
          <a
            className="font-medium text-slate-200 underline decoration-dashed decoration-0 underline-offset-4 transition-colors hover:text-primary-200"
            target="_blank"
            href="https://www.twitter.com/itodev_source"
            rel="noreferrer"
          >
            @itodev_source
          </a>
        </div>
      </div>
    </Slide>
  );
}
