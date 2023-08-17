import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

export const Navbar = () => {
  return (
    <nav className="md:px-40 px-10 flex justify-between items-center py-7 shadow-md z-10">
      <Link to={"/"}>
        Unbou
      </Link>

      <div className="hidden md:flex">
        <Button>Contact Me</Button>
      </div>
    </nav>
  );
};
