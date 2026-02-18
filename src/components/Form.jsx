import React, { useRef, useState } from "react";
import { VscSend } from "react-icons/vsc";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Form = () => {
  const form = useRef(null);

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isFormValid =
    formData.user_name.trim() !== "" &&
    formData.user_email.trim() !== "" &&
    formData.message.trim() !== "";

  const sendEmail = (e) => {
    e.preventDefault();
    if (!isFormValid || loading) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_8bjvfdz", 
        "template_ibv4bus",
        form.current,
        "fIbMF0nnFpZ7R0fDF"  
      )
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Email has been sent!",
          showConfirmButton: false,
          timer: 2000,
        });

        form.current.reset(); 
        setFormData({
          user_name: "",
          user_email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("FAILED...", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to send message. Please try again.",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex justify-center">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full -mt-6 lg:mt-16 font-poppins space-y-6"
      >
        <div>
          {/* <label className="text-white font-light">Name</label> */}
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
            placeholder="Your Full Name..."
            className="w-full mt-3 p-4 bg-transparent border border-stone-800 rounded-lg placeholder:text-stone-600 outline-none focus:border-white transition"
          />
        </div>

        <div>
          {/* <label className="text-white font-light">E-mail</label> */}
          <input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            required
            placeholder="Your E-mail..."
            className="w-full mt-3 p-4 bg-transparent border border-stone-800 rounded-lg placeholder:text-stone-600 outline-none focus:border-white transition"
          />
        </div>

        <div>
          {/* <label className="text-white font-light">Message</label> */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            placeholder="Talk to me, how can I help you?"
            className="w-full mt-3 p-4 bg-transparent border border-stone-800 rounded-lg placeholder:text-stone-600 outline-none focus:border-white transition"
          />
        </div>

        <button
          type="submit"
          disabled={!isFormValid || loading}
          className={`group w-full h-14 rounded-lg flex items-center justify-center transition duration-300 active:scale-95
            ${
              isFormValid && !loading
                ? "bg-[#ECE7E1] hover:bg-[#ECE7E1]/60 text-black"
                : "bg-white/50 cursor-not-allowed opacity-60 text-white"
            }`}
        >
          {loading ? "Sending..." : "Send Message"}
          {!loading && <VscSend className="ml-2 text-xl" />}
        </button>
      </form>
    </div>
  );
};

export default Form;
