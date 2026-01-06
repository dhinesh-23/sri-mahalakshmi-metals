import { useEffect, useRef, useState } from 'react'
import Navmenu from './Navmenu'
import Footer from './Footer-section'
export default function aboutpage() {

    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);




    return (
        <>

            <Navmenu />
            <section ref={sectionRef} className={`about-container ${isVisible ? "show" : ""}`}>


                <div className="about-section">

                    <div className="about-bg">
                        <h1>about us</h1>
                        <p>We create stunning sculptures that inspire and elevate the human spirit.</p>
                    </div>
                    <div className="about-box">

                        <div className="about-mission">

                            <h3>Our Mission</h3>
                            <p>Welcome to Sri Mahalakshmi Metals — a trusted provider of high-quality brass idols, temple articles, and metal pooja items crafted with care and devotion. We serve customers in Kumbakonam and beyond, offering beautifully designed religious statues and everyday worship essentials that combine tradition with lasting quality.</p>

                            <p>Our products are sourced and crafted using premium metals, ensuring durability and intricate detailing in every piece. Whether you’re decorating a home temple, gifting a sacred idol, or purchasing ceremonial items, we provide personalized service and prompt support.</p>

                            <p>At Sri Mahalakshmi Metals, customer satisfaction and authenticity are our commitment, and we strive to bring divine elegance into your sacred spaces.</p>



                        </div>
                        <div className="our-story">

                            <h3>Our Story</h3>

                            <p>Sri Mahalakshmi Metals was founded with a deep passion for traditional craftsmanship and devotion-inspired metal artistry. What began as a small family-run business has grown over the years into a trusted name for brass idols, pooja articles, and religious metal products.</p>

                            <p>Located in Kumbakonam, a city known for its rich spiritual heritage and temples, our journey has always been closely connected to tradition and faith. From the early days, our focus has been on delivering authentic, high-quality metal products that reflect devotion, precision, and durability.</p>

                            <p>With years of experience in the metal and brass industry, we continue to serve households, temples, and devotees by offering carefully crafted idols and pooja items. Every product we provide is selected and finished with attention to detail, ensuring both spiritual value and long-lasting quality.</p>

                            <p>Today, Sri Mahalakshmi Metals proudly continues its legacy by blending traditional values with modern service, maintaining the trust of our customers while adapting to changing times. Our commitment remains the same — honesty, quality, and customer satisfaction.</p>





                        </div>







                    </div>



                </div>






            </section>

            <Footer />



        </>
    )
}
