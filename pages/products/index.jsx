import Head from "next/head";
import React, { useEffect, useState } from "react";
import FilterSortBar from "../../components/products/FilterSortBar";
import ProductsList from "../../components/products/ProductsList";
import { useSiteData } from "../../hooks/siteContext";

function Products() {
  const data = useSiteData();
  const [currentProducts, setCurrentProducts] = useState([]);
  const { productsPage } = data;
  const { filters, sorts } = productsPage;
  const { loading, setLoading } = useState(true);
  const { products } = data;
  const { products: productsSEO } = data.seo;
  const { title, description, keywords } = productsSEO;
  const [activeFilters, setActiveFilters] = useState({
    filters: [],
    sorts: "mostRecent",
  });

  const handleAddFilter = (e) => {
    const filter = e.target.value;
    console.log(filter);
    if (activeFilters.filters.includes(filter)) {
      return;
    }
    setActiveFilters((prev) => {
      return { ...prev, filters: [...prev.filters, filter] };
    });
  };

  const handleDeleteFilter = (e) => {
    const filter = e;
    console.log(filter);
    setActiveFilters((prev) => {
      return {
        ...prev,
        filters: prev.filters.filter((item) => item !== filter),
      };
    });
  };

  const handleChangeSort = (e) => {
    const sort = e.target.value;
    try {
      setActiveFilters((prev) => {
        return { ...prev, sorts: sort };
      });
    } catch {
      console.log("error sorting");
    }
  };

  useEffect(() => {
    const handleProductFilter = () => {
      if (activeFilters.filters.length === 0) {
        setCurrentProducts(data.products);
        return;
      }
      switch (activeFilters.filters[0]) {
        case "under25":
          setCurrentProducts(
            [...data.products].filter((product) => product.price < 25)
          );
          break;
        case "under50":
          setCurrentProducts(
            [...data.products].filter((product) => product.price < 50)
          );
          break;
        case "50to100":
          setCurrentProducts(
            [...data.products].filter(
              (product) => product.price >= 50 && product.price < 100
            )
          );
          break;
        default:
          setCurrentProducts(data.products);
      }
    };
    handleProductFilter();
  }, [activeFilters.filters, data.products]);

  useEffect(() => {
    const handleProductSort = () => {
      switch (activeFilters.sorts) {
        case "mostRecent":
          console.log("mostRecent");
          setCurrentProducts(
            [...data.products].sort((a, b) => {
              return new Date(b.date) - new Date(a.date);
            })
          );
          break;
        case "lowToHigh":
          setCurrentProducts(
            [...data.products].sort((a, b) => {
              return a.price - b.price;
            })
          );
          break;
        case "highToLow":
          setCurrentProducts(
            [...data.products].sort((a, b) => {
              return b.price - a.price;
            })
          );
          break;
        default:
          setCurrentProducts(data.products);
      }
    };

    handleProductSort();
  }, [activeFilters.sorts, data.products]);

  return (
    <div className="w-full h-full px-10">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords}></meta>
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      <FilterSortBar
        activeFilters={activeFilters}
        filters={filters}
        sorts={sorts}
        handleAddFilter={handleAddFilter}
        handleDeleteFilter={handleDeleteFilter}
        handleChangeSort={handleChangeSort}
      />
      <ProductsList products={currentProducts} />
    </div>
  );
}

export default Products;
