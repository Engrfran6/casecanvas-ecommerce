import {Check} from 'lucide-react';
import StarRating from './StarRating';

interface FeedbackProps {
  rating: number;
  reviewText: string;
  highlightedText: string;
  userImage: string;
  userName: string;
  verified: boolean;
}

const FeedbackCard = ({
  rating,
  reviewText,
  highlightedText,
  userImage,
  userName,
  verified,
}: FeedbackProps) => (
  <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
    <StarRating likes={rating} />
    <div className="text-lg leading-8">
      <p>
        {reviewText} <span className="p-0.5 bg-slate-800 text-white">{highlightedText}</span>
      </p>
    </div>
    <div className="flex gap-4 mt-2">
      <img className="rounded-full h-12 w-12 object-cover" src={userImage} alt="user" />
      <div className="flex flex-col">
        <p className="font-semibold">{userName}</p>
        {verified && (
          <div className="flex gap-1.5 items-center text-zinc-600">
            <Check className="h-4 w-4 stroke-[3px] text-green-600" />
            <p className="text-sm">Verified Purchase</p>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default FeedbackCard;
