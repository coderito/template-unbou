import { Hero } from "../../components/Hero";
import { LayoutServices } from "../../Layout/LayoutServices";
import FAQAccordion from "./components/FaqAccordion";

export default function OperationsInfrastructure() {
  return (
    <>
      <Hero title="Operation Infraestructure" />
      <LayoutServices>
        <p>
          We know that they may sound boring to you, but the Operations and
          Infrastructure section are elements that will help everything work as
          it should: because they provide a basis and continuity to the
          processes, so you should not leave them aside to carry out <span className="font-bold text-green-500">successful
          projects</span>.
        </p>
        <FAQAccordion />
      </LayoutServices>
    </>
  );
}
