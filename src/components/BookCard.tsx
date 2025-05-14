
import { useState } from "react";
import { Star, Heart } from "lucide-react";

interface BookCardProps {
  cover: string;
  title: string;
  author: string;
  rating?: number;
  liked?: boolean;
  onToggleShelf?: () => void;
  isOnShelf?: boolean;
}

const BookCard = ({ cover, title, author, rating = 0, liked = false, isOnShelf = false, onToggleShelf}: BookCardProps) => {
  const [isLiked, setIsLiked] = useState(liked);
  
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
      onClick={() => setIsLiked(!isLiked)}
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
</div>

  );
};

export default BookCard;
