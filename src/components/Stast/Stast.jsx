import { Zoom } from "react-awesome-reveal";
import { ParagraphSection } from "../Parragraph/ParagraphSection";
import TitleSection from "../Tittle/TitleSection";
import CountUp from "react-countup";

export default function Stast() {
  return (
    <>
      <section className="py-19 sm:py-16 lg:py-24">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          
          <Zoom className="max-w-2xl mx-auto text-center" duration={800} triggerOnce>
            
            <TitleSection>Numbers tell our story</TitleSection>
            
           
          </Zoom>
          <Zoom duration={800} triggerOnce>
          <ParagraphSection>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </ParagraphSection>
            </Zoom>
          <div className="grid grid-cols-1 gap-8 mt-10 text-center sm:gap-x-8 md:grid-cols-3">
            <div>
              <h3 className="font-bold text-7xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                  <CountUp
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                    end={6}
                    duration={4}
                  />
                  +{" "}
                </span>
              </h3>
              <p className="mt-4 text-xl font-medium text-gray-900">
                Years in business
              </p>
              <p className="text-base mt-0.5 text-gray-500">
                Creating the successful path
              </p>
            </div>

            <div>
              <h3 className="font-bold text-7xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                  {" "}
                  <CountUp
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                    end={3459}
                    duration={4}
                  />{" "}
                </span>
              </h3>
              <p className="mt-4 text-xl font-medium text-gray-900">
                Projects delivered
              </p>
              <p className="text-base mt-0.5 text-gray-500">In last 6 years</p>
            </div>

            <div>
              <h3 className="font-bold text-7xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                  {" "}
                  <CountUp
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                    end={37}
                    duration={4}
                  />
                  +{" "}
                </span>
              </h3>
              <p className="mt-4 text-xl font-medium text-gray-900">
                Team members
              </p>
              <p className="text-base mt-0.5 text-gray-500">
                Working for your success
              </p>
            </div>
          </div>
        </div>
      </section>
      <p className="text-center  text-xs pt-10">
      Always feel accompanied. ❤️
      </p>
    </>
  );
}
