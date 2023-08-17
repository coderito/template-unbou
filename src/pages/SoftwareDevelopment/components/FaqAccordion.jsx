import { useState } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "E-commerce",
      answer: [
        "We have extensive experience creating E-Commerce with different objectives. Depending on your need, we can support you by building your online sales site on an existing platform (such as Magento, Woocommerce, Shopify, Prestashop, Jumpseller, Bootic, etc.) or something more robust and customizable, such as a reaction commerce or similar.",
        "Thanks to our entire team, the user interfaces, development, and infrastructure will always be focused on having the best shopping experience for your customers and optimizing conversion for your company.",
        "Levantar un E-Commerce puede ser simple o muy complejo dependiendo de qué es lo que tu negocio necesita. El gran valor que te entregamos es que realmente seremos tu asesor: para que no intentes ”matar una mosca con un bunker”, pero tampoco que te quedes corto con los desarrollos que definiste en un mediano plazo.",
      ],
    },
    {
      question: "Movile Application",
      answer: [
        "Native app or not? We guide you! In order to have a scalable app, optimized for your users and clients, and that is not simply a mirror of your website.",
        "Our app development teams have the necessary knowledge to implement native or hybrid applications, depending on what you need. And, of course, we have the tools, best practices, and patterns to ensure that your application performs as expected and performs well in both high demand and normal flow.",
        "We are an excellent option because of the diversity of areas in which we have created apps, but also because of our experts on the subject.",
      ],
    },
    {
      question: "Integrations and API",
      answer: [
       "We have a first-rate software development team, within which is a team 100% dedicated to integrations and development of APIs to optimize processes. Like all our digital projects and products, we seek optimal and scalable development over time."
      ],
    }, {
        question: "Process Automation",
        answer: [
         "Many times we find ourselves with challenges of inefficiencies in old processes or systems that cannot be changed or improved. For these cases, we can offer the RPA solution. Through RPA we can automate manual processes simply and quickly."
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
              <div
                className="px-10 py-5 md:text-2xl text-lg bg-gray-50"
                key={index}
              >
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
