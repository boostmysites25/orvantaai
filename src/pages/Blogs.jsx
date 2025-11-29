import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import { blogs } from "../content/blogs";
import PageBanner from "../components/website/PageBanner";
import banner from "../assets/videos/blogs.mp4";
import { Helmet } from "react-helmet";

const Blogs = () => {
  const baseUrl = "https://www.orvantaai.com";
  const pageUrl = `${baseUrl}/blogs`;
  const title = "Orvanta AI Blog | Web, Mobile & AI Engineering Insights";
  const description =
    "Read expert articles from Orvanta AI on web development, mobile apps, and AI. Stay updated with best practices, case studies, and practical engineering tips.";

  return (
    <div className="mt-[5.5rem] lg:mt-[9rem] min-h-screen text-white max-w-[100vw]">
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
        title="Blogs"
        links={[{ title: "Home", url: "/" }, { title: "Blogs" }]}
      />

      {/* Glowing Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30 mb-8 md:mb-12" />

      {/* Blog Grid */}
      <div className="wrapper pb-12 md:pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              <div className="h-52 md:h-72 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center text-sm text-gray-400 mb-3 gap-4">
                  <span className="flex items-center">
                    <FaCalendarAlt className="mr-2" />
                    {blog.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{blog.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {blog.content.replace(/<[^>]*>"?/gm, "").substring(0, 150)}...
                </p>
                <Link
                  to={`/blogs/${blog.link}`}
                  className="inline-flex items-center text-primary hover:text-secondary transition-colors duration-300"
                >
                  Read More <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
