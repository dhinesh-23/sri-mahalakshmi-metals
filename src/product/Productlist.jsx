import Productdetail from "./Productdetail";
import ProductCard from "./Productcard";

export default function ProductList(product) {
  return (
    <div className="product-list">
      {Productdetail.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
