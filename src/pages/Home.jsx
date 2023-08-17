import { Fade, Slide } from "react-awesome-reveal";
import hero from "../assets/images/hero.jpg";
import { ButtonHome } from "../components/Button/ButtonHome";
import { Paragraph } from "../components/Parragraph/Paragraph";
import Pricing from "../components/Pricing/Pricing";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import Stast from "../components/Stast/Stast";
import { TitleHome } from "../components/Tittle/TitleHome";

export default function Home() {
  return (
    <section>
      <div className="xl:px-40 px-10 flex flex-col md:flex-row pb-20">
        <div className="flex-1 pt-16 flex flex-col  gap-10 pb-10">
          <Fade duration={4000} triggerOnce>
            <Slide direction="down" triggerOnce className="z-0">
              <TitleHome>
                We are experts in digital solutions as landing page
              </TitleHome>
            </Slide>
          </Fade>
          <Slide direction="left" triggerOnce>
            <Paragraph>
              Your website isnt optimized for everyone. When you send visitors
              to landing pages custom-built for each marketing campaign, you get
              more customers.
            </Paragraph>

            <Paragraph>
              With two easy-to-use builders and smart features that help you
              optimize fast, Unbounce has everything you need to grow your
              business with landing pages.{" "}
            </Paragraph>
          </Slide>
          <Slide direction="up">
            <div>
              <ButtonHome>Start Building with Us</ButtonHome>
            </div>
          </Slide>
        </div>
        <Slide direction="up" triggerOnce={true}>
          <img src={hero} alt="hero image unbou"  />
        </Slide>
      </div>
      <p className="text-center text-xs pb-10">
        The professionals you need. ❤️
      </p>
      <Stast />
      <ServiceSection />
      <Pricing />
    </section>
  );
}
