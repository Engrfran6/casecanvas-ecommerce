import FeedbackCard from './FeedbackCard';
import {Icons} from './Icons';
import MaxWidthWrapper from './MaxWidthWrapper';

const Testimonials = () => {
  const feedbacks = [
    {
      rating: 3,
      reviewText:
        'I usually keep my phone together with my keys in my pocket and that led to some pretty heavy scratchmarks on all of my last phone cases. This one, besides a barely noticeable scratch on the corner,looks brand new after about half a year',
      userImage: '/users/bella.jpg',
      userName: 'Bella P. Dimgba',
      verified: true,
    },
    {
      rating: 5,
      reviewText:
        'The case feels durable and I even got a compliment on the design. Had the case for two and a half months now and the image is super clear',
      userImage: '/users/steve.jpg',
      userName: 'Francis U.',
      verified: true,
    },
    {
      rating: 4,
      reviewText:
        'The case feels durable and I even got a compliment on the design. Had the case for two and a half months now and the image is super clear',
      userImage: '/users/steve.jpg',
      userName: 'Francis U.',
      verified: true,
    },
    {
      rating: 3,
      reviewText:
        'I usually keep my phone together with my keys in my pocket and that led to some pretty heavy scratchmarks on all of my last phone cases. This one, besides a barely noticeable scratch on the corner,looks brand new after about half a year',
      userImage: '/users/bella.jpg',
      userName: 'Bella P. Dimgba',
      verified: true,
    },
    // Add more reviews as needed
  ];

  return (
    <MaxWidthWrapper className="flex flex-col items-center  gap-16 sm:gap-32 mt-24 ">
      <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
        <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900">
          What our{' '}
          <span className="relative px-2">
            customers{' '}
            <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500" />
          </span>
          say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
        {feedbacks.map((feedback, index) => (
          <FeedbackCard key={index} {...feedback} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};
export default Testimonials;
