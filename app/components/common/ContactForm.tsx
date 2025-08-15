"use client";
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (result.success) {
      alert("Email sent successfully!");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    } else {
      alert("Failed to send email.");
    }
  };

  return (
    <div className="w-full lg:px-6 pt-10 lg:pt-20 bg-white md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row gap-12">
        {/* Left Side */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
          <p className="text-gray-600">
            Feel free to use the form or drop us an email. Old-fashioned phone calls work too.
          </p>
          <ul className="space-y-4 text-gray-700 mt-6">
            <li>📞 484.324.2400</li>
            <li>✉️ info@mediaproper.com</li>
            <li>📍 15 West 3rd St., Media, Pa. 19063</li>
          </ul>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First" className="w-1/2 border rounded-md px-4 py-2" />
              <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last" className="w-1/2 border rounded-md px-4 py-2" />
            </div>
            <input name="email" value={formData.email} onChange={handleChange} placeholder="example@email.com" type="email" className="w-full border rounded-md px-4 py-2" />
            <input name="phone" value={formData.phone} onChange={handleChange} placeholder="xxx-xxx-xxxx" className="w-full border rounded-md px-4 py-2" />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Type your message ..." rows={4} className="w-full border rounded-md px-4 py-2" />
            <button type="submit" className="bg-[#023a53] text-white px-6 py-2 rounded-full">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
