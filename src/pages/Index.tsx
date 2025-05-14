
import { useState } from "react";
import { Link } from "react-router-dom";
import { Book, Users, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import BookCard from "@/components/BookCard";
import bookshelfImg from "../images/bookshelf.jpg";
import bookstoreImg from "../images/bookstore 2.jpg";

const Index = () => {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Join waitlist with:", email);
    setEmail("");
    alert("Thanks for joining our waitlist!");
  };
  
  const features = [
    {
      icon: <Users size={24} />,
      title: "Connect with readers",
      description: "Follow friends and influencers to see what they're reading and loving right now.",
    },
    {
      icon: <Book size={24} />,
      title: "Personalized recommendations",
      description: "Our algorithm learns your taste and suggests books you'll actually want to read.",
    },
    {
      icon: <Star size={24} />,
      title: "Track your reading journey",
      description: "Log books, write reviews, and share your thoughts with the community.",
    },
  ];
  
  const testimonials = [
    {
      quote: "Dewey helped me break out of my reading slump with perfect recommendations!",
      name: "Alexis K.",
      title: "Book enthusiast",
    },
    {
      quote: "I've discovered so many amazing books I never would have found otherwise.",
      name: "Marcus T.",
      title: "Sci-fi lover",
    },
    {
      quote: "The social features make reading feel like a shared adventure again.",
      name: "Priya S.",
      title: "Book club organizer",
    },
  ];
  
  const popularBooks = [
    {
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop",
      title: "The Silent Echo",
      author: "Amelia Blackwood",
      rating: 4,
    },
    {
      cover: "https://images.unsplash.com/photo-1711175555137-77d5728a91f0?q=80&w=400&auto=format&fit=crop",
      title: "Whispers in the Dark",
      author: "James Holden",
      rating: 5,
    },
    {
      cover: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?q=80&w=400&auto=format&fit=crop",
      title: "Beneath the Surface",
      author: "Sarah Chen",
      rating: 4,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-dewey-tan to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-dewey-green">
                Uncover your next unforgettable read
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Join the community of readers who share, discover, and celebrate books together.
                Get personalized recommendations and connect with fellow book lovers.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-8 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-dewey-green focus:border-dewey-green flex-grow"
                  required
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Join Waitlist
                </button>
              </form>
              <p className="text-sm text-gray-600">
                Already a member? <Link to="/join" className="text-dewey-green hover:text-dewey-light-green underline">Sign in</Link>
              </p>
            </div>
            
            <div className="w-full md:w-1/2 md:pl-10">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
                  alt="Person reading on a tablet"
                  className="w-full rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg hidden md:block">
                  <div className="flex items-center">
                    <div className="bg-dewey-green rounded-full p-2 mr-3">
                      <Book className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">500+ Books</p>
                      <p className="text-xs text-gray-600">Discovered monthly</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg hidden md:block">
                  <div className="flex items-center">
                    <div className="bg-dewey-green rounded-full p-2 mr-3">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">10k+ Readers</p>
                      <p className="text-xs text-gray-600">In our community</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-dewey-green">How Dewey Works</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our platform connects readers through shared interests and personalized recommendations,
              making it easy to discover books you'll love.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/about" className="btn-secondary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Books Section */}
      <section className="py-16 bg-dewey-tan/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-dewey-green">Popular on Dewey</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Check out what's trending in our community right now.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {popularBooks.map((book, index) => (
              <BookCard
                key={index}
                id = {book.title}
                cover={book.cover}
                title={book.title}
                author={book.author}
                rating={book.rating}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/feed" className="btn-primary">
              Explore More Books
            </Link>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-dewey-green">
                Not another outdated bookshelf
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Dewey is smart, social, and all about you. Our platform helps you discover books
                through people you trust, not just algorithms.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-dewey-tan/50 p-1 rounded-full mr-3 mt-1">
                    <svg className="h-4 w-4 text-dewey-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>Build your digital bookshelf with reads past and future</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-dewey-tan/50 p-1 rounded-full mr-3 mt-1">
                    <svg className="h-4 w-4 text-dewey-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>Connect with friends and see what they're loving</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-dewey-tan/50 p-1 rounded-full mr-3 mt-1">
                    <svg className="h-4 w-4 text-dewey-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>Get recommendations tailored to your unique taste</p>
                </li>
              </ul>
              <Link to="/join" className="btn-primary">
                Get Started Now
              </Link>
            </div>
            <div className="w-full md:w-1/2 md:pl-10">
              <div className="relative">
                <img
                  src={bookstoreImg}
                  alt="Dewey app on laptop and phone"
                  className="w-full rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-dewey-tan/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-dewey-green">
              What Our Readers Say
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Join thousands of happy readers who have transformed their reading experience with Dewey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dewey-green text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Ready to transform your reading experience?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join our community of curious readers who share, discover, and celebrate books together.
          </p>
          <Link to="/join" className="inline-block bg-white text-dewey-green font-medium px-8 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-md">
            Join Dewey Today
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
