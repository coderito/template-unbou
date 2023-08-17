import PropTypes from "prop-types"
import { Button } from "../Button/Button";
import { Slide } from "react-awesome-reveal";

export default function SectionItem({ titulo, parrafo, to }) {
  return (
    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 lg:px-3">
      <div className="flex">
        <div className="ml-2 grow">
          <Slide direction="up" triggerOnce={true}>
            <div className="flex items-center">
              <div className="mt-2 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="mr-3 h-10 w-10 text-[#0033ff] hover:text-blue-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="font-medium text-3xl">{titulo}</p>
            </div>
          </Slide>

          <Slide direction="up" triggerOnce={true}>
            <p className="text-neutral-800 text-md py-4 mb-2">{parrafo}</p>
          </Slide>

          <Slide direction="up" triggerOnce={true} delay={50}>
            <Button to={to}>See More</Button>
          </Slide>
        </div>
      </div>
    </div>
  );
}
SectionItem.propTypes = {
  titulo: PropTypes.string,
  parrafo: PropTypes.string,
  to: PropTypes.any
};
