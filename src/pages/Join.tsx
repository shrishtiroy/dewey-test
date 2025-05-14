
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Join = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Login with:", { email, password });
      // Handle login logic
      alert("Login functionality will be implemented soon!");
    } else {
      console.log("Sign up with:", { email, username, password });
      // Handle signup logic
      alert("Thank you for signing up! You'll receive an email when beta access is ready.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-center items-stretch bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Left Column - Image */}
            <div className="w-full md:w-1/2 bg-dewey-tan h-48 md:h-auto relative hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1519972064622-a896c2405fa0"
                alt="Books on shelf"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-dewey-green/30 flex flex-col justify-center items-center text-white p-8">
                <div className="max-w-sm">
                  <img
                    src="/lovable-uploads/ac2ebd7a-1bd4-42d0-8adf-09c17aa922dd.png"
                    alt="Dewey Logo"
                    className="h-16 mb-6"
                  />
                  <h2 className="font-serif text-3xl font-bold mb-4">
                    Welcome to Dewey
                  </h2>
                  <p className="text-lg">
                    {isLogin 
                      ? "Welcome back! Sign in to continue your reading journey." 
                      : "Join our community of curious readers and discover your next favorite book."}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Column - Form */}
            <div className="w-full md:w-1/2 p-8 md:p-12">
              <div className="mb-8 text-center md:text-left">
                <h1 className="font-serif text-2xl md:text-3xl font-bold mb-2">
                  {isLogin ? "Sign In" : "Create Your Account"}
                </h1>
                <p className="text-gray-600">
                  {isLogin 
                    ? "Welcome back! Please enter your details." 
                    : "Join Dewey to discover your next unforgettable read."}
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dewey-green focus:border-dewey-green"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                {!isLogin && (
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dewey-green focus:border-dewey-green"
                      placeholder="Choose a username"
                      required={!isLogin}
                    />
                  </div>
                )}
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dewey-green focus:border-dewey-green"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
                
                {isLogin && (
                  <div className="flex justify-end">
                    <Link to="/forgot-password" className="text-sm text-dewey-green hover:text-dewey-light-green">
                      Forgot password?
                    </Link>
                  </div>
                )}
                
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  {isLogin ? "Sign In" : "Create Account"}
                </button>
              </form>
              
              {!isLogin && (
                <div className="mt-6 text-center text-sm">
                  <p className="text-gray-600">
                    By creating an account, you agree to our{" "}
                    <Link to="/terms" className="text-dewey-green hover:text-dewey-light-green">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-dewey-green hover:text-dewey-light-green">
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              )}
              
              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  {isLogin ? "New to Dewey?" : "Already have an account?"}{" "}
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-dewey-green hover:text-dewey-light-green font-medium"
                  >
                    {isLogin ? "Sign up" : "Sign in"}
                  </button>
                </p>
              </div>
              
              {!isLogin && (
                <div className="mt-8 bg-dewey-tan/30 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Beta Access:</strong> Sign up now to join our waitlist. You'll be among the first to experience Dewey when we launch our beta version!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Join;
