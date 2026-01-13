import { useParams, Link } from "react-router-dom";
import Productdetail from "./Productdetail";
import Errorfound from "./Errorfound";
import { useMemo } from "react";

export default function Recommendedproduct() {
    const { slug } = useParams();

    if (!slug) return null;

    const product = Productdetail.find(p => p.slug === slug);
    if (!product) return <Errorfound />;

    const recommendedProducts = useMemo(() => {
        return Productdetail
            .filter(p => p.slug !== slug)
            .sort(() => Math.random() - 0.5)
            .slice(0, 6);
    }, [slug]);

    return (
        <>

            <section className="Recommendedproduct-section">
                <h3>similar Products</h3>

                <div className="product-grid">
                    {recommendedProducts.map(item => (
                        <Link to={`/product/${item.slug}`}>   
                             <div key={item.id} className="product-item">

                               <div className="img-box">
                                {item.images?.[0] && (
                                    <img src={item.images[0]} alt={item.name} />
                                )}
                               </div>
                            <h4>{item.name}</h4>
                           </div>
                        </Link>
                    ))}
                </div>

            </section>
        </>
    );
}
