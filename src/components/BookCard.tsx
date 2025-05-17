import { useRatingContext } from "./contexts/RatingContext";
import { useState } from "react";
import { Star, Heart } from "lucide-react";
import { useShelfContext } from "./contexts/ShelfContext";

interface BookCardProps {
  id: string;
  cover: string;
  title: string;
  author: string;
  rating?: number;
  liked?: boolean;
  onToggleShelf?: () => void;
  isOnShelf?: boolean;
}

const BookCard = ({ id, cover, title, author, rating = 0, isOnShelf = false, onToggleShelf}: BookCardProps) => {
  
  const {addToShelf, removeFromShelf } = useShelfContext();
  const { handleRatingCategory } = useRatingContext();
  const [showCategoryPopup, setShowCategoryPopup] = useState(false);
  
  const [isLiked, setIsLiked] = useState(false);
  const book = { id, title, author, cover };

  const handleHeartClick = () => {
    if (isLiked) {
      setIsLiked(false);
    } else {
      setShowCategoryPopup(true); 
    }
  };

  const chooseCategory = (category: "love" | "like" | "hate" | "dnf") => {
    setIsLiked(true);
    setShowCategoryPopup(false);
    handleRatingCategory(book, category);
  };
  
  return (
    <div className="card group w-64 flex flex-col hover:shadow-xl transition-shadow duration-300">
  <div className="relative overflow-hidden rounded-lg mb-4">
    <img 
      src={cover} 
      alt={`${title} by ${author}`} 
      className="w-full h-56 object-contain object-center rounded-lg group-hover:scale-105 transition-transform duration-300"
      onError={(e) => (e.currentTarget.src = "/images/cover_not_found.jpg")}
    />
    <button 
      className="absolute top-2 right-2 bg-white/80 hover:bg-white p-1.5 rounded-full"
      onClick={handleHeartClick}
    >
      <Heart 
        size={18} 
        fill={isLiked ? "#7d9b76" : "none"} 
        stroke={isLiked ? "#7d9b76" : "currentColor"} 
        className="text-dewey-green"
      />
    </button>
  </div>

  <div className="flex-1">
    <h3 className="font-serif font-medium text-lg mb-1 line-clamp-2">{title}</h3>
    <p className="text-gray-600 text-sm mb-2">{author}</p>
  </div>

  <button
  onClick={onToggleShelf}
  className={`mt-4 text-sm font-medium border rounded-md px-4 py-1 transition-colors ${
    isOnShelf
      ? "border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
      : "border-dewey-green text-dewey-green hover:bg-dewey-green hover:text-white"
  }`}
>
  {isOnShelf ? "Remove from Shelf" : "Add to Shelf"}
</button>
{showCategoryPopup && (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
    <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center">
      <h3 className="font-serif text-lg font-semibold mb-4">
        How do you feel about <strong>{title}</strong>?
      </h3>
      <div className="grid grid-cols-1 gap-3">
        <button
          onClick={() => chooseCategory("love")}
          className="border border-dewey-green text-dewey-green rounded-lg px-4 py-2 font-medium hover:bg-dewey-green hover:text-white transition-colors"
        >Love it
        </button>
        <button
          onClick={() => chooseCategory("like")}
          className="border border-dewey-green text-dewey-green rounded-lg px-4 py-2 font-medium hover:bg-dewey-green hover:text-white transition-colors"
        >Like it
        </button>
        <button
          onClick={() => chooseCategory("hate")}
          className="border border-dewey-green text-dewey-green rounded-lg px-4 py-2 font-medium hover:bg-dewey-green hover:text-white transition-colors"
        >Dislike it
        </button>
        <button
          onClick={() => chooseCategory("dnf")}
          className="border border-dewey-green text-dewey-green rounded-lg px-4 py-2 font-medium hover:bg-dewey-green hover:text-white transition-colors"
        >Didn't finish
        </button>
      </div>
    </div>
  </div>
)}


</div>



  );
};

export default BookCard;
