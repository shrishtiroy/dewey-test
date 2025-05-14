
import { useState } from "react";
import { Heart, MessageSquare, Bookmark, Share } from "lucide-react";

interface FeedPostProps {
  username: string;
  userImage: string;
  bookTitle: string;
  bookAuthor: string;
  bookCover: string;
  content: string;
  rating?: number;
  comparisonBook?: string;
  comparisonResult?: string;
  likes: number;
  comments: number;
  timestamp: string;
}

const FeedPost = ({
  username,
  userImage,
  bookTitle,
  bookAuthor,
  bookCover,
  content,
  rating,
  comparisonBook,
  comparisonResult,
  likes,
  comments,
  timestamp,
}: FeedPostProps) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="card mb-6">
      {/* User Info */}
      <div className="flex items-center mb-4">
        <img
          src={userImage}
          alt={username}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="ml-3">
          <p className="font-medium">{username}</p>
          <p className="text-xs text-gray-500">{timestamp}</p>
        </div>
      </div>

      {/* Book Info */}
      <div className="flex mb-4">
        <img
          src={bookCover}
          alt={bookTitle}
          className="w-20 h-28 object-cover rounded-md shadow-md"
        />
        <div className="ml-4">
          <h3 className="font-serif font-medium">{bookTitle}</h3>
          <p className="text-sm text-gray-600 mb-1">by {bookAuthor}</p>
          
          {rating && (
            <div className="flex mb-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`text-sm ${
                    star <= rating ? "text-dewey-green" : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
          )}
          
          {comparisonBook && comparisonResult && (
            <div className="text-sm bg-dewey-tan/50 p-2 rounded-md mt-1">
              <p>
                <span className="font-medium">Did you like it better than </span> 
                {comparisonBook}?
              </p>
              <p className="font-medium text-dewey-green">{comparisonResult}</p>
            </div>
          )}
        </div>
      </div>

      {/* Review Content */}
      <p className="text-gray-700 mb-4">{content}</p>

      {/* Engagement */}
      <div className="flex justify-between items-center border-t pt-4">
        <div className="flex space-x-6">
          <button 
            className="flex items-center text-gray-600 hover:text-dewey-green transition-colors"
            onClick={handleLike}
          >
            <Heart 
              size={18} 
              className={liked ? "fill-dewey-green text-dewey-green" : ""} 
            />
            <span className="ml-1 text-sm">{likeCount}</span>
          </button>
          
          <button className="flex items-center text-gray-600 hover:text-dewey-green transition-colors">
            <MessageSquare size={18} />
            <span className="ml-1 text-sm">{comments}</span>
          </button>
        </div>
        
        <div className="flex space-x-4">
          <button 
            className="text-gray-600 hover:text-dewey-green transition-colors"
            onClick={() => setSaved(!saved)}
          >
            <Bookmark 
              size={18} 
              className={saved ? "fill-dewey-green text-dewey-green" : ""} 
            />
          </button>
          
          <button className="text-gray-600 hover:text-dewey-green transition-colors">
            <Share size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedPost;
