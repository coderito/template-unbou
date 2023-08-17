import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import { Bounce, Fade, Slide } from "react-awesome-reveal";


// eslint-disable-next-line react/prop-types
function Hero({ title }) {
  return (
    <>
      <div className="w-full bg-cover bg-center bg-gradient-to-r from-[#0033ff] via-blue-700 to-blue-900 flex items-center md:px-32">
        <div className="px-5">
          {/* Aquí puedes colocar los elementos que quieres en frente */}

          <Slide direction="left" triggerOnce>
            <h2 className="md:text-[6.5rem] text-6xl font-semibold text-slate-50 mt-[14rem] ">
              {title}
            </h2>
          </Slide>
          <hr className="w-[14vw] border-2 rounded border-yellow-500" />
          <div className="flex justify-between py-[6rem] text-white">
            <Bounce cascade damping={0.2} triggerOnce>
              <button className="text-xl hover:text-gray-200"><span className="hover:underline">See More</span> 👇</button>
              </Bounce>
              <Bounce className="text-md hidden md:flex bg-blue-900 shadow-lg text-white border-2 rounded-full px-5 py-3 hover:bg-blue-800 fixed bottom-[2.2rem] z-50 right-[10rem]">
                Can we Talk?
              </Bounce>
          </div>
        </div>
      </div>
      <div className="bg-[#0033ff] text-sm p-5 flex flex-row items-center gap-3 sticky top-0 uppercase text-white z-30">
      <Fade delay={100} triggerOnce>
        <Dropdown /> <Link to="/" className="hover:text-gray-200 ease-out delay-50 ">Services</Link> <AiOutlineArrowRight /> <p>{title}</p>
      </Fade>
      </div>
    </>
  );
}

export default Hero;
