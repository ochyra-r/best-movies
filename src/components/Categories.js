import React, { useState, useEffect } from "react";
import Category from "./Category";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, getCategory } from "../features/categorySlice";

const Categories = () => {
  const [catogories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const activeCategory = useSelector(getCategory);

  useEffect(() => {
    fetch("http://localhost:3001/categories", { method: "get" })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const resetCategory = () => {
    dispatch(setCategory(null));
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="categories">
      <h3 className="position-relative categories__title">
        Categories
        <span
          className="categories__title--toggler position-absolute d-md-none"
          onClick={handleOpen}
        >
          {!isOpen ? (
            <span className="opacity">
              <i className="bi bi-caret-down"></i>
            </span>
          ) : (
            <span>
              <i className="bi bi-caret-up"></i>
            </span>
          )}
        </span>
      </h3>
      <div
        className={
          isOpen ? "caterory__list caterory__list--open" : "caterory__list"
        }
      >
        <div
          className={
            activeCategory === null
              ? "caterory__list--item active"
              : "caterory__list--item"
          }
          onClick={resetCategory}
        >
          All
        </div>
        {catogories.map((category, id) => (
          <Category key={id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
