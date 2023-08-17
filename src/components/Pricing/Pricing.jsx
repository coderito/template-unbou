import  { useState } from "react";
import { ParagraphPrice } from "../Parragraph";
import { TitleSection } from "../Tittle";
import PricingMonth from "./PricingMonth";
import PricingYear from "./PricingYear";
import { Bounce } from "react-awesome-reveal";

export default function Pricing() {
  const [componenteActual, setComponenteActual] = useState(<PricingMonth />);

  const renderComponenteA = () => {
    setComponenteActual(<PricingMonth />);
  };

  const renderComponenteB = () => {
    setComponenteActual(<PricingYear />);
  };

  return (
    <div className="md:px-40 px-10 pt-10">
      <section>
      <Bounce cascade damping={0.2} triggerOnce> {/* Agrega la animación Bounce */}
          <TitleSection>Pricing</TitleSection>
          <ParagraphPrice>
            Discover your ideal plan. Basic, Standard, or Premium. Choose today,
            thrive tomorrow.
          </ParagraphPrice>

          {/* Resto de tu contenido... */}
        </Bounce>
        <ul className="mb-12 font-bold flex list-none flex-col flex-wrap pl-0 md:flex-row" role="tablist" data-te-nav-ref>
          <li role="presentation" className="flex-grow basis-0 text-center">
            <a
              href="#pills-home02"
              className="my-2 block shadow rounded-sm transition duration-150 ease-in-out  px-7 pt-4 pb-3.5 text-xs bg-[#093aff] hover:bg-blue-600 uppercase leading-tight text-white data-[te-nav-active]:!bg-primary-100 data-[te-nav-active]:text-primary-700  md:mr-4"
              id="pills-home-tab02"
              data-te-toggle="pill"
              data-te-target="#pills-home02"
              data-te-nav-active
              role="tab"
              onClick={renderComponenteA}
              aria-controls="pills-home02"
              aria-selected="true"
            >
              monthly payment
            </a>
          </li>
          <li role="profile" className="flex-grow basis-0 text-center">
            <a
              href="#pills-profile02"
              className="my-2 block font-bold rounded-sm shadow transition duration-150 ease-in-out bg-[#0033ff]  hover:bg-blue-600 px-7 pt-4 pb-3.5 text-xs uppercase leading-tight text-white data-[te-nav-active]:!bg-primary-100 data-[te-nav-active]:text-primary-700  md:mr-4"
              id="pills-profile-tab02"
              data-te-toggle="pill"
              data-te-target="#pills-profile02"
              role="tab"
              onClick={renderComponenteB}
              aria-controls="pills-profile02"
              aria-selected="false"
            >
              single payment
            </a>
          </li>
        </ul>

        <div className="mb-6">
          {componenteActual}
        </div>
      </section>
    </div>
  );
}