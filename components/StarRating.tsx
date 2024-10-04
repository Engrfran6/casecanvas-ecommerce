import {Star} from 'lucide-react';

interface StarRatingProps {
  likes: number;
}

const StarRating = ({likes}: StarRatingProps) => {
  return (
    <div className="flex gap-0.5 mb-2">
      {Array.from({length: 5}).map((_, index) => (
        <Star
          key={index}
          className={`h-5 w-5 ${index < likes ? 'text-green-600 fill-green-600' : 'text-gray-400'}`}
        />
      ))}
    </div>
  );
};

export default StarRating;
