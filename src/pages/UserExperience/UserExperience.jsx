/* eslint-disable react/no-unescaped-entities */
import { LayoutServices } from "../../Layout/LayoutServices";
import { Hero } from "../../components/Hero";

export default function UserExperience() {
  return (
    <>
      <Hero title="UX/UI User Experience" />
      <LayoutServices>
        <p>
          From our perspective, in the creation of a digital product or service
          it is essential to put the user at the center of decisions.
        </p>
        <p>
          This is why the user experience (or UX) has a fundamental role within
          our projects.
        </p>
        <p>
          Through its multiple tools and disciplines, such as the creation of
          empathy maps, the implementation of user tests, the design of
          interactions and interfaces, among others, we seek to know users in
          depth and thus deliver a product that is not only easy and satisfying
          to use, but also helps to deliver a better service and thus grow your
          business.
        </p>
      </LayoutServices>
    </>
  );
}
