import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "http://localhost:8000/contact/", 
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setTimeout(() => navigate("/faq"), 2000);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-20">
      {/* Hero Section */}
      <div className="relative h-64 bg-[#475B06] flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">We'd love to hear from you</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-[#475B06] mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#e0b238] focus:border-[#e0b238]"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#e0b238] focus:border-[#e0b238]"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#e0b238] focus:border-[#e0b238]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#e0b238] focus:border-[#e0b238]"
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#e0b238] hover:bg-[#f7c948] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#475B06] transition-colors duration-300 ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-[#475B06] mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#e0b238]/10 p-3 rounded-full">
                    <FaPhone className="h-6 w-6 text-[#e0b238]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600">+254 791 527 147</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#e0b238]/10 p-3 rounded-full">
                    <FaEnvelope className="h-6 w-6 text-[#e0b238]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">support@tujenge.kenya</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#e0b238]/10 p-3 rounded-full">
                    <FaMapMarkerAlt className="h-6 w-6 text-[#e0b238]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Address</h3>
                    <p className="text-gray-600">Tujenge HQ, Innovation Street</p>
                    <p className="text-gray-600">off Ngong Road, Nairobi</p>
                    <p className="text-gray-600">Kenya</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#e0b238]/10 p-3 rounded-full">
                    <FaClock className="h-6 w-6 text-[#e0b238]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Working Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-[#475B06] mb-6">Find Us On</h2>
              <div className="flex space-x-4">
                <div className="bg-[#475B06] text-white p-3 rounded-full">
                  <FaFacebook className="h-6 w-6" />
                </div>
                <div className="bg-[#475B06] text-white p-3 rounded-full">
                  <FaTwitter className="h-6 w-6" />
                </div>
                <div className="bg-[#475B06] text-white p-3 rounded-full">
                  <FaInstagram className="h-6 w-6" />
                </div>
                <div className="bg-[#475B06] text-white p-3 rounded-full">
                  <FaLinkedin className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}