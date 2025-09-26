import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  // 1. Track input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null
  });

  // 2. Handle changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // 3. Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ loading: false, success: data.message, error: null });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.error || 'Something went wrong.');
      }
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message });
    }
  };

  return (
    <section id="contact" className="py-16 px-6 bg-pink-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-pink-700">Let's Connect! 💌</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Social Section */}
          <div className="flex flex-col items-start justify-start text-left">
            <p className="text-gray-700 mb-4 max-w-md">
              If you ever want to grab a coffee/bubble tea (virtually) or just want a quick chat – you can find me on social media or you can send me a message here!
            </p>

            <div className="flex space-x-6 text-pink-700 text-3xl">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                <FaLinkedin />
              </a>
              <a href="mailto:your.email@example.com" className="hover:text-pink-500">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded space-y-4 w-full">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message..."
                className="w-full border border-gray-300 rounded px-3 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>
            <button
              type="submit"
              disabled={status.loading}
              className="bg-pink-500 text-white px-5 py-2 rounded hover:bg-pink-600 transition disabled:opacity-50"
            >
              {status.loading ? 'Sending...' : 'Send'}
            </button>

            {/* Show success or error messages */}
            {status.success && <p className="text-green-600 mt-2">{status.success}</p>}
            {status.error && <p className="text-red-600 mt-2">{status.error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
