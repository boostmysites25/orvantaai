import React from "react";
import banner from "../assets/videos/services.mp4";
import { lazy } from "react";
import ArrowButton from "../components/common/ArrowButton";
import { Helmet } from "react-helmet";

const PageBanner = lazy(() => import("../components/website/PageBanner"));
const AllServices = lazy(() => import("../components/website/AllServices"));
const WhyWorkWithUs = lazy(() => import("../components/common/WhyWorkWithUs"));

const OurServices = () => {
  const baseUrl = "https://www.orvantaai.com";
  const pageUrl = `${baseUrl}/services`;
  const title = "Software Development Services | Web, Mobile & AI | Orvanta AI";
  const description =
    "Explore Orvanta AI services: full-stack web development, mobile app development, and AI solutions. We design, build, and scale digital products tailored to your business.";

  return (
    <div className="mt-[4.5rem]">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${baseUrl}/logo.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${baseUrl}/logo.png`} />
      </Helmet>
      <PageBanner
        banner={banner}
        title="Services"
        links={[{ title: "Home", url: "/" }, { title: "Services" }]}
      />
      <div className="pt-7">
        <AllServices />
        <div className="wrapper flex justify-center">
          <ArrowButton
            to="/contact-us"
            className="border border-primary hover:bg-primary"
          >
            Discuss Your Project
          </ArrowButton>
        </div>
        <WhyWorkWithUs />
      </div>
    </div>
  );
};

export default OurServices;
