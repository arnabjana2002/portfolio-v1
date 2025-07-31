import toast from "react-hot-toast";
import RevealOnScroll from "../RevealOnScroll";
import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const ref = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    /*
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        ref.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then((result) => {
        toast.success("Message Sent", result.status);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => toast.error("Something went wrong! Please try again"));
    */

    toast((t) => (
      /*
      <span className="flex flex-col sm:flex-row items-start sm:items-center gap-2 bg-yellow-100 text-yellow-800 border border-yellow-300 rounded-lg px-4 py-3 text-sm">
        <span>
          This feature is currently <b>Out of Service</b>, directly mail to
          <strong className="ml-1">arnabjana.jobs02@gmail.com</strong>
        </span>
        <button
          onClick={() => toast.dismiss(t.id)}
          className="ml-auto text-yellow-800 font-medium hover:underline"
        >
          Dismiss
        </button>
      </span>
      */
      <div className="bg-white divide-gray-300/60 flex items-center space-x-4 divide-x p-3 text-sm rounded border border-gray-300/60 w-full max-w-xl">
        {/* Message section */}
        <div className="flex-1">
          <h3 className="text-gray-700 font-medium mb-1">
            Service Unavailable
          </h3>
          <p className="text-gray-500">Directly mail to:</p>
          <p className="text-gray-500 font-bold">arnabjana.jobs02@gmail.com</p>
        </div>

        {/* Dismiss button */}
        <button
          onClick={() => toast.dismiss(t.id)}
          type="button"
          className="text-red-500 font-medium hover:bg-red-500/10 px-3 py-1.5 rounded transition-all"
        >
          Dismiss
        </button>
      </div>
    ));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 max-w-screen">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Get in Touch
          </h2>

          <form className="space-y-6" ref={ref} onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="relative">
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                required
                placeholder="Your Name.."
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                required
                placeholder="yourmail@example.com"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            {/* Mail Content */}
            <div className="relative">
              <textarea
                name="message"
                id="message"
                value={formData.message}
                rows={5}
                required
                placeholder="Write your message..."
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-3 px-6 rounded text-xl font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
