
import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log("Newsletter signup for:", email);
    setEmail("");
    alert("Thanks for signing up for our newsletter!");
  };

  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/lovable-uploads/ac2ebd7a-1bd4-42d0-8adf-09c17aa922dd.png"
                alt="Dewey Logo"
                className="h-10"
              />
              <span className="text-dewey-green font-serif font-medium text-2xl ml-2">
                dewey
              </span>
            </div>
            <p className="text-gray-600 mb-6">
              Uncover your next unforgettable read with our personalized recommendations
              and vibrant reading community.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-dewey-green hover:text-dewey-light-green transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-dewey-green hover:text-dewey-light-green transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-dewey-green hover:text-dewey-light-green transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-xl mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-dewey-green transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/feed" className="text-gray-600 hover:text-dewey-green transition-colors">
                  Feed
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-gray-600 hover:text-dewey-green transition-colors">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-dewey-green transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/join" className="text-gray-600 hover:text-dewey-green transition-colors">
                  Join
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-xl mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Stay updated with our latest book recommendations and features.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-dewey-green focus:border-dewey-green"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Dewey. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-500 hover:text-dewey-green text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-dewey-green text-sm">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-gray-500 hover:text-dewey-green text-sm">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
