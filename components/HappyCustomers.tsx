import StarRating from './StarRating';

const HappyCustomers = () => {
  // Array of user images
  const userImages = [
    '/users/user-1.png',
    '/users/user-2.png',
    '/users/user-3.png',
    '/users/user-4.jpg',
    '/users/user-5.jpg',
  ];

  return (
    <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
      <div className="flex -space-x-4">
        {userImages.map((src, index) => (
          <img
            key={index}
            className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 object-cover"
            src={src}
            alt={`user image ${index + 1}`}
          />
        ))}
      </div>

      <div className="flex flex-col justify-between items-center sm:items-start">
        <StarRating likes={5} />
        <p>
          <span className="font-semibold">9,194</span> happy customers
        </p>
      </div>
    </div>
  );
};

export default HappyCustomers;
