"use client";

import ArrowIcon from "@/assets/icons/arrow-up-right.svg";
import grainImg from "@/assets/images/grain.jpg";
import ContactForm from "@/components/ContactForm";
// import { RevealOnScroll } from "@/components/RevealOnScroll"; // Remove RevealOnScroll to fix scroll lag
import { useContactBox } from "@/context/ContactContext";
import { motion, AnimatePresence } from "framer-motion";

export const ContactSection = () => {
  const { isContactBoxOpen, setIsContactBoxOpen } = useContactBox();

  // Use framer-motion for reveal animation instead of GSAP/RevealOnScroll to avoid scroll lag
  return (
    <div
      id="contact"
      className="relative py-14 md:py-16 lg:py-20 px-4 md:px-14 lg:px-20 w-full z-50"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Background Card */}
        <div className="overflow-hidden relative text-center md:text-left rounded-2xl p-8 bg-gradient-to-r from-emerald-300 to-blue-700">
          <div
            className="absolute inset-0 opacity-5 -z-10 rounded-2xl"
            style={{ backgroundImage: `url(${grainImg.src})` }}
          />
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div className="md:w-[70%] lg:w-[80%]">
              <h2 className="text-gray-950 text-2xl font-medium font-serif leading-tight tracking-normal">
                Collaborate With Me — Let’s Build Something Great
              </h2>
              <p className="text-gray-800/80 leading-tight font-[450] mt-3 md:text-sm">
                Have a project that demands impact and precision? Let’s connect to
                explore how I can help you design, develop, and deliver scalable
                web solutions — tailored to your goals and built for growth
              </p>
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={() => {
                  setIsContactBoxOpen(true);
                }}
                className="text-white rounded-2xl bg-gray-900 transition-all ease-linear duration-300 h-11 px-6 md:px-5 mt-7 md:mt-0 items-center gap-1.5 inline-flex hover:bg-gray-950 group"
              >
                Contact Me
                <ArrowIcon className="transition duration-300 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Contact Form Scroll + Animation Section */}
      <div id="contact-scroll-anchor" />

      <AnimatePresence>
        {isContactBoxOpen && (
          <motion.div
            key="contactForm"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen z-[9999] bg-gray-900/50 backdrop-blur-sm flex items-center justify-center"
          >
            <ContactForm />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
