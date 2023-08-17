import { LayoutServices } from "../../Layout/LayoutServices";
import { Hero } from "../../components/Hero";

export default function ItAudit() {
  return (
    <>
      <Hero title="Information Technology Audit" />
      <LayoutServices>
        <p>
          <span className="font-bold text-green-500">The Computer Audit</span>{" "}
          is important both to know the current status of your systems (and find
          out possible errors or failures), to support you prior to buying a
          product so that you can know any detail prior to the investment and,
          in addition, it is very useful for Be aware of any security flaws and
          information leaks.
        </p>
        <p>
          At Unbou we have extensive experience in the area, which allows us to
          learn about different business areas and different systems. This
          allows us to perform{" "}
          <span className="text-yellow-500 font-bold">comprehensive</span>,
          relevant and knowledgeable analyzes of international rules and similar
          industry frameworks. In addition, we adapt the equipment for each
          audit as we can customize it according to the needs of each client and
          each system.
        </p>
        <p>
          This IT Audit service includes an initial meeting, a request for
          information and high-level access to analyze and then we deliver the
          final report that will allow you to know all the points detected as
          well as the suggested solutions for that.
        </p>
        </LayoutServices>
    </>
  );
}
