import styled from "styled-components";
import ProductList from "./ProductList";
import Sort from "./Sort";
import FilterSections from "./FilterSections";
import { useFilterContext } from "../context/hooks/filterProduct";
// import { useFilterContext } from "./context/filter_context";

const Products = () => {
  const { allProduct } = useFilterContext()
  // console.log(allProduct)
  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div>
          <FilterSections />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;