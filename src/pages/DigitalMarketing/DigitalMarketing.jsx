/* eslint-disable react/no-unescaped-entities */
import { LayoutServices } from "../../Layout/LayoutServices";
import { Hero } from "../../components/Hero";
import FAQAccordion from "./component/FaqAccordion";

export default function DigitalMarketing() {
  return (
    <>
      <Hero title="Digital Marketing" />
      <LayoutServices>
        <p>
          Not having a digital marketing strategy is, today, a sin. But even
          more serious is taking actions without having clear goals and without
          analyzing the processes. So that you don't think that marketers are
          "pure smoke" is that at Unbou we all work from the premise <span className="font-bold">"what is
          not measured cannot be improved".</span>
        </p>
        <FAQAccordion />
      </LayoutServices>
    </>
  );
}
