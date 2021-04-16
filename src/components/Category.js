import { useDispatch, useSelector } from "react-redux";
import { setCategory, getCategory } from "../features/categorySlice";

const Category = ({ category }) => {
  const activeCategory = useSelector(getCategory);

  const dispatch = useDispatch();
  const handleClick = (e, id) => {
    dispatch(setCategory(id));
  };
  return (
    <div
      className={
        activeCategory === category.id
          ? "caterory__list--item active"
          : "caterory__list--item"
      }
      onClick={(e) => handleClick(e, category.id)}
    >
      {category.name}
    </div>
  );
};

export default Category;
