import { useEffect } from "react";
import Slider from "react-slick";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categories = [
  { href: "/Hoodie", name: "MSRIT Hoodie", imageUrl: "https://m.media-amazon.com/images/I/51SXBrs0dkL.jpg" },
  { href: "/T-Shirt", name: "T-shirts", imageUrl: "/tshirts.jpg" },
  { href: "/ID Card", name: "ID Card", imageUrl: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQVJzdbsMytBUcinIcq4mlU0mcIFl1Ue4LYGgAGjYRUbHr7-ylz4V_KQCNk5c9BzWOPNn0fOk9bBcujuqujcL0jSmIko5glsfogQdjcYPqnP2AjdHXYW6yEKg" },
  { href: "/Stationery", name: "Stationery", imageUrl: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQbWkr2Gj-KdRaLX_eAPYhj3tLIxXbPX0m-cK43cuOlEc2nHE5VggwBlNnmH_569FVZwA4u1lUgDXTHsKCPx_wQvoG1m_wh-iDaT0Qgw0_gk2uUTeI96yh0Sw" },
  { href: "/bags", name: "Bags", imageUrl: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSqiP23Dk2ny5fiCdWCN2Rs9OxQp-rg1XMDm9YN8fmaJJFsjU-HkLjW9fi5TlmlmWogiibbiL-_2XXxEyM-7r_uhcF7j_uDYsllI1lwBnjIcNy48gXb4yQiZZw" },
  { href: "/Apron", name: "Apron", imageUrl: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTceeDKSLXoBArMQHaLztkktbLEbVcUyFAP0KJpo5GMBapEo3YdLNoy7ZWWNfSnGUmg9m7529Wn4jOCyQg9ImACF2CLQ8ek_wzvNo_Ng3rux8ttCjqsxxwn" },
  { href: "/Accessories", name: "College Cap", imageUrl: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQufFr4wKYxyBctY4CudoHg435X_DTzqDzk27Qel2e9MGuG9xKkJek0zqyDU6ew4q_qETUCfS95FrrC1a0YPWW2qJ1_snt0NzeikfLAtJ5culh138ItOeBSTB0" },
];

const HomePage = () => {
  const { fetchFeaturedProducts, products, isLoading } = useProductStore();

  useEffect(() => {
    fetchFeaturedProducts();
  }, [fetchFeaturedProducts]);

  const heroSliderSettings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  };

  const categorySliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <header className="bg-emerald-850 text-white py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold">Choose what you're wearing today</h1>
          <p className="text-lg md:text-xl mt-2">Your one-stop shop for custom merchandise.</p>
        </div>

        <div className="max-w-4xl mx-auto px-4">
          <Slider {...heroSliderSettings}>
            {[
              "https://images.jdmagicbox.com/quickquotes/images_main/offbeat-t-shirts-17-08-2021-1388-240132415-2kb5d.jpg",
              "https://m.media-amazon.com/images/I/51SXBrs0dkL.jpg",
              "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRbkAVfSrcqHIhTAgq6ia1OUpSuQ903jaVr4h7-Q_Oqofny9-C6ueDVeURmCfKoVTegwkmNPygDejVpERxR5qyg58heckEjpGfCvva2gWoOJYNcW0bZr_pg",
              "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT_i_D4hI2rSz2Nrnxjq22itWbTHK9A1xJ0PX8wLD5DfS2GZdRLa_vFZKxkzWsLjwDKy2sM6dj0bc67raLxkoTeD09LSmLIRsCxkwutmR5-9Rq8FKjSQzfq",
            ].map((src, i) => (
              <div key={i} className="px-2">
                <img src={src} alt={`Slide ${i + 1}`} className="rounded-xl w-full h-96 object-cover" />
              </div>
            ))}
          </Slider>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-6">Shop by Category</h2>
        <Slider {...categorySliderSettings} className="my-8">
          {categories.map((category) => (
            <div key={category.name} className="px-2">
              <div className="h-64">
                <CategoryItem category={category} />
              </div>
            </div>
          ))}
        </Slider>

        {!isLoading && products.length > 0 && (
          <FeaturedProducts featuredProducts={products} />
        )}
      </main>

      <section className="bg-gray-200 text-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Custom Products</h3>
            <p>Create personalized items for your brand or team.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p>We ship across the country quickly and safely.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
            <p>All transactions are encrypted and secure.</p>
          </div>
        </div>
      </section>

      <section id="about" className="bg-gray-300 text-gray-800 py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">About RIT Merchandise</h2>
          <p className="mb-3">
            MSRIT merchandise is your trusted source for customized merchandise.
            Whether you're a student, startup, or team — we bring your ideas to life
            with premium quality and quick delivery.
          <br></br>
            We specialize in custom clothing, branded stationery, ID cards, and more — 
            delivered right to your door.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
