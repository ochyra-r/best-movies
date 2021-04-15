import React, { useState, useEffect } from "react";
import Category from "./Category";
import { useDispatch } from "react-redux";
import { setCategory } from "../features/categorySlice";

const Categories = () => {
  const [catogories, setCategories] = useState([]);
  const dispatch = useDispatch();

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

  return (
    <div className="categories">
      <div className="caterory__item" onClick={resetCategory}>
        All
      </div>
      {catogories.map((category, id) => (
        <Category key={id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
