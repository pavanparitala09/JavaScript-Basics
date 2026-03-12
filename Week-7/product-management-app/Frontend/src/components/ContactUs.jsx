import React from "react";

function ContactUs() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <form className="w-full max-w-md space-y-4 border p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-center">Contact Form</h2>

        <div>
          <label className="block mb-1">First Name</label>
          <input
            type="text"
            placeholder="Enter first name"
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1">Last Name</label>
          <input
            type="text"
            placeholder="Enter last name"
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1">Phone</label>
          <input
            type="tel"
            placeholder="Enter phone number"
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1">Message</label>
          <textarea
            rows="4"
            placeholder="Enter message"
            className="w-full border p-2 rounded"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
