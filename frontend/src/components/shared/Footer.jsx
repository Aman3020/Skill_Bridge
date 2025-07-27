import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-t-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Job Hunt</h2>
            <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              className="hover:text-gray-400"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.676 0H1.324C.593 0 0 .592 0 1.324v21.352C0 23.407.593 24 1.324 24H12.82v-9.294H9.692V11.01h3.128V8.414c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.696h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.324C24 .592 23.407 0 22.676 0z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-gray-400"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.835 9.835 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3a9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482A13.94 13.94 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.562 4.897 4.897 0 0 1-2.228-.616c-.054 2.28 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.92 4.92 0 0 0 4.6 3.417A9.867 9.867 0 0 1 0 21.542a13.936 13.936 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.21-.004-.423-.015-.633A9.935 9.935 0 0 0 24 4.557z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              className="hover:text-gray-400"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452H16.85v-5.569c0-1.328-.024-3.036-1.849-3.036-1.85 0-2.132 1.445-2.132 2.937v5.668H9.256V9h3.448v1.561h.049c.48-.908 1.653-1.865 3.403-1.865 3.64 0 4.313 2.395 4.313 5.507v6.249zM5.337 7.433a1.993 1.993 0 1 1 0-3.986 1.993 1.993 0 0 1 0 3.986zM6.856 20.452H3.816V9h3.04v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.225.792 24 1.771 24h20.451C23.2 24 24 23.225 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
