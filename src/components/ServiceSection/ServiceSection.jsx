import TitleSection from "../Tittle/TitleSection";
import { ParagraphSection } from "../Parragraph/ParagraphSection";
import SectionItem from "../SectionItem/SectionItem";
import { items } from "../../data/item";
import { Zoom } from "react-awesome-reveal";

export default function ServiceSection() {
  return (
    <div className="md:px-40 px-10 pt-20">
      <section className="">
        <div>
          <Zoom duration={800} triggerOnce>
            <TitleSection>We are here to support you</TitleSection>
          </Zoom>
          <Zoom duration={800} triggerOnce>
            <ParagraphSection>
              With Unbounce, you get two ways to build landing pages: Classic
              Builder and Smart Builder. Both different. Both awesome. And you
              get ‘em both with every Unbounce plan.
            </ParagraphSection>
          </Zoom>
        </div>

        <div className="flex flex-wrap justify-center items-center">
          <div className="mb-6 w-full shrink-0 grow-0 basis-auto">
            <div className="flex flex-wrap">
              {items.map(({ id, titulo, parrafo, icono, to }) => (
                <SectionItem
                  key={id}
                  titulo={titulo}
                  parrafo={parrafo}
                  icono={icono}
                  to={to}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="text-center text-xs pb-10">
          More than a company we are your friends. ❤️
        </p>
      </section>
    </div>
  );
}
