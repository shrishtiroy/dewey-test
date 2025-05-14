
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title?: string;
  image?: string;
  rating?: number;
}

const TestimonialCard = ({ 
  quote, 
  name, 
  title, 
  image,
  rating = 5
}: TestimonialCardProps) => {
  return (
    <div className="card h-full flex flex-col">
      <div className="flex mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={`${
              star <= rating ? "text-dewey-green fill-dewey-green" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      
      <blockquote className="flex-1">
        <p className="text-gray-700 italic mb-6">{quote}</p>
      </blockquote>
      
      <div className="flex items-center mt-2">
        {image && (
          <img 
            src={image} 
            alt={name} 
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
        )}
        <div>
          <p className="font-medium">{name}</p>
          {title && <p className="text-sm text-gray-600">{title}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
