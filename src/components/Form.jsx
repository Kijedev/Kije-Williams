import { VscSend } from "react-icons/vsc";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Form = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isFormValid =
    formData.user_name.trim() &&
    formData.user_email.trim() &&
    formData.message.trim();

  const sendEmail = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

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
          background: "#ECE7E1",
        });

        // Optional: reset form
        setFormData({
          user_name: "",
          user_email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log("FAILED...", error.text);
      });
  };

  return (
    <div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-[50%] lg:w-[100%] mt-[10%] font-poppins"
      >
        {/* Name */}
        <div>
          <label className="text-white font-light">Name</label>
          <br />
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            placeholder="Your Full Name..."
            className="placeholder:text-stone-600 bg-transparent border border-stone-800 rounded-[10px] lg:p-4 p-3 lg:w-[200%] w-[200%] md:w-[100%] mt-3 outline-none"
          />
        </div>

        <br />

        {/* Email */}
        <div>
          <label className="font-light text-white">E-mail</label>
          <br />
          <input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            placeholder="Your E-mail..."
            className="placeholder:text-stone-600 bg-transparent border border-stone-800 rounded-[10px] lg:p-4 p-3 lg:w-[200%] w-[200%] md:w-[100%] mt-3 outline-none"
          />
        </div>

        <br />

        {/* Message */}
        <div>
          <label className="font-light text-white">Message</label>
          <br />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Talk to me, how can i help you?"
            className="placeholder:text-stone-600 bg-transparent border border-stone-800 rounded-[10px] lg:p-4 p-3 lg:w-[200%] w-[200%] md:w-[100%] h-[15vh] mt-3 outline-none"
          />
        </div>

        {/* Button */}
        <div className="mt-10">
          <button
            type="submit"
            disabled={!isFormValid}
            className={`group lg:w-[200%] w-[200%] md:w-[100%] h-[60px] rounded-md
              flex items-center justify-center overflow-hidden
              transition duration-300 active:scale-95
              ${
                isFormValid
                  ? "bg-[#FFFFFF] hover:bg-[#ECE7E1] text-[#1A1818]"
                  : "bg-gray-500 cursor-not-allowed opacity-50"
              }`}
          >
            <div
              className="relative flex items-center gap-2
              transition-all duration-300 ease-in-out
              group-hover:translate-x-6"
            >
              <span
                className="text-[1.04em] whitespace-nowrap
                transition-all duration-300 ease-in-out
                group-hover:opacity-0
                group-hover:translate-x-4"
              >
                Send Message
              </span>
              <VscSend
                className="text-2xl
                transition-all duration-300 ease-in-out
                group-hover:absolute
                group-hover:left-8
                group-hover:-translate-x-1/2"
              />
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
