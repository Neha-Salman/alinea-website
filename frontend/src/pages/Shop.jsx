import React, {
  useState,
  useMemo,
  useEffect,
} from 'react';

import { useLocation } from 'react-router-dom';

import ProductCard from '../components/ProductCard';

import productsData from '../data/products';

import './Shop.css';

const Shop = () => {

  const location = useLocation();

  const [products] =
    useState(productsData);

  const [searchTerm, setSearchTerm] =
    useState('');

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState('All');

  const [sortOrder, setSortOrder] =
    useState('default');

  // CATEGORY FROM URL

  useEffect(() => {

    const queryParams =
      new URLSearchParams(
        location.search
      );

    const categoryFromUrl =
      queryParams.get('category');

    if (categoryFromUrl) {

      setSelectedCategory(
        categoryFromUrl
      );

    } else {

      setSelectedCategory('All');

    }

  }, [location]);

  // FILTER + SORT

  const filteredProducts =
    useMemo(() => {

      let result = products.filter(
        (product) => {

          const matchesCategory =

            selectedCategory === 'All' ||

            product.category ===
              selectedCategory;

          const matchesSearch =

            product.name
              .toLowerCase()
              .includes(
                searchTerm.toLowerCase()
              );

          return (
            matchesCategory &&
            matchesSearch
          );

        }
      );

      // SORT LOW TO HIGH

      if (sortOrder === 'price-asc') {

        result.sort(
          (a, b) =>
            a.price - b.price
        );

      }

      // SORT HIGH TO LOW

      if (sortOrder === 'price-desc') {

        result.sort(
          (a, b) =>
            b.price - a.price
        );

      }

      return result;

    }, [
      products,
      searchTerm,
      selectedCategory,
      sortOrder,
    ]);

  return (

    <div className="shop-page container animate-fade-in">

      <div className="shop-header">

        <p className="shop-subtitle">
          Curated Luxury Collection
        </p>

        <h1 className="shop-title">
          Shop Collection
        </h1>

      </div>

      {/* TOOLBAR */}

      <div className="shop-toolbar">

        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(
              e.target.value
            )
          }
          className="horizontal-search-input"
        />

        <select
          value={sortOrder}
          onChange={(e) =>
            setSortOrder(
              e.target.value
            )
          }
          className="sort-select"
        >

          <option value="default">
            Default
          </option>

          <option value="price-asc">
            Price: Low to High
          </option>

          <option value="price-desc">
            Price: High to Low
          </option>

        </select>

      </div>

      {/* PRODUCTS */}

      <div className="shop-grid-full">

        {filteredProducts.length > 0 ? (

          filteredProducts.map(
            (product) => (

              <ProductCard
                key={product._id}
                product={product}
              />

            )
          )

        ) : (

          <div className="empty-products">

            <h2>
              No products found.
            </h2>

            <p>
              Try searching something else.
            </p>

          </div>

        )}

      </div>

    </div>

  );

};

export default Shop;