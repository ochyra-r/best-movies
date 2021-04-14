import { useDispatch } from "react-redux";
import { setCategory } from "../features/categorySlice";

const Category = ({ category }) => {
  const dispatch = useDispatch();
  const handleClick = (e, id) => {
    dispatch(setCategory(id));
  };
  return (
    <div className="col-12" onClick={(e) => handleClick(e, category.id)}>
      {category.name}
    </div>
  );
};

export default Category;
