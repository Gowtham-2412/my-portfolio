import React from "react";
import ContactForm from "../Components/ContactForm";
import mail from "../assets/mailwhite.svg";
import phone from "../assets/phonewhite.svg";
import place from "../assets/locationwhite.svg";
import linkedin from '../assets/linkedin.svg'
import twitter from '../assets/twitter.svg'
import github from '../assets/github.svg'
import facebook from '../assets/facebook.svg'

const Contact = () => {
  return (
    <section id="contact" className="py-10">
      <h1 className=" text-4xl font-[800] text-center py-5">Get In Touch</h1>
      <p className="text-center text-lg">
        Ready to start your next project? Let's talk!
      </p>
      <div className="flex justify-between w-3/4 mx-auto mt-10 max-md:flex-col max-md:gap-8 gap-2">
        <div className="md:basis-1/2">
          <h2 className="font-[800] text-2xl text-[var(--headingsecondary)] mb-4">
            Let's Work Together
          </h2>
          <p className="text-[var(--textsecondary)] font-medium mb-4">
            I'm always interested in new opportunities and exciting projects.
            Whether you need a complete website, web application, or just want
            to say hello, feel free to reach out.
          </p>
          <div className="flex flex-col gap-8 items-start mt-14 mb-8">
            <div className="flex gap-4 items-center">
              <img
                src={mail}
                alt=""
                className="p-3 w-12 rounded-2xl bg-[#3658b6]"
              />
              <div>
                <p className="font-bold text-lg">Email</p>
                <p className="font-medium text-sm text-[var(--textsecondary)]">
                  sgowtham.konijeti@gmail.com
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <img
                src={phone}
                alt=""
                className="p-3 w-12 rounded-2xl bg-[#3658b6]"
              />
              <div>
                <p className="font-bold text-lg">Phone</p>
                <p className="font-medium text-sm text-[var(--textsecondary)]">
                  +91 9502323161
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <img
                src={place}
                alt=""
                className="p-3 w-12 rounded-2xl bg-[#3658b6]"
              />
              <div>
                <p className="font-bold text-lg">Location</p>
                <p className="font-medium text-sm text-[var(--textsecondary)]">
                  Durgapur, West Bengal
                </p>
              </div>
            </div>
          </div>
          <p className="text-xl font-bold">Follow Me</p>
          <div className="mt-4 flex gap-5 items-center">
            <div className="w-10 h-10 border border-black p-2 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-200 hover:scale-105">
              <a href="https://github.com/Gowtham-2412" target="blank">
                <img src={github} className="w-6" />
              </a>
            </div>
            <div className="w-10 h-10 border border-black p-2 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-200 hover:scale-105">
              <a href="https://www.facebook.com/" target="blank">
                <img src={facebook} className="w-6" />
              </a>
            </div>
            <div className="w-10 h-10 border border-black p-2 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-200 hover:scale-105">
              <a href="https://x.com/" target="blank">
                <img src={twitter} className="w-6" />
              </a>
            </div>
            <div className="w-10 h-10 border border-black p-2 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-200 hover:scale-105">
              <a href="https://linkedin.com/in/sai-gowtham-konijeti" target="blank">
                <img src={linkedin} className="w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="md:basis:1/2">
          <ContactForm/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
