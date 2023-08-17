export default function PricingYear() {
  return (
    <div
    className="transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
    role="tabpanel"
  >
    <div className="grid gap-6 lg:grid-cols-3 lg:gap-x-12">
      <div className="mb-6 lg:mb-0">
        <div className="block h-full rounded-sm bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <div className="p-6 pt-6 pb-10 text-center">
            <p className="mb-4 text-sm uppercase">
              <strong>3 users</strong>
            </p>
            <h3 className="mb-6 text-3xl">
              <strong>$ 799</strong>
              <small className="text-base text-neutral-500 ">
                /year
              </small>
            </h3>

            <button
              type="button"
              className="inline-block w-full text-white rounded-sm px-6 pt-4 pb-4 bg-[#0033ff] hover:bg-blue-600 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out  focus:bg-[hsl(0,0%,95%)] focus:outline-none focus:ring-0 active:bg-[hsl(0,0%,90%)]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Buy
            </button>
          </div>
        </div>
      </div>

      <div className="mb-6 lg:mb-0">
        <div className="block h-full rounded-sm bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <div className="p-6 pt-6 pb-10 text-center">
            <p className="mb-4 text-sm uppercase">
              <strong>4 users</strong>
            </p>
            <h3 className="mb-6 text-3xl">
              <strong>$ 999</strong>
              <small className="text-base text-neutral-500 ">
                /year
              </small>
            </h3>

            <button
              type="button"
              className="inline-block w-full text-white rounded-sm px-6 pt-4 pb-4 bg-[#0033ff] hover:bg-blue-600 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out  focus:bg-[hsl(0,0%,95%)] focus:outline-none focus:ring-0 active:bg-[hsl(0,0%,90%)]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Buy
            </button>
          </div>
        </div>
      </div>

      <div className="mb-6 lg:mb-0">
        <div className="block h-full rounded-sm bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
          <div className="p-6 pt-6 pb-10 text-center">
            <p className="mb-4 text-sm uppercase">
              <strong>More users</strong>
            </p>
            <h3 className="mb-6 text-3xl">
              <strong>Custom offer</strong>
            </h3>

            <button
              type="button"
              className="inline-block w-full text-white rounded-sm px-6 pt-4 pb-4 bg-[#0033ff] hover:bg-blue-600 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out  focus:bg-[hsl(0,0%,95%)] focus:outline-none focus:ring-0 active:bg-[hsl(0,0%,90%)]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
