import { useDispatch } from "react-redux";
import { setCategory } from "../features/categorySlice";

const Category = ({ category }) => {
  const dispatch = useDispatch();
  const handleClick = (e, id) => {
    dispatch(setCategory(id));
  };
  return (
    <div
      className="caterory__list--item"
      onClick={(e) => handleClick(e, category.id)}
    >
      {category.name}
    </div>
  );
};

export default Category;
