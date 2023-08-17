import FAQAccordion from "./components/FaqAccordion";
import { Hero } from "../../components/Hero";
import { LayoutServices } from "../../Layout/LayoutServices";

export default function SoftwareDevelopment() {
  return (
    <>
      <Hero
        title="Software Development"
      />

      <LayoutServices>
        <p>
          One of our priorities as UnBou is to find digital solutions to
          optimize your processes or increase your sales. So we adapt to what
          your business needs and advise you so that you have a complete and
          <span className="text-blue-600"> optimal solution</span>.
        </p>
        <p>
          <span className="font-bold">We want you to have what you need.</span>{" "}
          Yes, what you really need.
        </p>
        <p>
          And this is why we will be supporting and advising you throughout the
          process of defining the digital product you are looking for.
        </p>
        <p>
          At UnBou we have a diversity of teams with multiple specialties and
          knowledge: because we believe that each opinion counts,{" "}
          <span className="text-green-500">
            this allows us to approach problems and seek solutions from multiple
            points of view.
          </span>
        </p>
        <FAQAccordion />
      </LayoutServices>
    </>
  );
}
