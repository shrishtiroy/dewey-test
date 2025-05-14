
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const founderData = [
    {
      name: "Angela B.",
      role: "Co-Founder & CEO",
      image: "https://i.pravatar.cc/300?img=29",
      bio: "A lifelong reader with a background in tech and product management, Angela founded Dewey to create the book recommendation platform she always wanted.",
    },
    {
      name: "Michael L.",
      role: "Co-Founder & CTO",
      image: "https://i.pravatar.cc/300?img=59",
      bio: "With expertise in AI and machine learning, Michael developed Dewey's recommendation algorithms to help readers discover their next favorite books.",
    },
  ];
  
  const values = [
    {
      title: "Community",
      description: "We believe reading is better when shared with friends. Our platform fosters meaningful connections between readers.",
    },
    {
      title: "Curiosity",
      description: "We celebrate the joy of discovery and the endless pursuit of knowledge through books.",
    },
    {
      title: "Personalization",
      description: "No two readers are alike. Our recommendations are tailored to your unique taste and preferences.",
    },
  ];
  
  const timeline = [
    {
      year: "2023",
      title: "The Idea",
      description: "Dewey was born from a simple question: why are book recommendations still so impersonal?",
    },
    {
      year: "2024",
      title: "Building the Team",
      description: "We assembled a team of book lovers, engineers, and designers passionate about transforming how people discover books.",
    },
    {
      year: "2025",
      title: "Beta Launch",
      description: "Our invitation-only beta launches to our first community of curious readers.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-dewey-tan/50 py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-dewey-green">
              Our Story
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Dewey was born from two book-loving founders who wanted smarter, more social reading recommendations.
            </p>
            <div className="flex justify-center">
              <Link to="/join" className="btn-primary">
                Join Our Community
              </Link>
            </div>
          </div>
        </section>
        
        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                  alt="Person reading a book"
                  className="rounded-2xl shadow-xl w-full h-auto"
                />
              </div>
              
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-dewey-green">
                  Our Mission & Vision
                </h2>
                
                <div className="mb-8">
                  <h3 className="font-serif text-xl font-medium mb-3">Mission</h3>
                  <p className="text-gray-700">
                    To deliver personalized book recommendations and create a fun, engaging space for readers to connect, discover, and share their love of reading.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-serif text-xl font-medium mb-3">Vision</h3>
                  <p className="text-gray-700">
                    Build a community of curious readers who share, discover, and celebrate books together. We envision a world where every reader finds books that speak to them and a community that amplifies their reading experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-dewey-tan/30">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-dewey-green">
              Our Values
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
              These core principles guide everything we do at Dewey, from how we build our product to how we interact with our community.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="card h-full flex flex-col items-center">
                  <div className="bg-dewey-green/10 p-4 rounded-full mb-4">
                    <Check className="h-8 w-8 text-dewey-green" />
                  </div>
                  <h3 className="font-serif text-xl font-medium mb-3">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Meet the Founders */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-dewey-green text-center">
              Meet the Founders
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 text-center">
              The team behind Dewey combines a passion for books with expertise in technology and design.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {founderData.map((founder, index) => (
                <div key={index} className="card flex flex-col md:flex-row">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full md:w-40 h-60 md:h-auto object-cover rounded-lg md:rounded-l-lg md:rounded-r-none mb-4 md:mb-0"
                  />
                  <div className="md:ml-6 flex-1">
                    <h3 className="font-serif text-xl font-medium mb-1">{founder.name}</h3>
                    <p className="text-dewey-green mb-3">{founder.role}</p>
                    <p className="text-gray-700">{founder.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Journey */}
        <section className="py-16 bg-dewey-tan/30">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-dewey-green text-center">
              Our Journey
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 text-center">
              How Dewey went from an idea to a growing reading community.
            </p>
            
            <div className="max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <div key={index} className="flex mb-8 last:mb-0">
                  <div className="mr-6 text-center">
                    <div className="bg-dewey-green rounded-full w-12 h-12 flex items-center justify-center text-white font-bold">
                      {item.year}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="h-full w-0.5 bg-dewey-green/30 mx-auto my-2"></div>
                    )}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-serif text-xl font-medium mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
              
              <div className="flex">
                <div className="mr-6 text-center">
                  <div className="bg-dewey-green/20 rounded-full w-12 h-12 flex items-center justify-center text-dewey-green font-bold">
                    Now
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="font-serif text-xl font-medium mb-2">You're Part of Our Story</h3>
                  <p className="text-gray-700">
                    Join us as we continue to build the future of social reading.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-20 bg-dewey-green text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Join us in reshaping how we discover books
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Sign up today to be among the first to experience Dewey and get early access to our beta.
            </p>
            <Link to="/join" className="inline-block bg-white text-dewey-green font-medium px-8 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-md">
              Get Started
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
