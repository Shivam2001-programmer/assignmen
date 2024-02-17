import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaThreads } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaQuora } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-6">
      <hr className="w-full text-[#ccc] my-5" />

      <div className="w-full flex flex-col md:flex-row gap-3 md:gap-0">
        <aside className="pr-9">
          <img
            src="https://generative-ai.bluetickconsultants.com/images/bluetick-consultants.png"
            alt="brand-logo"
            className="w-44"
          />
          <h2 className="my-3 font-semibold text-xl">
            Bluetick Consultants LLP
          </h2>
          <p className="my-2">contact@bluetickconsultants.com</p>
          <div className="inline-flex items-center gap-4 py-4">
            <img
              src="https://generative-ai.bluetickconsultants.com/images/glassdoor-rating.webp"
              alt="glass-door"
              className="w-[7.8125rem]"
            />
            <img
              src="https://generative-ai.bluetickconsultants.com/images/bluetick-iso.webp"
              alt="logo"
              className="w-[6.25rem]"
            />
          </div>
        </aside>

        <aside className="w-full text-lg">
          <div className="flex flex-col md:flex-row px-3 pt-3 gap-5">
            <div className="w-60">
              <h5 className="font-semibold uppercase text-2xl">resources</h5>
              <a href="#" className="inline-flex gap-3 items-center mt-5">
                <IoIosArrowDroprightCircle /> Blogs
              </a>
            </div>

            <div className="w-full">
              <h5 className="font-semibold uppercase text-2xl">resources</h5>
              <ul className="flex gap-10 flex-wrap mt-5">
                <li className="inline-flex gap-3 items-center">
                  <IoIosArrowDroprightCircle />
                  <a href="#">Talk To Code</a>
                </li>
                <li className="inline-flex gap-3 items-center">
                  <IoIosArrowDroprightCircle />
                  <a href="#">InterviewGPT</a>
                </li>
                <li className="inline-flex gap-3 items-center">
                  <IoIosArrowDroprightCircle />
                  <a href="#">PrivacyDoc</a>
                </li>
                <li className="inline-flex gap-3 items-center">
                  <IoIosArrowDroprightCircle />
                  <a href="#">Sales Call Evaluator</a>
                </li>
              </ul>
              <hr className="w-full text-[#ccc] my-7" />

              {/* Social Media icon */}
              <div className="flex justify-center md:justify-start gap-4">
                <a
                  href="/"
                  className="inline-block p-2 bg-white text-[#ccc] rounded-full transition ease-in-out delay-75 hover:bg-[#2c4271] hover:text-white"
                  style={{
                    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
                  }}
                >
                  <FaFacebookF size={20} />
                </a>

                <a
                  href="/"
                  className="inline-block p-2 bg-white text-[#ccc] rounded-full transition ease-in-out delay-75
                hover:bg-gradient-to-r from-[#f09433] to-[#e6683c] hover:text-white"
                  style={{
                    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
                  }}
                >
                  <IoLogoInstagram size={20} />
                </a>

                <a
                  href="/"
                  className="inline-block p-2 bg-white text-[#ccc] rounded-full transition ease-in-out delay-75 hover:text-black"
                  style={{
                    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
                  }}
                >
                  <FaThreads size={20} />
                </a>

                <a
                  href="/"
                  className="inline-block p-2 bg-white text-[#ccc] rounded-full transition ease-in-out delay-75 hover:bg-[#2c4271]"
                  style={{
                    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
                  }}
                >
                  <FaLinkedinIn size={20} />
                </a>

                <a
                  href="/"
                  className="inline-block p-2 bg-white text-[#ccc] rounded-full transition ease-in-out delay-75 hover:bg-[#2c4271]"
                  style={{
                    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
                  }}
                >
                  <FaTwitter size={20} />
                </a>

                <a
                  href="/"
                  className="inline-block p-2 bg-white text-[#ccc] rounded-full transition ease-in-out delay-75 hover:bg-[#dc6057]"
                  style={{
                    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
                  }}
                >
                  <FaQuora size={20} />
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;