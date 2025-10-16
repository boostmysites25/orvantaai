import ReactPlayer from "react-player";
import bannerVid from "../assets/videos/banner.mp4";
import SubHeading from "../components/common/SubHeading";
import ArrowButton from "../components/common/ArrowButton";
import { Link } from "react-scroll";
import CircularText from "../components/common/CircularText";
import heroImg from "../assets/images/home-hero.webp";
import webAboutImg from "../assets/images/landing page/web-about.webp";
import appAboutImg from "../assets/images/landing page/app-about.webp";
import { PiStrategyBold } from "react-icons/pi";
import { MdSecurity } from "react-icons/md";
import { lazy } from "react";
import ContactForm from "../components/common/ContactForm";

const ServicesSection = lazy(() =>
  import("../components/landingpage/ServicesSection")
);
const OurProcess = lazy(() => import("../components/common/OurProcess"));
const Testimonials = lazy(() => import("../components/common/Testimonials"));
const Faq = lazy(() => import("../components/common/Faq"));
const WhyWorkWithUs = lazy(() => import("../components/common/WhyWorkWithUs"));
const Portfolio = lazy(() => import("../components/landingpage/Portfolio"));

const LandingPage = ({ page }) => {
  const isWeb = page === "web";
  const isApp = page === "app";
  const isAI = page === "ai";
  
  const getPageTitle = () => {
    if (isWeb) return "Full-Stack Web Development";
    if (isApp) return "Mobile App Development";
    return "Artificial Intelligence Solutions";
  };
  
  const getHeroTitle = () => {
    if (isWeb) return "Web Solutions";
    if (isApp) return "Mobile Apps";
    return "AI Solutions";
  };
  
  const getHeroDesc = () => {
    if (isWeb) return "Modern, responsive web applications engineered for speed, security, and scalability.";
    if (isApp) return "Native and cross-platform apps that deliver exceptional user experiences on any device.";
    return "Intelligent automation and machine learning solutions that transform data into actionable insights.";
  };
  
  return (
    <div id="hero" className="mt-[4.5rem]">
      <section className="relative min-h-screen">
        <div className="absolute inset-0 bg-black/60 z-[2]" />
        <ReactPlayer
          url={bannerVid}
          playing
          muted
          loop
          playsinline
          width="100%"
          height="100%"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
          config={{
            file: {
              attributes: {
                style: {
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                },
              },
            },
          }}
        />
        <div className="wrapper absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] flex flex-col-reverse gap-5 sm:grid grid-cols-[1fr,20%] items-center">
          <div data-aos="fade-up" className="max-w-[45rem] space-y-1">
            <SubHeading
              heading={getPageTitle()}
              className="text-white"
            />
            <h1 className="text_xl">
              Professional{" "}
              <span className="text-primary">
                {getHeroTitle()}
              </span>{" "}
              Built to Perform
            </h1>
            <p className="desc">
              {getHeroDesc()}
            </p>
            <div className="pt-10 flex sm:flex-row flex-col items-center gap-2">
              <ArrowButton
                scrollTo="contact"
                offset={-100}
                className="bg-white text-black hover:bg-transparent hover:text-white border border-white"
              >
                Request a Quote
              </ArrowButton>
              <Link
                to="services"
                offset={-100}
                smooth
                duration={500}
                spy
                className="w-full sm:min-w-[10rem] sm:w-auto text-center btn-rounded border border-white text-white bg-transparent hover:bg-white hover:text-black"
              >
                View Services
              </Link>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="flex justify-end sm:self-end sm:pr-[3rem] lg:pr-[8rem]"
          >
            <CircularText />
          </div>
        </div>
      </section>
      <section className="wrapper">
        <div
          className="sm:max-w-[85vw] lg:!max-w-[60vw] w-full aspect-[2.14/1
] mx-auto -translate-y-[4rem] lg:-translate-y-[8rem] relative z-[5] rounded-[3rem] overflow-hidden bg-black"
        >
          <img
            loading="lazy"
            src={heroImg}
            className="h-full w-full object-cover scale-[101%]"
            alt="Hero"
            data-aos="fade-right"
          />
          <div className="2xl:absolute right-0 top-1/2 2xl:-translate-y-1/2 p-5 2xl:px-10 2xl:w-2/5">
            <p
              data-aos="fade-left"
              className="text-lg md:text-2xl !font-normal text-white/70"
            >
              <b className="text-white">Orvanta AI</b> specializes in
              building {isWeb ? "robust web platforms" : isApp ? "powerful mobile applications" : "intelligent AI systems"} that
              combine <b className="text-white">elegant design</b> with{" "}
              <b className="text-white">solid engineering</b>. We {isAI ? "implement machine learning models" : "write clean, maintainable code"} using modern frameworks to create{" "}
              {isWeb ? "web experiences" : isApp ? "mobile solutions" : "AI-powered applications"} that perform
              flawlessly and scale effortlessly.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="pb-14 wrapper space-y-3">
        <div data-aos="fade-up" className="flex justify-center">
          <SubHeading heading="About Us" className="text-white" />
        </div>
        <div className="grid md:grid-cols-[40%,1fr] gap-7">
          <div className="relative w-full rounded-[3rem] overflow-hidden aspect-[1/1.2]">
            <img
              loading="lazy"
              data-aos="fade-right"
              src={isWeb ? webAboutImg : appAboutImg}
              className="w-full h-full object-cover rounded-lg"
              alt="About Us"
            />
            <div
              data-aos="fade-right"
              className="absolute left-4 bottom-5 bg-primary text-white p-5 rounded-[1.5rem] shadow-xl text-center"
            >
              <h2 className="text2">100%</h2>
              <p className="desc">Success Rate</p>
            </div>
          </div>
          <div data-aos="fade-up" className="space-y-3">
            <h2 className="text1">
              Expert {isWeb ? "Web" : isApp ? "Mobile" : "AI"} Development Focused on Results
            </h2>
            <p className="desc text-white/70">
              We're a dedicated team of developers who believe great software
              starts with understanding your goals. Specializing in{" "}
              {isWeb
                ? "full-stack web development using React, Node.js, and modern cloud infrastructure"
                : isApp 
                ? "native iOS, Android, and cross-platform app development with React Native and Flutter"
                : "machine learning, natural language processing, and computer vision with TensorFlow, PyTorch, and modern AI frameworks"}
              , we build {isWeb ? "web applications" : isApp ? "mobile solutions" : "AI systems"} that
              are fast, secure, and designed to grow with your business. From
              the first line of code to post-launch support, we're committed to
              delivering quality you can measure.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 py-6">
              <div className="bg-[#121212] flex items-center gap-3 justify-center rounded p-3">
                <div className="bg-black rounded-full w-14 min-w-14 h-14 flex items-center justify-center">
                  <PiStrategyBold size={30} className="fill-secondary" />
                </div>
                <p className="text3">Agile Development Process</p>
              </div>
              <div className="bg-[#121212] flex items-center gap-3 justify-center rounded p-3">
                <div className="bg-black rounded-full w-14 min-w-14 h-14 flex items-center justify-center">
                  <MdSecurity size={30} className="fill-secondary" />
                </div>
                <p className="text3">Secure & Tested Code</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex gap-2">
                <div className="w-4 h-4 min-w-4 bg-secondary rounded-full mt-[.30rem]" />
                <p className="desc">
                  {isWeb
                    ? "Responsive Design That Works On Every Device"
                    : isApp
                    ? "Native Performance With Cross-Platform Efficiency"
                    : "Custom ML Models Trained On Your Data"}
                </p>
              </div>
              <div className="flex gap-2">
                <div className="w-4 h-4 min-w-4 bg-secondary rounded-full mt-[.30rem]" />
                <p className="desc">
                  {isWeb
                    ? "API Integration & Backend Architecture"
                    : isApp
                    ? "Seamless App Store Deployment & Support"
                    : "Production-Ready AI Deployment & Monitoring"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection page={page} />
      <Portfolio page={page} />
      <OurProcess />
      <Testimonials />
      <Faq />
      <WhyWorkWithUs />
      <ContactForm />
    </div>
  );
};

export default LandingPage;
