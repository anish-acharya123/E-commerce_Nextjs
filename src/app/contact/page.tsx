"use client";

import React, { useState } from "react";
import { Send, Phone, MapPin, Mail, Clock, CheckCircle } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="bg-gradient-to-b from-orange-50 to-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-black text-white py-12 md:py-20 h-[500px] flex justify-center items-center">
        <div className="absolute inset-0 overflow-hidden  opacity-20">
          <div className="absolute inset-0 "></div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            }}
          ></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl opacity-90">
              We{"'"}d love to hear from you! Whether you have a question about
              our delicious food, delivery options, or anything else, our team
              is ready to assist you.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 h-fit">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle size={64} className="text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600">
                  Your message has been sent successfully. We{"'"};ll get back
                  to you shortly!
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-amber-500"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-amber-500"
                      placeholder="johndoe@example.com"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-amber-500"
                      placeholder="Order Inquiry"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-amber-500"
                      placeholder="Your message here..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-secondary text-white font-medium py-3 px-6 rounded-md transition duration-300 flex items-center justify-center"
                  >
                    Send Message <Send size={18} className="ml-2" />
                  </button>
                </form>
              </>
            )}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Contact Info */}
            <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone
                    className="text-primary mr-4 mt-1 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="text-gray-800 font-medium text-lg">
                      Phone Support
                    </h3>
                    <p className="text-gray-600 mt-1">+977-9812345678</p>
                    <p className="text-gray-600 text-sm mt-1">
                      Available 7 days a week, 8am-10pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail
                    className="text-primary mr-4 mt-1 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="text-gray-800 font-medium text-lg">
                      Email Support
                    </h3>
                    <p className="text-gray-600 mt-1">foodzone@gmail.com</p>
                    <p className="text-gray-600 text-sm mt-1">
                      We aim to respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin
                    className="text-primary mr-4 mt-1 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="text-gray-800 font-medium text-lg">
                      Headquarters
                    </h3>

                    <p className="text-gray-600 mt-1">Kathmandu, Nepal</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock
                    className="text-primary mr-4 mt-1 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="text-gray-800 font-medium text-lg">
                      Business Hours
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Monday-Friday: 8:00 AM - 10:00 PM
                    </p>
                    <p className="text-gray-600 mt-1">
                      Saturday-Sunday: 9:00 AM - 11:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-lg text-primary">
                    How long does delivery take?
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Most orders are delivered within 30-45 minutes depending on
                    your location and order volume.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg text-primary">
                    What if my food arrives cold?
                  </h3>
                  <p className="text-gray-600 mt-1">
                    We guarantee hot food delivery! If your order arrives cold,
                    please contact us for a replacement or refund.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg text-primary">
                    Do you accommodate dietary restrictions?
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Yes! You can specify dietary requirements in the special
                    instructions section when placing your order.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 rounded-lg overflow-hidden shadow-xl bg-gray-100 h-64 md:h-80">
          <div className="w-full h-full bg-gray-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4192.181352593623!2d85.33548106051818!3d27.65707196911588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb175804d46333%3A0x407a3f6860e99df2!2sImadol%2C%20Mahalaxmi%2044705!5e0!3m2!1sen!2snp!4v1742838529755!5m2!1sen!2snp"
              width="100%"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
