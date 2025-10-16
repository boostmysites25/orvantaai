import SubHeading from "./SubHeading";
import arrowTopCurved from "../../assets/images/arrow-top-curved.png";
import arrowBottomCurved from "../../assets/images/arrow-bottom-curved.png";
import ArrowButton from "./ArrowButton";

const process = [
  {
    id: "01",
    title: "Consultation & Analysis",
    desc: "We dive deep into your requirements, goals, and technical challenges to create a clear project roadmap.",
  },
  {
    id: "02",
    title: "Architecture & Design",
    desc: "Our team designs the technical architecture and user interfaces that will power your solution.",
  },
  {
    id: "03",
    title: "Development & Testing",
    desc: "We write clean code, perform rigorous testing, and iterate based on feedback to ensure quality.",
  },
  {
    id: "04",
    title: "Deployment & Optimization",
    desc: "We launch your application and provide continuous monitoring and improvements for peak performance.",
  },
];

const OurProcess = ({ showButton }) => {
  return (
    <div className="py-7">
      <div className="wrapper">
        <div
          data-aos="fade-up"
          className="grid md:grid-cols-[55%,1fr] items-center gap-6 md:gap-16"
        >
          <div className="space-y-3">
            <SubHeading heading="Our Process" className="text-white" />
            <h2 className="text1">From Concept to Deployment</h2>
          </div>
          <p className="desc text-white/70">
            We follow a proven development methodology that balances speed with
            quality. Each project phase is designed to keep you informed, gather
            feedback, and deliver working software iteratively. Our transparent
            approach ensures you're always in control while we handle the
            technical complexity.
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8 sm:mt-16"
        >
          {process.map((item) => (
            <div
              key={item.id}
              className="sm:odd:translate-y-[1rem] flex flex-col space-y-3 p-6 rounded-xl border border-primary"
            >
              <h2 className="text1 text-stroke font-sans">{item.id}</h2>
              <h4 className="text-lg text-white/70">{item.title}</h4>
              <p className="text3">{item.desc}</p>
            </div>
          ))}
          <img
            loading="lazy"
            src={arrowTopCurved}
            top
            className="sm:block hidden absolute left-[40%] -top-[3rem] w-[15rem] h-[3rem] object-contain"
            alt="Arrow"
          />
          <img
            loading="lazy"
            src={arrowBottomCurved}
            className="sm:block hidden absolute left-[35%] lg:left-[15%] -bottom-[4rem] w-[15rem] h-[3rem] object-contain"
            alt="Arrow"
          />
          <img
            loading="lazy"
            src={arrowBottomCurved}
            top
            className="lg:block hidden absolute left-[65%] -bottom-[4rem] w-[15rem] h-[3rem] object-contain"
            alt="Arrow"
          />
        </div>
        {showButton && (
          <div data-aos="fade-up" className="pt-8 sm:pt-24">
            <ArrowButton
              to="/our-services"
              className="bg-black border border-primary text-white hover:bg-primary !w-fit mx-auto"
            >
              Start Your Project Today
            </ArrowButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurProcess;
