import React, { useState, useEffect } from "react";
import { NewCard } from "../components/components_home/newcard";
import example_products from "./example_products";
import { Search } from "../components/champ/search";

const imagesPerPage = 6;

export const Selldata = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState("");

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
      <Search setSearchResults={setSearchResults} setSearchValue={setSearchValue} />
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
