import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message:
          "Email service is not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY.",
      });
      return;
    }

    try {
      setIsSending(true);
      setStatus({ type: "", message: "" });
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });
      setStatus({
        type: "success",
        message: "Message sent successfully. I will get back to you soon.",
      });
      formRef.current?.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again in a moment.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="border border-gray-500 rounded-2xl p-6 mx-auto">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col md:gap-6 gap-3"
      >
        <div className="flex flex-col md:flex-row md:gap-6 gap-3">
          <label htmlFor="name" className="font-medium w-full">
            Name*
            <br />
            <input
              type="text"
              id="name"
              name="name"
              required
              className="rounded-lg mt-2 md:p-3 p-2 w-full font-normal text-[var(--textsecondary)] focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
          <label htmlFor="email" className="font-medium w-full">
            Email*
            <br />
            <input
              type="email"
              id="email"
              name="email"
              required
              className="rounded-lg mt-2 md:p-3 p-2 w-full font-normal text-[var(--textsecondary)] focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
        </div>
        <label htmlFor="subject" className="font-medium w-full">
          Subject*
          <br />
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="rounded-lg mt-2 md:p-3 p-2 w-full font-normal text-[var(--textsecondary)] focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </label>
        <label htmlFor="message" className="font-medium w-full">
          Message*
          <br />
          <textarea
            name="message"
            id="message"
            required
            className="md:min-h-40 min-h-20 rounded-lg mt-1.5 md:p-3 p-2 w-full font-normal text-[var(--textsecondary)] focus:outline-none focus:ring-2 focus:ring-blue-400 resize-y"
          />
        </label>
        {status.message ? (
          <p
            className={`text-sm ${
              status.type === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {status.message}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={isSending}
          className="bg-blue-500 text-white font-bold md:py-3 py-2.5 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300 self-start"
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
