
import { useState } from "react";
import { Search, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeedPost from "@/components/FeedPost";
import BookCard from "@/components/BookCard";
import { useGlobalContext } from "@/context";
import coverImg from "../images/cover_not_found.jpg";
import { useShelfContext } from "@/components/contexts/ShelfContext";

const Feed = () => {
  const {isOnShelf, removeFromShelf, addToShelf} = useShelfContext();
  const [activeTab, setActiveTab] = useState("forYou");
  const [searchQuery, setSearchQuery] = useState("");
  const { books, loading, resultTitle, setSearchTerm } = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      // removing /works/ to get only id
      id: (singleBook.id).replace("/works/", ""),
      cover: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
    }
  });
  
  const feedPosts = [
    {
      id: 1,
      username: "olivia_reads",
      userImage: "https://i.pravatar.cc/150?img=1",
      bookTitle: "The Midnight Library",
      bookAuthor: "Matt Haig",
      bookCover: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&auto=format&fit=crop",
      content: "Just finished this and I'm emotionally wrecked in the best way possible. The concept of exploring different life paths is so thought-provoking. Highly recommend!",
      rating: 5,
      likes: 42,
      comments: 8,
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      username: "bookish_mark",
      userImage: "https://i.pravatar.cc/150?img=11",
      bookTitle: "Project Hail Mary",
      bookAuthor: "Andy Weir",
      bookCover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&auto=format&fit=crop",
      content: "The science in this book blew my mind! Probably the most fun I've had reading sci-fi in years. The character development was outstanding.",
      rating: 5,
      comparisonBook: "The Martian",
      comparisonResult: "Liked it better!",
      likes: 37,
      comments: 12,
      timestamp: "5 hours ago",
    },
    {
      id: 3,
      username: "page_turner",
      userImage: "https://i.pravatar.cc/150?img=5",
      bookTitle: "Mexican Gothic",
      bookAuthor: "Silvia Moreno-Garcia",
      bookCover: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=400&auto=format&fit=crop",
      content: "This atmospheric horror novel kept me up all night! The creeping sense of dread builds perfectly, and the twist was genuinely surprising.",
      rating: 4,
      likes: 29,
      comments: 6,
      timestamp: "7 hours ago",
    },
  ];
  
  const trendingBooks = [
    {
      cover: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=400&auto=format&fit=crop",
      title: "Beneath the Surface",
      author: "Sarah Chen",
      rating: 4,
    },
    {
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&auto=format&fit=crop",
      title: "The Silent Echo",
      author: "Amelia Blackwood",
      rating: 5,
    },
    {
      cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&auto=format&fit=crop",
      title: "Whispers in the Dark",
      author: "James Holden",
      rating: 4,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Main Feed Column */}
            <div className="w-full md:w-2/3">
              {/* Search Bar */}
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search books, reviews, or users..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setSearchTerm(e.target.value)}}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-dewey-green focus:border-dewey-green"
                  />
                </div>
              </div>
              
              {/* Feed Tabs */}
              <div className="flex border-b mb-6">
                <button
                  onClick={() => setActiveTab("forYou")}
                  className={`px-4 py-2 font-medium ${
                    activeTab === "forYou"
                      ? "text-dewey-green border-b-2 border-dewey-green"
                      : "text-gray-600 hover:text-dewey-green"
                  }`}
                >
                  For You
                </button>
                <button
                  onClick={() => setActiveTab("following")}
                  className={`px-4 py-2 font-medium ${
                    activeTab === "following"
                      ? "text-dewey-green border-b-2 border-dewey-green"
                      : "text-gray-600 hover:text-dewey-green"
                  }`}
                >
                  Following
                </button>
                <button
                  onClick={() => setActiveTab("trending")}
                  className={`px-4 py-2 font-medium ${
                    activeTab === "trending"
                      ? "text-dewey-green border-b-2 border-dewey-green"
                      : "text-gray-600 hover:text-dewey-green"
                  }`}
                >
                  Trending
                </button>
              </div>
              
              {/* Feed Posts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {
                booksWithCovers.slice(0, 30).map((item, index) => {
                  return (
                    <BookCard key = {index} cover={item.cover} title = {item.title} author={item.author?.join(", ")}
                      isOnShelf={isOnShelf(item.title)}
                      onToggleShelf={() => {
                        isOnShelf(item.title)
                          ? removeFromShelf(item.title)
                          : addToShelf({
                              cover: item.cover,
                              title: item.title,
                              author: item.author?.join(", "),
                              rating: 0,
                              liked: false,
                            });
                      }}
                    />
                  )
                })
              }
                
                <div className="text-center py-6">
                  <button className="btn-secondary">Load More</button>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="w-full md:w-1/3">
              {/* Trending Books */}
              <div className="card mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-serif text-xl font-medium">Trending Now</h3>
                  <button className="text-sm text-dewey-green hover:text-dewey-light-green">
                    See All
                  </button>
                </div>
                
                <div className="space-y-4">
                  {trendingBooks.map((book, index) => (
                    <div key={index} className="flex items-center">
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="w-16 h-20 object-cover rounded-md shadow-sm"
                      />
                      <div className="ml-3">
                        <h4 className="font-medium line-clamp-1">{book.title}</h4>
                        <p className="text-sm text-gray-600 mb-1">{book.author}</p>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span
                              key={star}
                              className={`text-xs ${
                                star <= book.rating ? "text-dewey-green" : "text-gray-300"
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Reading Challenges */}
              <div className="card mb-6">
                <h3 className="font-serif text-xl font-medium mb-4">Reading Challenge</h3>
                <div className="bg-dewey-tan/30 rounded-lg p-4 mb-4">
                  <p className="font-medium mb-2">2025 Goal: 52 books</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                    <div
                      className="bg-dewey-green h-2.5 rounded-full"
                      style={{ width: "35%" }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600">18 of 52 books read (35%)</p>
                </div>
                <button className="text-dewey-green hover:text-dewey-light-green text-sm font-medium">
                  Update Progress
                </button>
              </div>
              
              {/* Reading Lists */}
              <div className="card">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-serif text-xl font-medium">Your Reading Lists</h3>
                  <button className="text-sm text-dewey-green hover:text-dewey-light-green">
                    Create New
                  </button>
                </div>
                
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="flex justify-between items-center p-2 hover:bg-dewey-tan/20 rounded-lg">
                      <span className="font-medium">Summer TBR</span>
                      <span className="text-sm text-gray-500">12 books</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex justify-between items-center p-2 hover:bg-dewey-tan/20 rounded-lg">
                      <span className="font-medium">All-Time Favorites</span>
                      <span className="text-sm text-gray-500">8 books</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex justify-between items-center p-2 hover:bg-dewey-tan/20 rounded-lg">
                      <span className="font-medium">Book Club Picks</span>
                      <span className="text-sm text-gray-500">5 books</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Feed;
