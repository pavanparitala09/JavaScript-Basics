import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-800 text-gray-200 py-6 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-2">
        <h2 className="text-lg font-semibold">MyCompany</h2>

        <p className="text-sm">Email: support@example.com</p>
        <p className="text-sm">Phone: +91 98765 43210</p>
        <p className="text-sm">Location: Telangana, India</p>

        <p className="text-xs text-gray-400 mt-3">
          © {new Date().getFullYear()} MyCompany. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;