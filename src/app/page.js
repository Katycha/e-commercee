import ProductCard from "@/components/ProductCard/ProductCard";
import Image from 'next/image';
import Photo1 from "@/assets/product-cover-1.png";
import Photo2 from "@/assets/product-cover-2.png";
import Photo3 from "@/assets/product-cover-3.png";
import Photo4 from "@/assets/product-cover-4.png";
import Photo5 from "@/assets/product-cover-5.png";
import Photo6 from "@/assets/product-cover-6.png";


import Posts from "./(components)/Posts";
import VitaClassic from "@/components/VitaClassic/VitaClassic";
import Part from "@/components/Part/Part";
import Footer from "@/components/Footer/Footer";

const products = [
  {
    id: 1,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    photo: Photo1,
  },
  {
    id: 2,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    photo: Photo2,
  },
  ,
  {
    id: 3,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    photo: Photo3,
  },
  ,
  {
    id: 4,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    photo: Photo4,
  },
  ,
  {
    id: 5,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    photo: Photo5,
  },
  ,
  {
    id: 6,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    photo: Photo6,
  },
  ,
  {
    id: 7,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    photo: Photo1,
  },
  {
    id: 8,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    photo: Photo3,
  },
];

export default function Home() {
  return (
    <main>
      <section className="tw-mt-[200px] tw-px-9 md:tw-px-36 tw-flex tw-flex-col md:tw-gap-y-8">
        <div className="tw-text-center">
          <p>Featured Products</p>
          <h2>BESTSELLER PRODUCTS</h2>
          <p>Problems trying to resolve the conflict between </p>
        </div>

        <div className="tw-px-10 tw-flex tw-flex-row tw-flex-wrap md:tw-gap-x-8 md:tw-gap-y-20">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
      <VitaClassic/>
      <Part/>
      <Posts/>
      <Footer/>
    </main>
  );
}
