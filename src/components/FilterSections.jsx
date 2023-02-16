import React from 'react'
import styled from 'styled-components';
import { useFilterContext } from '../context/hooks/filterProduct';
import { FaCheck } from "react-icons/fa";
import ProductPrice from '../Helper/ProductPrice'
import { Button } from '../styles/Buttons';

const FilterSections = () => {
  const { search_filter: { text, category, color, price, maxPrice, minPrice }, setSearchField, allProduct, clearFilter } = useFilterContext();
  // const { category, color, price } = search_filter

  const getUniqueData = (data, attr) => {
    let newVal = data.map((curEl) => {
      return curEl[attr]
    })
    // console.log(['ALL', ...new Set(...[].concat(newVal))]);
    if (attr === 'colors') {
      newVal = newVal.flat();
    }
    return newVal = ['ALL', ...new Set(newVal)]

  }
  const categoryData = getUniqueData(allProduct, 'category')
  const companyData = getUniqueData(allProduct, 'company')
  const colorData = getUniqueData(allProduct, 'colors')
  // console.log(colorData);
  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search"
            value={text}
            onChange={setSearchField}
          />
        </form>
      </div>
      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                className={curElem === category ? "active" : ""}
                onClick={setSearchField}>
                {curElem}
              </button>
            );
          })}
        </div>
      </div>
      <div className="filter-company">
        <h3>Company</h3>

        <form action="#">
          <select
            name="company"
            id="company"
            className="filter-company--select"
            onClick={setSearchField}>
            {companyData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="company">
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      <div className="filter-colors colors">
        <h3>Colors</h3>

        <div className="filter-color-style">
          {
            colorData.map((curEle, index) => {
              if (curEle === "ALL") {
                return (
                  <button
                    key={index}
                    type="button"
                    value={curEle}
                    name="color"
                    className="color-all--style"
                    onClick={setSearchField}>
                    all
                  </button>
                );
              }
              return (
                <button
                  className={color === curEle ? 'btnStyle active' : 'btnStyle'}
                  value={curEle}
                  key={index}
                  type="button"
                  name="color"
                  style={{ backgroundColor: `${curEle}` }}
                  onClick={setSearchField}
                >
                  {color === curEle ? <FaCheck /> : null}
                </button>
              )
            })
          }
        </div>
      </div>
      <div className="filter_price">
        <h3>Price</h3>
        <p>
          <ProductPrice price={price} />
        </p>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={setSearchField}
        />
      </div>
      <div className="filter-clear">
        <Button className="btn"onClick={clearFilter}>
          Clear Filters
        </Button>
      </div>
    </Wrapper >
  )
}
const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h3 {
    padding: 2rem 0;
    font-size: bold;
  }
  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }
  .filter-color-style {
    display: flex;
    justify-content: center;
  }
  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    // color:#fff;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;
export default FilterSections
