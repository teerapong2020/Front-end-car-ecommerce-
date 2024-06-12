import React, { useRef } from 'react';

function ScrollNewCar() {
    const scrollRef = useRef(null);

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

    const scrollContainerStyles = {
        msOverflowStyle: 'none',  // IE and Edge
        scrollbarWidth: 'none',   // Firefox
    };

    const hideScrollbar = {
        overflow: 'hidden',
    };

    return (
        <section>
            <div className="flex flex-col">
                <h1 className="text-xl">New Product</h1>
                <div className="relative">
                    <button 
                        onClick={scrollLeft} 
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full"
                    >
                        &lt;
                    </button>
                    <div 
                        className="flex gap-10 w-full overflow-x-auto whitespace-nowrap mt-4 p-4 shadow rounded" 
                        ref={scrollRef}
                        style={{ ...scrollContainerStyles, ...hideScrollbar }}
                        onMouseEnter={() => { scrollRef.current.style.overflow = 'auto'; }}
                        onMouseLeave={() => { scrollRef.current.style.overflow = 'hidden'; }}
                    >
                        {Array.from({ length: 11 }).map((_, index) => (
                            <div 
                                key={index} 
                                className="bg-blue-600 text-white h-[360px] w-[383px] flex items-center justify-center flex-shrink-0" 
                                alt="productCard"
                            >
                                Product {index + 1}
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