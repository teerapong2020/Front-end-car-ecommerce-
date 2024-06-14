import { useRef, useState, useEffect } from 'react';
import { NewCard } from './newcard';
import example_products from '../../data/example_products';

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
      scrollRef.current.scrollBy({ left: -383, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 383, behavior: 'smooth' });
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
      <div className="flex flex-col">
        <h1 className="text-xl">New Product</h1>
        <div className="relative">
          {!isAtStart && (
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full"
            >
              &lt;
            </button>
          )}
          <div
            className="flex gap-10 w-full overflow-x-auto whitespace-nowrap mt-4 p-4 shadow rounded"
            ref={scrollRef}
          >
            {example_products.map(product => (
              <div
                key={product.id}
                className="h-[360px] w-[383px] flex items-center justify-center flex-shrink-0"
              >
                <NewCard product={product} />
              </div>
            ))}
          </div>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}

export default ScrollNewCar;