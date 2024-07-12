import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NewCard } from "../components/components_home/newcard";
import example_products from "./example_products";
import { onSearchCar } from "../components/API/API_Cars";
import Search from "../components/champ/search"; 

const imagesPerPage = 6;

export const Selldata = () => {
  const location = useLocation();
  const initialSearchValue = location.state?.searchValue || "";
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await example_products();
        setProducts(products);
        setSearchResults(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (initialSearchValue) {
      handleSearch(initialSearchValue);
    }
  }, [initialSearchValue]);

  const handleSearch = async (searchValue) => {
    try {
      const result = await onSearchCar(searchValue);
      setSearchResults(result);
      setCurrentPage(1);
    } catch (error) {
      console.error("Error searching for cars:", error);
    }
  };

  const handleClearSearch = async()=>{
    const showall = await example_products()
    setSearchResults(showall)
  }

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(searchResults.length / imagesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="flex justify-center">
        <Search
        onSearchSubmit={handleSearch}
        initialSearchValue={initialSearchValue}
        Clear={handleClearSearch}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-8 my-20 md:my-20 md:mx-0 lg:mx-24">
        {searchResults
          .slice(indexOfFirstImage, indexOfLastImage)
          .map((product, index) => (
            <NewCard key={index} product={product} />
          ))}
      </div>
      <div className="flex justify-center">
        <div className="text-2xl mb-12 flex">
          <button
            onClick={() => handleClick(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
          >
            ◀️
          </button>
          <div>
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => handleClick(number)}
                className={currentPage === number ? "font-bold" : ""}
              >
                {number}
              </button>
            ))}
          </div>
          <button
            onClick={() =>
              handleClick(Math.min(currentPage + 1, pageNumbers.length))
            }
            disabled={currentPage === pageNumbers.length}
          >
            ▶️
          </button>
        </div>
      </div>
    </>
  );
};

export default Selldata;
