import { Fade, Slide } from "react-awesome-reveal";

// eslint-disable-next-line react/prop-types
export const LayoutServices = ({ children }) => {
  return (
    <Fade   duration={1400}
    triggerOnce>
      <Slide
        duration={1000}
        direction="up"
        triggerOnce
        className="px-5 xl:px-32 parrafo-services flex flex-col gap-10 mt-10"
      >
        {children}
      </Slide>
    </Fade>
  );
};
