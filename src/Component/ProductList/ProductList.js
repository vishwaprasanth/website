import "../ProductList/ProductList.css"
import Product from "../product/product"
import {Products} from "../../Data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Projects</h1>
        <p className="pl-desc">
          create and deploy the website.....
        </p>
      </div>
      <div className="pl-list">
        {Products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;