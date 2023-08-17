import { useState } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Consultancy DevOps",
      answer: [
        "What is DevOps? A person, a culture, a tool? At Unbou, we see it as a new collaborative and effective way of working, where each area and person is part of a new work team. Adopting a new culture and work methods, promoting new technologies and elastic and fast tools, which are tailored to the different projects.",
        "The new work teams are much faster when it comes to responding to customer requests, with greater security and productive solidity.",
        "DevOps unites the Development and Operations teams to increase the confidence of all solutions, reaching new goals and ideas as a team. Improving all times and communication, thus offering new solutions that make this culture and methodology a better way to achieve the goals of our clients.",
      ],
    },
    {
      question: "Software Architecture",
      answer: [
        "We diagnose and propose Software Architectures that are aligned with your business objectives. Our architects are capable of providing advice on technological solutions, transforming business needs into solid, cost-efficient and scalable technological proposals.",
        "Our team is capable of dictating the standards and definitions of Architecture as much as to make migrations of Legacy systems, or to build new and disruptive solutions, applying in the designs attributes such as: security, resilience, efficiency in performance, optimized in costs, among others. .",
        "If you think that a good architecture is expensive, then try a bad architecture. Better not try it, and contact us: we charge a fair price.",
      ],
    },
  ];

  const handleItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {faqData.map((item, index) => (
        <div key={index} className="mb-4">
          <button
            className="text-left w-full p-4 font-semibold bg-indigo-600 flex text-3xl text-white flex-row items-center gap-2 shadow-md"
            onClick={() => handleItemClick(index)}
          >
            {activeIndex === index ? (
              <IoIosAdd className="text-green-500" />
            ) : (
              <IoIosRemove className="text-green-500 font-bold" />
            )}{" "}
            {item.question}
          </button>
          <div
            className={`transition-height shadow-lg mb-10 ${
              activeIndex === index ? "open" : ""
            }`}
          >
            {item.answer.map((answer, index) => (
              <div className="px-10 py-5 text-lg lg:text-2xl bg-gray-50 " key={index}>
                {answer}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
