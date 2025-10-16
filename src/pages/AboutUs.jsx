import banner from "../assets/videos/aboutus.mp4";
import CountUp from "react-countup";
import aboutUsImg from "../assets/images/about-us.png";
import SubHeading from "../components/common/SubHeading";
import { Link } from "react-router-dom";
import ourVisionImg from "../assets/images/our vision.png";
import ourMissionImg from "../assets/images/our mission.png";
import whyWeExistImg from "../assets/images/why we exist.png";
import OurCoreValues from "../components/website/OurCoreValues";
import { lazy } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const PageBanner = lazy(() => import("../components/website/PageBanner"));

const AboutUs = () => {
  return (
    <div className="mt-[4.5rem]">
      <PageBanner
        banner={banner}
        title="About Us"
        links={[{ title: "Home", url: "/" }, { title: "About Us" }]}
      />
      <section className="py-14 relative min-h-screen flex items-center bg-tertiary/40">
        <div className="wrapper grid lg:grid-cols-[40%_1fr] items-center gap-10 text-grayClr z-10 relative">
          <div data-aos="fade-up" className="flex justify-start">
            <img
              loading="lazy"
              src={aboutUsImg}
              className="object-contain sm:scale-110 w-full aspect-square max-h-[60vh] lg:aspect-auto"
              alt=""
            />
          </div>
          <div className="space-y-4">
            <SubHeading heading="Who We Are" className="text-white" />
            <h2 data-aos="fade-up" className="text1 capitalize">
              Dedicated to{" "}
              <span className="text-stroke-gray text-stroke-white">
                Crafting Digital Excellence
              </span>
            </h2>
            <p data-aos="fade-up" className="desc text-white/70">
              Orvanta AI is a software development company driven by passion for
              technology and commitment to excellence. We specialize in creating
              high-performance web applications, intuitive mobile experiences,
              and intelligent AI solutions that solve real business challenges.
              <br />
              Our approach combines technical mastery with genuine understanding
              of your business goals. We don't just write code—we build
              partnerships. From startups launching their first product to
              established enterprises modernizing their digital infrastructure,
              we deliver solutions that are elegant, efficient, and engineered
              to last.
            </p>
            <div
              data-aos="fade-up"
              className="grid sm:grid-cols-2 gap-7 py-4 text-white/70"
            >
              <div className="flex items-center gap-2">
                <div className="w-[1rem] h-[1rem] rounded-full bg-white"></div>
                <p className="capitalize">Code With Purpose</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[1rem] h-[1rem] rounded-full bg-white"></div>
                <p className="capitalize">Modern Tech Stack</p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="grid sm:grid-cols-2 md:grid-cols-4 gap-7"
            >
              {[
                { number: 200, suffix: "+", title: "Projects Completed" },
                { number: 150, suffix: "+", title: "Satisfied Clients" },
                { number: 2, suffix: "+", title: "Years of Experience" },
                { number: 100, suffix: "%", title: "Success Rate" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-start text-center gap-2"
                >
                  <span className="text2">
                    <CountUp
                      end={item.number}
                      suffix={item.suffix}
                      enableScrollSpy
                      scrollSpyOnce
                      duration={2}
                    />
                  </span>
                  <p className="uppercase text-sm text-white/70">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F0F0F0] text-black">
        <div
          data-aos="fade-up"
          className="wrapper py-8 px-3 grid md:grid-cols-[45%_1fr] gap-7 md:gap-16"
        >
          <img
            loading="lazy"
            src={ourVisionImg}
            className="object-contain aspect-video h-full w-full rounded-md"
            alt=""
          />
          <div className="space-y-6">
            <SubHeading heading="Our Vision" className="text-primary" />
            <p className="desc">
              To become the trusted technology partner for businesses seeking to
              leverage software as a competitive advantage. We envision a future
              where innovative companies can access world-class development
              expertise to build digital products that delight users, streamline
              operations, and drive sustainable growth through intelligent
              technology solutions.
            </p>
            <div>
              <Link
                to="/contact"
                className="btn-fullrounded flex items-center gap-2 bg-primary text-white hover:bg-primary/80 w-fit capitalize"
              >
                get in touch <FaArrowRightLong className="mt-[.15rem]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper pt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-16">
          <div data-aos="fade-up" className="space-y-4">
            <h3 className="text2 text-primary">
              Our <br /> Mission
            </h3>
            <img
              loading="lazy"
              src={ourMissionImg}
              className="md:hidden block object-cover aspect-[6/4] h-fit w-full rounded-sm"
              alt="Our Vision"
            />
            <p className="desc !text-white">
              Our mission is to deliver exceptional software solutions that
              combine technical excellence with practical business value. We're
              committed to writing clean, maintainable code, implementing proven
              architectures, and following industry best practices to create
              applications that perform reliably at scale. By staying current
              with emerging technologies while respecting time-tested principles,
              we help our clients navigate digital transformation with confidence.
              We measure our success by the tangible impact our solutions have on
              your business—increased efficiency, enhanced user experiences, and
              accelerated growth.
            </p>
          </div>
          <img
            loading="lazy"
            data-aos="fade-up"
            src={ourMissionImg}
            className="hidden md:block object-cover aspect-[6/4] h-full w-full rounded-xl"
            alt="Our Vision"
          />
        </div>
      </section>
      <OurCoreValues />
      <section className="pt-7 wrapper space-y-5">
        <div className="grid md:grid-cols-2 gap-7 md:gap-14">
          <div className="flex flex-col overflow-hidden rounded-xl">
            <img
              loading="lazy"
              src={whyWeExistImg}
              alt="Why we exist"
              className="aspect-[6/4] w-full object-cover h-full"
            />
          </div>
          <div className="space-y-3">
            <h2 className="text2 text-primary">Why We Exist</h2>
            <p className="desc">
              Great software shouldn't be a luxury reserved for tech giants.
              Orvanta AI exists to make professional-grade development accessible
              to ambitious businesses of all sizes. We bridge the gap between
              complex technology and practical business needs, translating your
              vision into robust, scalable applications. <br /> <br /> In a world
              where digital presence often determines success, we're here to level
              the playing field—giving you access to the same quality of
              engineering, modern frameworks, and best practices that power
              successful tech companies worldwide.
            </p>
          </div>
        </div>
        <p className="desc">
          We believe exceptional software is built on three pillars: technical
          excellence, clear communication, and genuine partnership. Every line of
          code we write is tested, every feature we build is purpose-driven, and
          every decision we make considers both immediate needs and long-term
          maintainability. <br />
          Our philosophy is simple: your success is our success. We don't just
          deliver projects; we build relationships. Whether you're launching your
          first MVP or scaling an established platform, we're committed to being
          the development partner you can rely on for honest advice, quality
          execution, and ongoing support.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
