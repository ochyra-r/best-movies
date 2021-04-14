import React, { useState, useEffect } from "react";
import Category from "./Category";

const Categories = () => {
  const [catogories, setCategories] = useState([]);
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

  return (
    <div className="container">
      <div className="row">
        {catogories.map((category, id) => (
          <Category key={id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
