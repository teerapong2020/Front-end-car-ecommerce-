import React, { useRef, useState, useEffect } from 'react';
import { NewCard } from './newcard';
import example_products from '../../data/example_products';
import leftArrow from '../../assets/Logo/logo_product_card/left_slide.png';
import rightArrow from '../../assets/Logo/logo_product_card/right_slide.png';

function ScrollNewCar() {
  const scrollRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);

  const handleScroll = () => {
    if (scrollRef.current) {
      setIsAtStart(scrollRef.current.scrollLeft === 0);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -1176, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 1176, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <section>
      <div className="flex flex-col items-center">
        <h1 className="text-xl mb-4">New Product</h1>
        <div className="relative w-[1152px] mx-auto">
          {!isAtStart && (
            <img
              src={leftArrow}
              alt="Scroll Left"
              onClick={scrollLeft}
              className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 cursor-pointer p-2 bg-white rounded-full shadow-md"
            />
          )}
          <div className="flex w-full overflow-x-auto whitespace-nowrap shadow rounded bg-orange-500" ref={scrollRef}>
            {example_products.map(product => (
              <div key={product.id} className="mr-[31px]">
                <NewCard product={product} />
              </div>
            ))}
          </div>
          <img
            src={rightArrow}
            alt="Scroll Right"
            onClick={scrollRight}
            className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 cursor-pointer p-2 bg-white rounded-full shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

export default ScrollNewCar;