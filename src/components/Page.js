import Categories from "./Categories";
import Movies from "./Movies";
import TopBar from "./TopBar";

const Page = () => {
  return (
    <div className="page">
      <TopBar />
      <div className="page__content">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Movies />
            </div>
            <div className="col-6">
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
<div className="page"></div>;
