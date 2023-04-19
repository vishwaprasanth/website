import "./product.css";

const Product = ({img,link,heading,text}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  );
};

export default Product;