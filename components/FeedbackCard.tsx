import {Check} from 'lucide-react';
import StarRating from './StarRating';

interface FeedbackProps {
  rating: number;
  reviewText: string;
  userImage: string;
  userName: string;
  verified: boolean;
}

const FeedbackCard = ({rating, reviewText, userImage, userName, verified}: FeedbackProps) => (
  <div className="flex flex-col gap-4 border border-purple-400 p-4 rounded-xl ">
    <StarRating likes={rating} />

    <p className="text-sm md:text-[16px] leading-8">{reviewText}</p>

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
