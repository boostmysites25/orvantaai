import banner from "../assets/videos/contactus.mp4";
import { FaGlobe } from "react-icons/fa";
import { companyDetails } from "../content/constant";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { lazy } from "react";
import ContactForm from "../components/common/ContactForm";
import { Helmet } from "react-helmet";

const MapComponent = lazy(() => import("../components/website/MapComponent"));
const PageBanner = lazy(() => import("../components/website/PageBanner"));

const ContactUs = () => {
  const baseUrl = "https://www.orvantaai.com";
  const pageUrl = `${baseUrl}/contact-us`;
  const title = "Contact Orvanta AI | Web, Mobile & AI Development Company";
  const description =
    "Contact Orvanta AI to discuss your web, mobile app, or AI project. Request a quote or consultation with our engineering team today.";

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
        title="Contact Us"
        links={[{ title: "Home", url: "/" }, { title: "Contact Us" }]}
      />
      <div className="!max-w-6xl wrapper">
        <ContactForm />
        <section
          data-aos="fade-up"
          className="wrapper flex flex-col items-center gap-6 py-[2rem]"
        >
          <h3 className="text2">Head Office Location</h3>
          <div className="bg-white !p-6 grid lg:grid-cols-3 gap-8 lg:gap-5 rounded-2xl w-full">
            <div className="flex gap-3">
              <div className="min-w-12 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-b from-primary via-primary to-secondary">
                <PiPhoneCallFill size={30} />
              </div>
              <div className="space-y-1 text-black">
                <h6 className="text4">Mobile Number</h6>
                <p>{companyDetails.phone}</p>
                <p>{companyDetails.phone1}</p>
              </div>
            </div>
            <div className="flex lg:justify-center gap-3">
              <div className="min-w-12 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-b from-primary via-primary to-secondary">
                <FaLocationDot size={30} />
              </div>
              <div className="space-y-1 text-black">
                <h6 className="text4">Location</h6>
                <p>{companyDetails.address}</p>
              </div>
            </div>
            <div className="flex lg:justify-end gap-3">
              <div className="min-w-12 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-b from-primary via-primary to-secondary">
                <FaGlobe size={30} />
              </div>
              <div className="space-y-1 text-black">
                <h6 className="text4">Have Enquiries?</h6>
                <p>{companyDetails.email}</p>
                <p>{companyDetails.email1}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <MapComponent />
    </div>
  );
};

export default ContactUs;
