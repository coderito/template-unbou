import Footer from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar";

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
        <div>{children}</div>
      <Footer />
    </>
  );
}
