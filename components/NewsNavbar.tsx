'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import * as React from 'react';

const NewsNavbarCarousel = () => {
  const [display, setDisplay] = React.useState(false);
  const plugin = React.useRef(Autoplay({delay: 2500, stopOnInteraction: true}));

  const newsUpdate = ['welcome', 'how are you', 'come to my house by 5pm today'];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={(plugin.current.stop, () => setDisplay(!display))}
      onMouseLeave={(plugin.current.reset, () => setDisplay(!display))}>
      <CarouselContent>
        {newsUpdate.map((news, i) => (
          <CarouselItem key={i} className="text-center">
            {news}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className={`bg-transparent ${display ? '' : 'hidden'} `} />
      <CarouselNext className={`bg-transparent ${display ? '' : 'hidden'} `} />
    </Carousel>
  );
};

export default NewsNavbarCarousel;
