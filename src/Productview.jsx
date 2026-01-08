import { useParams } from "react-router-dom";
import Productdetail from "./Productdetail";
import Navmenu from "./Navmenu";
import Footer from './Footer-section'
import Errorfound from "./Errorfound";

export default function Productview() {

    const { slug } = useParams();
    const product = Productdetail.find(p => p.slug === slug);

    if (!product) {
        return <Errorfound/>;
    }
    return (
        <>

      <Navmenu/>
      <div className="product-view">
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <h3>{product.price}</h3>
      </div>
        <Footer/>
        </>
    )
}
