import { useState } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Own Media",
      answer: [
        "Own Media (also known by its translation into English: Owned Media) are those that belong to us: that we manage and control (such as our website, the RR.SS or email marketing). At Unbou we understand that the management of the web is the client's own and that is why we specialize in the management of the rest of the Own Media.",
        "Our team not only manages communication and gives you proposals for these different media, but also gives you support and suggestions for continuous improvement. To this is added an active participation in business information (sales data, categories, promotions, etc.), which allows us to deliver extra value by creating new proposals that fit the real needs of your business.",
      ],
      keypoints: [
        "Social Media: Facilitate communication with users and create a community around your business. We plan, manage and very importantly measure the results. To then interpret them and thus generate a constant flow of improvement.",
        "Blog: We maintain your online communication with appropriate content for your business and that allows you to reinforce the SEO strategy and/or complete your Inbound Marketing strategy.",
      ],
    },
    {
      question: "Half Paid",
      answer: [
        "The great value that we deliver to you is management with a global perspective and focused on business analysis: our priority is your business and its growth. And we achieve this by focusing mainly on the analysis of information. That is why we are present and actively throughout the process of the campaigns that you work with us: advising you given our extensive digital and market knowledge.",
        "Paid Media allow us to achieve the different objectives of the sales funnel: from making ourselves known to achieving brand loyalty. The main points in our work methodology are:",
      ],
      keypoints: [
        "Definition of strategy: Based on the commercial goals, we recommend the best way to attack from the paid media: analyzing the phases of the conversion funnel that we are most interested in touching and defining the characteristics of our target audience, among others.",
        "Planning: We establish the investment weights by platform and objective according to the defined strategy. In addition, we prepare a projection of expected results.",
        "Implementation: Activation of either specific campaigns and/or always on. We have extensive experience working with the main paid advertising platforms (Google Ads, Facebook Ads, Linkedin Ads, among others) and their corresponding verticals (Search, Paid Social, Display and Shopping).",
        "Optimization and monitoring: Analysis and constant monitoring of the campaign, looking for options for improvement or detecting points of failure to improve, all to achieve greater efficiency.",
      ],
    },
    {
      question: "SEO",
      answer: [
        "SEO is recognized for being one of the most efficient activities in obtaining results, at the same time that it contributes to achieving the digital positioning of the brand and products. In a certain sense, SEO is necessary to make your web page useful: both for users and search engines (by helping them understand what your page is about and whether or not it is useful to people).",
        "Our main differential is that, by having an internal development team, we have much more specialized advice: with in-depth knowledge of the limitations and opportunities of each site or platform on which this organic positioning is worked on.",
      ],
    },
    {
      question: "Process Automation",
      answer: [
        "Many times we find ourselves with challenges of inefficiencies in old processes or systems that cannot be changed or improved. For these cases, we can offer the RPA solution. Through RPA we can automate manual processes simply and quickly.",
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
              <div className="px-10 py-5 text-2xl bg-gray-50 " key={index}>
                {answer}
              </div>
            ))}
            <ul>
              {item.keypoints?.map((keypoint, index) => {
                const splitIndex = keypoint.indexOf(":");
                if (splitIndex !== -1) {
                  const boldText = keypoint.slice(0, splitIndex + 1);
                  const remainingText = keypoint.slice(splitIndex + 1);
                  return (
                    <li className="px-10 py-5 text-lg lg:text-2xl bg-gray-50 " key={index}>
                      <span className="font-semibold">{boldText}</span>{" "}
                      {remainingText}
                    </li>
                  );
                }
                return <li key={index}>{keypoint}</li>;
              })}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
