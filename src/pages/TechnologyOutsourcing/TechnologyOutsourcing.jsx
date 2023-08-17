import { Hero } from "../../components/Hero";
import { LayoutServices } from "../../Layout/LayoutServices";

export default function TechnologyOutsourcing() {
  return (
    <>
      <Hero title="Technology Outsourcing" />
      <LayoutServices>
        <p>
          We know that the spirit of Unbou and our profiles with specific
          knowledge can contribute a lot to the development of your company and
          to those new projects that you have in mind.
        </p>
        <p>
          That is why we have the <span className="font-bold">Tech Outsourcing</span> service, where you tell us
          what areas you need to strengthen and we have the ideal person or
          people to join your project. <span className="font-bold text-green-500">To increase your productivity and
          optimize results with all the knowledge of Unbou.</span>
        </p>
        <p>No more doubts about which specialist will really be the right one or complicate if you do not have so much experience recruiting tech collaborators and testing their skills. <span className="text-bold">We solve all of that, trust us.</span></p>
        <p>This service currently contemplates the following positions: <span className="font-bold text-purple-700">DevOps, Devs, QA and Product Manager.</span></p>
      </LayoutServices>
    </>
  );
}
