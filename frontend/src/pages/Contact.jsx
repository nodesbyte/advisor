import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    appointmentDate: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with API logic or email sending service
    console.log('Form Submitted:', formData);
    alert('Appointment Request Submitted!');
  };

  return (
    <section className="py-12 px-6 bg-gray-100 min-h-screen">
      <div className="max-w-xl mx-auto bg-white shadow-md p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-6 text-[#814d35]">Contact & Appointment</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#814d35]"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#814d35]"
              placeholder="Your email"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#814d35]"
              placeholder="Your message"
              rows="4"
            />
          </div>

          {/* Appointment Date */}
          <div>
            <label className="block text-sm font-semibold mb-1">Choose Appointment Date</label>
            <input
              type="date"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#814d35]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#814d35] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#9a5f45] transition"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </section>
  );
}
