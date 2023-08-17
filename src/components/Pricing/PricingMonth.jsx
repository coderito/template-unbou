import { Bounce } from "react-awesome-reveal";

export default function PricingMonth() {
  return (
    <div
    className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
    id="pills-home02"
    role="tabpanel"
    aria-labelledby="pills-home-tab02"
    data-te-tab-active
  >
    <div className="grid gap-6 lg:grid-cols-4 lg:gap-x-12">
    <div className="mb-6 lg:mb-0">
        <div className="block h-full text-black border rounded-sm shadow">
          <div className="border-b-1 border-neutral-100 border-opacity-100 p-6 text-center">
          <Bounce cascade damping={0.2} triggerOnce> 
            <p className="mb-4 text-md uppercase">
              <strong>Free</strong>
            </p>
            
            <h3 className="mb-6 text-3xl flex flex-col text-neutral-900">
              <div>
                <strong>$ 0</strong>
                <small className="text-base ">
                  /month
                </small>
              </div>

              <strong className="text-xs text-neutral-500">
                + IVA
              </strong>
            </h3>
            </Bounce >
            <hr className="border border-t border-white w-full" />
            <button
              type="button"
              className="bg-[#0033ff] hover:bg-blue-600 border border-slate-900 text-white  inline-block w-full rounded-sm px-6 py-4 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out focus:bg-[hsl(0,0%,95%)] focus:outline-none focus:ring-0 "
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Free
            </button>
          </div>
          <hr className="border-[0.1px] border-t w-full"></hr>
          <Bounce direction="up" triggerOnce={true} className="p-6">
            <ol className="list-inside text-gray-900">
              <li className="mb-3 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="mr-3 h-5 w-5 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                Page web
              </li>
              <li className="mb-4 flex">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mr-3 h-5 w-5 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Hosting
              </li>
              <li className="mb-4 flex">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mr-3 h-5 w-5 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Mail corporate
              </li>
              <li className="mb-4 flex">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mr-3 h-5 w-5 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Support website
              </li>
              <li className="mb-4 flex">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mr-3 h-5 w-5 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Domain.cl
              </li>
              <li className="mb-4 flex">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mr-3 h-5 w-5 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Extra Premium
              </li>
              <li className="mb-4 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mr-3 h-5 w-5 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                 Modification website
              </li>
            </ol>
          </Bounce>
        </div>
      </div>

      <div className="mb-6 lg:mb-0">
        <div className="block h-full text-black border rounded-sm shadow">
          <div className="border-b-1 border-neutral-100 border-opacity-100 p-6 text-center">
          <Bounce cascade damping={0.2} triggerOnce> 
            <p className="mb-4 text-md uppercase">
              <strong>Basic</strong>
            </p>
            
            <h3 className="mb-6 text-3xl flex flex-col text-neutral-900">
              <div>
                <strong>$ 60</strong>
                <small className="text-base ">
                  /month
                </small>
              </div>

              <strong className="text-xs text-neutral-500">
                + IVA
              </strong>
            </h3>
            </Bounce >
            <hr className="border border-t border-white w-full" />
            <button
              type="button"
              className="bg-[#0033ff] hover:bg-blue-600 border border-slate-900 text-white  inline-block w-full rounded-sm px-6 py-4 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out focus:bg-[hsl(0,0%,95%)] focus:outline-none focus:ring-0 "
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Free
            </button>
          </div>
          <hr className="border-[0.1px] border-t w-full"></hr>
          <Bounce direction="up" triggerOnce={true} className="p-6">
            <ol className="list-inside text-gray-900">
              <li className="mb-3 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="mr-3 h-5 w-5 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                Page web
              </li>
              <li className="mb-4 flex">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mr-3 h-5 w-5 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Hosting
              </li>
              <li className="mb-4 flex">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mr-3 h-5 w-5 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Mail corporate
              </li>
              <li className="mb-4 flex">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mr-3 h-5 w-5 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Support website
              </li>
              <li className="mb-4 flex">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mr-3 h-5 w-5 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Domain.cl
              </li>
              <li className="mb-4 flex">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mr-3 h-5 w-5 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Extra Premium
              </li>
              <li className="mb-4 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mr-3 h-5 w-5 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                 Modification website
              </li>
            </ol>
          </Bounce>
        </div>
      </div>

      <div className="mb-6 lg:mb-0">
        <div className="block h-full text-black border rounded-sm shadow">
          <div className="border-b-1 border-neutral-100 border-opacity-100 p-6 text-center">
          <Bounce cascade damping={0.2} triggerOnce> 
            <p className="mb-4 text-md uppercase">
              <strong>Standar</strong>
            </p>
            
            <h3 className="mb-6 text-3xl flex flex-col text-neutral-900">
              <div>
                <strong>$ 120</strong>
                <small className="text-base ">
                  /month
                </small>
              </div>

              <strong className="text-xs text-neutral-500">
                + IVA
              </strong>
            </h3>
            </Bounce >
            <hr className="border border-t border-white w-full" />
            <button
              type="button"
              className="bg-[#0033ff] hover:bg-blue-600 border border-slate-900 text-white  inline-block w-full rounded-sm px-6 py-4 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out focus:bg-[hsl(0,0%,95%)] focus:outline-none focus:ring-0 "
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Free
            </button>
          </div>
          <hr className="border-[0.1px] border-t w-full"></hr>
          <Bounce direction="up" triggerOnce={true} className="p-6">
            <ol className="list-inside text-gray-900">
              <li className="mb-3 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="mr-3 h-5 w-5 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                Page web
              </li>
              <li className="mb-4 flex">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mr-3 h-5 w-5 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Hosting
              </li>
              <li className="mb-4 flex">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mr-3 h-5 w-5 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Mail corporate
              </li>
              <li className="mb-4 flex">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mr-3 h-5 w-5 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Support website
              </li>
              <li className="mb-4 flex">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mr-3 h-5 w-5 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Domain.cl
              </li>
              <li className="mb-4 flex">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mr-3 h-5 w-5 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Extra Premium
              </li>
              <li className="mb-4 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mr-3 h-5 w-5 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                 Modification website
              </li>
            </ol>
          </Bounce>
        </div>
      </div>

      

      <div className="mb-6 lg:mb-0">
        <div className="block h-full text-black border rounded-sm shadow">
          <div className="border-b-1 border-neutral-100 border-opacity-100 p-6 text-center">
          <Bounce cascade damping={0.2} triggerOnce> 
            <p className="mb-4 text-md uppercase">
              <strong>Premium</strong>
            </p>
            
            <h3 className="mb-6 text-3xl flex flex-col text-neutral-900">
              <div>
                <strong>$ 360</strong>
                <small className="text-base ">
                  /month
                </small>
              </div>

              <strong className="text-xs text-neutral-500">
                + IVA
              </strong>
            </h3>
            </Bounce >
            <hr className="border border-t border-white w-full" />
            <button
              type="button"
              className="bg-[#0033ff] hover:bg-blue-600 border border-slate-900 text-white  inline-block w-full rounded-sm px-6 py-4 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out focus:bg-[hsl(0,0%,95%)] focus:outline-none focus:ring-0 "
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Free
            </button>
          </div>
          <hr className="border-[0.1px] border-t w-full"></hr>
          <Bounce direction="up" triggerOnce={true} className="p-6">
            <ol className="list-inside text-gray-900">
              <li className="mb-3 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="mr-3 h-5 w-5 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                Page web
              </li>
              <li className="mb-4 flex">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mr-3 h-5 w-5 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Hosting
              </li>
              <li className="mb-4 flex">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mr-3 h-5 w-5 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Mail corporate
              </li>
              <li className="mb-4 flex">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mr-3 h-5 w-5 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Support website
              </li>
              <li className="mb-4 flex">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mr-3 h-5 w-5 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Domain.cl
              </li>
              <li className="mb-4 flex">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mr-3 h-5 w-5 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Extra Premium
              </li>
              <li className="mb-4 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mr-3 h-5 w-5 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                 Modification website
              </li>
            </ol>
          </Bounce>
        </div>
      </div>
      </div>
  </div>
  )
}
