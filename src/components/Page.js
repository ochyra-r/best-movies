import Categories from "./Categories";
import Movies from "./Movies";
import TopBar from "./TopBar";
import "../styles/Page.sass";

const Page = () => {
  return (
    <div className="page">
      <TopBar />
      <div className="page__content">
        <div className="container">
          <div className="row movies-cateogories">
            <div className="col-12 col-md-4 col-lg-3 categories-container order-1 order-md-2">
              <Categories />
            </div>
            <div className="col-12 col-md-8 col-lg-9 movies-container order-2 order-md-1">
              <Movies />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
<div className="page"></div>;
