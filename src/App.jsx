import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import {
  DigitalMarketing,
  ItAudit,
  OperationsInfrastructure,
  SoftwareDevelopment,
  TechnologyOutsourcing,
  UserExperience,
} from "./pages/services";

import Layout from "./Layout/Layout";
import ScrollToTop from "./hook/ScrollToTop";

function App() {
  return (
    <div className="font-[Source Sans 3]">
      <BrowserRouter>
      <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/software-development"
              element={<SoftwareDevelopment />}
            />
            <Route path="/it-audit" element={<ItAudit />} />
            <Route path="/user-experience" element={<UserExperience />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route
              path="/operation-infraestructure"
              element={<OperationsInfrastructure />}
            />
            <Route
              path="/technology-outsourcing"
              element={<TechnologyOutsourcing />}
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
