import { useContactBox } from "@/context/ContactContext";
import { useState, ChangeEvent, FormEvent } from "react";
import { twMerge } from "tailwind-merge";
import grainImg from "@/assets/images/grain.jpg";
import toast from "react-hot-toast";
import ArrowIcon from "@/assets/icons/arrow-up-right.svg";
import { motion } from "framer-motion";

const ContactForm = ({ className }: { className?: string }) => {
  const { isContactBoxOpen, setIsContactBoxOpen } = useContactBox();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const contactOptions = [
    {
      icon: (
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <g>
            <path d="M16,16.8l13.8-9.2C29.2,5.5,27.3,4,25,4H7C4.7,4,2.8,5.5,2.2,7.6L16,16.8z" />
            <path d="M16.6,18.8C16.4,18.9,16.2,19,16,19s-0.4-0.1-0.6-0.2L2,9.9V23c0,2.8,2.2,5,5,5h18c2.8,0,5-2.2,5-5V9.9L16.6,18.8z" />
          </g>
        </svg>
      ),
      text: "shubham.m9022@gmail.com",
      href: "mailto:shubham.m9022@gmail.com",
    },
    {
      icon: (
        <svg
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M240.3,396.8L240.3,396.8c3.3,5.1,9.1,8.5,15.7,8.5c6.6,0,12.4-3.4,15.8-8.5l110.2-170.2c14.8-22.9,23.4-48.1,23.4-77.3C405.3,64.9,339,0,256,0c-83,0-149.3,64.9-149.3,149.3c0,29.2,8.6,54.4,23.4,77.3L240.3,396.8z M256,64c47.1,0,85.3,38.2,85.3,85.3s-38.2,85.3-85.3,85.3s-85.3-38.2-85.3-85.3S208.9,64,256,64z M365.4,323.5L256,469.3L146.6,323.5c-37.4,19.6-61.3,48.9-61.3,81.8C85.3,464.2,161.7,512,256,512s170.7-47.8,170.7-106.7C426.7,372.4,402.8,343.1,365.4,323.5z" />
        </svg>
      ),
      text: "Giridih, Jharkhand, India 815312",
      href: "https://www.google.com/maps?q=24.18912,86.29529",
    },
  ];

  const userInputHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "fullName") setFullName(value);
    else if (name === "email") setEmail(value);
    else if (name === "message") setMessage(value);
  };

  const submitHandler = async(e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);

          formData.append("access_key", "06a67d87-9bf9-4fb3-b623-42f5308721b5");

          const object = Object.fromEntries(formData);
          const json = JSON.stringify(object);

          const response = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              },
              body: json
          });
          const result = await response.json();
          if (result.success) {
            e.target.reset();
            toast.success("Message Sent!");
            setTimeout(()=>{
              setIsContactBoxOpen(false);
            },2000);
               
          }
   
  };

  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.95, y: 30 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.9, y: 40 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
    className={twMerge("w-full text-gray-700 h-full bg-black/20 flex px-4 items-center justify-center backdrop-blur-sm rounded", className)}
  ><div className="grid md:w-[70%] relative grid-cols-1 lg:grid-cols-3 gap-6 bg-white rounded-xl p-4 shadow-md">
        
        {/* Close button */}
        <button
          className="absolute z-50 top-4 right-4 size-8 rounded-full bg-white/10 hover:bg-black/10 transition  backdrop-blur p-1 shadow"
          onClick={() => setIsContactBoxOpen(false)}
          aria-label="Close Contact Form"
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          >
            <path d="M11.25 4.75L4.75 11.25M4.75 4.75L11.25 11.25" />
          </svg>
        </button>

        {/* Contact Details */}
        <div className="lg:col-span-1 ">
          <div className="relative rounded-xl h-full flex flex-col px-4 py-6 bg-gradient-to-br from-emerald-300 to-blue-700 text-white shadow">
                     <div
                    className="absolute inset-0 opacity-5 -z-10 rounded-xl"
                    style={{ backgroundImage: `url(${grainImg.src})` }}
                  />
            <h2 className="text-2xl font-medium mb-2 font-serif tracking-normal text-gray-900 [line-height:30px]">Let's Get in touch with me to <span className="text-gray-50">Build Something Great</span>!</h2>
            <hr className="border-white/20 border-[1.5px] my-4"/>
            <div className="space-y-3 mt-4">
              {contactOptions.map((item, key) => (
                <a
                  key={key}
                  className="flex items-center font-medium text-gray-900 gap-2 hover:underline text-sm"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="size-5">{item.icon}</span>
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-2">
          <form className="flex flex-col gap-2" action="https://api.web3forms.com/submit" method="POST" onSubmit={submitHandler}>
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE"></input>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-800">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={fullName}
                onChange={userInputHandler}
                placeholder="e.g. Ramesh Kumar"
                className="w-full text-gray-700 border-b-2 px-1 border-gray-400 focus:border-blue-700 outline-none py-1"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-800">Email Address</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={userInputHandler}
                placeholder="xyz@gmail.com"
                className="w-full text-gray-700 border-b-2 px-1  border-gray-400 focus:border-blue-700 outline-none bg-transparent py-1"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-800">Message</label>
              <textarea
                name="message"
                value={message}
                onChange={userInputHandler}
                rows={2}
                placeholder="Write a message to get in touch"
                className="w-full text-gray-700 border-b-2 px-1  border-gray-400 focus:border-blue-700 outline-none bg-transparent py-1 resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex max-w-full md:w-[170px] font-medium  justify-center items-center mt-2 px-4 py-2 gap-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Send Message <ArrowIcon className="size-6"/>
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm;
